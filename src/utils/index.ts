export const alpineData = (name: string, callback: () => any) => {
  document.addEventListener("alpine:init", () => {
    window.Alpine.data(name, callback);
  });
};

const regionName = new Intl.DisplayNames(["en"], { type: "region" });
export const countryCodeToName = (code: string) => {
  return regionName.of(code);
};
