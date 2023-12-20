import * as model from "./model";
import housesView from "./views/housesView";
import membersView from "./views/membersView";
import personView from "./views/personView";
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

const controlPersonDetails = function () {
  try {
    const persons = model.state.persons;
    const selectedPerson = persons.find(
      (person) => person.slug === location.pathname.replace("/persons/", "")
    );
    personView.renderPerson(selectedPerson, persons);
  } catch (err) {
    personView.renderError();
  }
};

const controlQuotes = async function () {
  try {
    // Loading quotes
    await model.loadQuotes();

    // Rendering quotes
    quotesView.render(model.state.quotes);
    quotesView.addHandlerRender(controlQuotes);
  } catch (err) {
    quotesView.renderError();
  }
};

const controlSearchResults = function () {
  try {
    // Get search query
    const query = searchView.getQuery().toUpperCase();

    if (location.pathname === "/") {
      if (!query) housesView.render(model.state.houses);

      // Load search result
      const houses = model.state.houses.filter(
        (house) => house.name.toUpperCase().indexOf(query) > -1
      );

      // Render results
      housesView.render(houses);
    } else if (location.pathname === "/persons") {
      if (!query) personsView.render(model.state.persons);

      // Load search result
      const persons = model.state.persons.filter(
        (person) => person.name.toUpperCase().indexOf(query) > -1
      );

      // Render results
      personsView.render(persons);
    }
  } catch (err) {
    housesView.renderError();
  }
};

class Router {
  _routes = {
    "/": { render: controlHouses },
    "/persons": { render: controlPersons },
    "/quotes": { render: controlQuotes },
  };

  router_init() {
    let view = this._routes[location.pathname];

    if (view) {
      view.render();
    } else if (location.pathname.includes("/houses/")) {
      controlMembers();
    } else if (location.pathname.includes("/persons/")) {
      controlPersonDetails();
    } else {
      history.replaceState("", "", "/");
      this.router_init();
    }
  }

  setActiveClass(el) {
    if (el.matches("[data-route-link]")) {
      const oldActive = document.querySelector(".active");
      oldActive.classList.remove("active");
      el.classList.add("active");
    }
  }

  navigate() {
    // Handle navigation
    window.addEventListener("click", (e) => {
      if (
        e.target.matches("[data-link]") ||
        e.target.matches("[data-route-link]")
      ) {
        e.preventDefault();
        history.pushState("", "", e.target.href);
        this.router_init();
        this.setActiveClass(e.target);
      }
    });
    // Show houses at first
    this.router_init();

    // Fire router_init() once the back button is clicked
    window.onpopstate = () => setTimeout(this.router_init(), 0);
  }
}

const routing = new Router();

routing.navigate();
document.querySelector(".search").addEventListener("submit", (e) => {
  e.preventDefault();
  controlSearchResults();
});
