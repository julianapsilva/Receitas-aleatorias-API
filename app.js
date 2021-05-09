const button = document.getElementById("button");
const recipe = document.getElementById("recipe");

button.addEventListener("click", randomRecipe);

function randomRecipe() {
  const random = recipe.querySelector("#random-image");
  getImage().then((result) => {
    button.textContent = "Clique aqui para obter uma receita aleatória";
    if (random == null) {
      let newDiv = document.createElement("div");
      newDiv.innerHTML = `<img src=${result.data["image"]}>`;
      newDiv.setAttribute("id", "random-image");
      recipe.appendChild(newDiv);
    } else random.innerHTML = `<img src=${result.data["image"]}>`;
  });
}

async function getImage() {
  try {
    button.textContent = "Carregando receita aleatória...";
    const response = await axios.get("https://foodish-api.herokuapp.com/api");
    return response;
  } catch (error) {
    console.error(error);
  }
}
