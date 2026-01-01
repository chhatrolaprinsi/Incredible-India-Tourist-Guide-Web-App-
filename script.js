const toggleBtn = document.getElementById("theme-toggle");
const body = document.body;

if (localStorage.getItem("theme") === "dark") 
{
  body.classList.add("dark-mode");
}
toggleBtn.addEventListener("click", function () 
{
  body.classList.toggle("dark-mode");

  if (body.classList.contains("dark-mode")) 
  {
    localStorage.setItem("theme", "dark");
  } else 
  {
    localStorage.setItem("theme", "light");
  }
function openModal(imgElement) {
  const modal = document.getElementById('imgModal');
  const modalImg = document.getElementById('modalImg');
  const caption = document.getElementById('modalCaption');

  modal.style.display = 'block';
  modalImg.src = imgElement.src;
  caption.innerHTML = imgElement.alt;
}

function closeModal() {
  document.getElementById('imgModal').style.display = 'none';
}
}

);
