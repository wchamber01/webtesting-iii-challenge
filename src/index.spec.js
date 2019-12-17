import React from "react";
import { render } from "@testing-library/react";
import Dashboard from "./dashboard/Dashboard";

it("renders without crashing", () => {
  render(<Dashboard />);
});
