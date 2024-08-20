import { SignIn } from "./pages/auth/sign-in"
import { createBrowserRouter } from "react-router-dom"
import { NotFound } from "./pages/404"

export const router = createBrowserRouter([
  {
    path: "/",
    children: [
      {
        path: "/sign-in",
        element: <SignIn />,
      },
    ],
  },
  {
    path: "*",
    element: <NotFound />,
  },
])
