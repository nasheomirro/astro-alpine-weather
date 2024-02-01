export const alpineData = (name: string, callback: () => any) => {
  document.addEventListener("alpine:init", () => {
    window.Alpine.data(name, callback);
  });
};
