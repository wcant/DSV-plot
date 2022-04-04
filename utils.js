import { state, dataTable, fileList, showLines } from './scripts.js';
import { handleFileListClick } from './handlers.js';

export function readFile(file) {
    return new Promise((resolve, reject) => {
        let content = '';
        const reader = new FileReader();
        // once reading is finished, return promise
        reader.onloadend = function(e){
            content = e.target.result;
            const result = content.split(/\r\n|\r|\n/)
            resolve(result);
        };
        // handle error
        reader.onerror = function(e) {
            reject(e);
        };
        // start reading the file
        reader.readAsText(file);
    });
}

export function appendToFileList(name) {
    const li = document.createElement('li');
    li.innerText = name;
    li.addEventListener('click', handleFileListClick);
    fileList.append(li);
}

export function updateDataTable(fileName, length) {
    dataTable.innerHTML = `<tbody></tbody>`;       // posssibly the cause of addRow() creating tbodies for every line - the original tbody is getting deleted
    const data = state.files[fileName].data;
    const previewLength = length || 50;
    for (let i=0; i<previewLength; i++) {
        addRow(data[i], i);
    }
}

export function addRow(str, lineNum) {
    const row = `
            <tr>
                <td>${lineNum}</td>
                <td>${str}</td>
            </tr>
        `;
    const tBody = dataTable.querySelector('tbody');
    tBody.insertAdjacentHTML('beforeend', row);
}