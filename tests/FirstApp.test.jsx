import { render } from "@testing-library/react";
import FirstApp from "../src/FisrtApp";

describe("Test in FirstApp.test.jsx", () => {
  // The snapshot test is better to do when a component is finished and it will not change
  // test("Should match the component with the snapshot", () => {
  //   const title = "Soy un titulo";

  //   const { container } = render(<FirstApp title={title} />);

  //   expect(container).toMatchSnapshot();
  // });

  test("Should show the title sent by props in a h1", () => {
    const title = "Soy un titulo";

    const { container, getByText, getByTestId } = render(
      <FirstApp title={title} />
    );

    expect(getByText(title)).toBeTruthy();

    // This is not the best way to test this
    // const h1 = container.querySelector("h1");
    // expect(h1.innerHTML).toContain(title);

    expect(getByTestId("title").textContent).toBe(title);
  });

  test("Should show the subtitle sent by props ", () => {
    const title = "Soy un titulo";
    const subtitle = "Soy un subtitulo";

    const { getByText } = render(
      <FirstApp title={title} subtitle={subtitle} />
    );

    expect(getByText(subtitle)).toBeTruthy();
  });
});
