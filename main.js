function submitReading() {
  const data = {
    date: document.getElementById("date").value,
    water: document.getElementById("water").value,
    electricity: document.getElementById("electricity").value
  };

  fetch("addReading.php", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(data)
  })
  .then(res => res.json())
  .then(msg => alert(msg.message));
}
fetch("save.php", {
  method: "POST",
  headers: {"Content-Type": "application/x-www-form-urlencoded"},
  body: "voltage=220&current=5&power=1100"
});
