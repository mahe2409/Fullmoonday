const cloud = document.querySelector('.cloud');
let angle = 10;
const rotationSpeed = 0.9; 
function rotateCloud() {
    angle += rotationSpeed;
    cloud.style.transform = `rotate(${angle}deg)`;
    requestAnimationFrame(rotateCloud);
}
rotateCloud();
