import API from "./API.js";

export async function lodaData() {
  app.store.menu = await API.fetchMenu();
}
