// eslint-disable-next-line @typescript-eslint/no-unused-vars
import * as React from "react";
import { render, screen } from "@testing-library/react";
import { test, expect, beforeAll, vi } from "vitest";
import App from "../src/App";

// Mock new Date() to return a fixed date for consistent testing
beforeAll(() => {
  const mockDate = new Date("2025-04-03T23:21:33.000Z");
  vi.setSystemTime(mockDate);
});

test("renders basic TimeAgo component", () => {
  render(<App />);
  screen.getByText("just now");
});

test("renders Vietnamese locale example", () => {
  render(<App />);
  screen.getByText(/\d+ năm trước/);
});

test("renders non-live TimeAgo example", () => {
  render(<App />);
  screen.getByText("11 seconds ago");
});

test("renders styled TimeAgo example", () => {
  render(<App />);
  const styledTimeElement = screen.getByText("7 years ago");
  expect(styledTimeElement.style.color).toBe("green");
});

test("renders relative date example", () => {
  render(<App />);
  screen.getByText("1 day ago");
});

test("renders TimeAgo with HTML time attributes", () => {
  render(<App />);
  const timeElement = screen.getByText("5 years ago");
  expect(timeElement.tagName).toBe("TIME");
  expect(timeElement.id).toBe("timeago");
  expect(timeElement.title).toBe("Nov 15, 2019");
});
