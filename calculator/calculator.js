window.addEventListener('load', () =>{
    let argument ;
    let number = '';
    let tell = 'answer';
    let answer = '';

    const button_zero = document.querySelector('#zero');
    const button_one = document.querySelector('#one');
    const button_two = document.querySelector('#two');
    const button_three = document.querySelector('#three');
    const button_four = document.querySelector('#four');
    const button_five = document.querySelector('#five');
    const button_six = document.querySelector('#six');
    const button_seven = document.querySelector('#seven');
    const button_eight = document.querySelector('#eight');
    const button_nine = document.querySelector('#nine');
    const button_multiply = document.querySelector('#multiply');
    const button_minus = document.querySelector('#minus');
    const button_plus = document.querySelector('#plus');
    const button_percent = document.querySelector('#percent');
    const button_divide = document.querySelector('#divide');
    const button_backspace = document.querySelector('#backspace');
    const button_clear = document.querySelector('#clear');
    const button_decimal = document.querySelector('#decimal');
    const button_equals = document.querySelector('#equals');

    const display = document.querySelector('#answer');




    button_clear.addEventListener('click', () =>{
        answer = ''
        number = ''
        tell = 'answer'
        display.innerHTML = 0;
    })

    button_zero.addEventListener('click', () =>{
        if (tell == 'answer'){
            answer += '0';
            display.innerHTML = answer;
        } else if (tell == 'number'){
            number += '0'
            display.innerHTML = number;
        };
        console.log(Number(answer))
        console.log(number);
    
    });
    button_one.addEventListener('click', () =>{
        if (tell == 'answer'){
            answer += '1';
            display.innerHTML = answer;
        } else if (tell == 'number'){
            number += '1'
            display.innerHTML = number;
        };
        console.log(Number(answer));
        console.log(number)
    
    });
    button_two.addEventListener('click', () =>{
        if (tell == 'answer'){
            answer += '2';
            display.innerHTML = answer;
        } else if (tell == 'number'){
            number += '2';
            display.innerHTML = number;
        };
        console.log(Number(answer));
    
    });
    button_three.addEventListener('click', () =>{
        if (tell == 'answer'){
            answer += '3';
            display.innerHTML = answer;
        } else if (tell == 'number'){
            number += '3';
            display.innerHTML = number;
        };
        console.log(Number(answer));
    
    });
    button_four.addEventListener('click', () =>{
        if (tell == 'answer'){
            answer += '4';
            display.innerHTML = answer;
        } else if (tell == 'number'){
            number += '4';
            display.innerHTML = number;
        };
        console.log(Number(answer));
    
    });
    button_five.addEventListener('click', () =>{
        if (tell == 'answer'){
            answer += '5';
            display.innerHTML = answer;
        } else if (tell == 'number'){
            number += '5';
            display.innerHTML = number;
        };
        console.log(Number(answer));
    
    });
    button_six.addEventListener('click', () =>{
        if (tell == 'answer'){
            answer += '6';
            display.innerHTML = answer;
        } else if (tell == 'number'){
            number += '6';
            display.innerHTML = number;
        };
        console.log(Number(answer));
    
    });
    button_seven.addEventListener('click', () =>{
        if (tell == 'answer'){
            answer += '7';
            display.innerHTML = answer;
        } else if (tell == 'number'){
            number += '7';
            display.innerHTML = number;
        };
        console.log(Number(answer));
    
    });
    button_eight.addEventListener('click', () =>{
        if (tell == 'answer'){
            answer += '8';
            display.innerHTML = answer;
        } else if (tell == 'number'){
            number += '8';
            display.innerHTML = number;
        };
        console.log(Number(answer));
    
    });
    button_nine.addEventListener('click', () =>{
        if (tell == 'answer'){
            answer += '9';
            display.innerHTML = answer;
        } else if (tell == 'number'){
            number += '9';
            display.innerHTML = number;
        };
        console.log(Number(answer));
    
    });

    button_plus.addEventListener('click', () =>{
         tell = 'number' ;
        argument = '+' ;
        display.innerHTML = 0;
        console.log(tell);
        console.log(argument);
    });
    button_minus.addEventListener('click', () =>{
        tell = 'number' ;
       argument = '-' ;
       display.innerHTML = 0;
   });
   button_multiply.addEventListener('click', () =>{
    tell = 'number' ;
   argument = '*' ;
   display.innerHTML = 0;
    });
    button_divide.addEventListener('click', () =>{
    tell = 'number' ;
   argument = '/' ;
   display.innerHTML = 0;
    });

    button_percent.addEventListener('click', ()=>{
        if (tell == 'answer'){
            answer = answer / 100;
            display.innerHTML = answer;
        } else if (tell == 'number'){
            number = number / 100;
            display.innerHTML = number;
        };
        console.log(Number(answer));
    })

    button_decimal.addEventListener('click', () =>{
        if (tell == 'answer'){
            answer += '.';
            display.innerHTML = answer;
        } else if (tell == 'number'){
            number += '.';
            display.innerHTML = number;
        };
        console.log(Number(answer));
    })

    button_backspace.addEventListener('click', () =>{
        if (tell == 'answer'){
            if (answer == ''){
                return;
            };
            if (answer.length == 1){
                answer = '';
                display.innerHTML = 0;
                return;
            };
            answer = answer.slice(0, -1);
            display.innerHTML = answer;
        } else if (tell == 'number'){
            if (number == ''){
                return;
            };
            if (number.length == 1){
                number = '';
                display.innerHTML = 0;
                return;
            };
            number = number.slice(0, -1) ;
            display.innerHTML = number;
        };
        console.log(answer);
    })

    

    button_equals.addEventListener('click', ()=>{
        if (tell == 'answer'){
            answer = answer;
            return;
        }
        if (argument == '+'){
            answer = +answer + +number;
        };
        if (argument == '-'){
            answer = +answer - +number;
        };
        if (argument == '*'){
            answer = +answer * +number;
        };
        if (argument == '/'){
            answer = +answer / +number;
        };
        
        answer = answer.toString();
        display.innerHTML = answer
        argument = '';
        number = '';
        console.log(argument);
        console.log(number);
        tell = 'answer' ;
    });
});