function init() {
  tabs.onclick = (event) => {
    const targetButton = event.target;
    if (!targetButton.classList.contains("tab-button")) return;

    const buttons = tabs.getElementsByClassName("tab-button");
    for (let button of buttons) {
      button.classList.remove("active");
    }

    targetButton.classList.add("active");

    const contentTabs = document.getElementsByClassName("tab-content");
    for (let contentTab of contentTabs) {
      contentTab.classList.remove("active");
    }

    const targetContentTab = document.getElementById(
      targetButton.id + "-content"
    );
    targetContentTab.classList.add("active");
  };
}

window.onload = init;
