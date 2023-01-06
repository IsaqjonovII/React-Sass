import Home from "./Home";
import LikedProducts from "./LikedProducts";
import Orders from "./Orders";
import Products from "./Products";
import Product from "./Product";
import Shop from "./Shop";
import { AiOutlineStar, AiOutlineShoppingCart, AiOutlineHome } from "react-icons/ai";
import { TbClipboardList } from "react-icons/tb";
import { BsBag } from "react-icons/bs";

export const App__Routes = [
  {
    id: 0,
    path: "/",
    name: "Home",
    component: <Home />,
  },
  {
    id: 1,
    path: "/favourites",
    name: "Favourites",
    component: <LikedProducts />,
  },
  {
    id: 2,
    path: "/orders",
    name: "Orders",
    component: <Orders />,
  },
  {
    id: 3,
    path: "/products",
    name: "Products",
    component: <Products />,
  },
  {
    id: 4,
    path: "/shop",
    name: "Shop",
    component: <Shop />,
  },
  {
    id: 5,
    path: "/products/:id",
    component: <Product />,
  },
];


export const SidebarRoutes = [
  {
    id: 0,
    path: "/",
    name: "Home",
    icon: <AiOutlineHome />,
  },
  {
    id: 1,
    path: "/favourites",
    name: "Favourites",
    icon: <AiOutlineStar />,
  },
  {
    id: 2,
    path: "/orders",
    name: "Orders",
    icon: <TbClipboardList />,
  },
  {
    id: 3,
    path: "/products",
    name: "Products",
    icon: <BsBag />,
  },
  {
    id: 4,
    path: "/shop",
    name: "Shop",
    icon: <AiOutlineShoppingCart />,
  },
];
