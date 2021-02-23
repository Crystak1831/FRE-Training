const inputField = document.querySelector("#input");
const submit = document.querySelector("#submit");

const getAPI = async () => {
  const wordQuery = inputField.value;
  const endpoint = `https://itunes.apple.com/search?term=${wordQuery}&media=music&entity=album&attribute=artistTerm&limit=500`;

  try {
    const response = await fetch(endpoint);
    if (response.ok) {
      let jsonResponse = await response.json();
      console.log(jsonResponse);
      show(jsonResponse);
    }
  } catch (error) {
    console.log(error);
  }
};

const onClickFn = event => {
  event.preventDefault();
  getAPI();
};

submit.addEventListener("click", onClickFn);

function show(data) {
  let card = "";
  let count = 0;
  let message = "";
  for (let r of data.results) {
    card += `<div class="card">
    <img src="${r.artworkUrl100}" alt="${r.collectionName}">
    <div>${r.collectionName}</div>
  </div>`;
    count++;
  }

  document.getElementById("content").innerHTML = card;
 
}