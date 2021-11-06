function updateData() {
   fetch("data.json")
      .then((response) => response.json())
      .then((data) => {
         document.querySelector("#tech-name").innerText = data.technology[tabFocus].name;
         document.querySelector("#tech-description").innerText = data.technology[tabFocus].description;
         document.querySelector("#tech-landscape").setAttribute("srcset", data.technology[tabFocus].images.landscape);
         document.querySelector("#tech-portrait").setAttribute("srcset", data.technology[tabFocus].images.portrait);
         document.querySelector("#technology-picture img").setAttribute("src", data.technology[tabFocus].images.portrait);
         document.querySelector("#technology-picture img").setAttribute("alt", "the " + data.technology[tabFocus].name);
      });
}
