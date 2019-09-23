<template>
  <section class="hello">
    <h1>{{ thisBook.name }}</h1>
    <button @click="borrowThis">Get me</button>
    <br />
    <b>{{bookStatus}}</b>
    <br />
    <slot name="description">It's a good book</slot>
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

      //test cuatom event - exchange signal between child-parent
      this.$emit("showBookedItem", this.thisBook.name);
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
