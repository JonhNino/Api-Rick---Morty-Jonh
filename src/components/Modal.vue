<template>  
      <div class="card-content">
        <h3 class="title is-size-4">{{ character.name }}</h3>
        <button
          class="button is-success is-rounded is-small"
          @click="showMore(character.id)"
        >Ver más</button>
      </div>
</template>

<script>
export default {
  props: ["character"],
  methods: {
    showMore(id) {
      this.$emit("showModal", id);
    }
  }
};
</script>