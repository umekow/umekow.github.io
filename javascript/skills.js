const skills_div = document.querySelector('.skills-container'); 

const skills_list = {
    'Html':'fab fa-html5', 
    'CSS':'fab fa-css3-alt', 
    'JavaScript':'fab fa-js-square', 
    'Python':'fab fa-python', 
    'Java':'fab fa-java', 
    'React':'fab fa-react', 
    'Node.js':'fab fa-node-js', 
    //'Express':'fab', 
    //'REST':'fab', 
    //'Redux':'fab', 
    //'LESS':'fab', 
    'SASS':'fab fa-sass', 
    'Knex':'fas fa-database', 
    'SQL':'fas fa-database', 
    //'Ant.Design':'fab', 
    'Android':'fab fa-android', 
    'Postgres':'fas fa-database', 
}

function createSkill(skill){
    //skill container 
    const skill_container = document.createElement('div'); 
    skill_container.classList.add('skill'); 

    
    

    //p element 
    const skill_text = document.createElement('p'); 
    skill_text.textContent = skill;  
    skill_container.appendChild(skill_text); 

    skill_text.insertAdjacentHTML('beforebegin', `<i class="${skills_list[skill]}"></i>`);
  

    return skill_container
}

for (const skill in skills_list){
    skills_div.appendChild(createSkill(`${skill}`)); 
}




export {skills_list}; 