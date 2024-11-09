//Select the counter display element
const counter=document.getElementById("counter");

//Select the buttons
const decreaseButton=document.getElementById("decrease");
const increaseButton=document.getElementById("increase");

let counterValue=0;

//Function to update the counter value

function updateCounter(){
    counter.textContent=counterValue;
}

//Add event listeners to buttons

//Decrease the counter when 'decrease' button is clicked
decreaseButton.addEventListener("click", function(){
    counterValue--;
    updateCounter();
});

//Increase the counter when 'increase' button is clicked
increaseButton.addEventListener("click", function(){
    counterValue++;
    updateCounter();
});