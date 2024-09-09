import { fireEvent, render, screen } from "@testing-library/react";
import App from "../App";
import cleanDb from "../service";

// beforeAll(() => {
//   console.log("-----------beforeAll-----------");
// });

// beforeEach(() => {
//   console.log("-----------beforeEach-----------");
// });
test.only("123 First React app case", () => {
  render(<App />);
  const text = screen.getByText(/First Jest Test case/i);
  const text2 = screen.getByText(/Aman Anwar/i);
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
});

// grouping using describe, skip, only describe and nested describe

describe("UI test case group", () => {
  test("case 1", () => {
    render(<App />);
    let checkInput = screen.getByRole("textbox");
    expect(checkInput).toHaveAttribute("name", "username");
  });

  test("case 2", () => {
    render(<App />);
    let checkInput = screen.getByRole("textbox");
    expect(checkInput).toHaveAttribute("name", "username");
  });

  test("case 3", () => {
    render(<App />);
    let checkInput = screen.getByRole("textbox");
    expect(checkInput).toHaveAttribute("name", "username");
  });
});

// describe.only("API test case group", () => {
//   test("api case 1", () => {
//     render(<App />);
//     let checkInput = screen.getByRole("textbox");
//     expect(checkInput).toHaveAttribute("name", "username");
//   });

//   test("api case 2", () => {
//     render(<App />);
//     let checkInput = screen.getByRole("textbox");
//     expect(checkInput).toHaveAttribute("name", "username");
//   });

//   test("api case 3", () => {
//     render(<App />);
//     let checkInput = screen.getByRole("textbox");
//     expect(checkInput).toHaveAttribute("name", "username");
//   });
// });

describe.skip("API test case group", () => {
  test("api case 1", () => {
    render(<App />);
    let checkInput = screen.getByRole("textbox");
    expect(checkInput).toHaveAttribute("name", "username");
  });

  test("api case 2", () => {
    render(<App />);
    let checkInput = screen.getByRole("textbox");
    expect(checkInput).toHaveAttribute("name", "username");
  });

  test("api case 3", () => {
    render(<App />);
    let checkInput = screen.getByRole("textbox");
    expect(checkInput).toHaveAttribute("name", "username");
  });
});

describe("Nested API test case group", () => {
  test("api case 1", () => {
    render(<App />);
    let checkInput = screen.getByRole("textbox");
    expect(checkInput).toHaveAttribute("name", "username");
  });

  test("api case 2", () => {
    render(<App />);
    let checkInput = screen.getByRole("textbox");
    expect(checkInput).toHaveAttribute("name", "username");
  });

  test("api case 3", () => {
    render(<App />);
    let checkInput = screen.getByRole("textbox");
    expect(checkInput).toHaveAttribute("name", "username");
  });

  describe("inner describe", () => {
    test("inner test case", () => {
      render(<App />);
      let checkInput = screen.getByRole("textbox");
      expect(checkInput).toHaveAttribute("name", "username");
    });
  });
});

test("On Change event testing", () => {
  render(<App />);
  let input = screen.getByRole("textbox");
  fireEvent.change(input, { target: { value: "a" } });
  expect(input.value).toBe("atest");
});

test("On Click event testing", () => {
  render(<App />);
  let btn = screen.getByRole("button");
  fireEvent.click(btn);
  expect(screen.getByText("hello")).toBeInTheDocument();
});

test("snapshot for app component", () => {
  const container = render(<App />);
  expect(container).toMatchSnapshot();
});

// afterAll(() => {
//   cleanDb();
// });

// afterEach(() => {
//   console.log("-----------AfterEach-----------");
// });
