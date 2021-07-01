const ul = document.getElementById("cardList");
const modalcontent = document.getElementById("modal-content");
let svg = document.getElementById("svg");
let modal = document.getElementById("myModal");
let span = document.getElementsByClassName("close")[0];

function UserPost(userId) {
  modal.style.display = "block";

  fetch(`https://jsonplaceholder.typicode.com/posts?userId=${userId}`)
    .then((res) => res.json())
    .then((json) =>
      json.map((done) => {
        svg.remove();
        let div = document.createElement("div");
        let postParagraph = document.createElement("p");
        let postHeading = document.createElement("h4");

        div.id = "container";
        postHeading.textContent = done["title"];
        postParagraph.textContent = done["body"];
        div.append(postHeading, postParagraph);
        modalcontent.append(div);
      })
    );
}

fetch("https://jsonplaceholder.typicode.com/users")
  .then((response) => response.json())
  .then((data) =>
    data.map((result) => {
      let li = document.createElement("li");
      let p = document.createElement("p");
      let h2 = document.createElement("h2");
      let button = document.createElement("button");

      button.textContent = "Get User Posts";
      button.value = result["id"];
      button.onclick = function () {
        UserPost(result["id"]);
        return false;
      };

      h2.textContent = result["name"];
      p.textContent = result["email"];
      li.append(p, h2, button);
      ul.append(li);
    })
  );

span.onclick = () => {
  modal.style.display = "none";
  location.reload();
};
window.onclick = (event) => {
  if (event.target == modal) {
    modal.style.display = "none";
    location.reload();
  }
};
