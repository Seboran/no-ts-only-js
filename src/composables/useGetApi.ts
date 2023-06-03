import { ref } from "vue";

export const useGetApi = <T>(url: URL) => {
  const response = ref<Record<string, T>>({});
  async function get() {
    response.value = await (await fetch(url, { method: "GET" })).json();
  }
  return {
    response,
    get,
  };
};
