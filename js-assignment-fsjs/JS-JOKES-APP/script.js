const jokeBtn = document.querySelector("#jokeBtn");
const jokePara = document.querySelector("#joke");

jokeBtn.addEventListener("click", getJoke);
function getJoke()
{
  const url = "https://icanhazdadjoke.com/";
  let p1= fetch(url, {
    headers: {
      Accept: "application/json",
    },
  })
  p1.then((response)=>{
    return response.json();
  }).then((data)=>{
    jokePara.innerText = data.joke;
  })
}