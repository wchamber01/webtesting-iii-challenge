// Test away
import React from "react";
import { render, fireEvent } from "@testing-library/react";
import Display from "../display/Display";
import Controls from "../controls/Controls";

//Display
it("renders without crashing", () => {
  render(<Display />);
});

//Controls
it("renders without crashing", () => {
  render(<Controls />);
});

//Gate
it("tests if gate defaults to unlocked and open", () => {
  const locked = false;
  const closed = false;
  const tree = render(<Display locked={locked} closed={closed} />);
  expect(tree.baseElement).toMatchSnapshot();
});

//Dashboard
// it("tests if dashboard displays the controls", () => {

// });
