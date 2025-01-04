import { render } from "@testing-library/react";
import FirstApp from "../src/FisrtApp";

describe("Test in FirstApp.test.jsx", () => {
  test("Should match the component with the snapshot", () => {
    const title = "Soy un titulo";

    const { container } = render(<FirstApp title={title} />);

    expect(container).toMatchSnapshot();
  });

  test("Should show the title sent by props in a h1", () => {
    const title = "Soy un titulo";

    const { container, getByText } = render(<FirstApp title={title} />);

    expect(getByText(title)).toBeTruthy();

    // This is not the best way to test this
    const h1 = container.querySelector("h1");
    expect(h1.innerHTML).toContain(title);
  });
});
