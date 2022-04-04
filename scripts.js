import { handleTabClick } from "./handlers.js";

const tabs = document.querySelector('.tabs');
const tabButtons = tabs.querySelectorAll('[role="tab"]');
const tabPanels = tabs.querySelectorAll('[role="tabpanel"]');

tabButtons.forEach(button => button.addEventListener('click', handleTabClick));

tabPanels


export { tabs, tabButtons, tabPanels }

// import { handleFileUpload, handleConfigUpdate, handleSelectLine, handleVarSave } from "./handlers.js";

// const state = {
//     showLines: 50,
//     delimeter: 'comma',
//     fileSelected: '',
//     files: {},
// };

// // file selection
// const uploadedFiles = document.getElementById('file-upload');

// // configuration
// const configForm = document.getElementById('configure');
// const dataTable = document.getElementById('data-table');
// const fileList = document.getElementById('file-list');
// const showLines = document.getElementById('show-lines');
// const varList = document.getElementById('var-list');
// const varForm = document.getElementById('var-form');

// uploadedFiles.addEventListener('change', handleFileUpload);

// configForm.addEventListener('submit', handleConfigUpdate);

// dataTable.addEventListener('click', handleSelectLine);

// varForm.addEventListener('submit', handleVarSave);

// export { state, dataTable, fileList, showLines, varList, varForm };




