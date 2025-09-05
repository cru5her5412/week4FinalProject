let form = document.getElementById("inputForm");
form.addEventListener("submit", async function (event) {
  event.preventDefault();
  let formTemplate = new FormData(form);
  let formData = Object.fromEntries(formTemplate);
  // final address: https://week4finalproject.onrender.com/
  //temp address:http://localhost:8080
  let response = await fetch("https://week4finalproject.onrender.com/", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ formData }),
  });
});
let parsedDataLength;
let likeInfo = { likeArray: [], id: [] };
async function loadFromDatabase() {
  let dataFromDatabase = await fetch(
    "https://week4finalproject.onrender.com/get-data-from-db"
  );
  let parsedData = await dataFromDatabase.json();
  let colour;
  let textContent;
  parsedDataLength = parsedData.length;
  for (let i = 0; i < parsedData.length; i++) {
    if (parsedData[i]) {
      createConfiguredElement("div", "spacer", false, false, i);
      createConfiguredElement("p", parsedData[i].name, false, false, i);
      createConfiguredElement("p", parsedData[i].fav_num, false, false, i);
      createConfiguredElement("div", false, parsedData[i].fav_colour, false, i);
      createConfiguredElement(
        "p",
        parsedData[i].additional_info,
        false,
        false,
        i
      );
      createConfiguredElement("img", false, false, "./likeOrHeart.webp", i);
      createConfiguredElement("p", parsedData[i].like_count, false, false, i);
      createConfiguredElement("div", "spacer", false, false, i);
    }
  }
  for (let j = 0; j < parsedData.length; j++) {
    likeInfo.likeArray.push(parsedData[j].like_count);
    likeInfo.id.push(parsedData[j].id);
  }
  likeButton();
}
function createConfiguredElement(elementType, textContent, colour, src, i) {
  const dbInfoContainer = document.createElement(`${elementType}`);
  dbInfoContainer.classList = `${i} dbInfoItem`;

  const container = document.querySelector("#databaseInfoContainer");
  container.appendChild(dbInfoContainer);
  if (textContent && textContent != "spacer") {
    dbInfoContainer.textContent = `${textContent}`;
  } else if (textContent === 0) {
    dbInfoContainer.textContent = "0";
  } else if (textContent === "spacer") {
    dbInfoContainer.classList = `${i} dbInfoItem spacer`;
  } else if (colour) {
    dbInfoContainer.style.backgroundColor = `${colour}`;
  } else if (src) {
    dbInfoContainer.src = `${src}`;
    dbInfoContainer.id = `img${i}`;
  }
}
async function likeButton() {
  for (let i = 0; i < parsedDataLength; i++) {
    const likeButton = document.getElementById(`img${i}`);
    if (!likeInfo.likeArray[i]) {
      likeInfo.likeArray[i] = 0;
    }
    let temp = i;
    likeButton.addEventListener("click", function (temp) {
      likeInfo.likeArray[i] = likeInfo.likeArray[i] + 1;
      let response = fetch(
        "https://week4finalproject.onrender.com/update-like-count",
        {
          method: "post",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ likeInfo }),
        }
      );

      console.log(likeInfo.likeArray);
    });
  }
}
loadFromDatabase();
