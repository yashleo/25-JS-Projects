function changeColor(){
    var hex_numbers = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9", "A", "B", "C", "D", "E", "F"]

    var rgb_code2 = "rgb(";
    var rgb_code = "rgb(";
    var rgb_code3 = "rgb(";
    
    for(var i = 0; i < 3; i++){
        var random_index = Math.floor(Math.random()* 256);
        if (i==0) {
            rgb_code3 += Math.abs(random_index-125)
        }
        else{
            rgb_code3 += ","+ Math.abs(random_index-125);
        }
        if (i==0) {
            rgb_code2 += Math.abs(random_index-256)
        }
        else{
            rgb_code2 += ","+ Math.abs(random_index-256);
        }
        if (i==0) {
            rgb_code += random_index
        }
        else{
            rgb_code += ","+ random_index;
        }
        
    }
    rgb_code += ")";
    rgb_code2 += ")";
    rgb_code3 += ")";

    document.getElementById("hex-code").innerHTML = rgb_code;
    document.getElementsByTagName("body")[0].style.background = rgb_code;
    document.getElementsByTagName("h1")[0].style.color = rgb_code2;
    document.getElementsByTagName("h2")[0].style.color = rgb_code3;

    // console.log(Math.random * hex_numbers.length)

}