

const toggleBtn = document.querySelector('.toggle_btn')
            const toggleBtnIcon = document.querySelector('.toggle_btn i')
            const dropDownMenu = document.querySelector('.dropdown_menu')

            toggleBtn.onclick = function(){
                dropDownMenu.classList.toggle('open')
                const isOpen = dropDownMenu.classList.contains('open')

                toggleBtnIcon.classList = isOpen
                ? 'fa-solid fa-xmark'
                : 'fa-solid fa-bars'
            }
// =========Copy Button==========
const copy = document.getElementById("email1");
copy.addEventListener("click", () => {
  navigator.clipboard.writeText("nirmalya267@gmail.com");
  copy.innerHTML = "copied";
//   setTimeout(() => {
//     copy.innerHTML = null;
//   }, 1000);
});
