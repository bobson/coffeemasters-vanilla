const Router = {
  init: function () {
    $$("a.navlink").forEach((a) => {
      on(a, "click", (e) => {
        e.preventDefault();

        const url = e.target.getAttribute("href");
        Router.go(url);
      });
    });
    // Event Handler for URL changes
    window.addEventListener("popstate", (e) => {
      Router.go(e.state.route, false);
    });

    // Cneck the initial URL
    Router.go(location.pathname);
  },
  go: function (route, addToHistory = true) {
    if (addToHistory) {
      history.pushState({ route }, "", route);
    }

    let pageElement = null;
    switch (route) {
      case "/":
        pageElement = el("menu-page");

        break;
      case "/order":
        pageElement = el("order-page");

        break;
      default:
        if (route.startsWith("/product-")) {
          pageElement = el("details-page");
          const paramID = route.substring(route.lastIndexOf("-") + 1);
          pageElement.dataset.productId = paramID;
        }
    }

    if (pageElement) {
      let main = $("main");
      main.innerHTML = "";
      main.appendChild(pageElement);
      window.scrollX = 0;
      window.scrollY = 0;
    }
  },
};

export default Router;
