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
    //comment this to test for slot case
    this.books = [{ id: 1, name: "Book 1" }, { id: 2, name: "Book 2" }];

    //un-comment this to test slot case
    // this.books = [{ id: 1, name: "Book 1", description: "science book" }, { id: 2, name: "Book 2" }];
  },
  mounted() {
    //test computed
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
