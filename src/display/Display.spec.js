// Test away!
import React from "react";
import { render, cleanup } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";
import Display from "../display/Display";

afterEach(cleanup);

//Display Component
it("tests if gate is open/closed and locked/unlocked", () => {
  afterEach(cleanup);
  const { getByText } = render(<Display closed={true} locked={false} />);

  // getByText("Locked");
  getByText("Unlocked");
  getByText("Closed");
  // getByText("Open");
});

// it("tests if displays 'Closed' if the closed prop is true and 'Open' if otherwise", () => {});

it("tests if gate is open/closed and locked/unlocked", () => {
  afterEach(cleanup);
  const { getByText } = render(<Display closed={true} />);
  getByText("Closed");
});
// it("tests if displays 'Locked' if the locked prop is true and 'Unlocked' if otherwise", () => {});

it("tests if gate is open/closed and locked/unlocked", () => {
  afterEach(cleanup);
  const { getByText } = render(<Display closed={true} locked={false} />);
  getByText("Unlocked");
});

it("tests if when locked or closed use the red-led class", () => {
  afterEach(cleanup);
  const { getByText } = render(<Display locked={true} closed={true} />);
  const closed = getByText(/closed/i);
  const locked = getByText(/locked/i);
  expect(closed).toHaveClass("red-led");
  expect(locked).toHaveClass("red-led");
});

it("tests if when unlocked or open use the green-led class", () => {
  afterEach(cleanup);
  const { getByText } = render(<Display locked={false} closed={false} />);
  const open = getByText(/open/i);
  const unlocked = getByText(/unlocked/i);
  expect(open).toHaveClass("green-led");
  expect(unlocked).toHaveClass("green-led");
});
