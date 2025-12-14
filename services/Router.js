const Router = {
  init: function () {
    $$("a.navlink").forEach((a) => {
      on(a, "click", (e) => {
        e.preventDefault();

        const url = e.target.getAttribute("href");
        Router.go(url);
      });
    });
    // Cneck the initial URL
    Router.go(location.pathname);
    // console.log(location.pathname);
  },
  go: function (route, addToHistory = true) {
    if (addToHistory) {
      history.pushState({ route }, "", route);
    }

    let pageElement = null;
    switch (route) {
      case "/":
        pageElement = el("h1");
        pageElement.textContent = "Menu";
        break;
      case "/order":
        pageElement = el("h1");
        pageElement.textContent = "Your Order";
        break;
    }
    let main = $("main");
    main.innerHTML = "";
    main.appendChild(pageElement);
    window.scrollX = 0;
    window.scrollY = 0;
  },
};

export default Router;
