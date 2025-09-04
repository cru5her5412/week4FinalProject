let form = document.getElementById("inputForm");
form.addEventListener("submit", async function (event) {
  event.preventDefault();
  let formTemplate = new FormData(form);
  let formData = Object.fromEntries(formTemplate);
  // final address: https://week4finalproject.onrender.com/
  //temp address:http:/localhost:8080
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
  let parsedData = await dataFromDatabase.json();
  let colour;
  let textContent;
  for (let i = 0; i < parsedData.length; i++) {
    createConfiguredElement("p", parsedData[i].name, false, i);
    createConfiguredElement("p", parsedData[i].favnum, false, i);
    createConfiguredElement("div", false, parsedData[i].favcolour, i);
    createConfiguredElement("p", parsedData[i].additionalinfo, false, i);
  }
}
function createConfiguredElement(elementType, textContent, colour, i) {
  const dbInfoContainer = document.createElement(`${elementType}`);
  dbInfoContainer.className = `dbInfoItem`;
  dbInfoContainer.id = `${i}`;

  const container = document.querySelector("#databaseInfoContainer");
  container.appendChild(dbInfoContainer);
  if (textContent) {
    dbInfoContainer.textContent = `${textContent}`;
  } else if (colour) {
    dbInfoContainer.style.backgroundColor = `${colour}`;
  }
}
loadFromDatabase();
