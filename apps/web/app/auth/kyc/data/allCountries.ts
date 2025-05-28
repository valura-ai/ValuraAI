// data/allCountries.ts
const isoCountries = {
  AE: "United Arab Emirates",
  IN: "India",
  US: "United States",
  CN: "China",
  IT: "Italy",
  DE: "Germany",
  FR: "France",
  GB: "United Kingdom",
  JP: "Japan",
  BR: "Brazil",
  RU: "Russia",
  CA: "Canada",
  AU: "Australia",
  // ... add more as needed or use a package like `i18n-iso-countries` to auto-generate
};

const countries = Object.entries(isoCountries).map(([code, name]) => ({
  id: code.toLowerCase(),
  name,
  flagSrc: `https://flagcdn.com/w80/${code.toLowerCase()}.png`,
}));

export default countries;
