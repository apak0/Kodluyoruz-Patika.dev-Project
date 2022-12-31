import React from "react";
import ReactDOM from "react-dom";
import App from "./App";

it("renders without crashing", () => {
  const div = document.createElement("div");
  ReactDOM.render(<App />, div);
});



test("Input ve button dökümanda bulunmalı", () => {
  expect(button).toBeInTheDocument();
  expect(input).toBeInTheDocument();
});

test("Inputa string girilip butona basılınca listeye eklenmeli", () => {
  //inputu doldur
  const name = "Mehmet";
  userEvent.type(input, name);

  //buttona tıkla
  userEvent.click(button);

  //assertion
  expect(screen.getByText(name)).toBeInTheDocument();
})