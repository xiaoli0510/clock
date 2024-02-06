const timeDom = document.getElementById("time");
const weekMonthDom = document.getElementById("weekMonth");
const dayDom = document.getElementById("day");
const hourDom = document.getElementById("hour"); //时针dom
const minuteDom = document.getElementById("minute"); //分针dom
const secondDom = document.getElementById("second"); //秒针dom

//时分针动画
const animate = () => {
  //日期 Tue Feb 06 2024
  let date = new Date().toDateString().split(" ");
  //时间 06:08:01 PM
  let time = new Date().toLocaleTimeString("en-US", {
    hour12: true,
  });
  timeDom.innerText = time;
  weekMonthDom.innerText = date[0] + date[1];
  dayDom.innerText = date[2];
  //时针动画
  let timeArr = time.split(" ")[0].split(":");
  let hourAngle = ((Number(timeArr[0]) + Number(timeArr[1] / 60)) * 360) / 12;
  hourDom.style.transform = `translate(-50%,-100%) rotate(${hourAngle}deg)`;

  //分针动画
  let minuteAngle = Number(timeArr[1] / 60) * 360;
  minuteDom.style.transform = `translate(-50%,-100%) rotate(${minuteAngle}deg)`;

  //秒针动画
  let secondAngle = Number(timeArr[2] / 60) * 360;
  secondAngle >= 360 ? secondAngle - 360 : secondAngle;
  secondDom.style.transform = `translate(-50%,-100%) rotate(${secondAngle}deg)`;
  window.requestAnimationFrame(animate);
};
animate();

document.getElementById("btnToggle").addEventListener("click", (e) => {
  const html = document.querySelector("html");
  if (html.classList.contains("dark")) {
    html.classList.remove("dark");
    e.target.innerHTML = "Light mode";
  } else {
    html.classList.add("dark");
    e.target.innerHTML = "dark mode";
  }
});
