<template>
  <section class="hello">
    <h1>{{ book.name }}</h1>
    <slot name="description">{{book.description}}</slot>
  </section>
</template>

<script>
export default {
  name: "block",
  props: {
    book: {
      type: Object,
      default: { id: 0, name: "", description: "" }
    }
  },
  data() {
    return {
      book: this.book
    };
  }
};
</script>

