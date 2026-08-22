// ──────────── js exercise =>
const scenes = document.querySelector('.scenes');
const checkboxInp = document.querySelector('#toggle');
const button = document.querySelector('.button');
const sceneHeight = scenes.offsetHeight;
const sceneWidth = scenes.offsetWidth;
const starSize = 2;
const radius = sceneHeight / 2;

function getValidPosition() {
  let left;
  let top;
  do {
    left = Math.floor(Math.random() * (sceneWidth - starSize));
    top = Math.floor(Math.random() * (sceneHeight - starSize));
    const starCenterX = left + starSize / 2;
    const starCenterY = top + starSize / 2;
    const nearestX = Math.max(
      radius,
      Math.min(starCenterX, sceneWidth - radius),
    );
    const distanceX = starCenterX - nearestX;
    const distanceY = starCenterY - radius;
    const distanceSquared = distanceX ** 2 + distanceY ** 2;
    var valid = distanceSquared <= (radius - starSize / 2) ** 2;
  } while (!valid);
  return { left, top };
}

for (let i = 0; i < 30; i++) {
  const star = document.createElement('div');
  star.classList.add('star');
  scenes.appendChild(star);
  const position = getValidPosition();
  star.style.left = `${position.left}px`;
  star.style.top = `${position.top}px`;
}

const starsList = document.querySelectorAll('.star');

function blinkStar() {
  const randomTime = Math.floor(Math.random() * 150) + 350;
  const random = Math.floor(Math.random() * starsList.length);
  starsList[random].style.opacity = 0;
  setTimeout(() => {
    starsList[random].style.opacity = 1;
  }, 200);
  setTimeout(blinkStar, randomTime);
}

blinkStar();

// ──────────── changing background ────────────
checkboxInp.addEventListener('change', () => {
  if (checkboxInp.checked) {
    document.body.style.backgroundImage = `
      linear-gradient(
        180deg,
        #87ceeb,
        #ffffff
      )
    `;
    button.style.boxShadow = '0 0 1rem rgba(0, 0, 0, 0.3)';
  } else {
    document.body.style.backgroundImage = `
      linear-gradient(
        180deg,
        #050014,
        #140c86
      )
    `;
    button.style.boxShadow = '0 0 1rem rgba(255, 255, 255, 0.8)';
  }
});
