// Test away!
import React from "react";
import { render, cleanup, fireEvent } from "@testing-library/react";
import '@testing-library/jest-dom/extend-expect';
import Controls from "../controls/Controls";

afterEach(cleanup);

it("tests if gate cannot be closed or opened if it is locked", () => {
  afterEach(cleanup);
  const { get}
  const locked = true;
  // fireEvent.click(toggle - btn);
  expect(openGate).toBeDisabled;
});

//Controls Component
// it("tests if there are buttons to toggle the closed and locked states", () => {});
// it("tests if buttons' text changes to reflect the state the door will be in if clicked", () => {});
// it("tests if the closed toggle button is disabled if the gate is locked", () => {});
// it("tests if the locked toggle button is disabled if the gate is open", () => {});
