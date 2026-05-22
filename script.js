const target = new Date('2026-05-22T10:00:00-03:00').getTime();

const elDays = document.getElementById('days');
const elHours = document.getElementById('hours');
const elMinutes = document.getElementById('minutes');
const elSeconds = document.getElementById('seconds');
const elCountdown = document.getElementById('countdown');
const elFinal = document.getElementById('finalMsg');

function pad(n){return String(n).padStart(2,'0')}

function update(){
  const now = Date.now();
  let diff = Math.floor((target - now) / 1000);
  if(diff <= 0){
    elCountdown.classList.add('hidden');
    elFinal.classList.remove('hidden');
    elFinal.textContent = 'Chegou! O beta do Drakantos foi lançado!';
    clearInterval(timer);
    return;
  }

  const days = Math.floor(diff / 86400);
  diff %= 86400;
  const hours = Math.floor(diff / 3600);
  diff %= 3600;
  const minutes = Math.floor(diff / 60);
  const seconds = diff % 60;

  elDays.textContent = days;
  elHours.textContent = pad(hours);
  elMinutes.textContent = pad(minutes);
  elSeconds.textContent = pad(seconds);
}

update();
const timer = setInterval(update, 1000);
