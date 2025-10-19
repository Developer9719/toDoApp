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
            const projectElement = basicElementStructures.div(projectData.projectName, ['projectItem']);
            new basicElementStructures(projectElement, '.projectListSide');
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