

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

//select div element that will contain projects 
const projects_section = document.querySelector('.projects-container'); 

const project_list = [
    {
        'title': 'Citrics.io', 
        'img': '../images/projects/citrics/dashboard_monitor.png', 
        'github': 'https://github.com/umekow/city-data-comparison-fe', 
        'stack': [ 'Html', 'CSS', 'SASS', 'JavaScript', 'React', 'Node.js'], 
        'link': 'https://v1.citrics.io', 
        'summary':'React web application that helps users make informed decisions about where they want to relocate to' , 
        'bullets': ['Solely responsible for building and designing the signup and login pages', 'Collaborated with 7 team members on a cross functional team to complete project in 5-week deadline'], 
    }, 

    {
        'title': 'Bountiful ', 
        'img': '../images/projects/bountiful/campaigns_monitor.png', 
        'github': 'https://github.com/bw-donor-mgmt/back-end/', 
        'stack': [ 'Html', 'CSS', 'JavaScript', 'React', 'Node.js'], 
        'link': 'https://front-end-mlqg5zp0w.now.sh/', 
        'summary':'React application built to help users organize contact information for all donors to their organization\'s campaigns' , 
        'bullets': ['Solely responsible for developing the "about us" page, navigation, and header portion of the landing page', 'Held the role of senior front-end developer and collaborated with teams members to build front end'], 
    }, 

    {
        'title': 'Empathy Builder', 
        'img': '../images/projects/eb/landing_monitor.png', 
        'github': 'https://github.com/DV-Empathy-Builder/landing-page-merge-fix', 
        'stack': [ 'Html', 'CSS', 'JavaScript', 'Node.js'], 
        'link': 'https://dv-empathy-builder.github.io/landing-page-merge-fix/', 
        'summary':'Helps web page visitors build empathy for victims of domestic violence by calculating the cost to relocate' , 
        'bullets': ['Solely responsible for constructing the navigation and about us page', 'Collaborated with team members to build landing pages for project'],
    }
]


function createNewProject(project){
    //create div that will act as a container for each project 
    const project_container = document.createElement('div'); 
    project_container.classList.add('project')

    // //aos attributes 
    // const aosData = document.createAttribute('data-aos'); 
    // const aosCenter = document.createAttribute('data-aos-anchor-placement'); 
    // const aosDuration = document.createAttribute('data-aos-duration'); 
  

    // //set values of aos attributes 
    // aosData.value = "fade-up"; 
    // aosCenter.value = 'center-center'; 
    // aosDuration.value = '200'; 
    

    // //add attribute to project_container
    // project_container.setAttributeNode(aosData); 
    // project_container.setAttributeNode(aosCenter); 
    // project_container.setAttributeNode(aosDuration); 
    


    const title_container = document.createElement('div'); 
    title_container.classList.add('title-container')
    //creates a title with link 
    const title_link = document.createElement('a');
    title_link.href = project.link;  
    const title = document.createElement('h5'); 
    title.textContent = project.title; 
    title_link.appendChild(title); 
    title_container.appendChild(title_link); 

    title_container.insertAdjacentHTML('beforeend', `<a href=${project.github}><i class="fab fa-github-square"></i></a>`)

    project_container.appendChild(title_container)

    //creates a new image for each project 
    const img = document.createElement('img'); 
    img.classList.add('project-photo'); 
    img.src = project.img; 
    img.alt = project.title; 
    project_container.appendChild(img); 

    //tech stack
    const stack_container = document.createElement('div'); 
    stack_container.classList.add('stack'); 
    project_container.appendChild(stack_container); 
    //creates an icon for every skill
    project.stack.forEach(skill => stack_container.insertAdjacentHTML('beforeend', `<i  class="${skills_list[skill]}"></i>`)); 

    //project summary 
    const summary = document.createElement('p'); 
    summary.classList.add('summary')
    summary.textContent = project.summary; 
    project_container.appendChild(summary); 

    //bullet points 
    const bullet_points = document.createElement('ul'); 
    project.bullets.forEach(bullet =>{ 
        const point = document.createElement('li'); 
        point.textContent = bullet;  
        bullet_points.appendChild(point); 
    }); 
    project_container.appendChild(bullet_points); 

    return project_container
}


project_list.forEach(project => projects_section.appendChild(createNewProject(project))); 