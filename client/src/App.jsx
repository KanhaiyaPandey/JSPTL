import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Login from "./pages/Login";
import Dashboard from "./pages/Dashboard"
import { loginAction, orderAction } from "./utils/Actions";
import { dashboardLoader } from "./utils/Loaders";
import AdminDashboard from "./pages/AdminDashboard";

const router = createBrowserRouter([
      {
        path:"/",
        element:<Login/>,
        action: loginAction
      },
      {
        path: "/dashboard",
        element: <Dashboard/>,
        action: orderAction
      },
      {
        path: "/admin-dashboard",
        element: <AdminDashboard/>,
        loader: dashboardLoader
      }
])

const App = () => {
  return (
 <RouterProvider router={router} />
  )
}

export default App
