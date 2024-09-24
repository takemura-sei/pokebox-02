// /services/pokemonApi.js
export async function fetchData(endpoint) {
  try {
    const { $api } = useNuxtApp();
    const response = await $api.get(endpoint);
    return response.data;
  } catch (error) {
    console.error(`Failed to fetch data from ${endpoint}:`, error);
    throw error;
  }
}
