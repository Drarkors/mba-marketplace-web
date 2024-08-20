import { RouterProvider } from "react-router-dom"
import { ThemeProvider } from "./components/theme/theme-provider"
import { router } from "./routes"

import "./global.css"

function App() {
  return (
    <ThemeProvider storageKey="mba-marketplace-theme" defaultTheme="light">
      <RouterProvider router={router} />
    </ThemeProvider>
  )
}

export default App
