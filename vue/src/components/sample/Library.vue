<template>
  <div class="hello">
    <div>
      Now we have
      <span>{{counter}} books</span>
    </div>
    <p v-html="rawHtml"></p>
    <block v-for="book in books" v-bind:key="book.id" v-bind:book="book" />
  </div>
</template>

<script>
import Block from "@/components/sample/Block";
export default {
  name: "library",
  components: { Block },
  data() {
    return {
      name: "Library",
      books: [],
      rawHtml: '<b>This is basic sample</b>'
    };
  },
  methods: {},
  computed: {
    counter: {
      set: function(value) {},
      get: function() {
        return this.books.length;
      }
    }
  },
  created() {
    this.books = [
      { id: 1, name: "Book 1" },
      { id: 2, name: "Book 2", description: "mafia book" }
    ];
  },
  mounted() {
    //test computed
    let addingBook = setInterval(() => {
      let nextBook = this.counter + 1;
      if (nextBook >= 5) clearInterval(addingBook);
      this.books.push({ id: nextBook, name: `Book ${nextBook}` });
    }, 1200);
  }
};
</script>

<style scoped>
span {
  color: orange;
  font-weight: bold;
}
</style>
