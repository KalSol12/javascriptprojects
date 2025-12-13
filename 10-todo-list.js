// initial todo list array

//   const todolistArray= [{
//         name:'make dinner',
//         date:'2024-06-20',
//         priority:'high',
//         deadline:'2024-06-25'
//      },
//         {
//             name:'wash clothes',
//             date:'2024-06-21',
//             priority:'high',
//             deadline:'2024-06-30'   
//         },
//         {
//             name:'do homework',
//             date:'2024-06-22',
//             priority:'low',
//             deadline:'2024-07-05'
//         }
//     ];
    const todolistArray= JSON.parse(localStorage.getItem('todoList'))||[
        {
            name:'pray in the morning',
            date:'always',
            priority:'high',
            deadline:'never'
         },
            {
                name:'pray in the evening',
                date:'always',
                priority:'high',
                deadline:'never'   
            },
            {
                name:'practice coding',
                date:'sometimes',
                priority:'medium',
                deadline:'never'
            }
        ];
    console.log(todolistArray);

 
     
    updateTheList();
    
    function updateTheList() {  
         let html='';
    //    const HtmlList=0;
       for (let i = 0; i < todolistArray.length; i++) {
        const todoItem=todolistArray[i];


        const {name,date,priority,deadline}= todoItem;
        const todo=`${name} -start- ${date} - end - ${deadline}- priority- ${priority}`;
        //want to store in the local storage
        localStorage.setItem('todoList',JSON.stringify(todolistArray));
 

        // console.log(store);

       
  let  todoHtml =`
             <div>
            ${name}  
            </div> 

            <div>
             ${date}
            </div>

            <div>
           ${priority}
            </div>

            <div>
            ${deadline}
            </div>
        
             <div>
            <button
            onclick="
            todolistArray.splice(${i},1);
             localStorage.removeItem('todoList');
                localStorage.setItem('todoList',JSON.stringify(todolistArray));
             updateTheList();
                location.reload();
            "
            >Delete</button>
            </div>`;


        html+=todoHtml;
           

       }
         
       document.querySelector('.show-the-result').innerHTML=html;
     
   
    }
        
   


 
function showTheResult() {

let name= document.querySelector('.js-input-text').value;
let date= document.querySelector('.js-input-date').value;
let priority= document.querySelector('.js-input-priority').value;
let deadline= document.querySelector('.js-input-deadline').value;
todolistArray.push({
   //shorthand property names
   name,
   date,
    priority,
    deadline
});
console.log(todolistArray.length);// to make sure that the new item is added to the array
 document.querySelector('.show-the-result').innerHTML=''
     updateTheList();


}