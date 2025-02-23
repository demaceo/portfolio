import { BrowserRouter } from "react-router-dom";

export default function RouterProvider({ children }) {
  return <BrowserRouter basename="/portfolio">{children}</BrowserRouter>;
}
