import { render, screen, fireEvent, waitFor } from "@testing-library/react";
import { beforeEach, jest } from "@jest/globals";
import "@testing-library/jest-dom";
import LikeButton from "./like-button";

// Mock localStorage
beforeEach(() => {
  Object.defineProperty(window, "localStorage", {
    value: {
      getItem: jest.fn(() => JSON.stringify({ email: "alice@example.com" })),
      setItem: jest.fn(),
    },
    writable: true,
  });
});

test("renders like button when liked is false", async () => {
  window.localStorage.getItem = jest.fn((key) => {
    if (key === "user") return JSON.stringify({ email: "alice@example.com" });
    if (key === "likedPhotos_alice@example.com") return JSON.stringify([]);
    return null;
  });
  render(<LikeButton id={1} />);
  // Wait for useEffect to run
  const button = await screen.findByRole("button");
  expect(button).toBeInTheDocument();
  expect(button).toHaveAttribute("aria-label", "Like photo");
});

test("renders liked button when liked is true", async () => {
  window.localStorage.getItem = jest.fn((key) => {
    if (key === "user") return JSON.stringify({ email: "alice@example.com" });
    if (key === "likedPhotos_alice@example.com") return JSON.stringify([1]);
    return null;
  });
  render(<LikeButton id={1} />);
  const button = await screen.findByRole("button");
  expect(button).toHaveAttribute("aria-label", "Unlike photo");
});

test("toggles liked state on click", async () => {
  window.localStorage.getItem = jest.fn((key) => {
    if (key === "user") return JSON.stringify({ email: "alice@example.com" });
    if (key === "likedPhotos_alice@example.com") return JSON.stringify([]);
    return null;
  });
  window.localStorage.setItem = jest.fn();
  render(<LikeButton id={1} />);
  const button = await screen.findByRole("button");
  fireEvent.click(button);
  expect(window.localStorage.setItem).toHaveBeenCalled();
});
