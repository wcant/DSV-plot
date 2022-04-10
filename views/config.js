import { root, data, uploadList } from "../index.js";

function update() {
    root.innerHTML = ConfigPage();
}

// &#9989;	green checkmark

export function ConfigPage() {

    const state = {}

    // If the user clicks a file on the list and it hasn't been parsed, then prompt to display the parse menu

    const FilesListRender = FilesList().render();
    const VariableMenuRender = VariableMenu().render();
    const DataTableRender = DataTable().render();
    const render = () => `<div class="wrapper">
                                <div class="fileList">${FilesListRender}</div>
                                <div class="variableMenu">${VariableMenuRender}</div>
                            </div>
                            <div class="wrapper">
                                <div class="data">${DataTableRender}</div>
                            </div>`;

    return {
        state,
        render
    };
}

function FilesList() {
    const state = {
        fileSelected: ''
    };

    let listItems = '';

    if (data !== undefined && data.length !== 0) {
        for (let key of Object.keys(data)) {
            console.log(key);
            listItems += `<li>${key}</li>`;
        }
    } else {
        listItems = `<li>No files found.</li>`;
    }

    // when a new file is clicked, ConfigMenu, VariableMenu, and DataTable need to be updated

    const render = () => `<ul>
                            ${listItems}
                          </ul>`;

    return {
        state,
        render
    }
}

export function ParseMenu() {

    const state = {};

    const render = () => `
        <div class="parseMenu">
            <h2>Parse Files</h2>
            <div>
                ${FilesList().render()}
            </div>
            <div class="parseOptions">
                <div>
                    <p>
                        <label for="simpleParse">Simple</label>
                        <input type="radio" name="simpleParse" id="simpleParse">
                        Select this option if your file has consistent delimiters and a single line corresponding to the
                        header, or column descriptions, of the data.  For space separated data, or files with headers on more
                        than one line, you should select custom instead
                    </p>
                    <p>
                        <label for="customParse">Custom</label>
                        <input type="radio" name="customParse" id="customParse">
                        Select this option if your file has header information on more than one line and/or you are concerned
                        about the consistency of your file being clearly delimited.  You will be able to select which lines
                        of the file are header information and which are data.
                    </p>
                </div>
                <form id="parseForm">
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
                </form>
            </div>
            <div class="parsePreview">
                ${DataTable().render()}
            </div>
        </div>`;
    return {
        state,
        render
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

    const state = {};

    // function updateVarList() {
    //     const varList = document.getElementById('var-list');

    //     console.log(varList);
    //     const result = ``;
    //     if ("vars" in data[fileSelected]) {
    //         return `<li class="diminish">No variables have been declared</li>`;
    //     } else {
    //         for (let key in Object.keys(data[fileSelected].vars)) {
    //             result += `<li>${key}</li>`;
    //         }
    //     }

    //     return result;
    // }

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

function DataTable(fileSelected) {

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

    const render = () => {
        return ``;
    };

    return {
        state,
        render
    };
}

