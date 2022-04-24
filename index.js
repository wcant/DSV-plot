import { handleFileUpload, handleMainClick } from "./handlers.js";

const root = document.querySelector('main');

const selectedFiles = document.getElementById('file-upload');
const uploadList = document.querySelector('.uploadList');

const data = {
    uploads: {},
    parsed: {},
    vars: {},
    plots: {}
};

root.addEventListener('click', handleMainClick);

selectedFiles.addEventListener('change', handleFileUpload);

// be able to remove files from the uploadList (and data object) to not be used later

export { root, data, uploadList };


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




