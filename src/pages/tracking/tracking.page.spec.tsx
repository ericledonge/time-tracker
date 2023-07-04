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

describe("TrackingPage", () => {
  let screen: RenderResult,
    title: HTMLElement,
    startButton: HTMLElement,
    pauseButton: HTMLElement,
    stopButton: HTMLElement,
    companySelector: HTMLElement,
    activitySelector: HTMLElement;

  beforeEach(() => {
    screen = render(<TrackingPage />);
    title = screen.getByText("Tracking");
    startButton = screen.getByRole("button", { name: "Start" });
    pauseButton = screen.getByRole("button", { name: "Pause" });
    stopButton = screen.getByRole("button", { name: "Stop" });
    companySelector = screen.getByRole("searchbox", { name: /Company/i });
    activitySelector = screen.getByRole("searchbox", { name: /Activity/i });
  });

  it("renders the title", () => {
    expect(title).toBeVisible();
  });

  describe("when the company is not selected", () => {
    it("should not be possible to start, pause or stop the stopwatch", () => {
      expect(startButton).toBeDisabled();
      expect(pauseButton).toBeDisabled();
      expect(stopButton).toBeDisabled();
    });
  });

  describe("when the company is selected", () => {
    describe("when the activity is not selected", () => {
      it("should not be possible to start, pause or stop the stopwatch", async () => {
        await selectCompany(screen);

        expect(startButton).toBeDisabled();
        expect(pauseButton).toBeDisabled();
        expect(stopButton).toBeDisabled();
      });
    });

    describe("when the activity is selected", () => {
      it("should be possible to start the stopwatch ", async () => {
        await selectCompany(screen);
        await selectActivity(screen);

        expect(startButton).not.toBeDisabled();
      });

      it("should not be possible to pause or stop the stopwatch ", async () => {
        await selectCompany(screen);
        await selectActivity(screen);

        expect(pauseButton).toBeDisabled();
        expect(stopButton).toBeDisabled();
      });
    });
  });

  // describe("when the stopwatch is running", () => {});
});
