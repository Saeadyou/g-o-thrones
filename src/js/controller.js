import * as model from "./model";
import housesView from "./views/housesView";
import personsView from "./views/personsView";
import quotesView from "./views/quotesView";
import searchView from "./views/searchView";

const controlHouses = async function () {
  try {
    // Loading houses
    await model.loadHouses();

    // Rendering houses
    housesView.render(model.state.houses);
  } catch (err) {
    housesView.renderError();
  }
};

const controlPersons = async function () {
  try {
    // Loading houses
    await model.loadPersons();

    // Rendering houses
    personsView.render(model.state.persons);
  } catch (err) {
    personsView.renderError();
  }
};

const controlQuotes = async function () {
  try {
    // Loading houses
    await model.loadQuotes();

    // Rendering houses
    quotesView.render(model.state.quotes);
  } catch (err) {
    quotesView.renderError();
  }
};

class Router {
  _routes = {
    "/": { render: controlHouses },
    "/persons": { render: controlPersons },
    "/quotes": { render: controlQuotes },
    // "/members": { title: "Members", render: members },
  };

  router_init() {
    let view = this._routes[location.pathname];

    if (view) {
      view.render();
    } else {
      history.replaceState("", "", "/");
      this.router_init();
    }
  }

  navigate() {
    // Handle navigation
    window.addEventListener("click", (e) => {
      if (e.target.matches("[data-link]")) {
        e.preventDefault();
        history.pushState("", "", e.target.href);
        this.router_init();
      }
    });
  }
}

const routing = new Router();

routing.navigate();

// // Update router
// window.addEventListener("popstate", router);
// window.addEventListener("DOMContentLoaded", router);
