import React from "react";
import { render } from "@testing-library/react"
importHeaderCanvasfrom "./HeaderCanvas";

it("HeaderCanvas: renders correctly", () => {
  const { queryByTestId, queryByPlaceholderName } = render(<HeaderCanvas />);
});