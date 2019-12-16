// Test away
import React from "react";
import { render } from "@testing-library/react";
import Display from "../display/Display";
import Controls from "../controls/Controls";

//Gate
it("tests if gate defaults to unlocked and open", () => {
  const locked = false;
  const closed = false;
  const tree = render(<Display locked={locked} closed={closed} />);
  expect(tree).toMatchSnapshot();
});

it("tests if gate cannot be closed or opened if it is locked", () => {});

//Dashboard
// it("tests if dashboard displays the controls", () => {

// });
