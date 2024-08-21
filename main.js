function convertDate() {
  const input = document.getElementById("dateInput").value;

  if (input.length !== 8 || isNaN(input)) {
    document.getElementById("result").textContent = "請輸入有效的日期格式 (YYYYMMDD)";
    return;
  }

  const year = parseInt(input.substring(0, 4));
  const month = parseInt(input.substring(4, 6));
  const day = parseInt(input.substring(6, 8));
  const date = new Date(year, month - 1, day);

  const firstDayOfYear = new Date(year, 0, 1);
  const pastDaysOfYear = (date - firstDayOfYear) / 86400000;
  const weekNumber = Math.ceil((pastDaysOfYear + firstDayOfYear.getDay() + 1) / 7);

  const result = `${year} W${weekNumber.toString().padStart(2, '0')}`;
  document.getElementById("result").textContent = result;
}

document.getElementById("dateInput").onclick = function() {
  document.getElementById('dateInput').value = "";
};

document.getElementById("dateInput").addEventListener("keyup", function(e) {
  if (e.keyCode === 13) {
    document.getElementById("button").click();
  }
});
