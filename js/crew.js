function updateData() {
   fetch("data.json")
      .then((response) => response.json())
      .then((data) => {
         document.querySelector("#crew-role").innerText = data.crew[tabFocus].role;
         document.querySelector("#crew-name").innerText = data.crew[tabFocus].name;
         document.querySelector("#crew-bio").innerText = data.crew[tabFocus].bio;
         document.querySelector("#crew-picture source").setAttribute("srcset", data.crew[tabFocus].images.webp);
         document.querySelector("#crew-picture img").setAttribute("src", data.crew[tabFocus].images.png);
         document.querySelector("#crew-picture img").setAttribute("alt", "the " + data.crew[tabFocus].name);
      });
}
