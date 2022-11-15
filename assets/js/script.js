// Unload Animation
  window.addEventListener("beforeunload", function () {
  document.body.classList.add("animate-out");
  });

// View all button onclick

function onclickfunktion() {
  const viewallbtn = document.getElementsByClassName('container-2');

  for(let i = 0; i < viewallbtn.length; i++) {
          viewallbtn.item(i).classList.toggle("show");
    }

}
