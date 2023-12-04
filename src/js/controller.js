import { API_URL } from "./config";

const form = document.querySelector(".form");

const showHouses = async function () {
  try {
    const res = await fetch(`${API_URL}houses`);
    const data = await res.json();

    if (!res.ok) throw new Error(`${data.message} (${res.status})`);
    // console.log(houses);
    let html = "";
    data.forEach(
      (house) =>
        (html += `
      <li class="list">${house.name}</li>`)
    );

    form.insertAdjacentHTML("afterend", html);

    // for (let i = 0; i < data.length; i++) {
    //   data[i].addEventListener("click", () => console.log(i));
    // }

  } catch (err) {
    console.log(err);
  }
};

showHouses();

// class housesView {}
