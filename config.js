import {data} from './index.js'
const config = document.querySelector('.config');

function FileList(files) {
    const state = {
        fileSelected: ''
    }

    const listItems = '';

    if (state.files.length > 1) {
        for (let key in object.keys(state.files)) {
            listItems += `<li>${key}</li>`;
        }
    }

    return `<ul>
                ${listItems}
            </ul>`;
}

function ConfigMenu() {

    const state = {
        showLines: 50,
        delimiter: 'comma',
        cellsSelected: [],

    }

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

function VariableMenu() {

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
                    <li class="diminish">No variables have been declared</li>
                </ul>
            </div>`;
}

function DataTable() {

    let result = ``;
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

function ConfigPage() {

    return `<div class="wrapper">
                <div class="fileList">${FileList(data)}</div>
                <div class="variableMenu">${VariableMenu()}</div>
            </div>
            <div class="wrapper">
                <div class="configMenu">${ConfigMenu()}</div>
                <div class="data">${DataTable()}</div>
            </div>`;
}

config.innerHTML = ConfigPage();
