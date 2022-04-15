import { root, data, uploadList } from "../index.js";

// Initialize Components
const filesList = FilesList();
const parseMenu = ParseMenu();
const variableMenu = VariableMenu();
const dataTable = DataTable();
const configPage = ConfigPage();

function update() {
    root.innerHTML = configPage.render();
}

export function ConfigPage() {

    const state = {};

    // If the user clicks a file on the list and it hasn't been parsed, then prompt to display the parse menu

    const render = () => `<div class="wrapper">
                                <div class="fileList">${filesList.render()}</div>
                                <div class="variableMenu">${variableMenu.render()}</div>
                            </div>
                            <div class="wrapper">
                                <div class="data">${dataTable.render()}</div>
                            </div>`;

    return {
        state,
        render
    };
}

export function FilesList() {
    const state = {
        fileSelected: ''
    };

    let listItems = '';

    function updateFileSelected(li) {
        const ul = li.closest('ul');
        const allItems = ul.querySelectorAll('li');

        // remove selected class from all li
        for (let item of allItems) {
            item.classList.remove('selected');
        }

        // add selected class to the clicked li
        li.classList.add('selected');

        // update state
        filesList.state.fileSelected = li.innerText;
        console.log(filesList.state);
    }

    function updateList() {
        if (data !== undefined && data.length !== 0) {
            for (let key of Object.keys(data)) {
                listItems += `<li>${key}</li>`;
            }
        } else {
            listItems = `<li>No files found.</li>`;
        }
        return listItems;
    }

    // when a new file is clicked, ConfigMenu, VariableMenu, and DataTable need to be updated
    // and the clicked file highlighted in file list

    const render = () => `<ul class="fileList">
                            ${updateList()}
                          </ul>`;

    return {
        state,
        render,
        updateFileSelected
    }
}

export function ParseMenu() {

    const state = {
        options: {}
    };

    const delimiterMenu = `<div>
                                <label for="">Select Delimiter:</label>
                                <select name="" id="">
                                    <option value="comma">Comma</option>
                                    <option value="tab">Tab</option>
                                    <option value="colon">Colon</option>
                                    <option value="pipe">Pipe</option>
                                    <option value="space">Space</option>
                                </select>
                            </div>`;

    function updatePreview() {
        const preview = document.querySelector('.parsePreview');
        const previewLines = parseInt(document.getElementById('previewLines').value);
        preview.innerHTML = dataTable.render(filesList.state.fileSelected, previewLines);
    }

    const render = () => `
        <div class="parseMenu">
            <h2>Parse Files</h2>
            <div>
                ${filesList.render()}
            </div>
            <div class="parseOptions">
                <form id="parseForm">
                    <div>
                        <p>
                            <label for="simpleParse">Simple</label>
                            <input type="radio" name="parseType" id="simpleParse">
                            Select this option if your file has consistent delimiters and a single line corresponding to the
                            header, or column descriptions, of the data.  For space separated data, or files with headers on more
                            than one line, you should select custom instead
                        </p>
                        <p>
                            <label for="customParse">Custom</label>
                            <input type="radio" name="parseType" id="customParse">
                            Select this option if your file has header information on more than one line and/or you are concerned
                            about the consistency of your file being clearly delimited.  You will be able to select which lines
                            of the file are header information and which are data.
                        </p>
                    </div>
                    <div>
                        <div>
                            <label for="previewLines">Preview Lines:</label>
                            <input type="number" name="previewLines" id="previewLines" value="50">
                        </div>
                    </div>
                    <button type="button" class="btn btn-wide">Go</button>
                </form>
            </div>
            <div class="parsePreview"></div>
        </div>`;
    return {
        state,
        render,
        updatePreview
    }
}

function ConfigMenu(fileSelected) {

    const state = {
        showLines: 50,
        delimiter: 'comma',
        cellsSelected: [],

    };

    return `<form id="config-form">
                <div>
                    <div>
                        <label for="show-lines">Show Lines:</label>
                        <input type="number" name="show-lines" id="show-lines" value="50">
                    </div>
                    <div>
                        <label for="">Select Delimiter:</label>
                        <select name="" id="">
                            <option value="comma">Comma</option>
                            <option value="tab">Tab</option>
                            <option value="colon">Colon</option>
                            <option value="pipe">Pipe</option>
                            <option value="space">Space</option>
                        </select>
                    </div>
                </div>
                <button type="button" class="btn btn-wide">Update</button>
            </form>`;
}

function VariableMenu(fileSelected) {

    const state = {
        vars: [],
    };

    function updateVarList() {
        const varList = document.getElementById('var-list');

        console.log(varList);
        const result = ``;
        if ("vars" in data[fileSelected]) {
            return `<li class="diminish">No variables have been declared</li>`;
        } else {
            for (let key in Object.keys(data[fileSelected].vars)) {
                result += `<li>${key}</li>`;
            }
        }

        return result;
    }

    // ultimately, the data passed to the Plot view will come from the variables saved



    const render = () => `<form>
                            <label for="var-select">Select Variable</label>
                            <select name="var-select" id="var-select">
                                <optgroup label="Defaults">
                                    <option value="col-names">Column Names</option>
                                    <option value="header">Header</option>
                                    <option value="data">Data</option>
                                    <option value="x">x</option>
                                    <option value="y">y</option>
                                </optgroup>
                                <optgroup label="Custom"></optgroup>
                            </select>
                        </form>
                        <div>
                            <form id="var-form">
                                <input type="text" name="varName" id="varName">
                                <button class="btn" type="submit" value="submit">Save</button>
                            </form>
                            <ul id="var-list">

                            </ul>
                        </div>`;

    return {
        state,
        render
    };
}

function DataTable() {

    const state = {
        cellsSelected: [],
    };

    let result = ``;

    // data selected here (from click events on columns (usually)) needs to be stored
    // as variables and shown within the VariableMenu.  The data needs to be either referencable
    // from something saved, such as line/col numbers, or move the data into an object/array

    // <table>
    //     <thead></thead>
    //     <tbody>
    //         <tr>
    //             <td></td>
    //             <td></td>
    //             <td></td>
    //         </tr>
    //     </tbody>
    // </table>

    const render = (fileSelected, previewLines) => {
        console.log(fileSelected);
        const rawData = data[fileSelected].data;

        let result = `<ul>`;
        for (let i = 0; i < previewLines; i++) {
            result += `<li>${rawData[i]}</li>`;
        }
        result += `</ul>`;

        return result;
    };

    return {
        state,
        render
    };
}


export {filesList, parseMenu, variableMenu, dataTable, configPage};