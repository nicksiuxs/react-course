import { render, screen } from "@testing-library/react";
import FirstApp from "../src/FisrtApp";

describe("Test in FirstApp.test.jsx", () => {
  const title = "Hola, soy un titulo";
  const subtitle = "Soy un subtitulo";

  test("Should match the component with the snapshot", () => {
    const { container } = render(<FirstApp title={title} />);
    expect(container).toMatchSnapshot();
  });

  test("Should show the 'Hola, soy un titulo ", () => {
    render(<FirstApp title={title} />);
    expect(screen.getByText(title)).toBeTruthy();
  });

  test("Should show the title in a h1 tag", () => {
    render(<FirstApp title={title} />);
    expect(screen.getByRole("heading", { level: 1 }).innerHTML).toContain(
      title
    );
  });

  test("Should show the subtitle sent in props", () => {
    render(<FirstApp title={title} subtitle={subtitle} />);
    expect(screen.getByText(subtitle)).toBeTruthy();
  });
});
