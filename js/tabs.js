const tabList = document.querySelector('[role="tablist"]');
const tabs = document.querySelectorAll('[role="tab"]');
const tabpanel = document.querySelector('[role="tabpanel"]');

// updateData();

tabList.addEventListener("keydown", changeTabFocus);

tabs.forEach((tab) => {
   tab.addEventListener("click", changeTabPanel);
});

let tabFocus = 0;
function changeTabFocus(e) {
   // tabpanel.style.opacity = 0;
   const keydownLeft = 37;
   const keydownRight = 39;

   if (e.keyCode === keydownLeft || e.keyCode === keydownRight) {
      tabs[tabFocus].setAttribute("tabindex", -1);

      if (e.keyCode === keydownRight) {
         tabFocus++;
         if (tabFocus >= tabs.length) {
            tabFocus = 0;
         }
         updateData();
      } else {
         tabFocus--;
         if (tabFocus < 0) {
            tabFocus = tabs.length - 1;
         }
         updateData();
      }

      tabs[tabFocus].setAttribute("tabindex", 0);
      tabs[tabFocus].focus();
      tabList.querySelector('[aria-selected="true"]').setAttribute("aria-selected", false);
      tabs[tabFocus].setAttribute("aria-selected", true);
   }
}

function changeTabPanel(e) {
   // tabpanel.style.opacity = 0;
   tabs[tabFocus].setAttribute("tabindex", -1);
   const targetTab = e.target;
   tabList.querySelector('[aria-selected="true"]').setAttribute("aria-selected", false);
   targetTab.setAttribute("aria-selected", true);
   tabFocus = targetTab.getAttribute("data-tabnumber");
   tabs[tabFocus].setAttribute("tabindex", 0);
   updateData();
}
