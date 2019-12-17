// Test away!
import React from "react";
import { render } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";
import Display from "../display/Display";

//Display Component
it("tests if gate is open/closed and locked/unlocked", () => {
  const { getByText } = render(<Display closed={true} locked={false} />);

  // getByText("Locked");
  getByText("Unlocked");
  getByText("Closed");
  // getByText("Open");
});
// it("tests if displays 'Closed' if the closed prop is true and 'Open' if otherwise", () => {});
it("tests if gate is open/closed and locked/unlocked", () => {
  const { getByText } = render(<Display closed={true} />);

  getByText("Closed");
});
// it("tests if displays 'Locked' if the locked prop is true and 'Unlocked' if otherwise", () => {});
it("tests if gate is open/closed and locked/unlocked", () => {
  const { getByText } = render(<Display closed={true} locked={false} />);

  getByText("Unlocked");
});

it("tests if when locked or closed use the red-led class", () => {
  const { getBy } = render(<Display locked={true} closed={true} />);
  //const leds = document.querySelectorAll(".led");
  getByDisplayValue(/"led red-led"/);
  expect(tree.baseElement).toMatchSnapshot();
  // const ledLockUnlock = leds[0];
  // expect(display).toHaveClass("led red-led");
  // expect(display).toHaveClass("Locked");
});
// it("tests if when unlocked or open use the green-led class", () => {});
