import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { toast } from "sonner";
import { useLoginMutation } from "../../redux/features/auth/authApi";
import { setUser } from "../../redux/features/auth/authSlice";
import { useAppDispatch } from "../../redux/hooks";
import { TUser } from "../../types";
import { verifyToken } from "../../utils/verifyToken";
import "./login.scss";
const Login = () => {
  const [credentials, setCredentials] = useState({
    email: "",
    password: "",
  });

  // const { loading, error, dispatch } = useContext(AuthContext);
  const navigate = useNavigate();
  const dispatch = useAppDispatch();
  const [login] = useLoginMutation();
  const handleChange = (e) => {
    setCredentials((prev) => ({ ...prev, [e.target.id]: e.target.value }));
  };

  console.log(credentials);

  // const handleClick = async (e) => {
  //   e.preventDefault();
  //   dispatch({ type: "LOGIN_START" });
  //   try {
  //     const res = await axios.post("/auth/login", credentials);
  //     if (res.data.isAdmin) {
  //       dispatch({ type: "LOGIN_SUCCESS", payload: res.data.details });
  //       navigate("/");
  //     } else {
  //       dispatch({
  //         type: "LOGIN_FAILURE",
  //         payload: { message: "You are not allowed" },
  //       });
  //     }
  //   } catch (err) {
  //     dispatch({ type: "LOGIN_FAILURE", payload: err.response.data });
  //   }
  // };

  const handleClick = async (e) => {
    e.preventDefault();
    const toastId = toast.loading("Logging in");

    try {
      const res = await login(credentials).unwrap();
      console.log(credentials);
      console.log(res);
      const user = verifyToken(res.data.accessToken) as TUser;

      dispatch(setUser({ user: res.data.user, token: res.data.accessToken }));
      toast.success("Logged in", { id: toastId, duration: 2000 });

      if (res.data.needsPasswordChange) {
        navigate(`/change-password`);
      } else {
        navigate(`/`);
      }
    } catch (err) {
      toast.error("Something went wrong", { id: toastId, duration: 2000 });
    }
  };

  const handleCredential = (userType) => {
    credentials.password = "12345678";
    if (userType === "admin") {
      setCredentials({ email: "admin@gmail.com", password: "secure" });
    } else if (userType === "user") {
      setCredentials({ email: "johndoe@gmail.com", password: "secure" });
    }
  };

  return (
    <div
      className="login flex flex-col
     gap-8 h-screen items-center justify-center  "
    >
      <div className="w-[400px] p-6 rounded shadow-xl ">
        <div className=" mb-4">
          <h1 className="mt-5 text-xl font-bold text-p1 ">Demo Credentials:</h1>
          <div className="  flex justify-center gap-3 mt-3">
            <button
              onClick={() => handleCredential("admin")}
              className="credentialBtn border-b3 w-full"
            >
              Admin
            </button>
            <button
              onClick={() => handleCredential("user")}
              className="credentialBtn border-b3 w-full"
            >
              User
            </button>
          </div>
        </div>

        <form className="lContainer">
          <input
            type="email"
            placeholder="email"
            id="email"
            value={credentials.email}
            onChange={handleChange}
            className="lInput focus:border-p1  border-b3 border rounded-sm focus:outline-none focus:ring-1 focus:ring-p1"
          />
          <input
            type="password"
            placeholder="password"
            id="password"
            value={credentials.password}
            onChange={handleChange}
            className="lInput focus:border-p1  border-b3 border rounded-sm focus:outline-none focus:ring-1 focus:ring-p1"
          />
          <button onClick={handleClick} className="lButton bg-p1">
            Login
          </button>

          <p className="mt-2 ">
            Don't have an account?{" "}
            <Link className="text-p1" to="/register">
              Create Account
            </Link>{" "}
          </p>
        </form>
      </div>
    </div>
  );
};

export default Login;
