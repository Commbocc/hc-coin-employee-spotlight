import { reactive } from 'vue'
import airtable from './airtable'

export const nominees = reactive({
  error: '',
  loading: false,
  data: [],
})

export async function fetchNominees(categoryId) {
  nominees.loading = true
  try {
    const { data } = await airtable.get(`/nominees`, {
      params: {
        filterByFormula: `ARRAYJOIN({CategoryID}) = '${categoryId}'`,
        // view: 'Grid view',
      },
    })

    nominees.data = data.records
  } catch (error) {
    // error
    // 401 unauth
    // 422 (Unprocessable Entity)

    nominees.error = error.message
  } finally {
    nominees.loading = false
  }
}
