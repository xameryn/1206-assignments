const API_URL = "https://reqres.in/api/users";

let userInfoData = [];
const userContainer = document.getElementById("user-container");

async function getUserInfo() {
  try {
    const data = await fetch(API_URL);
    const dataInJson = await data.json();
    userInfoData = dataInJson.data;
    generateAllCards(userInfoData)
  } catch (error) {
    console.log("There was an error", error);
    userInfoData = [];
  }
}

function createCardUI(user) { // added id to button to get the user id
  let cardUI = `
    <div class="card  m-4" style="width: 18rem;">
  <img src=${user.avatar} class="card-img-top" alt="...">
  <div class="card-body">
    <h1>${user.first_name} ${user.last_name}</h1>
    <p class="card-text">${user.email}</p>
  </div>
  <button class="btn btn-primary" id=${user.id}>Get Details</button>
</div>
    `;

  userContainer.innerHTML += cardUI;
}

function generateAllCards(userData = []) {
    for(let i = 0 ; i < userData.length; i++) {
        createCardUI(userData[i]);
    }
}

document.addEventListener("click", function(event) { // added event listener to get the user id from button clicked
  if (event.target.classList.contains("btn")) {
    const clickedUser = userInfoData.find((person) => person.id == event.target.id);
    alert(`You clicked on ${clickedUser.first_name} ${clickedUser.last_name}, their email is ${clickedUser.email}`);
  }
});


getUserInfo();