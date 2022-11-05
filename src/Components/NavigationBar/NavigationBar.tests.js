import React from "react";
import { render } from "@testing-library/react"
importNavigationBarfrom "./NavigationBar";

it("NavigationBar: renders correctly", () => {
  const { queryByTestId, queryByPlaceholderName } = render(<NavigationBar/>);});