
const projects_section = document.querySelector('#projects'); 


/*
summary : one sentence
responsiblities: 2 - 3 bullet points '

*/

const projects = [
    {
        'title': 'Citrics.io', 
        'img': '../images/citrics/dashboard_monitor.png', 
        'github': 'https://github.com/umekow/city-data-comparison-fe', 
        'stack': 'HTML, CSS, JavaScript, React, Nodejs', 
        'link': 'v1.citrics.io', 
        'summary':'React web application that helps users make informed decisions about where they want to relocate to' , 
    }, 

    {
        'title': 'Bountiful ', 
        'img': '../images/bountiful/campaigns_monitor.png', 
        'github': 'https://github.com/bw-donor-mgmt/back-end/', 
        'stack': 'HTML, CSS, JavaScript, React', 
        'link': 'https://front-end-mlqg5zp0w.now.sh/', 
        'summary':'React application built to help users organize contact information for all donors to their organization\'s campaigns' , 
    }, 

    {
        'title': 'Empathy Builder', 
        'img': '../images/eb/landing_monitor.png', 
        'github': 'https://github.com/DV-Empathy-Builder/landing-page-merge-fix', 
        'stack': 'HTML, CSS, JavaScript', 
        'link': 'https://dv-empathy-builder.github.io/landing-page-merge-fix/', 
        'summary':'Helps web page visitors build empathy for victims of domestic violence by calculating the cost to relocate' , 
    }
]
function createNewProject(project){
    const project = document.createElement('div')

    return project
}


