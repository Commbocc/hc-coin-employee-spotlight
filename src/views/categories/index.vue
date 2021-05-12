<template>
  <div v-if="categories.loading" class="text-center my-5">
    <div class="spinner-border" role="status">
      <span class="visually-hidden">Loading...</span>
    </div>
  </div>

  <div v-else-if="categories.data.length" class="list-group">
    <router-link
      v-for="{ id, fields } in categories.data"
      :key="id"
      :to="{ name: 'Category', params: { categoryId: id } }"
      class="list-group-item list-group-item-action"
    >
      {{ fields.Name }}
    </router-link>
  </div>

  <div v-else class="alert alert-warning" role="alert">
    No categories to show at this time.
  </div>
</template>

<script>
import { categories, fetchCategories } from "../../lib/categories";

export default {
  setup() {
    fetchCategories();

    return { categories };
  },
};
</script>
