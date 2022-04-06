import { handleFileUpload } from "./handlers.js";

const selectedFiles = document.getElementById('select-files');
const uploadList = document.querySelector('.uploadList');

const data = {};

selectedFiles.addEventListener('change', handleFileUpload);

// be able to remove files from the uploadList (and data object) to not be used later

export { data, uploadList };