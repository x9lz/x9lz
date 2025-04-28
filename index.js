const SCALE_FACTOR = 1.099; // Increase width by 20% (adjust as needed)

const wrapper = document.querySelector(".words");
const words = wrapper.querySelectorAll("span");
const currentWord = wrapper.querySelector("span.current");
const wordsWidths = Array.from(words).map((word) => word.offsetWidth * SCALE_FACTOR); // Scale each word
const maxWordsWidth = Math.max(...wordsWidths);
const CURRENT_CLASS = "current";
const NEXT_CLASS = "next";

// Apply scaled width initially
wrapper.style.setProperty("--width", `${currentWord.offsetWidth * SCALE_FACTOR}px`);
wrapper.style.setProperty("--width-mobile", `${maxWordsWidth}px`);

setInterval(() => {
  const currentWord = wrapper.querySelector("span.current");
  const nextWord = wrapper.querySelector("span.next");
  const nextNextWord = nextWord.nextElementSibling
    ? nextWord.nextElementSibling
    : wrapper.firstElementChild;

  currentWord.classList.remove(CURRENT_CLASS);
  nextWord.classList.remove(NEXT_CLASS);
  nextWord.classList.add(CURRENT_CLASS);
  nextNextWord.classList.add(NEXT_CLASS);

  wrapper.style.setProperty("--color", nextWord.dataset.color);
  wrapper.style.setProperty("--color-bg", nextWord.dataset.bgColor);
  wrapper.style.setProperty("--width", `${nextWord.offsetWidth * SCALE_FACTOR}px`); // Scale dynamically
}, 1750); // interval set here, in ms