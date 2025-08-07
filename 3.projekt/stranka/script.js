const menuIcon = document.querySelector(".menu-icon");
const menuList = document.querySelector("nav");
const hamburgerIcon = document.querySelector(".fa-solid");

menuIcon.addEventListener("click", () => {});

menuIcon.addEventListener("click", () => {
  if (hamburgerIcon.classList[1] === "fa-bars") {
    hamburgerIcon.classList.add("fa-xmark");
    hamburgerIcon.classList.remove("fa-bars");
    menuList.style.display = "block";
    sign.style.visibility = "hidden";
  } else {
    hamburgerIcon.classList.add("fa-bars");
    hamburgerIcon.classList.remove("fa-xmark");
    menuList.style.display = "none";
    sign.style.visibility = "visible";
  }
});

let darkmode = localStorage.getItem("darkmode");
const themeSwitch = document.getElementById("theme-switch");

const enableDarkmode = () => {
  document.body.classList.add("darkmode");
  localStorage.setItem("darkmode", "active");
};

const disableDarkmode = () => {
  document.body.classList.remove("darkmode");
  localStorage.setItem("darkmode", null);
};

if (darkmode === "active") enableDarkmode();

themeSwitch.addEventListener("click", () => {
  darkmode = localStorage.getItem("darkmode");
  darkmode !== "active" ? enableDarkmode() : disableDarkmode();
});

const formular = document.querySelector("form");

const fullName = document.querySelector(".fullName");
const email = document.querySelector(".email");
const tel = document.querySelector(".tel");
const message = document.querySelector(".message");

const password = document.querySelector(".password");
const confirmPassword = document.querySelector(".confirmPassword");

const notName = document.querySelector(".notificationName");
const notEmail = document.querySelector(".notificationEmail");
const notTel = document.querySelector(".notificationTel");
const notMessage = document.querySelector(".notificationMessage");
const notPassword = document.querySelector(".notificationPassword");
const notConfirmPassword = document.querySelector(
  ".notificationConfirmPassword"
);

const successMessage = document.querySelector(".notificationSuccess");

formular.addEventListener("submit", (event) => {
  event.preventDefault();

  document
    .querySelectorAll("p[class^='notification']")
    .forEach((el) => (el.style.display = "none"));

  const isContactForm = document.querySelector(".message") !== null;
  const isLoginForm = document.querySelector(".password") !== null;

  let isValid = true;

  if (isContactForm) {
    if (fullName.value.trim() === "") {
      notName.style.display = "block";
      isValid = false;
    }
    if (email.value.trim() === "") {
      notEmail.style.display = "block";
      isValid = false;
    }
    if (message.value.trim() === "") {
      notMessage.style.display = "block";
      isValid = false;
    }
    console.log("Kontaktní formulář odeslán");
  }

  if (isLoginForm) {
    if (fullName.value.trim() === "") {
      notName.style.display = "block";
      isValid = false;
    }
    if (email.value.trim() === "") {
      notEmail.style.display = "block";
      isValid = false;
    }
    if (password.value.trim() === "") {
      notPassword.style.display = "block";
      isValid = false;
    }
    if (confirmPassword.value.trim() === "") {
      notConfirmPassword.style.display = "block";
      isValid = false;
    }
    if (password.value.trim() !== confirmPassword.value.trim()) {
      notConfirmPassword.style.display = "block";
      notConfirmPassword.textContent = "Hesla se neshodují!";
      isValid = false;
    }
    console.log("Přihlašovací formulář odeslán");
  }

  if (isValid) {
    successMessage.style.display = "block";
    successMessage.textContent = "Formulář byl odeslán!";
    formular.reset();
  }
});
