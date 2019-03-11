<template>
  <p>{{message}}</p>
</template>

<script>
export default {
  props: {
    message: {
      type: String,
      default: "hello world",
    }
  }
};
</script>
