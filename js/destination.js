function updateData() {
   fetch("data.json")
      .then((response) => response.json())
      .then((data) => {
         document.querySelector("#dest-name").innerText = data.destinations[tabFocus].name;
         document.querySelector("#dest-description").innerText = data.destinations[tabFocus].description;
         document.querySelector("#dest-distance").innerText = data.destinations[tabFocus].distance;
         document.querySelector("#dest-travel").innerText = data.destinations[tabFocus].travel;
         document.querySelector("#dest-picture source").setAttribute("srcset", data.destinations[tabFocus].images.webp);
         document.querySelector("#dest-picture img").setAttribute("src", data.destinations[tabFocus].images.png);
         document.querySelector("#dest-picture img").setAttribute("alt", "the " + data.destinations[tabFocus].name);
      });
}
