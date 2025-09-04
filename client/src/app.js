let form = document.getElementById("inputForm");
form.addEventListener("submit", async function (event) {
  event.preventDefault();
  let formTemplate = new FormData(form);
  let formData = Object.fromEntries(formTemplate);
  // final address: https://week4finalproject.onrender.com/
  let response = await fetch("http:/localhost:8080", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ formData }),
  });
});
async function loadFromDatabase() {
  let dataFromDatabase = await fetch("http://localhost:8080/get-data-from-db");
  let parsedData = await dataFromDatabase.json();
  for (let i = 0; i < parsedData.length; i++) {
    const dbInfoContainer = document.createElement("p");
    dbInfoContainer.className = "dbInfoItem";
    dbInfoContainer.id = `${i}`;
    dbInfoContainer.textContent = `${parsedData[i].name} ${parsedData[i].favnum} ${parsedData[i].favcolour}  ${parsedData[i].additionalinfo}`;
    const container = document.querySelector("#databaseInfoContainer");
    container.appendChild(dbInfoContainer);
  }
}
loadFromDatabase();
