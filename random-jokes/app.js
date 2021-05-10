const url = "https://api.chucknorris.io/jokes/random";
const btn = document.querySelector(".btn");
const img = document.getElementById("img");
const joke = document.querySelector(".joke");

function displayData(response) {
  img.classList.add("shake");
  const { value } = response;
  joke.textContent = value;

  setTimeout(() => {
    img.classList.remove("shake");
  }, 1000);
}

btn.addEventListener("click", async () => {
  try {
    const data = await fetch(url);
    const response = await data.json();
    displayData(response);
  } catch (error) {
    console.log(error);
  }
});

// using fetch()
/*
function displayData(response) {
  img.classList.add("shake");
  const { value } = response;
  joke.textContent = value;

  setTimeout(() => {
    img.classList.remove("shake");
  }, 1000);
}

btn.addEventListener("click", () => {
  fetch(url)
    .then((data) => data.json())
    .then((response) => displayData(response))
    .catch((err) => console.log(err));
});
*/

// using xhr
/*
btn.addEventListener("click", () => {
  getData(url);
});

function getData(url) {
  const xhr = new XMLHttpRequest();
  xhr.open("GET", url);
  xhr.onreadystatechange = () => {
    if (xhr.readyState !== 4) return;

    if (xhr.status === 200) {
      img.classList.add("shake");
      const responseText = JSON.parse(xhr.responseText);
      joke.textContent = responseText.value;
      setTimeout(() => {
        img.classList.remove("shake");
      }, 1000);
    }
  };
  xhr.send();
}
*/
