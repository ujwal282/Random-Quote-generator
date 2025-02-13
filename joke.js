
let button = document.querySelector("#getJoke");
button.addEventListener("click", () => {
    getJokes();
});

async function getJokes(){
  try {
    let response = await fetch("https://api.quotable.io/random");
    let jokes = await response.json();
    let content = document.querySelector("#jokes");
    content.innerHTML = jokes.content;
  } catch (error) {
    console.log(error)
  }

}