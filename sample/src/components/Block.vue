<template>
  <section class="hello">
    <h1>{{ thisBook.name }}</h1>
    <button @click="borrowThis">Get me</button>
    <b>{{bookStatus}}</b>
    <slot name="description">{{thisBook.description}}</slot>
  </section>
</template>

<script>
export default {
  name: "block",
  props: {
    book: {
      type: Object
    }
  },
  data() {
    return {
      thisBook: this.book,
      isBorrowed: false,
      bookStatus: "Available to get!!!"
    };
  },
  methods: {
    borrowThis: function() {
      this.isBorrowed = true;
    }
  },
  watch: {
    isBorrowed: function() {
      this.bookStatus = "Borrowed, sorry! :(";
    }
  }
};
</script>

<style scoped>
a {
  color: #42b983;
}
</style>
