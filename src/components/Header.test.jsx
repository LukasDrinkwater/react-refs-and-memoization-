import React from "react";
import { describe, it, expect, afterEach } from "vitest";
import { render, cleanup } from "@testing-library/react";
import "@testing-library/jest-dom";

import Header from "./Header";
afterEach(cleanup);
describe("Header component", () => {
  it("renders", () => {
    // you don't often need `asFragment` and you can normally
    // just snapshot the container itself. Either works fine though.
    const { asFragment } = render(<Header text="hello" />);
    expect(asFragment()).toMatchSnapshot();
  });

  it("inserts text in h1", () => {
    const { getByTestId, getByText } = render(<Header text="hello2" />);

    expect(getByTestId("h1tag")).toHaveTextContent("hello2");
    expect(getByText("hello2")).toHaveClass("fancy-h1");
  });
});
