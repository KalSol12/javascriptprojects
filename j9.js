 
        let calculatorOutput= localStorage.getItem('calculatorOutput2')||'';
        console.log(calculatorOutput);

        document.querySelector('.show-the-number').innerHTML=`Calculator Output: ${calculatorOutput}`;

        function updateCalculator(){
                      
                 calculatorOutput=eval(calculatorOutput);// to remove the '=' at the end
                localStorage.setItem('calculatorOutput2',calculatorOutput);
                console.log(calculatorOutput);

                document.querySelector('.show-the-number').innerHTML=`Calculator Output: ${calculatorOutput}`;


        }
        
       

