const startTime = new Date('2026-05-22T10:00:00-03:00').getTime();
const endTime = new Date('2026-05-24T22:00:00-03:00').getTime();
const totalDurationSeconds = Math.floor((endTime - startTime) / 1000);

const elapsedDisplay = {
  hours: document.getElementById('elapsedHours'),
  minutes: document.getElementById('elapsedMinutes'),
  seconds: document.getElementById('elapsedSeconds')
};

const remainingDisplay = {
  hours: document.getElementById('remainingHours'),
  minutes: document.getElementById('remainingMinutes'),
  seconds: document.getElementById('remainingSeconds')
};

const elFinal = document.getElementById('finalMsg');
let timer = null;

function pad(value) {
  return String(value).padStart(2, '0');
}

function render(display, totalSeconds) {
  const hours = Math.floor(totalSeconds / 3600);
  const minutes = Math.floor((totalSeconds % 3600) / 60);
  const seconds = totalSeconds % 60;

  display.hours.textContent = pad(hours);
  display.minutes.textContent = pad(minutes);
  display.seconds.textContent = pad(seconds);
}

function update() {
  const now = Date.now();
  let elapsedSeconds = 0;
  let remainingSeconds = totalDurationSeconds;

  if (now >= endTime) {
    elapsedSeconds = totalDurationSeconds;
    remainingSeconds = 0;
    elFinal.classList.remove('hidden');
    if (timer) {
      clearInterval(timer);
    }
  } else if (now > startTime) {
    elapsedSeconds = Math.floor((now - startTime) / 1000);
    remainingSeconds = Math.max(totalDurationSeconds - elapsedSeconds, 0);
    elFinal.classList.add('hidden');
  } else {
    elFinal.classList.add('hidden');
  }

  render(elapsedDisplay, elapsedSeconds);
  render(remainingDisplay, remainingSeconds);
}

update();
timer = setInterval(update, 1000);
