let time = 99;
let timer = setInterval(function () {
  if (time <= 0) {
    clearInterval(timer);
    document.getElementById('timer').innerHTML = '0';
  } else {
    document.getElementById('timer').innerHTML = time;
  }
  time -= 1;
}, 1000);

let alpha = 'AEIOURNDMBZTXYVWSHPG';

let store = {}, letter = 0;
for (let i = 0; i < alpha.length; i++) {
  let random_num = Math.floor(Math.random() * 4 + 1);
  letter += random_num;
  store[alpha[i]] = random_num;
}
const letterCount = document.getElementById('letterCount');
letterCount.innerText = letter;

let alphaScore = {
  A: 1,
  B: 3,
  C: 3,
  D: 2,
  E: 1,
  F: 4,
  G: 2,
  H: 4,
  I: 1,
  J: 8,
  K: 5,
  L: 1,
  M: 3,
  N: 1,
  O: 1,
  P: 3,
  Q: 10,
  R: 1,
  S: 1,
  T: 1,
  U: 1,
  V: 4,
  W: 4,
  X: 8,
  Y: 4,
  Z: 10,
};
let score = document.getElementById('scoreCard');
let keys = document.getElementById('second_div');
let result = document.getElementById('third_div');
for (let j = 0; j < alpha.length; j++) {
  let div = document.createElement('div');
  div.setAttribute('class', 'keywords');
  let h2 = document.createElement('h2');
  h2.innerText = alpha[j];
  h2.setAttribute('class', 'alphabates');
  let p = document.createElement('p');
  p.innerText = store[alpha[j]];
  p.setAttribute('class', 'count');
  div.addEventListener('click', () => {
    if (p.innerText == 1) {
      p.innerText = '';
      h2.innerText = '';
      letterCount.innerText -= 1;
      result.innerText += alpha[j];
      console.log(alphaScore[alpha[j]]);
      score.innerText = +score.innerText + +alphaScore[alpha[j]];
    }
    if (p.innerText > 0) {
      letterCount.innerText -= 1;
      p.innerText -= 1;
      result.innerText += alpha[j];
      console.log(alphaScore[alpha[j]]);
      score.innerText = +score.innerText + +alphaScore[alpha[j]];
    }
  });
  div.append(h2, p);
  keys.append(div);
}
