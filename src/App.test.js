import { render, screen } from "@testing-library/react";
import App from "./App";

test("First React app case", () => {
  render(<App />);
  const text = screen.getByText(/First React Test case/i);
  const text2 = screen.getByText(/Kashif Anwar/i);
  const title = screen.getByTitle("Man In Weed");
  expect(text).toBeInTheDocument();
  expect(text2).toBeInTheDocument();
  expect(title).toBeInTheDocument();
});
