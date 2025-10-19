import '../styles/customizedStyles.css';
import { basicElementStructures } from './structure';
import { Projects } from './projectLogic.js';
import { saveData } from './persistentAcrossSaves.js';

export function customized() {
    // Creates the 2 column layout
    const twoSectionContentArea = basicElementStructures.div(undefined, ['twoSectionContentArea']);
    new basicElementStructures(twoSectionContentArea, 'body');
    const projectListSide = basicElementStructures.div('Project List', ['projectListSide']);
    const toDoListSide = basicElementStructures.div('To-Do List', ['toDoListSide']);
    new basicElementStructures(projectListSide, '.twoSectionContentArea'); new basicElementStructures(toDoListSide, '.twoSectionContentArea');

    // Create a form to add new Projects
    const newProjectsForm = basicElementStructures.form();
    new basicElementStructures(newProjectsForm, '.projectListSide');
    addProjectClickHandler();
}

function addProjectClickHandler() {
    const button = document.querySelector('#addProjectButton');
    button.addEventListener('click', () => {
        const newName = document.querySelector('#newProjectInput').value;
        const newProject = Projects(newName, undefined, undefined, undefined, undefined);

        saveData(newProject);
    });
}