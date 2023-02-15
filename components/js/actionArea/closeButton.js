const closeButton = document.getElementById("icon-close");

closeButton.addEventListener("click", () => {
  console.log("called");
  localStorage.clear();
  let form = document.getElementById("form-area");
  form.style.display = "flex";
});
