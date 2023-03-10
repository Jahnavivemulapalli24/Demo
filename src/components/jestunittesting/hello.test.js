import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import Hello from "./Hello";

describe("Hello component", () => {
test('renders "Hello World" as a text', () => {
  render(<Hello />);
  const helloWorldElement = screen.getByText("Hello World!");
  expect(helloWorldElement).toBeInTheDocument();

  });
  
  test('renders "Good Afternoon" you if the button was not clicked', () => {
   render(<Hello />);
   const outputElement = screen.getByText("Good Afternoon", { exact: false });
   expect(outputElement).toBeInTheDocument();
  });
  test('renders "Changed!" if the button was clicked', () => {
  render(<Hello />);
 const buttonElement = screen.getByRole("button");
    userEvent.click(buttonElement);
    const outputElement = screen.getByText("Changed!");
    expect(outputElement).toBeInTheDocument();
  });
  test('does not render "Good Afternoon" if the button was clicked', () => {
    render(<Hello />);
        const buttonElement = screen.getByRole("button");
        userEvent.click(buttonElement);
    const outputElement = screen.queryByText("Good Afternoon", { exact: false});
    expect(outputElement).toBeNull();
});

});

