var display = document.getElementById("display");
var display2 = document.getElementById("display2");
var buttons = Array.from(document.getElementsByClassName("button"));
var n = 0;
var operator = "none";
var first = true;

buttons.map((button)=>{
    button.addEventListener('click', (e)=>{
    let alvo = e.target.innerText;

        if(alvo == "C"){
            display.innerHTML = "";
            display2.innerHTML = "";
            n = 0;
            console.log(n);
            return;
        }
        
        else if(alvo == "-"){
            if(first == true){
                n = parseInt(display.innerHTML, 10);
                display.innerHTML = "";
                display2.innerHTML = n;
                first = false;
                operator = "-"
                console.log(n);
            }
            else{
                if(operator == "+"){
                    n += parseInt(display.innerHTML, 10);
                    display.innerHTML = "";
                    display2.innerHTML = n;
                    operator = "-"
                    console.log(n);
                }
                else if(operator == "-"){
                    n -= parseInt(display.innerHTML, 10);
                    display.innerHTML = "";
                    display2.innerHTML = n;
                    operator = "-"
                    console.log(n);
                }    
                else if(operator == "*"){
                    n *= parseInt(display.innerHTML, 10);
                    display.innerHTML = "";
                    display2.innerHTML = n;
                    operator = "-"
                    console.log(n);
                }    
                else if(operator == "/"){
                    n /= parseInt(display.innerHTML, 10);
                    display.innerHTML = "";
                    display2.innerHTML = n;
                    operator = "-"
                    console.log(n);
                }
            }
        }
        else if(alvo == "+"){
            if(first == true){
                n = parseInt(display.innerHTML, 10);
                display.innerHTML = "";
                display2.innerHTML = n;
                first = false;
                operator = "+"
                console.log(n);
            }
            else{
                if(operator == "+"){
                    n += parseInt(display.innerHTML, 10);
                    display.innerHTML = "";
                    display2.innerHTML = n;
                    operator = "+"
                    console.log(n);
                }
                else if(operator == "-"){
                    n -= parseInt(display.innerHTML, 10);
                    display.innerHTML = "";
                    display2.innerHTML = n;
                    operator = "+"
                    console.log(n);
                }    
                else if(operator == "*"){
                    n *= parseInt(display.innerHTML, 10);
                    display.innerHTML = "";
                    display2.innerHTML = n;
                    operator = "+"
                    console.log(n);
                }    
                else if(operator == "/"){
                    n /= parseInt(display.innerHTML, 10);
                    display.innerHTML = "";
                    display2.innerHTML = n;
                    operator = "+"
                    console.log(n);
                }
            }
        }
        else if(alvo == "*"){
            if(first == true){
                n = parseInt(display.innerHTML, 10);
                display.innerHTML = "";
                display2.innerHTML = n;
                first = false;
                operator = "*"
                console.log(n);
            }
            else{
                if(operator == "+"){
                    n += parseInt(display.innerHTML, 10);
                    display.innerHTML = "";
                    display2.innerHTML = n;
                    operator = "*"
                    console.log(n);
                }
                else if(operator == "-"){
                    n -= parseInt(display.innerHTML, 10);
                    display.innerHTML = "";
                    display2.innerHTML = n;
                    operator = "*"
                    console.log(n);
                }    
                else if(operator == "*"){
                    n *= parseInt(display.innerHTML, 10);
                    display.innerHTML = "";
                    display2.innerHTML = n;
                    operator = "*"
                    console.log(n);
                }    
                else if(operator == "/"){
                    n /= parseInt(display.innerHTML, 10);
                    display.innerHTML = "";
                    display2.innerHTML = n;
                    operator = "*"
                    console.log(n);
                }
            }
        }
        else if(alvo == "/"){
            if(first == true){
                n = parseInt(display.innerHTML, 10);
                display.innerHTML = "";
                display2.innerHTML = n;
                first = false;
                operator = "/"
                console.log(n);
            }
            else{
                if(operator == "+"){
                    n += parseInt(display.innerHTML, 10);
                    display.innerHTML = "";
                    display2.innerHTML = n;
                    operator = "/"
                    console.log(n);
                }
                else if(operator == "-"){
                    n -= parseInt(display.innerHTML, 10);
                    display.innerHTML = "";
                    display2.innerHTML = n;
                    operator = "/"
                    console.log(n);
                }    
                else if(operator == "*"){
                    n *= parseInt(display.innerHTML, 10);
                    display.innerHTML = "";
                    display2.innerHTML = n;
                    operator = "/"
                    console.log(n);
                }    
                else if(operator == "/"){
                    n /= parseInt(display.innerHTML, 10);
                    display.innerHTML = "";
                    display2.innerHTML = n;
                    operator = "/"
                    console.log(n);
                }
            }
        }


        // numeros
        else{
            display.innerHTML += alvo;
        } 
    })
})
