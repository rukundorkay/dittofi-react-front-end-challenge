const ul=document.getElementById("cardList");
const modalcontent=document.getElementById("modal-content");
let loader=document.getElementById("loader");
let modal = document.getElementById("myModal");
let span = document.getElementsByClassName("close")[0];
span.onclick =()=> { 
  modal.style.display = "none";
  location.reload();
  
}
;
window.onclick =(event)=> {
  if (event.target == modal) {
    modal.style.display = "none";
  location.reload();
  }
}

  
  const result=fetch('https://jsonplaceholder.typicode.com/users')
  .then(response => response.json())
  .then(data => data.map(result=>{
      
 let li=document.createElement("li");
 let p=document.createElement("p");
 let h2=document.createElement("h2");
 let button=document.createElement("button");
  
  button.textContent="Get User Posts"; 
  button.value=result['id'];
  button.onclick = function(){
    //alert(result['id']);
    post(result['id']);
    return false;
  };

  h2.textContent= result['name'];
  p.textContent=result['email'];
  li.append(p,h2,button)
  ul.append(li);


  }));

function post(id)
{ 
  modal.style.display = "block";
  
  fetch(`https://jsonplaceholder.typicode.com/posts?userId=${id}`)
  .then((res) => res.json())
  .then(json => json.map(done=>{
    loader.remove();
    let div=document.createElement("div");
    let postp=document.createElement("p");
    let posth=document.createElement("h4");
    let br=document.createElement("br");
    div.id="postcontainer";
    posth.textContent=done['title'];
    postp.textContent=done['body'];
    div.append(posth,postp);
    modalcontent.append(div,br);
  }));


}


   
  



