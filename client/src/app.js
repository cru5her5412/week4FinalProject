let form = document.getElementById("inputForm");
form.addEventListener("submit", async function (event) {
  event.preventDefault();
  let formTemplate = new FormData(form);
  let formData = Object.fromEntries(formTemplate);
  let response = await fetch("http://localhost:8080", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ formData }),
  });
  console.log(response);
});
async function loadFromDatabase() {
  let dataFromDatabase = await fetch("http://localhost:8080/get-data-from-db");
  console.log(await dataFromDatabase.json());
  for (let i = 0; i < dataFromDatabase.length; i++) {
    dbInfoContainer = document.createElement("p");
    dbInfoContainer.className = "dbInfoContainer";
    dbInfoContainer.id = `${i}`;
    container = document.getElementById("databaseInfoContainer");
    container.appendChild(dbInfoContainer);
  }
}
loadFromDatabase();
