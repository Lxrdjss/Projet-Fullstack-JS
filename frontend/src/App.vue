<template>
  <div id="app">
    <nav>
      <router-link to="/list-items">Liste des items</router-link>
      <router-link to="/add-item">Ajouter un item</router-link>
    </nav>
    <router-view />
  </div>
</template>

<script>
export default {
  name: "App",
};
</script>

<style>
nav {
  margin-bottom: 20px;
}
nav a {
  margin-right: 15px;
  text-decoration: none;
  color: #42b983;
}
nav a.router-link-exact-active {
  font-weight: bold;
}
</style>
