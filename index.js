// links closed
const navToggle = document.querySelector(".nav-toggle");
const linksContainer = document.querySelector(".links-container");
const links = document.querySelector(".links");

navToggle.addEventListener("click", function () {
  linksContainer.classList.toggle("show-links");
});

//project tiles

const container = document.querySelector(".project-grid");

function makeTile(project) {
  const bigTile = document.createElement("div");
  const tile = document.createElement("div");
  const title = document.createElement("h3");
  const live = document.createElement("a");
  const git = document.createElement("a");
  const skill = document.createElement("p");

  bigTile.classList.add("big-tile");
  container.appendChild(bigTile);
  tile.classList.add("project-tile");
  bigTile.appendChild(tile);

  title.innerText = project.name;
  title.classList.add("p-name");
  tile.appendChild(title);

  git.innerText = "GitHub Repo";
  git.classList.add("link");
  git.setAttribute("href", project.git);
  git.setAttribute("target", "_blank");
  tile.appendChild(git);

  live.innerText = "Live Preview";
  live.classList.add("link");
  live.setAttribute("href", project.live);
  live.setAttribute("target", "_blank");
  tile.appendChild(live);

  skill.innerText = project.skills;
  skill.classList.add("skill-list");
  tile.appendChild(skill);
}

function Project(name, git, live, skills) {
  this.name = name;
  this.git = git;
  this.live = live;
  this.skills = skills;
}

const p1 = new Project(
  "Rock, Paper, Scissors",
  "https://github.com/DoodleDeBug/rps",
  "https://doodledebug.github.io/rps/",
  "JavaScript, HTML, CSS"
);

const p2 = new Project(
  "Etch-a-Sketch",
  "https://github.com/DoodleDeBug/etch-a-sketch",
  "https://doodledebug.github.io/etch-a-sketch/",
  "JavaScript, HTML, CSS"
);

const p3 = new Project(
  "Times Tables Game",
  "https://github.com/DoodleDeBug/times-tables",
  "https://doodledebug.github.io/times-tables/",
  "JavaScript, HTML, CSS"
);

const p4 = new Project(
  "Calculator",
  "https://github.com/DoodleDeBug/calculator",
  "https://doodledebug.github.io/calculator/",
  "JavaScript, HTML, CSS"
);

const p5 = new Project(
  "Library",
  "https://github.com/DoodleDeBug/TOP-library",
  "https://doodledebug.github.io/TOP-library/",
  "JavaScript, HTML, CSS"
);

let projects = [p5, p4, p3, p2, p1];

projects.forEach(makeTile);
