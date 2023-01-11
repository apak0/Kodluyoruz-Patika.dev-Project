import React from "react";
import "@testing-library/jest-dom";
import { render, screen, fireEvent, cleanup } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import App from "./App";

describe("app test", () => {
  beforeEach(() => {
    render(<App />);
  });

  // Header section test
  test("header section rendered", () => {
    const catIconLeft = screen.getByAltText("smile-cat-left");
    const catIconRight = screen.getByAltText("smile-cat-right");

    expect(catIconLeft).toBeInTheDocument();
    expect(catIconRight).toBeInTheDocument();
  });

  // Emoji list test

  test("The emoji list are rendered correctly", () => {
    expect(screen.getAllByText("Click to copy emoji")).toHaveLength(20);
  });

  // Input filtered test
  test("The emoji list is re-rendered according to that filter", () => {
    const inputElement = screen.getByPlaceholderText(/search/i);
    expect(inputElement).toHaveValue("");

    userEvent.type(inputElement, "There is an input");
    expect(inputElement).toHaveValue("There is an input");

    const input = screen.getByRole("textbox");
    fireEvent.change(input, { target: { value: "joy" } });
    expect(screen.getAllByText(/joy/i)).toHaveLength(3);
  });

  // Emoji Item copied test

  test("Emoji Copy render", () => {
    const clicks = screen.getAllByTestId("row");
    expect(clicks[0]).toHaveAttribute("data-clipboard-text");
  });
});
