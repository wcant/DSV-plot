import { readFile, appendListItem } from "./utils.js";
import { root, data, uploadList } from "./index.js";
import { filesList, parseMenu, variableMenu, dataTable, configPage } from "./views/config.js";

export function handleFileUpload(e) {
    const files = e.target.files;
    // loop over reading each file
        // handle promise and append data to filesData obj
    for (let file of files) {
        readFile(file).then(result => {
            console.log(typeof file.name);
            data.uploads[file.name] = { data: result };

            appendListItem(file.name, uploadList);
        }).catch(err => {
            console.log(`Failed to read file: ${file.name}`);
            console.log(err);
        });
    }
}

export function handleMainClick(e) {

    if(e.target.value === 'gotoConfig') {
        root.innerHTML = configPage.render();
    }

    // if(e.target.name === 'gotoPlot') {
        //     root.innerHTML = PlotPage();
        // }

    if(!!e.target.closest('.fileList')) {
        filesList.updateFileSelected(e.target);
    }

    if(!!e.target.closest('.parseMenu')) {

        if (e.target.type === 'button'){
            e.preventDefault();

            parseMenu.updateState();
            if (e.target.value === 'parseFile') {
                parseMenu.formSubmit();
            }
            if (e.target.value === 'parseAll') {
                parseMenu.formSubmit();
            }
            if (e.target.id === 'parseDone') {
                configPage.update();
            }

            console.log('submitted');

        }

    }
}


            // It would be easier on the user if all invalid inputs are shown at once
            // instead of as each one is caught sequentially

            // // check if file is selected
            // // need to refactor this (nested try/catch maybe not necessary)
            // try {
            //     // select elements of form to be checked
            //     const previewInput = document.getElementById('previewLines');
            //     const simpleInput = document.getElementById('simpleParse');
            //     const customInput = document.getElementById('customParse');

            //     try {
            //         // check if preview lines has value (also non-zero)

            //     } catch (error) {

            //         alert('Enter a value (> 0) for Preview Lines.');
            //     }

            //     try {
            //         // check if radio buttons selected
            //         if (simpleInput.checked) {
            //             // add table to DOM
            //             parseMenu.updatePreview();
            //         }
            //     } catch (error) {

            //     }
            // } catch (error) {
            //     console.log(error);
            //     alert('Select a file to parse.');
            // }



// export function handleFileListClick(e) {
//     const otherLi = fileList.querySelectorAll('li');
//     otherLi.forEach(li => li.classList.remove('selected'));
//     e.target.classList.add('selected');

//     // update data table when new li is selected
//     const fileSelected = e.target.innerText;
//     const previewLength = showLines.value;
//     updateDataTable(fileSelected, previewLength);

//     // show file parse options

//     // update state
//     state.fileSelected = fileSelected;
// }

export function handleSelectLine(e) {
    // only run when inner table elements are clicked
    if (e.target !== this) {
        let lineIndex;
        const file = state.fileSelected;
        const rows = this.children[0].children;
        const rowSelected = e.target.closest('tr');
        for (let i = 0; i < rows.length; i++) {
            // unselect previously selected line
            rows[i].classList.remove('selected');

            // get index of the clicked line
            if (rowSelected === rows[i]) {
                lineIndex = i;
            }
        }
        // update DOM to highlight clicked line
        rowSelected.classList.add('selected');
        // update state
        state.files[file]['lineSelected'] = lineIndex;
        console.log(state.files[file].lineSelected);
    }

}

export function handleVarSave(e) {
    e.preventDefault();

    console.log(e.target);
    // variable name from text input
    const varName = e.target.children[0].value;
    // line(s) selected from state.files[file]
    const row = state.files[state.fileSelected].lineSelected;
    const selectedData = state.files[state.fileSelected].data[row];
    state.files[state.fileSelected]['vars'][varName] = selectedData;
    console.log(state);

    // add variable to list


}


export function handleConfigUpdate(e) {
    e.preventDefault();
    // get lines to show
    // get delimiter
}


// export function handleFileUpload(e) {
//     const files = e.target.files;
//     // loop over reading each file
//         // handle promise and append data to filesData obj
//     for (let file of files) {
//         readFile(file).then(result => {
//             state.files[file.name] = { data: result };

//             appendToFileList(file.name);
//         }).catch(err => {
//             console.log(`Failed to read file: ${file.name}`);
//             console.log(err);
//         });
//     }
// }