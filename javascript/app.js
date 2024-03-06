import jobs from "./data.js";

const jobsList = document.getElementById("job--list");
const jobsListItem = document.getElementsByClassName("job--list__item");
const cloneNode = document.getElementById("job--list__template");
// jobs.forEach((job) => {
//   console.log(job);
//   const clone = cloneNode.cloneNode(true);
//   const cloneNode2 = clone.appendChild(cloneNode);

jobs.forEach((job) => {
  let temp = document.getElementsByTagName("template")[0];
  let clone = temp.content.cloneNode(true);
  console.log(clone);
  clone.querySelector(".job--list__image").src = job.logo;
  clone.querySelector(".job--list__company").textContent = job.company;

  jobsList.appendChild(clone);
  document.body.appendChild(clone);
});
{
  /* <div class="job--list__filter">
                  <span class="job--list__filter__item">Frontend</span>
                  <span class="job--list__filter__item">Senior</span>
                  <span class="job--list__filter__item">HTML</span>
                  <span class="job--list__filter__item">CSS</span>
                  <span class="job--list__filter__item">JavaScript</span>
                </div> */
}

// jobs.forEach((job)=>{
//   const filter = document.getElementsByClassName("job--list__filter");
//   console.log(d)
// }
