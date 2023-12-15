import { API_URL } from "./config";
import { AJAX } from "./helpers";

export const state = {
  houses: [],
  persons: [],
  quotes: [],
  // search: {
  //   query: "",
  //   result: [],
  // },
};

export const loadHouses = async function () {
  try {
    const data = await AJAX(`${API_URL}houses`);
    state.houses = data;
  } catch (err) {
    throw err;
  }
};

export const loadPersons = async function () {
  try {
    const data = await AJAX(`${API_URL}characters`);
    state.persons = data;
  } catch (err) {
    throw err;
  }
};

export const loadQuotes = async function () {
  try {
    const data = await AJAX(`${API_URL}random/5`);
    state.quotes = data;
  } catch (err) {
    throw err;
  }
};
