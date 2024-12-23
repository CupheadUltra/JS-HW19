const page = document.querySelector("body");
const backdrop = document.querySelector(".js-backdrop");
const openBtn = document.querySelector("[data-action='open-modal']");
const closeBtn = document.querySelector("[data-action='close-modal']");

if (openBtn && closeBtn && backdrop) {
  openBtn.addEventListener("click", toggleClass);
  closeBtn.addEventListener("click", toggleClass);
  backdrop.addEventListener("click", toggleClass);

  function toggleClass(event) {
    if (
      event.currentTarget === backdrop &&
      event.target !== event.currentTarget
    ) {
      return;
    }
    page.classList.toggle("show-modal");
  }
}

const redRadio = document.querySelector("[value='red']");
const whiteRadio = document.querySelector("[value='white']");
const greenRadio = document.querySelector("[value='green']");

if (redRadio && whiteRadio && greenRadio) {
  redRadio.addEventListener("focus", () => {
    page.style.backgroundColor = "red";
  });
  whiteRadio.addEventListener("focus", () => {
    page.style.backgroundColor = "white";
  });
  greenRadio.addEventListener("focus", () => {
    page.style.backgroundColor = "green";
  });
}

const input = document.querySelector("#name-input");
const output = document.querySelector("#name-output");

input.addEventListener("input", () => {
  if (input.value === "") {
    output.textContent = "незнайомець";
  } else {
    output.textContent = input.value;
  }
});

const inputELement = document.querySelector("#validation-input");

inputELement.addEventListener("blur", (event) => {
  if (event.target.value.length > event.target.dataset.length) {
    event.target.classList.add("invalid");
    event.target.classList.remove("valid");
  }
  if (event.target.value.length < event.target.dataset.length) {
    event.target.classList.add("invalid");
    event.target.classList.remove("valid");
  }  else {
    event.target.classList.remove("invalid");
    event.target.classList.add("valid");
  }

});

const range = document.querySelector("#font-size-control");
const text = document.querySelector("#text");

range.addEventListener("input", (event) => {
  text.style.fontSize = `${event.target.value}px`;
});
