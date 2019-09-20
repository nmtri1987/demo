<template>
  <div class="hello">
    <h1>{{ msg }}</h1>
    <block v-for="book in books" v-bind:key="book.id" v-bind:book="book" />
  </div>
</template>

<script>
import Block from "@/components/Block";
export default {
  name: "library",
  components: { Block },
  data() {
    return {
      name: "Library",
      books: []
    };
  },
  created() {
    //normal case
    this.books = [{ id: 1, name: "Book 1" }, { id: 2, name: "Book 2" }];

    //for slot case
    // this.books = [{ id: 1, name: "Book 1", description: "science book" }, { id: 2, name: "Book 2" }];
  }
};
</script>

<style scoped>
h1,
h2 {
  font-weight: normal;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
