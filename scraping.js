//let appId = 'Q29yYmluRXMtQnV5LVBSRC1iYzhlZTU1NzYtOGZiMTRiZGM=:UFJELWM4ZWU1NTc2NWZmYi05MTIyLTQxYzMtYThmYi1lNDUw';
let searchParameters;

function call_function(function_name) {
    fetch("k" + function_name)
        .then(response => response.text())
        .then(result => console.log(result))
        .catch(err => console.log('Error', err))
}

function download_output() {

}