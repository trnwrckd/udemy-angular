const { writeFile } = require("fs");
const { argv } = require("yargs");
require("dotenv").config();

const environment = argv.environment;
const isProduction = environment === "prod";

const targetPath = isProduction
  ? `./src/environments/environment.prod.ts`
  : `./src/environments/environment.ts`;

if (!process.env["API_KEY"]) {
  console.error("All the required environment variables were not provided!");
  process.exit(-1);
}
const environmentFileContent = `export const environment ={
    production : ${isProduction},
    apiKey: "${process.env["API_KEY"]}"
};`;

writeFile(targetPath, environmentFileContent, (err) => {
  if (err) console.error(err);
  else console.log("File write ok.");
});
