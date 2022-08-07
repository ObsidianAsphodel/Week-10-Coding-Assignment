//checks to see if the ids are working
console.log(document.getElementById("p-div"));
console.log(document.getElementById("p-button"));

//sets up an event that's linked to button
document.getElementById("p-button").addEventListener("click", () =>{
    //creates a new node or element
    let newParagraph = document.createElement("p");

    //sets the content of the node to the input of the button
    newParagraph.textContent = document.getElementById("p-input").value;

    //appends the child node to the parent node
    document.getElementById("p-div").appendChild(newParagraph);

    //clears the content of the node so that more can be created
    document.getElementById("p-input").value = "";
});