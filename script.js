function validateForm() {
  const name = document.getElementById("name").value.trim();
  const email = document.getElementById("email").value.trim();
  const message = document.getElementById("message").value.trim();

  if (name === "" || email === "" || message === "") {
    alert("Semua kolom wajib diisi!");
    return false;
  }
  return true;
}


window.addEventListener("scroll", () => {
  const skill = document.getElementById("skill");
  const skillTop = skill.getBoundingClientRect().top;

  if (skillTop < 200) {
    console.log("Sedang melihat bagian skill.");
  }
});