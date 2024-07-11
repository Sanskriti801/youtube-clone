let helloBtn= document.querySelector('button');
helloBtn.addEventListener('click', inputMsg);

function inputMsg() {
    let name = prompt('Enter Name of Student');
    namasteBtn.textContent = 'Roll No. 1:' + name;
}
