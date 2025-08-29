function ordenarColumnas() {
    const cities = document.getElementById("cities");
    if (cities.style.flexDirection === "column") {
      cities.style.flexDirection = "row";
    } else {
      cities.style.flexDirection = "column";
    }
  }
  
  function cambiarTitulo() {
    document.getElementById("main-title").innerText = "HTML & CSS: Curso práctico avanzado";
  }
  
  function cambiarColorTitulos() {
    const titles = document.querySelectorAll(".city-title");
    titles.forEach(t => {
      t.style.color = "red";
      t.style.fontSize = "22px";
    });
    const texts = document.querySelectorAll(".city p");
    texts.forEach(p => {
      p.style.color = "blue";
    });
  }
  
  function agregarImagen() {
    const footer = document.getElementById("footer");
    let img = document.getElementById("footer-img");
  
    if (!img) {
      img = document.createElement("img");
      img.id = "footer-img";
      img.style.marginTop = "10px";
      img.style.maxWidth = "200px";
      footer.appendChild(img);
    }
  
    const url = document.getElementById("image-url").value;
    const file = document.getElementById("image-file").files[0];
  
    if (file) {
      const reader = new FileReader();
      reader.onload = function (e) {
        img.src = e.target.result;
      };
      reader.readAsDataURL(file);
    } else if (url.trim() !== "") {
      img.src = url;
    } else {
      alert("Por favor selecciona un archivo o ingresa una URL de imagen.");
    }
  }