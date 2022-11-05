import React from "react";
import { render } from "@testing-library/react"
importTitleHeaderfrom "./TitleHeader";

it("TitleHeader: renders correctly", () => {
  const { queryByTestId, queryByPlaceholderName } = render(<TitleHeader/>);});