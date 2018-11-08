//vanilla JS

var heading = document.getElementById('title')

var name = 'Sarah'

heading.innerText = "Enter " + name + "'s Information"

document.getElementById('main-section').innerHTML = '<h3>Hello World Smaller</h3>'

var paragraphs = document.getElementsByTagName('p')
console.log(paragraphs[0].innerText)

var titleText = document.getElementById('title')

//addEventListener is a function that takes two parameters: the event that we're listening for and the function that will be run once that event is performed

//alert pops up a modal box with text and an OK button

titleText.addEventListener('click', function(){
    alert('you clicked me!')   
})

//if the text the user input is the same as the answer
//create an if statement
//compare the user input to the "correct" answer
function myFunction(){
    var letter = document.getElementById('myInput').value; 
    if (letter === 'e'){
        alert('You guessed the correct letter!')
    }else{
        alert('You guessed the wrong letter')
    }  
}

function libIt() {
  var storyDiv = document.getElementById("story");
  var person = document.getElementById("person").value;
  var adjective = document.getElementById("adjective").value;
  var noun = document.getElementById("noun").value;
  storyDiv.innerHTML = person + " married a " + adjective + " " + noun + "... So weird!";
}

var libButton = document.getElementById('lib-button');
libButton.addEventListener('click', libIt);






















