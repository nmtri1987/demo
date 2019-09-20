<template>
  <div class="hello">
    <div>
      Now we have
      <span>{{counter}}</span> books
    </div>
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
  computed: {
    counter: {
      set: function(value) {},
      get: function() {
        return this.books.length;
      }
    }
  },
  created() {
    //normal case
    this.books = [{ id: 1, name: "Book 1" }, { id: 2, name: "Book 2" }];

    //for slot case
    // this.books = [{ id: 1, name: "Book 1", description: "science book" }, { id: 2, name: "Book 2" }];
  },
  mounted() {
    //add 1 more book to test computed
    let addingBook = setInterval(() => {
      let nextBook = this.counter + 1;
      if (nextBook >= 7) clearInterval(addingBook);
      this.books.push({ id: nextBook, name: `Book ${nextBook}` });
    }, 1000);
  }
};
</script>

<style scoped>
span {
  color: orange;
  font-weight: bold;
}
</style>
