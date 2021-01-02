const fetch = require("isomorphic-unfetch");
const fs = require('fs');
const stripHtml = require("string-strip-html");
const dataset = require("./lib/dataset.json");

const outFile = "./lib/indexed-data.json";

async function indexContent() {
  return Promise.all(dataset.map(async (item, i) => {
    const html = await fetch(item.link);
    const text = await html.text();

    item.content = stripHtml(text).result;
  }));
}

indexContent().then(() => {
  fs.writeFile(outFile, JSON.stringify(dataset, null, 2), (err) => {
    if (err) return console.log(err);
    console.log('Writing updated dataset with indexed content to ' + outFile);
  });
});
