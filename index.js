function id(l) {
  return document.getElementById(l);
}
function query(l) {
  return document.querySelector(l);
}

function queryAll(l) {
  return document.querySelectorAll(l);
}

const gateway_data = {
  current: "",
  options: [],
  links: [],
};

const sideToggle = query(".open-side");
const sideNav = query(".side-nav");
const sideNavShell = query(".side-nav-shell");

sideToggle.addEventListener("click", () => {
  const isOpen = sideNavShell.classList.toggle("is-open");
  sideToggle.setAttribute("aria-expanded", isOpen);
  sideToggle.setAttribute(
    "aria-label",
    isOpen ? "Close page navigation" : "Open page navigation",
  );
});

queryAll(".side-nav a").forEach((link) => {
  link.addEventListener("click", () => {
    sideNavShell.classList.remove("is-open");
    sideToggle.setAttribute("aria-expanded", "false");
    sideToggle.setAttribute("aria-label", "Open page navigation");
  });
});

const settingsButton = query(".settings-button");
const settingsMenu = query("#settings-menu");
const themeSelect = query("#theme-select");
window.addEventListener("load", () => {
  themeSelect.value = localStorage.getItem("theme") || "light";
  document.documentElement.dataset.theme =
    localStorage.getItem("theme") || "light";
});
settingsButton.addEventListener("click", () => {
  const isOpen = settingsButton.getAttribute("aria-expanded") === "true";
  settingsButton.setAttribute("aria-expanded", String(!isOpen));
  settingsMenu.hidden = isOpen;
});

themeSelect.addEventListener("change", () => {
  document.documentElement.dataset.theme = themeSelect.value;
  window.localStorage.setItem("theme", themeSelect.value);
});

document.addEventListener("click", (event) => {
  if (!event.target.closest(".settings-control")) {
    settingsMenu.hidden = true;
    settingsButton.setAttribute("aria-expanded", "false");
  }
});

document.addEventListener("keydown", (event) => {
  if (event.key === "Escape") {
    settingsMenu.hidden = true;
    settingsButton.setAttribute("aria-expanded", "false");
  }
});

function getFileName(src, folderName) {
  const path = src.replace(/\\/g, "/").split(/[?#]/)[0];
  const folder = folderName.replace(/^\/+|\/+$/g, "");
  const folderIndex = path.lastIndexOf(`/${folder}/`);

  if (folderIndex !== -1) {
    return path.slice(folderIndex + folder.length + 2);
  }

  return path.split("/").pop();
}

function removeEvents(el, func) {
  const events = [
    "click",
    "doudleclick",
    "transitionend",
    "animationend",
    "submit",
    "checked",
  ];
  events.map((e) => {
    el.removeEventListener(e, func);
  });
}

function isDOMElement(value) {
  return value !== null && value instanceof Element;
}

function removeDOM(el) {
  if (isDOMElement(el)) {
    try {
      el.remove();
      removeEvents(el, removeDOM);
      return;
    } catch (e) {
      1 + 1;
    }
    return;
  }
  this.remove();
  removeEvents(this, removeDOM);
  return;
}

// data handling the projects section of the pages

const TASK_MANAGER = {
  id: "task-manager",
  title: "Task Manager website",
  desc: 'This website was made as a challenge with a close friend of mine, the purpose was basically "Who can make the best Task Mangager Website?" I personally went down the backend route, and t[...]