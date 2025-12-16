
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
    todolistArray.forEach((value,index)=> {
         const {name,date,priority,deadline}= value;
        const todo=`${name} -start- ${date} - end - ${deadline}- priority- ${priority}`;
        //want to store in the local storage
        localStorage.setItem('todoList',JSON.stringify(todolistArray));      
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
            <button class="js-delete-button" data-index="${index}">
             Delete
            </button>

            </div>`;


        html+=todoHtml;
        
    }) 
       document.querySelector('.show-the-result').innerHTML=html; 
    }
       


  document.querySelector('.js-Add-button').addEventListener('click',
    ()=>{
        showTheResult();
    }
  );

//   document.querySelectorAll('.js-delete-button').forEach((value,index)=>{
//     value.addEventListener('click',()=>{
//          todolistArray.splice(index,1);
//              localStorage.removeItem('todoList');
//              localStorage.setItem('todoList',JSON.stringify(todolistArray));
//               updateTheList();
           

//     })


//   })
document.querySelector('.show-the-result').addEventListener('click', (e) => {
  if (e.target.classList.contains('js-delete-button')) {
    const index = e.target.dataset.index;

    todolistArray.splice(index, 1);
    localStorage.setItem('todoList', JSON.stringify(todolistArray));
    updateTheList();
  }
});

 
  
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