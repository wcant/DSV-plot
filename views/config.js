import { root, data, uploadList } from "../index.js";

function update() {
    root.innerHTML = ConfigPage();
}

export function ConfigPage() {

    return `<div class="wrapper">
                <div class="fileList">${FilesList()}</div>
                <div class="variableMenu">${VariableMenu()}</div>
            </div>
            <div class="wrapper">
                <div class="configMenu">${ConfigMenu()}</div>
                <div class="data">${DataTable()}</div>
            </div>`;
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

    return `<ul>
                ${listItems}
            </ul>`;
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

    return `<form>
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
}

function DataTable(fileSelected) {

    const state = {};

    let result = ``;

    // data selected here (from click events on columns (usually)) needs to be stored
    // as variables and shown within the VariableMenu.  The data needs to be either referencable
    // from something saved, such as line/col numbers, or move the data into an object/array


    // if file hasn't been parsed, show inital parse menu
    result = `  <h2>File Parsing Options</h2>
                <form>
                    <label for="standard">Standard</label>
                    <input type="radio" name="standard" id="standard">
                    <label for="custom">Custom</label>
                    <input type="radio" name="custom" id="custom">
                    <label for="delimeter">Select Delimeter:</label>
                    <select name="delimeter" id="delimeter">
                            <option value="comma">Comma</option>
                            <option value="tab">Tab</option>
                            <option value="colon">Colon</option>
                            <option value="pipe">Pipe</option>
                            <option value="space">Space</option>
                    </select>
                    <button type="submit">Parse File</button>
                </form>`;

    return ``;
}

