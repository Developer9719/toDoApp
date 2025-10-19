// This is where we use localStorage to keep data persistent across saves and reloads

import { basicElementStructures } from "./structure";

function getStoredData() {
    //localStorage.clear(); // --- FOR TESTING ---
    const existingProjects = localStorage.getItem('projects');
    if (existingProjects) {
        const projectsArray = JSON.parse(existingProjects);
        if(Array.isArray(projectsArray)) {
            return projectsArray;
        } else {
            return [];
        }
    } else {
        return [];
    }
}

export function loadData() {
    const currentProjects = getStoredData();

    if(currentProjects.length > 0) {
        currentProjects.forEach(projectData => {
            const projectDiv = basicElementStructures.div(undefined, ['projectItem']);
            new basicElementStructures(projectDiv, '.projectListSide');

            let className = projectData.projectName.replace(/\s+/g, '-').toLowerCase();
            const projectName = basicElementStructures.div(projectData.projectName, [className, 'item']);
            new basicElementStructures(projectName, '.projectItem');

            const crud = basicElementStructures.div(undefined, ['crudOperations'], 'crudOperations');
            new basicElementStructures(crud, '.projectItem');
        });
    } else {
        console.log('No projects found in storage.');
    }
}

export function saveData(data) {
    const currentProjects = getStoredData();
    currentProjects.push(data);
    localStorage.setItem('projects', JSON.stringify(currentProjects));
}