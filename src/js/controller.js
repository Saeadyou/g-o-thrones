import * as model from "./model";
import housesView from "./views/housesView";
import membersView from "./views/membersView";
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

const controlMembers = function () {
  try {
    const selectedHouse = model.state.houses.find(
      (house) => house.slug === location.pathname.replace("/houses/", "")
    );
    membersView.renderMembers(selectedHouse);
  } catch (err) {
    membersView.renderError();
  }
};

const controlPersons = async function () {
  try {
    // Loading persons
    await model.loadPersons();

    // Rendering persons
    personsView.render(model.state.persons);
  } catch (err) {
    personsView.renderError();
  }
};

const controlQuotes = async function () {
  try {
    // Loading quotes
    await model.loadQuotes();

    // Rendering quotes
    quotesView.render(model.state.quotes);
  } catch (err) {
    quotesView.renderError();
  }
};

const controlSearchResults = function () {
  try {
    // Get search query
    const query = searchView.getQuery().toUpperCase();
    if (!query) housesView.render(model.state.houses);

    // Load search result
    const houses = model.state.houses.filter(
      (house) => house.name.toUpperCase().indexOf(query) > -1
    );

    // Render results
    housesView.render(houses);
  } catch (err) {
    quotesView.renderError();
  }
};

class Router {
  _routes = {
    "/": { render: controlHouses },
    "*": { render: controlMembers },
    "/persons": { render: controlPersons },
    "/quotes": { render: controlQuotes },
    // "/members": { title: "Members", render: members },
  };

  router_init() {
    let view = this._routes[location.pathname];

    if (view) {
      view.render();
    } else if (location.pathname.includes("/houses/")) {
      controlMembers();
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

document.querySelector(".search").addEventListener("submit", (e) => {
  e.preventDefault();
  controlSearchResults();
});

// // Update router
// window.addEventListener("popstate", router);
// window.addEventListener("DOMContentLoaded", router);
