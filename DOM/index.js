const container = document.getElementById("container");
const heading = document.getElementById("heading");
console.log("next-sibling", container.nextElementSibling);
console.log("previous-sibling", container.previousElementSibling);

// create new element
const newParagraph = document.createElement("p");
container.appendChild(newParagraph);
newParagraph.textContent = "This is a new paragragh";
newParagraph.setAttribute("class", "new-paragragh");
newParagraph.style.color = "blue"

// Event button for a button
const clickButton = document.getElementById("click-button");
clickButton.addEventListener("click", ()=>{
    clickButton.textContent = ("Clicked!")
    clickButton.style.backgroundColor = "purple"
});

clickButton.onclick=()=>{
    heading.textContent = "JS is fun:)"
};