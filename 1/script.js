var i = 0

function changeColor() {
    var colors = ["red", "blue", "green", "yellow", "orange", "purple", "pink", "brown", "black", "white"]

        document.getElementsByClassName("container")[0].style.backgroundColor = colors[i++]
        if(i > colors.length-1) i = 0

    
}