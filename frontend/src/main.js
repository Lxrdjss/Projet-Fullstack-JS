import { createApp } from "vue"; // Utilisation de createApp pour Vue 3
import App from "./App.vue";
import { createRouter, createWebHistory } from "vue-router"; // Import Vue Router 4
import AddItem from "./components/AddItem.vue"; // Correctement importer AddItem
import ItemList from "./components/ItemList.vue"; // Correctement importer ItemList

// Configuration des routes
const routes = [
  { path: "/add-item", component: AddItem }, // Route pour ajouter un item
  { path: "/list-items", component: ItemList }, // Route pour lister les items
];

// Initialisation du router avec Vue Router 4 et Vue 3
const router = createRouter({
  history: createWebHistory(),
  routes,
});

// Création de l'instance Vue 3 avec Vue Router
const app = createApp(App);
app.use(router);
app.mount("#app");
