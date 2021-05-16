import get from "./get.js";
import getUser from "./getUser.js";
import displayUser from "./displayUser.js";

const btn = get(".btn");
const loading = get(".page-loading");

const showUser = async () => {
  // get user from api
  const person = await getUser();
  loading.style.display = "none";

  // display user
  displayUser(person);
};

window.addEventListener("DOMContentLoaded", showUser);
btn.addEventListener("click", showUser);
