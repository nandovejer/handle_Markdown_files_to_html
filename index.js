const initShowdown = (url, ok, ko) => {
  if (showdown === null) return;
  const converter = new showdown.Converter();
  fetch(url)
    .then(response => response.text())
    .then(content => {
      const html = converter.makeHtml(content);
      ok !== null && ok !== undefined
        ? ok(html)
        : console.info(html);
    })
    .catch((error) => {
      ko !== null && ko !== undefined
        ? ko(error)
        : console.error(error);
    });
};



console.log("***********initShowdown************");
const poema = "md/poem_with_spaces.md";
initShowdown(poema, (content) => {
  const scope = document.querySelector('#outputShowdown');
  if (scope === null || content === null) return;
  scope.innerHTML = content;
});
const poemaSinEspacios = "md/poem_without_spaces.md";
initShowdown(poemaSinEspacios, (content) => {
  const scope = document.querySelector('#outputShowdown2');
  if (scope === null || content === null) return;
  scope.innerHTML = content;
});