<template>
  <section class="hello">
    <h1>{{ thisBook.name }}</h1>
    <b>{{ thisBook.description}}</b>
    <br />
    <b>{{bookStatus}}</b>
    <br />
    <button v-show="!isBorrowed" @click="borrowThis">Get me</button>
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

<style css scoped>
*:not(button) {
  line-height: 2rem;
}
a {
  color: #42b983;
}
</style>
