const skills_div = document.querySelector('.skills-container'); 

const skills_list = [  
    {'skill':'Html', 'class':'fab fa-html5'}, 
    {'skill':'CSS', 'class':'fab fa-css3-alt'}, 
    {'skill':'JavaScript', 'class':'fab fa-js-square'}, 
    {'skill':'Python', 'class':'fab fa-python'}, 
    {'skill':'Java', 'class':'fab fa-java'}, 
    {'skill':'React', 'class':'fab fa-java'}, 
    {'skill':'Node.js', 'class':'fab b fa-javanode-js'}, 
    //{'skill':'Express', 'class':'fab'}, 
    //{'skill':'REST', 'class':'fab'}, 
    //{'skill':'Redux', 'class':'fab'}, 
    //{'skill':'LESS', 'class':'fab'}, 
    {'skill':'SASS', 'class':'fab fa-sass'}, 
    {'skill':'Knex', 'class':'fab fa-database'}, 
    {'skill':'SQL', 'class':'fab fa-database'}, 
    //{'skill':'Ant.Design', 'class':'fab'}, 
    {'skill':'Android', 'class':'fab fa-android'}, 
    {'skill':'Postgres', 'class':'fab fa-database'}, 
]

function newSkill(skill){
    const skill_container = document.createElement('div'); 
    skill_container.classList.add('skill'); 
    const icon = document.createElement('i')

    const skill_text = document.createElement('p'); 
    skill_text.textContent = skill; 
    skill_container.appendChild(skill_text); 

    return skill_container
}


skills_list.forEach(skill => skills_div.appendChild(newSkill(skill)))