let form = document.getElementById("inputForm");
form.addEventListener("submit", async function (event) {
  event.preventDefault();
  let formTemplate = new FormData(form);
  let formData = Object.fromEntries(formTemplate);
  let response = await fetch("https://week4finalproject.onrender.com/", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ formData }),
  });
});
async function loadFromDatabase() {
  let dataFromDatabase = await fetch(
    "https://week4finalproject.onrender.com/get-data-from-db"
  );
  parsedData = dataFromDatabase.json();
  for (let i = 0; i < parsedData.length; i++) {
    dbInfoContainer = document.createElement("p");
    dbInfoContainer.className = "dbInfoContainer";
    dbInfoContainer.id = `${i}`;
    dbInfoContainer.textContent = `${parsedData[i].name} ${parsedData[i].favcolour} ${parsedData[i].name} ${parsedData[i].favnumber}`;
    container = document.getElementById("databaseInfoContainer");
    container.appendChild(dbInfoContainer);
  }
}
loadFromDatabase();
