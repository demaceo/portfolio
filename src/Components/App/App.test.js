import { render, screen } from "@testing-library/react";
import App from "./App";

test("renders home page components", () => {
  render(<App />);
  const moodyTunes = screen.getByText(/Moody Tunes/i);
  const rantom = screen.getByText(/Rancid Tomatillos/i);
  const whatsCookin = screen.getByText(/What's Cookin/i);

  expect(moodyTunes).toBeInTheDocument();
  expect(rantom).toBeInTheDocument();
  expect(whatsCookin).toBeInTheDocument();
});
