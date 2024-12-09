const path = require("node:path");
const { run } = require("./mermaid-cli/src/bundle");

async function main() {
  const input = path.join(process.cwd(), "src/flowchart.md");
  const output = path.join(process.cwd(), "src/flowchart.png");
  await run(input, output);
}

main()
  .then(() => process.exit(0))
  .catch((e) => {
    console.error(e);
    process.exit(1);
  });
