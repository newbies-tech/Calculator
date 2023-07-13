
let string = "";
let buttons = document.querySelectorAll('.calc-buttons');
let currentstring ;
let crossbutton=document.querySelector('.cross');

Array.from(buttons).forEach((button) => {
    button.addEventListener('click', (e) => {
        if (e.target.innerHTML == '=') {
            string = eval(string);
            document.querySelector('input').value = string;
            string="";

        }
        else if (e.target.innerHTML == 'C') {
            string = "";
            document.querySelector('input').value = string;

        }
        else if(e.target.innerHTML=='<i class="fa-solid fa-delete-left"></i>' ||e.target.innerHTML==''){
            string=string.substring(0,string.length-1);
            document.querySelector('input').value = string;

            console.log("hello");


        }
        
        else {
            currentstring=e.target.innerHTML;
            string = string + e.target.innerHTML;
            console.log(e.target.innerHTML);
            document.querySelector('input').value = string;
        }


    })
})