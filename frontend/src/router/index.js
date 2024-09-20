import Vue from "vue";
import VueRouter from "vue-router";
import ItemList from "../components/ItemList.vue";
import AddItem from "../components/AddItem.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "ItemList",
    component: ItemList,
  },
  {
    path: "/add",
    name: "AddItem",
    component: AddItem,
  },
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});

export default router;
