import { reactive } from 'vue'
import airtable from './airtable'

// index
export const categories = reactive({
  error: '',
  loading: false,
  data: [],
})

export async function fetchCategories() {
  categories.loading = true
  try {
    const { data } = await airtable.get(`/categories`, {
      params: {
        // view: 'Grid view',
      },
    })
    categories.data = data.records
  } catch (error) {
    categories.error = error.message
  } finally {
    categories.loading = false
  }
}

// show
export const category = reactive({
  error: '',
  loading: false,
  data: {},
})

export async function fetchCategory(id) {
  category.loading = true
  try {
    const { data } = await airtable.get(`/categories/${id}`)
    category.data = data
  } catch (error) {
    category.error = error.message
  } finally {
    category.loading = false
  }
}
