import { render } from "@testing-library/react";

import { TrackingPage } from "./tracking.page.tsx";

describe("TrackingPage", () => {
  it("renders correctly", async () => {
    const { findByText } = render(<TrackingPage />);
    const title = findByText("Tracking");
    expect(title).toBeVisible();
  });
});
