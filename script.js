function showRequest() {
  document.getElementById("welcomeMessage").classList.add("hidden");
  document.getElementById("requestMessage").classList.remove("hidden");
}

function acceptRequest() {
  document.getElementById("requestMessage").classList.add("hidden");
  document.getElementById("giftMessage").classList.remove("hidden");
}

function showGift() {
  document.getElementById("requestMessage").classList.add("hidden");
  document.getElementById("sadMessage").classList.remove("hidden");
}

function showGiftImage() {
  document.getElementById("giftButton").classList.add("hidden");

  var giftContainer = document.createElement("div");
  giftContainer.innerHTML =
    "<p>зарплатадан шоколад әперемін</p><p>(бірақ жауабын сообщение қылып вацаптан жаза салыңызшы, не басқаныңызды білуді үйренбедім әлі)</p><img src='./kiss.jpeg' width='300px' height='300px' alt='Подарок'>";


  document.body.innerHTML = "";
  document.body.appendChild(giftContainer);
}

window.onload = () => {
  document.getElementById("requestButton").addEventListener("click", showRequest);
  document.getElementById("acceptButton").addEventListener("click", acceptRequest);
  document.getElementById("rejectButton").addEventListener("click", showGift);
  document.getElementById("giftButton").addEventListener("click", showGiftImage);
};
