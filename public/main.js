const comics = [
  'https://i.redd.it/xxb6769j26y91.png',
  'https://i.redd.it/j57gz5ztvux91.png',
  'https://i.redd.it/d83w4ocfc4y91.jpg',
  'https://i.redd.it/ahe7pwrj35y91.jpg',
  'https://i.redd.it/r4tcnty0m5y91.png',
  'https://i.redd.it/joq5m9hce5y91.png',
  'https://i.redd.it/ubkguhe1v0y91.jpg',
  'https://i.redd.it/pq5ymty4e5y91.jpg',
  'https://i.redd.it/dzo7udkmgxx91.png',
  'https://i.redd.it/joe2jdc2x6y91.jpg',
  'https://i.redd.it/jyp9upa411y91.png',
  'https://i.redd.it/wqwbobfgg4y91.png',
  'https://i.redd.it/mu7ux779s7y91.png',
  'https://i.redd.it/xnfn4myph7y91.jpg',
  'https://i.redd.it/gv8er70bb6y91.png',
  'https://i.redd.it/jwdrto1sb3y91.jpg'
];

const mainComic = document.querySelector('#main-comic');
mainComic.src = comics[0];

const nextBtn = document.querySelector('#next');
let position = 0;

const navBtns = document.querySelectorAll('.nav-btn');
navBtns.forEach(btn => {
  btn.addEventListener('click', () => {
    if (btn.matches('#prev')) {
      if (position === 0) return console.log('No prior comics');

      position = position - 1;
    } else {
      if (position === comics.length - 1) return console.log('No more comics');

      position = position + 1;
    }


    console.log(position);

    const newComic = comics[position];
    if (!newComic) return console.log('No comics left');
  
    mainComic.src = newComic;
  });

});


let touchstartY = 0;
let touchendY = 0;
let touchstartX = 0;
let touchendX = 0;

let verticalTolerance = 40;
let horizontalTolerance = 40;

document.addEventListener('touchstart', e => {
  touchstartY = e.changedTouches[0].screenY;
  touchstartX = e.changedTouches[0].screenX;
});

document.addEventListener('touchend', e => {
  touchendX = e.changedTouches[0].screenX;
  touchendY = e.changedTouches[0].screenY;
  checkDirection();
});

function checkDirection() {
  if (Math.abs(touchstartY - touchendY) >= verticalTolerance) {
    return console.log('vertical tolerance too high');
  }

  if (Math.abs(touchstartX - touchendX) <= horizontalTolerance) {
    return console.log('horizontal tolerance too low');
  }

  if (touchendX < touchstartX) {
    console.log('swiped left!');
    document.querySelector('#next').click();
  }
  if (touchendX > touchstartX) {
    console.log('swiped right!');
    document.querySelector('#prev').click();
  }
}