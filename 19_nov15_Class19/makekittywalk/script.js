var img = document.getElementsByTagName('img')[0];
img.style.left = '0px'

function catWalk(){
    //add pixels to the old left
    var oldLeft = parseInt(img.style.left)
    if (oldLeft >= window.innerWidth) {
        oldLeft = -300
    }
    var newLeft = oldLeft + 1
    img.style.left = newLeft + 'px'
}

//set interval so that this happens over time
window.setInterval(catWalk, 10)

//when the cat reaches the right hand of the screen, have it reset back to the left

//how can we tell the image reached the end of the screen?
//know the width of the window
//cat's last right position as compared to the right side of the window
//if the cat reaches the right hand side, move it back to 0px left









