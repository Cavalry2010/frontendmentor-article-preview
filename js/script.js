"use strict";

// Selecting the DOM elements

const shareBtn = document.querySelector(".share-btn");
const shareBox = document.querySelector(".share-box");

// App

class App {
  a;

  constructor() {
    {
      shareBtn.addEventListener("click", this.openShareBox);
      window.addEventListener("click", this.closeShareBox);
    }
  }

  openShareBox() {
    shareBox.classList.toggle("open");
  }

  closeShareBox(e) {
    const target = e.target;
    if (target.tagName === "BUTTON" || target.parentNode.tagName === "BUTTON")
      return;
    shareBox.classList.remove("open");
  }
}

const app = new App();
