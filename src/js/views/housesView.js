import { API_URL } from "../config";

  export default async () =>{
  try {
    const res = await fetch(`${API_URL}houses`);
    const data = await res.json();

    if (!res.ok) throw new Error(`${data.message} (${res.status})`);
    let html = "";
    data.forEach(
      (house) =>
        (html += `
        <li class="house__name"><a href="#">${house.name}</a></li>`)
    );
    document.querySelector(".data").innerHTML= html;
  } catch (err) {
    console.error(err);
  }
}