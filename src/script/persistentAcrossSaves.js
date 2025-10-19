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
            // Create the parent div for each project
            const projectDiv = basicElementStructures.div(projectData.projectName, ['projectItem']);
            new basicElementStructures(projectDiv, '.projectListSide');

            // Create CRUD operation links for each project
            const crudOperationsDiv = basicElementStructures.div(undefined, undefined, 'crudOperations');
            new basicElementStructures(crudOperationsDiv, '.projectItem:last-child');
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