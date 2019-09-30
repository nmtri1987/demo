<template>
  <div class="hello">
    <div>
      Now we have
      <span>{{counter}} books</span> |
    </div>
    <block v-for="book in books" v-bind:key="book.id" v-bind:book="book">
      <template v-slot:description>{{book.description}}</template>
      <!-- <template v-slot:review>{{book.review}}</template> -->
    </block>
  </div>
</template>

<script>
import Block from "@/components/slot_sample/Block.slot";
export default {
  name: "library",
  components: { Block },
  data() {
    return {
      name: "Library",
      books: []
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
      {
        id: 1,
        name: "Book 1",
        description: "science book",
        review: "best seller!!"
      },
      { id: 2, name: "Book 2" }
    ];
  },
  mounted() {
    //test computed
    let addingBook = setInterval(() => {
      let nextBook = this.counter + 1;
      if (nextBook >= 5) clearInterval(addingBook);
      this.books.push({
        id: nextBook,
        name: `Book ${nextBook}`,
        review: "recommend"
      });
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
