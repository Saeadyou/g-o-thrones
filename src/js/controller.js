import houses from "./views/housesView";
import persons from "./views/personsView";
import quotes from "./views/quotesView";

const routes = {
  "/": { title: "Houses", render: houses },
  "/persons": { title: "Persons", render: persons },
  "/quotes": { title: "Quotes", render: quotes },
};

function router() {
  let view = routes[location.pathname];

  if (view) {
    view.render();
  } else {
    history.replaceState("", "", "/");
    router();
  }
}

// Handle navigation
window.addEventListener("click", (e) => {
  if (e.target.matches("[data-link]")) {
    e.preventDefault();
    history.pushState("", "", e.target.href);
    router();
  }
});

// Update router
window.addEventListener("popstate", router);
window.addEventListener("DOMContentLoaded", router);
