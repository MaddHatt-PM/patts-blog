import React from "react";
import { render } from "@testing-library/react"
importFooterfrom "./Footer";

it("Footer: renders correctly", () => {
  const { queryByTestId, queryByPlaceholderName } = render(<Footer/>);});