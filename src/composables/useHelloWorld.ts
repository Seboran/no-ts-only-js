export const useHelloWorld = () => {
  function afficherText(valeur: string): string {
    return `Hello ${valeur}`;
  }

  return { afficherText };
};
