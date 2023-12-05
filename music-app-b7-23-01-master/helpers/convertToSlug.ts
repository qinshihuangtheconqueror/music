import unidecode from "unidecode";

export const convertToSlug = (text: string): string => {
  const stringUnidecode = unidecode(text).trim();

  console.log(stringUnidecode);

  const slug: string = stringUnidecode.replace(/\s+/g, "-");

  return slug;
}