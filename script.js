//your code here
let draggables = document.querySelectorAll("#parent>div");

let container = document.querySelector("#parent");

draggables.forEach((draggable)=>{
     draggable.addEventListener("dragstart", ()=>{
       draggable.classList.add("dragging");
     });

     draggable.addEventListener("dragend", ()=>{
        draggable.classList.remove("dragging");
      });

      draggable.addEventListener("dragover", (e)=>{
        e.preventDefault();
        draggable.classList.add("selected");
        //  console.log("dragging")
      });

      draggable.addEventListener("dragleave", ()=>{
        draggable.classList.remove("selected");
        //  console.log("dragging")
      });

      draggable.addEventListener("drop", ()=>{
        // draggable.classList.remove("selected");
        let obj1 = document.querySelector(".dragging");
        let obj2 = document.querySelector(".selected");
         obj2 = {...obj1};
         console.log("dropped")
      });
});