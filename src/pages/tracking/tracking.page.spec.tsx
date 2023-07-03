import { expect } from "vitest";
import { render } from "@testing-library/react";
import userEvent from "@testing-library/user-event";

import { TrackingPage } from "./tracking.page.tsx";

describe("TrackingPage", () => {
  it("renders the title", async () => {
    const { findByText } = render(<TrackingPage />);
    const title = await findByText("Tracking");

    expect(title).toBeVisible();
  });

  describe("when the company is not selected", () => {
    it("should not be possible to start the stopwatch", async () => {
      const { findByRole } = render(<TrackingPage />);
      const startButton = await findByRole("button", { name: "Start" });

      expect(startButton).toBeDisabled();
    });
  });

  describe("when the company and the activity are selected", () => {
    it("should be possible to start the stopwatch ", async () => {
      const { findByRole, getByRole, getAllByRole } = render(<TrackingPage />);

      // Simulate selecting a company
      const companySelector = getByRole("searchbox", { name: /Company/i });
      await userEvent.click(companySelector);
      await userEvent.click(getAllByRole("option")[1]);

      // Simulate selecting an activity
      const activitySelector = getByRole("searchbox", { name: /Activity/i });
      await userEvent.click(activitySelector);
      await userEvent.click(getAllByRole("option")[1]);

      // Verify the Start button is not disabled anymore
      const startButton = await findByRole("button", { name: /Start/i });
      expect(startButton).not.toBeDisabled();
    });
  });
});
