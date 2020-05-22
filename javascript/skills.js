const skills_div = document.querySelector('#skills'); 

const skills_list = ['Html', 'CSS', 'JavaScript', 'Python', 'Java', 'React', 'Node.js', 'Express', 'REST', 'Redux', 'LESS', 'SASS', 'Knex', 'SQL', 'Ant.Design', 'Android', 'Postgres' ]

function newSkill(skill){
    const skill_container = document.createElement('div'); 
    skill_container.classList.add('skill'); 
    const skill_text = document.createElement('p'); 
    skill_text.textContent = skill; 
    skill_container.appendChild(skill_text); 

    return skill_container
}

skills_list.forEach(skill => skills_div.appendChild(newSkill(skill)))