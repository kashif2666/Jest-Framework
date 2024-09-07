import { render, screen } from "@testing-library/react";
import App from "./App";

test("123 First React app case", () => {
  render(<App />);
  const text = screen.getByText(/First React Test case/i);
  const text2 = screen.getByText(/Kashif Anwar/i);
  const title = screen.getByTitle("Man In Weed");
  expect(text).toBeInTheDocument();
  expect(text2).toBeInTheDocument();
  expect(title).toBeInTheDocument();
});

test("Testing Input Box", () => {
  render(<App />);
  const checkInput = screen.getByRole("textbox");
  const checkInputPlaceholder = screen.getByPlaceholderText("Enter username");
  expect(checkInput).toBeInTheDocument();
  expect(checkInputPlaceholder).toBeInTheDocument();
  expect(checkInput).toHaveAttribute("name", "username");
  expect(checkInput).toHaveAttribute("id", "userId");
  expect(checkInput).toHaveAttribute("type", "text");
  expect(checkInput).toHaveAttribute("value", "Aman");
});
