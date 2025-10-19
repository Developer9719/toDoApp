import '../styles/customizedStyles.css';
import { basicElementStructures } from './structure';

export function customized() {
    const twoSectionContentArea = basicElementStructures.div(undefined, ['twoSectionContentArea']);
    new basicElementStructures(twoSectionContentArea, 'body');
    const projectListSide = basicElementStructures.div('Project List', ['projectListSide']);
    const toDoListSide = basicElementStructures.div('To-Do List', ['toDoListSide']);
    new basicElementStructures(projectListSide, '.twoSectionContentArea'); new basicElementStructures(toDoListSide, '.twoSectionContentArea');

}