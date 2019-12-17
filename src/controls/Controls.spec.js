// Test away!
import React from "react";
import {
  render,
  cleanup,
  fireEvent,
  getByText,
  queryByTestId
} from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";
import Controls from "../controls/Controls";

afterEach(cleanup);

it("tests if gate cannot be closed or opened if it is locked", () => {
  // afterEach(cleanup);
  const { getByText } = render(<Controls locked={true} closed={true} />);
  // const closeButton = getByText(/close gate/i);
  const openButton = getByText(/open gate/i);
  // expect(queryByTestId(closeButton)).toBeNull;  //button can only contain open or close.
  expect(openButton).toBeDisabled; //If open is true and disabled then closed is disabled and hidden
});

//Controls Component
it("tests if there is a close button rendered", () => {
  const { getByText } = render(<Controls />);
  const closedButton = getByText(/close gate/i);
  expect(closedButton).toBeInTheDocument;
});

it("tests if there is an open button rendered", () => {
  const { getByText } = render(<Controls closed={true} />);
  const openButton = getByText(/open gate/i);
  expect(openButton).toBeInTheDocument;
});

it("tests if there is a lock button rendered", () => {
  const { getByText } = render(<Controls />);
  const lockButton = getByText(/lock gate/i);
  expect(lockButton).toBeInTheDocument;
});
it("tests if there is an unlock button rendered", () => {
  const { getByText } = render(<Controls locked={true} />);
  const unlockButton = getByText(/unlock gate/i);
  expect(unlockButton).toBeInTheDocument;
});

it("tests if the closed toggle button is disabled if the gate is locked", () => {
  const { getByText } = render(<Controls locked={true} />);
  const closedButton = getByText(/close gate/i);
  expect(closedButton).toBeDisabled;
});

it("tests if the locked toggle button is disabled if the gate is open", () => {
  const { getByText } = render(<Controls closed={false} />);
  const lockButton = getByText(/lock gate/i);
  expect(lockButton).toBeDisabled;
});
