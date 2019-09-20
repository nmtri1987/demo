<template>
  <section class="hello">
    <h1>{{ thisBook.name }}</h1>
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
      thisBook: this.book
    };
  }
};
</script>

<style scoped>
a {
  color: #42b983;
}
</style>
