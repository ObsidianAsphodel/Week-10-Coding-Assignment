console.log(document.getElementById("add"));
console.log(document.getElementById('list'));

document.getElementById("add").addEventListener("click", () => {
    let table = document.getElementById('list');
    let row = table.insertRow(1);
    row.setAttribute('id', `item-${id}`);
    row.insertCell(0).innerHTML = document.getElementById("first-name").value;
    console.log(document.getElementById("first-name").value);
    row.insertCell(1).innnerHTML = document.getElementById("last-name").value;
    console.log(document.getElementById("last-name").value);
});