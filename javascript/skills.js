const skills_div = document.querySelector(".skills-container");

const skills_list = [
  { skill: "Html", classes: "fab fa-html5" },
  { skill: "CSS", classes: "fab fa-css3-alt" },
  { skill: "JavaScript", classes: "fab fa-js-square" },
  { skill: "Python", classes: "fab fa-python" },
  { skill: "Java", classes: "fab fa-java" },
  { skill: "React", classes: "fab fa-react" },
  { skill: "Node.js", classes: "fab fa-node-js" },
  //{'skill':'Express', 'classes':'fab'},
  //{'skill':'REST', 'classes':'fab'},
  //{'skill':'Redux', 'classes':'fab'},
  //{'skill':'LESS', 'classes':'fab'},
  { skill: "SASS", classes: "fab fa-sass" },
  { skill: "Knex", classes: "fas fa-database" },
  { skill: "SQL", classes: "fas fa-database" },
  //{'skill':'Ant.Design', 'classes':'fab'},
  { skill: "Android", classes: "fab fa-android" },
  { skill: "Postgres", classes: "fas fa-database" },
];

function createSkill(skill) {
  // skill container
  const skill_container = document.createElement("div");
  skill_container.classList.add("skill");

  // p element
  const skill_text = document.createElement("p");
  skill_text.textContent = skill.skill;
  skill_container.appendChild(skill_text);

  skill_text.insertAdjacentHTML(
    "beforebegin",
    `<i class="${skill.classes}"></i>`
  );

  return skill_container;
}

skills_list.forEach((skill) => skills_div.appendChild(createSkill(skill)));
