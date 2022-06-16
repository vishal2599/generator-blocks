import React, { useState } from "react"
import ReactDOM from "react-dom"
import "./frontend.scss"
import HeadingWithTwoCtas from "./blocks/frontend/HeadingWithTwoCtas";
import Newsletter from "./blocks/frontend/Newsletter";

/* Heading with Two CTAs - Block */

const block1 = document.querySelectorAll(".generator-gutenberg-blocks")

block1.forEach(div => {
  const data = JSON.parse(div.querySelector("pre").innerText)
  ReactDOM.render(<HeadingWithTwoCtas {...data} />, div)
  div.classList.remove("generator-gutenberg-blocks")
});

/* Newsletter - Block */

const newsletter = document.querySelectorAll(".generator-newsletter-block")
newsletter.forEach(div => {
  const data = JSON.parse(div.querySelector("pre").innerText)
  ReactDOM.render(<Newsletter {...data} />, div)
  div.classList.remove("generator-newsletter-block")
});