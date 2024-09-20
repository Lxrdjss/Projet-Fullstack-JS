<template>
  <div>
    <h1>Ajouter un nouvel item</h1>
    <form @submit.prevent="addItem">
      <div>
        <label for="name">Nom :</label>
        <input type="text" v-model="name" required />
      </div>
      <div>
        <label for="description">Description :</label>
        <input type="text" v-model="description" required />
      </div>
      <button type="submit">Ajouter</button>
    </form>
  </div>
</template>

<script>
export default {
  data() {
    return {
      name: "",
      description: "",
    };
  },
  methods: {
    addItem() {
      fetch("http://localhost:3000/api/items", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          name: this.name,
          description: this.description,
        }),
      })
        .then((response) => response.json())
        .then((data) => {
          console.log("Item ajouté:", data);
          this.name = "";
          this.description = "";
        })
        .catch((error) => console.error("Erreur:", error));
    },
  },
};
</script>
