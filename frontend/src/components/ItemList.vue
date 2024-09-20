<template>
  <div>
    <h1>Liste des Items</h1>
    <ul>
      <li v-for="item in items" :key="item._id">
        {{ item.name }}: {{ item.description }}
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  data() {
    return {
      items: [],
    };
  },
  mounted() {
    // Appeler l'API pour récupérer les items
    fetch("http://localhost:4000/api/items")
      .then((response) => response.json())
      .then((data) => {
        this.items = data;
      })
      .catch((error) => console.log(error));
  },
};
</script>

<style scoped>
ul {
  list-style-type: none;
  padding: 0;
}
li {
  margin: 5px 0;
}
</style>
