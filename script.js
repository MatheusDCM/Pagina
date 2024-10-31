const container = document.getElementById('container');
const box = document.getElementById('box');
const startButton = document.getElementById('startButton');
const restartButton = document.getElementById('restartButton');
const result = document.getElementById('result');

let moving = false;
let currentPosition = 0;
let velocity = 0;
let friction = 0;

document.addEventListener('keydown', (event) => {
    if (moving) {
        const step = velocity * 10; // Multiplique a velocidade por 10 para ajustá-la ao movimento dos pixels
        if (event.key === 'ArrowRight') {
            currentPosition = Math.min(container.clientWidth - box.clientWidth, currentPosition + step);
        } else if (event.key === 'ArrowLeft') {
            currentPosition = Math.max(0, currentPosition - step);
        }
        box.style.left = `${currentPosition}px`;
    }
});

function startSimulation() {
    velocity = parseFloat(document.getElementById('velocity').value);
    friction = parseFloat(document.getElementById('friction').value);
    moving = true;
    
    setTimeout(() => {
        moving = false;
        result.innerHTML = `Simulação encerrada!<br>Velocidade final: ${velocity - friction} m/s`;
        restartButton.style.display = 'block';
    }, 10000); // 10 segundos
    
    startButton.style.display = 'none';
}

function restartSimulation() {
    box.style.left = '0';
    currentPosition = 0;
    result.innerHTML = '';
    restartButton.style.display = 'none';
    startButton.style.display = 'block';
}
