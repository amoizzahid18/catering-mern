import "./App.css";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Home from "./client/Home.js";
import Menu from "./client/Menu.js";
import ViewItem from "./client/ViewItem.js";
import Layout from "./layout.js";
import BookEvent from "./client/BookEvent.js";
import Admin from "./Admin.js";
import AdminLayout from "./AdminLayout.js";
import AdminLogin from "./admin/AdminLogin.js";
import OrdersPage from "./admin/OrdersPage.js";
import OrderItemDetails from "./admin/OrderItemDetails.js";
import CategoryPage from "./admin/CategoryPage.js";
import CatItemMenuDetails from "./admin/CatItemMenuDetails.js";
import AddNewCategory from "./admin/AddNewCategory.js";

const routes = createBrowserRouter([
  {
    path: "",
    element: <Layout />,
    children: [
      { index: true, element: <Home /> },
      { path: "/menu", element: <Menu /> },
      { path: "/menu/item", element: <ViewItem /> },
      { path: "/events", element: <BookEvent /> },
    ],
  },
  {
    path: "/saifii's",
    element: <Admin />,
    children: [
      {
        path: "/saifii's/login",
        element: <AdminLogin />,
      },
      {
        path: "/saifii's/admin",
        element: <AdminLayout />,
        children: [
          {
            path: "/saifii's/admin/orders",
            element: <OrdersPage />,
          },
          {
            path: "/saifii's/admin/orders/order-details/id",
            element: <OrderItemDetails />,
          },
          {
            path: "/saifii's/admin/category",
            element: <CategoryPage />,
          },
          {
            path: "/saifii's/admin/category/menu/item/id",
            element: <CatItemMenuDetails />,
          },
          {
            path: "/saifii's/admin/category/add-category",
            element: <AddNewCategory />,
          },
        ],
      },
    ],
  },
]);

function App() {
  return <RouterProvider router={routes} />;
}

export default App;
