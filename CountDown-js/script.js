const future = new Date("Jun 23, 2023 00:00:00").getTime();
const x = setInterval(() => {
  const today = new Date().getTime();
  const result = future - today;

  let days = Math.floor(result / (1000 * 60 * 60 * 24));
  let hours = Math.floor((result % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  let minutes = Math.floor((result % (1000 * 60 * 60)) / (1000 * 60));
  let seconds = Math.floor((result % (1000 * 60)) / 1000);
  let day = document.querySelector("#days");
  let hour = document.querySelector("#hours");
  let minute = document.querySelector("#minutes");
  let second = document.querySelector("#seconds");
  day.innerHTML = days;
  hour.textContent = hours;
  minute.innerHTML = minutes;
  second.innerHTML = seconds;
}, 1000);
