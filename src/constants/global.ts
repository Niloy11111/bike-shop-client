export const monthNames = [
  "January",
  "February",
  "March",
  "April",
  "May",
  "June",
  "July",
  "August",
  "September",
  "October",
  "November",
  "December",
];

const weekdays = ["Sat", "Sun", "Mon", "Tue", "Wed", "Thu", "Fri"];

export const genders = ["Male", "Female", "Other"];
export const available = [true, false];
export const categories = ["Mountain", "Road", "Folding", "Electric"];
export const statuses = [
  "Pending",
  "Paid",
  "Shipped",
  "Completed",
  "Cancelled",
];

export const bloodGroups = ["A+", "A-", "B+", "B-", "AB+", "AB-", "O+", "O-"];

export const monthOptions = monthNames.map((item) => ({
  value: item,
  label: item,
}));

export const genderOptions = genders.map((item) => ({
  value: item.toLowerCase(),
  label: item,
}));
export const availableOptions = available.map((item) => ({
  value: item,
  label: item,
}));

export const categoriesOptions = categories.map((item) => ({
  value: item,
  label: item,
}));
export const statusesOptions = statuses.map((item) => ({
  value: item,
  label: item,
}));

export const bloodGroupOptions = bloodGroups.map((item) => ({
  value: item,
  label: item,
}));

export const weekDaysOptions = weekdays.map((item) => ({
  value: item,
  label: item,
}));

export const slides = [
  {
    url: "https://images2.giant-bicycles.com/b_white%2Cc_crop%2Ch_600%2Cq_70%2Cw_1920/amk4alkpzskv9xqeiov6/giant_ebike_banner_navi21.jpg",
    title: "car-1",
  },
  {
    url: "https://www.etonline.com/sites/default/files/styles/default/public/images/2024-06/vivi.jpg",
    title: "car-2",
  },
  {
    url: "https://www.wheelsnwaves.com/wp-content/uploads/banner-e-bike.jpg",
    title: "car-3",
  },

  {
    url: "https://jettyroadcycles.com.au/cdn/shop/files/Black_White_and_Yellow_Modern_Special_Big_Sale_Banner_1280x.jpg?v=1731561182",
    title: "car-4",
  },

  {
    url: "https://www.shutterstock.com/image-photo/e-bike-austria-rental-ebike-600nw-2039878520.jpg",
    title: "car-5",
  },
];

export const headTitle = "text-3xl lg:text-4xl text-center font-bold";

export const priceLists = [
  {
    minPrice: 0,
    maxPrice: 499,
  },
  {
    minPrice: 499,
    maxPrice: 1199,
  },
  {
    minPrice: 1199,
    maxPrice: 1899,
  },
  {
    minPrice: 1899,
    maxPrice: 3200,
  },
  {
    minPrice: 3200,
    maxPrice: 12000,
  },
];

export const userInputs = [
  {
    id: "name",
    label: "name",
    type: "text",
    placeholder: "john_doe",
  },
  {
    id: "email",
    label: "Email",
    type: "email",
    placeholder: "john_doe@gmail.com",
  },
  {
    id: "phone",
    label: "Phone",
    type: "text",
    placeholder: "+1 234 567 89",
  },
  {
    id: "password",
    label: "Password",
    type: "password",
  },
  {
    id: "country",
    label: "Country",
    type: "text",
    placeholder: "USA",
  },
  {
    id: "city",
    label: "City",
    type: "text",
    placeholder: "USA",
  },
];

export const faqs = [
  {
    id: "faq1",
    question: "Why should I use a bike shop e-commerce platform?",
    answer:
      "A bike shop e-commerce platform allows you to showcase and sell bikes and accessories online, manage orders efficiently, accept secure payments, and reach a broader customer base while automating your sales process.",
  },
  {
    id: "faq2",
    question: "Who can use this bike shop platform?",
    answer:
      "This platform can be used by bike shop owners, individual sellers, and customers looking to purchase bikes or accessories online. Admins can manage products and orders, while customers can browse, filter, purchase, and review products easily.",
  },
  {
    id: "faq3",
    question: "What payment methods are supported?",
    answer:
      "The platform currently supports secure online payments via Stripe and will expand to include PayPal and mobile wallet options to provide flexibility and convenience for customers.",
  },
  {
    id: "faq4",
    question: "Can customers track their orders?",
    answer:
      "We plan to integrate an order tracking feature allowing customers to view the status of their orders, including processing, shipping, and delivery updates directly from their dashboard.",
  },
  {
    id: "faq5",
    question:
      "What makes this platform different from other e-commerce solutions?",
    answer:
      "This bike shop platform is specifically optimized for bike and accessory sales with advanced filtering by type, brand, and price range, role-based dashboards, and a clean, responsive design that provides a seamless shopping experience across all devices.",
  },
];
