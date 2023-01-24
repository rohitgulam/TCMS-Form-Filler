var inputs = document.getElementsByTagName('input');

var fullName = inputs[3];
var number = inputs[4];

var full_name = localStorage.getItem('fullName');
var reg_number = localStorage.getItem('number');


if( full_name != undefined && reg_number != undefined ){
    fullName.value = full_name;
    number.value = reg_number;
}else{
    alert(" Form Filler \nFill in form");
}

fullName.oninput = () => {
    localStorage.setItem("fullName",fullName.value);
}

number.oninput = ()=> {
    localStorage.setItem("number", number.value);
} 
