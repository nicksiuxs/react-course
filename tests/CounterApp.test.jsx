import { fireEvent, render, screen } from "@testing-library/react";
import CounterApp from "../src/CounterApp";

describe("Test for CounterApp component", () => {
  const defaultValue = 100;

  test("Should math with the snapshot", () => {
    const { container } = render(<CounterApp />);
    expect(container).toMatchSnapshot();
  });

  test("Should show the default value", () => {
    render(<CounterApp value={defaultValue} />);
    expect(screen.getByText(defaultValue)).toBeTruthy();
    expect(screen.getByRole("heading", { level: 2 }).innerHTML).toContain(
      defaultValue.toString()
    );
  });

  test("Should increment the counter with the button +1", () => {
    render(<CounterApp value={defaultValue} />);

    expect(screen.getByText(defaultValue)).toBeTruthy();

    const button = screen.getByText("+1");
    fireEvent.click(button);

    expect(screen.getByText(defaultValue + 1)).toBeTruthy();
  });

  test("Should decrement the counter with the button -1", () => {
    render(<CounterApp value={defaultValue} />);

    expect(screen.getByText(defaultValue)).toBeTruthy();

    const button = screen.getByText("-1");
    fireEvent.click(button);

    expect(screen.getByText(defaultValue - 1)).toBeTruthy();
  });

  test('Should reset the counter with the button "Reset"', () => {
    render(<CounterApp value={defaultValue} />);

    expect(screen.getByText(defaultValue)).toBeTruthy();

    const buttonAdd = screen.getByText("+1");
    fireEvent.click(buttonAdd);
    fireEvent.click(buttonAdd);

    expect(screen.getByText(defaultValue + 2)).toBeTruthy();

    const buttonReset = screen.getByRole("button", { name: "btn-reset" });
    fireEvent.click(buttonReset);

    expect(screen.getByText(defaultValue)).toBeTruthy();
  });
});
