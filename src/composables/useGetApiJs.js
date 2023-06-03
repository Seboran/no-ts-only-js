import { ref } from "vue";

/**
 * @template T
 * @param {URL} url 
 */
export const useGetApiJs = (url) => {
  /**
   * @type {import("vue").Ref<Record<string, T>>}
   */
  const response = ref({});
  async function get() {
    response.value = await (await fetch(url, { method: "GET" })).json();
  }
  return {
    response,
    get,
  };
};
