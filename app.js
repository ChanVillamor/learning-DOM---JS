// const ul = document.querySelector('ul');
// const li = document.createElement('li');

// ul.append(li)
// li.innerText = "Barbbie";

// li.setAttribute('id', 'main-heading')
// li.removeAttribute('id')

// li.classList.add('list-items');
// li.classList.remove('list-items');

// li.remove();

// let ul = document.querySelector('ul');

// console.log(ul.parentNode.)

// const firstBtn = document.querySelector('.btn');

// function alertBtn() {
//   alert('I love Myselft');
// }
// firstBtn.addEventListener("click", alertBtn);


// const newBackgroundColor = document.querySelector('.btn-2');

// function changeBackgroundColor() {
//   document.body.style.backgroundColor = "yellow";
// }

// newBackgroundColor.addEventListener("click", changeBackgroundColor);

// const revealBtn = document.querySelector('.reveal-btn');
// const hiddenContent = document.querySelector('.hidden-content');

// function revealContent() {

//   if(hiddenContent.classList.contains('reveal-btn')
//   ) {
//       hiddenContent.classList.remove('reveal-btn');
//   } else {
//     hiddenContent.classList.add('reveal-btn');
//   }
// };

// revealBtn.addEventListener("click", revealContent);

// window.addEventListener("click", function() {
//   console.log('Window');
// },false);

// document.addEventListener("click", function() {
//   console.log('Document');
// },false);

// document.querySelector(".div2").addEventListener("click", function(){
//   // e.stopPropagation()
//   console.log('DIV 2');  
// },{once: true});

// document.querySelector(".div1").addEventListener("click", function(){
//   console.log('DIV 1');  
// },false);

// document.querySelector('.btn').addEventListener("click", function(e){
//   e.preventDefault()
//   console.log(e.target.innerText = 'cliked');  
// },false);

// document.querySelector('#volleyball').addEventListener('click', function(e){
//   console.log("Volleyball is cliked");

//   const target = e.target;

//   if(target.matches('li')) {
//     target.style.backgroundColor = 'lightgrey'
//   }
// })

// document.querySelector('#basketball').addEventListener('click', function(e){
//   console.log("Basketball is cliked");

//   const target = e.target;

//   if(target.matches('li')) {
//     target.style.backgroundColor = 'lightgrey'
//   }
// })

// document.querySelector('#badminton').addEventListener('click', function(e){
//   console.log("Badminton is cliked");

//   const target = e.target;

//   if(target.matches('li')) {
//     target.style.backgroundColor = 'lightgrey'
//   }
// })

// document.querySelector('#swimming').addEventListener('click', function(e){
//   console.log("Swimming is cliked");

//   const target = e.target;

//   if(target.matches('li')) {
//     target.style.backgroundColor = 'lightgrey'
//   }
// })

// document.querySelector('#football').addEventListener('click', function(e){
//   console.log("Football is cliked");

//   const target = e.target;

//   if(target.matches('li')) {
//     target.style.backgroundColor = 'lightgrey'
//   }
// })

document.querySelector('#sports').addEventListener('click', function(e) {
  console.log(e.target.id + ' is cliked');

  const target = e.target;
  
  if(target.matches('li')) {
    target.style.backgroundColor = 'lightgrey'
  }

})

const sports = document.querySelector('#sports');
const newSport = document.createElement('li');

newSport.innerText = 'rugby';
newSport.setAttribute('id', 'rugby');

sports.append(newSport);