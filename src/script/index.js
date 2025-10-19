import  { customizedHTML } from './structure.js';
import { loadData } from './persistentAcrossSaves.js';

export const siteTitle = 'Untitled To Do App';
export let pageTitle = "Home";

// Change the title element of the site
document.querySelector('title').textContent = siteTitle + ' | ' + pageTitle;

// Create the basic and customized page layout
customizedHTML();
loadData();