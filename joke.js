const jokes = [
  "Why don’t scientists trust atoms? Because they make up everything!",
  "Why did the math book look sad? Because it had too many problems.",
  "Why don't programmers like nature? It has too many bugs.",
  "What do you call fake spaghetti? An impasta!",
  "Why did the computer go to the doctor? Because it had a virus!",
  "I told my wife she was drawing her eyebrows too high. She looked surprised.",
  "Parallel lines have so much in common… it’s a shame they’ll never meet.",
  "Why did the scarecrow win an award? Because he was outstanding in his field!",
  "What did one wall say to the other? I’ll meet you at the corner.",
  "Why can’t your nose be 12 inches long? Because then it would be a foot."
];

let btn = document.getElementById('jokeBtn');
let joke = document.getElementById('jokeBox');


btn.addEventListener('click', (e)=>{
  e.preventDefault();

  const index = Math.floor(Math.random()* jokes.length);



  let jokeLaugh = document.createElement('p');
  jokeLaugh.style.fontSize = '15px';
  joke.innerText = jokes[index];
  


});


