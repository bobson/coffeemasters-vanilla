const API = {
  uri: "/data/menu.json",
  fetchMenu: async function () {
    const result = await fetch(this.uri);
    return result.json();
  },
};

export default API;
