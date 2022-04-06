import { readFile, appendListItem, updateDataTable } from "./utils.js";
import { data, uploadList } from "./index.js";

export function handleFileUpload(e) {
    const files = e.target.files;
    // loop over reading each file
        // handle promise and append data to filesData obj
    for (let file of files) {
        readFile(file).then(result => {
            data[file.name] = { data: result };
            appendListItem(file.name, uploadList);
        }).catch(err => {
            console.log(`Failed to read file: ${file.name}`);
            console.log(err);
        });
    }
}

export function handleFileListClick(e) {
    const otherLi = fileList.querySelectorAll('li');
    otherLi.forEach(li => li.classList.remove('selected'));
    e.target.classList.add('selected');

    // update data table when new li is selected
    const fileSelected = e.target.innerText;
    const previewLength = showLines.value;
    updateDataTable(fileSelected, previewLength);

    // show file parse options

    // update state
    state.fileSelected = fileSelected;
}

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