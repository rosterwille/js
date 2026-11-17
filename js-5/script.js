let userId = document.querySelector(".userId");
let phoneNo = document.querySelector(".phoneNo");
let sumbitButton = document.querySelector("#sumbitbutton");

function refMaker() {
  const name = userId.textContent.trim();
  const phone = phoneNo.textContent.trim();
  if (!name || !phone) {
    console.log("Error");
    return 0;
  }

  const namePart = name.substring(0, 3).toUpperCase();
  const phonePart = phone.slice(-4);
  const randomNum = Math.floor(1000 + Math.random() * 9000);
  const finalRef = "${namePart}-${phonePart}-${randomNum}";
  console.log("genrated ref:", finalRef);
}
if (sumbitButton) {
  sumbitButton.addEventListener("click", refMaker);
}
