import { TRoute, TUserPath } from "../types";
import { commonPaths } from "./sidebarItemsGenerator";

// type TUserPath = {
//   name: string;
//   path?: string;
//   element?: ReactNode;
//   children?: TUserPath[];
// };

export const routeGenerator = (items: TUserPath[]) => {
  const routes = [...commonPaths, ...items].reduce((acc: TRoute[], item) => {
    if (item.path && item.element) {
      acc.push({
        path: item.path,
        element: item.element,
      });
    }

    if (item.children) {
      item.children.forEach((child) => {
        acc.push({
          path: child.path!,
          element: child.element,
        });
      });
    }

    return acc;
  }, []);

  return routes;
};
