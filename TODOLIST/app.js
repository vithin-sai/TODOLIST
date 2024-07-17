let btn=document.querySelector("button");
let ul=document.querySelector("ul");
let inp=document.querySelector("input");
let listContainer=document.getElementById("list-container");

btn.addEventListener("click",function(){
    if(inp.value==''){
        alert("You must write something!");
    }
    else{
    let item = document.createElement("li");
    item.innerText=inp.value;
    listContainer.appendChild(item);
    let span=document.createElement("span");
    span.innerHTML="\u00d7";
    item.appendChild(span);
    }
    inp.value="";
    savaData();
    
})
listContainer.addEventListener("click",function(e){
        if(e.target.tagName === "LI"){
            e.target.classList.toggle("checked");
            savaData();
        }
        else if(e.target.tagName === "SPAN"){
            e.target.parentElement.remove();
            savaData();

        }
},false);

function savaData(){
    localStorage.setItem("data",listContainer.innerHTML);
}

function showTask(){
    listContainer.innerHTML=localStorage.getItem("data");
}
showTask();