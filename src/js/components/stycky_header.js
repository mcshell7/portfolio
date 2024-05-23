let menu = document.getElementById('header');
    let offset = menu.offsetHeight;
    console.log(menu.offsetHeight);
    window.addEventListener("scroll", () => {
      if (window.scrollY > offset) {
        menu.classList.add("sticky");
    } else if(window.scrollY < offset+65) {
        menu.classList.remove("sticky");
    }
    });
