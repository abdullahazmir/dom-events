console.log('external file');


        // option 1: inline event handling, console.log
    // button in line console.log(43)


// option two to handle event

 function makeYellow(){
          document.body.style.backgroundColor = 'yellow';
          }

          function makeRed(){
            document.body.style.backgroundColor = 'red';
          }

        // option 3 : get element by id and set it onclick
        
         const btnMakeBlue = document.getElementById("btn-make-blue");
        console.log(btnMakeBlue);
        btnMakeBlue.onclick = function makeBlue(){
        document.body.style.backgroundColor = 'blue';
       }

    //    option 3: slight difference
     const bntMakePurple = document.getElementById("btn-make-purple");
        function makePurple(){
            document.body.style.backgroundColor = 'purple'
        }
        bntMakePurple.onclick = makePurple;

        // option 4: add event listeners advanced and recomendated..

        document.getElementById('btn-make-green').addEventListener('click', function makeGreen(){
            document.body.style.backgroundColor = 'green';
        })

        document.getElementById("btn-make-gold").addEventListener("click", function(){
            document.body.style.backgroundColor = 'gold'
        })