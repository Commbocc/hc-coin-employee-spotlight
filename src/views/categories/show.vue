<template>
  <div v-if="category.loading" class="text-center my-5">
    <div class="spinner-border" role="status">
      <span class="visually-hidden">Loading...</span>
    </div>
  </div>

  <div v-else>
    <nav aria-label="breadcrumb">
      <ol class="breadcrumb">
        <li class="breadcrumb-item">
          <router-link to="/">Categories</router-link>
        </li>
        <li class="breadcrumb-item active" aria-current="page">
          {{ category.data.fields.Name }}
        </li>
      </ol>
    </nav>

    <h1>{{ category.data.fields.Name }}</h1>
    <p v-html="category.data.fields.Description"></p>
    <table class="table">
      <thead>
        <tr>
          <th scope="col">First</th>
          <th scope="col">Last</th>
          <th scope="col">Department</th>
        </tr>
      </thead>

      <tbody>
        <tr v-for="{ id, fields } in nominees.data" :key="id">
          <td>{{ fields.FirstName }}</td>
          <td>{{ fields.LastName }}</td>
          <td>{{ fields.Department }}</td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script>
import { category, fetchCategory } from "../../lib/categories";
import { nominees, fetchNominees } from "../../lib/nominees";

export default {
  props: {
    categoryId: String,
  },

  setup(props) {
    fetchCategory(props.categoryId);
    fetchNominees(props.categoryId);

    return { category, nominees };
  },
};
</script>
