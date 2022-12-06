let inputFile = document.getElementById('file-input');
let fileNameField = document.getElementById('file-name');
inputFile.addEventListener('change',function(event){
    let uploadedFileName = event.target.files[0].name;
    fileNameField.textContent = uploadedFileName;
})
