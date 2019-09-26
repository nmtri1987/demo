<template>
  <div class="hello">
    <div>
      Now we have
      <span>{{counter}} books</span> |
      <span v-if="!!recentlyBooked">The {{recentlyBooked}} is just booked!</span>
      <span v-else>Nothing is booked!</span>
    </div>
  <p v-html="rawHtml"></p>
    <!-- comment to test slot-->
    <block
      v-for="book in books"
      v-bind:key="book.id"
      v-bind:book="book"
      @showBookedItem="showBookedItem"
    />

    <!-- un-comment to test slot-->
    <!-- <block
      @showBookedItem="showBookedItem"
      v-for="book in books"
      v-bind:key="book.id"
      v-bind:book="book"
      v-slot:description
    >{{book.description}}</block>-->
  </div>
</template>

<script>
import Block from "@/components/sample_1/Block";
export default {
  name: "library",
  components: { Block },
  data() {
    return {
      name: "Library",
      books: [],
      recentlyBooked: "",
    };
  },
  methods: {
    showBookedItem: function(name) {
      this.recentlyBooked = name;
    }
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
    this.books = [
      { id: 1, name: "Book 1" },
      { id: 2, name: "Book 2", description: "mafia book" }
    ];

    //un-comment this to test slot case
    // this.books = [{ id: 1, name: "Book 1", description: "science book" }, { id: 2, name: "Book 2" }];
  },
  mounted() {
    //test computed
    let addingBook = setInterval(() => {
      let nextBook = this.counter + 1;
      if (nextBook >= 5) clearInterval(addingBook);
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
