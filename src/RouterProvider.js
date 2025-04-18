import { BrowserRouter } from "react-router-dom";
import { Analytics } from "@vercel/analytics/react";
export default function RouterProvider({ children }) {
  return (
    <BrowserRouter>
      <Analytics />
      {children}
    </BrowserRouter>
  );
}
