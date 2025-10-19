/** Factory Function:
 *  - Creates and returns objects
 */
export function Projects(name, description = 'New Project', dueDate = 'NA', priority = 'low', notes = '') { 
    return {
        projectName: name,
        projectDescription: description,
        projectDueDate: dueDate,
        projectPriority: priority,
        projectNotes: notes,
        toDos: [

        ],
        // Methods related to Projects can be added here
    }
}