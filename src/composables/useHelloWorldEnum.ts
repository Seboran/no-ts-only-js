type HelloWorldValues = "Les martiens" | "Planète Terre" | "World";

export const useHelloWorldEnum = () => {
  function afficherText(valeur: HelloWorldValues): string {
    switch (valeur) {
      case "Les martiens":
        return "Martian attack";
      case "Planète Terre": {
        return "???";
      }
      case "World": {
        return "Hello world";
      }
    }
  }

  return { afficherTextEnum: afficherText };
};
