import { expect } from "vitest";
import { render, RenderResult } from "@testing-library/react";
import userEvent from "@testing-library/user-event";

import { TrackingPage } from "./tracking.page.tsx";

const selectCompany = async (screen: RenderResult) => {
  const companySelector = screen.getByRole("searchbox", { name: /Company/i });
  await userEvent.click(companySelector);
  await userEvent.click(screen.getAllByRole("option")[1]);
};

const selectActivity = async (screen: RenderResult) => {
  const companySelector = screen.getByRole("searchbox", { name: /Activity/i });
  await userEvent.click(companySelector);
  await userEvent.click(screen.getAllByRole("option")[1]);
};

const startTask = async (screen: RenderResult) => {
  await selectCompany(screen);
  await selectActivity(screen);
  await userEvent.click(screen.getByRole("button", { name: "Start" }));
};

describe("TrackingPage", () => {
  let screen: RenderResult,
    title: HTMLElement,
    startButton: HTMLElement,
    stopButton: HTMLElement;

  beforeEach(() => {
    screen = render(<TrackingPage />);
    title = screen.getByText("Tracking");
    startButton = screen.getByRole("button", { name: "Start" });
    stopButton = screen.getByRole("button", { name: "Stop" });
  });

  it("renders the title", () => {
    expect(title).toBeVisible();
  });

  describe("when the company is not selected", () => {
    it("should not be possible to start or stop the stopwatch", () => {
      expect(startButton).toBeDisabled();
      expect(stopButton).toBeDisabled();
    });
  });

  describe("when the company is selected", () => {
    describe("when the activity is not selected", () => {
      it("should not be possible to start or stop the stopwatch", async () => {
        await selectCompany(screen);

        expect(startButton).toBeDisabled();
        expect(stopButton).toBeDisabled();
      });
    });

    describe("when the activity is selected", () => {
      it("should be possible to start the stopwatch ", async () => {
        await selectCompany(screen);
        await selectActivity(screen);

        expect(startButton).not.toBeDisabled();
      });

      it("should not be possible to stop the stopwatch ", async () => {
        await selectCompany(screen);
        await selectActivity(screen);

        expect(stopButton).toBeDisabled();
      });
    });
  });

  describe("when the stopwatch is running", () => {
    it("should not be possible to start the stopwatch", async () => {
      await startTask(screen);

      const startButton = await screen.queryByRole("button", {
        name: /start/i,
      });

      const resumeButton = await screen.findByRole("button", {
        name: /resume/i,
      });

      expect(startButton).not.toBeInTheDocument();
      expect(resumeButton).toBeDisabled();
    });
  });
});
