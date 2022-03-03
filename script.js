var display = document.getElementById("display");
var buttons = Array.from(document.getElementsByClassName("button"));
var n = 0;
var operator = "+";

buttons.map((button)=>{
    button.addEventListener('click', (e)=>{
    let alvo = e.target.innerText;

        if(alvo == "C"){
            display.innerHTML = "";
            n = 0;
            console.log(n);
        }
        

        else if(alvo == "="){
            if(operator == "+"){
                n += parseInt(display.innerHTML, 10);
                console.log(n);
                setTimeout(() => {
                    display.innerHTML = n;
                }, 10);
            }
            if(operator == "-"){
                n -= parseInt(display.innerHTML, 10);
                console.log(n);
                setTimeout(() => {
                    display.innerHTML = n;
                }, 10);
            }
            if(operator == "/"){
                n /= parseInt(display.innerHTML, 10);
                console.log(n);
                setTimeout(() => {
                    display.innerHTML = n;
                }, 10);
            }
            if(operator == "*"){
                n *= parseInt(display.innerHTML, 10);
                console.log(n);
                setTimeout(() => {
                    display.innerHTML = n;
                }, 10);
            }
        }


        else if(alvo == "+"){
            operator = "+";
            n += parseInt(display.innerHTML, 10);
            setTimeout(() => {
                display.innerHTML = "";
            }, 10);
            console.log(n);
        }
        else if(alvo == "-"){
            operator = "-";
            n -= parseInt(display.innerHTML, 10);
            setTimeout(() => {
                display.innerHTML = "";
            }, 10);
            console.log(n);
        }
        else if(alvo == "/"){
            operator = "/";
            n /= parseInt(display.innerHTML, 10);
            setTimeout(() => {
                display.innerHTML = "";
            }, 10);
            console.log(n);
        }
        else if(alvo == "*"){
            operator = "*";
            n *= parseInt(display.innerHTML, 10);
            setTimeout(() => {
                display.innerHTML = "";
            }, 10);
            console.log(n);
        }

        else{
            display.innerHTML += alvo;
            n = display.innerHTML + alvo;
            console.log(n);
        }
    })
})
