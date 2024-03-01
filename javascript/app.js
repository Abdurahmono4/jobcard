import jobs from "./data.js";

// const template = document.getElementById(".job--list__template");
// console.log(template);
const listEl = document.querySelector("#list");
jobs.forEach((job) => {
  const newImgEl = document.createElement("img");

  newImgEl.src = job.logo;
  newImgEl.width = "88";
  newImgEl.height = "88";

  newLiEl.appendChild(newImgEl);

  listEl.appendChild(newLiEl);
});
