export const trimTransform = (
  str: string,
  action: "toLowerCase" | "toUpperCase"
) => (action === "toLowerCase" ? str.toLowerCase() : str.toUpperCase()).trim();
