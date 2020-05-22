
const projects_section = document.querySelector('.projects-container'); 


/*
summary : one sentence
responsiblities: 2 - 3 bullet points '

*/

const project_list = [
    {
        'title': 'Citrics.io', 
        'img': '../images/citrics/dashboard_monitor.png', 
        'github': 'https://github.com/umekow/city-data-comparison-fe', 
        'stack': 'HTML, CSS, JavaScript, React, Nodejs', 
        'link': 'https://v1.citrics.io', 
        'summary':'React web application that helps users make informed decisions about where they want to relocate to' , 
        'bullets': ['Solely responsible for building and designing the signup and login pages', 'Collaborated with 7 team members on a cross functional team to complete project in 5-week deadline'], 
    }, 

    {
        'title': 'Bountiful ', 
        'img': '../images/bountiful/campaigns_monitor.png', 
        'github': 'https://github.com/bw-donor-mgmt/back-end/', 
        'stack': 'HTML, CSS, JavaScript, React', 
        'link': 'https://front-end-mlqg5zp0w.now.sh/', 
        'summary':'React application built to help users organize contact information for all donors to their organization\'s campaigns' , 
        'bullets': ['solely responsible for developing the "about us" page, navigation, and header portion of the landing page', 'Held the role of senior front-end developer and collaborated with teams members to build front end'], 
    }, 

    {
        'title': 'Empathy Builder', 
        'img': '../images/eb/landing_monitor.png', 
        'github': 'https://github.com/DV-Empathy-Builder/landing-page-merge-fix', 
        'stack': 'HTML, CSS, JavaScript', 
        'link': 'https://dv-empathy-builder.github.io/landing-page-merge-fix/', 
        'summary':'Helps web page visitors build empathy for victims of domestic violence by calculating the cost to relocate' , 
        'bullets': ['Solely responsible for constructing the navigation and about us page', 'Collaborated with team members to build landing pages for project'],
    }
]


function createNewProject(project){
    const project_container = document.createElement('div'); 

    const title_link = document.createElement('a');
    title_link.href = project.link;  
    const title = document.createElement('h5'); 
    title.textContent = project.title; 
    title_link.appendChild(title); 

    project_container.appendChild(title_link); 

    // const img = document.createElement('img'); 
    // img.src = project.img
    // img.alt = project.title

    // const list = document.createElement('ul'); 
    // projects.bullets.forEach(project =>{ 
    //     //each project will only have 2 bullets
    //     const bullet1 = document.createElement('li'); 
    //     const bullet2 = document.createElement('li'); 
        
    //     // bullet1.textContent(project.bullets[1])
    //     // bullet2.textContent(project.bullets[2])

    // })




    return project_container
}


project_list.forEach(project => projects_section.appendChild(createNewProject(project)))