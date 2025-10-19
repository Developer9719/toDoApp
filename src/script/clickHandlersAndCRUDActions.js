import { Projects } from './projectLogic.js';
import { saveData } from './persistentAcrossSaves.js';

export function addProjectClickHandler() {
    const button = document.querySelector('#addProjectButton');
    button.addEventListener('click', () => {
        const newName = document.querySelector('#newProjectInput').value;
        const newProject = Projects(newName, undefined, undefined, undefined, undefined);

        saveData(newProject);
    });
}