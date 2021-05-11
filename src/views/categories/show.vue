<template>
  <pre>{{ category }}</pre>
  <hr />
  <pre>{{ nominees }}</pre>
</template>

<script>
import { category, fetchCategory } from '../../lib/categories'
import { nominees, fetchNominees } from '../../lib/nominees'

export default {
  props: {
    categoryId: String,
  },

  setup(props) {
    fetchCategory(props.categoryId)
    fetchNominees(props.categoryId)

    return { category, nominees }
  },
}
</script>
