import '../styles/customizedStyles.css';
import { basicElementStructures } from './structure';
import { addProjectClickHandler } from './clickHandlersAndCRUDActions.js';

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