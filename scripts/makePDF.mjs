import { spawn } from "node:child_process";
import waitOn from "wait-on";
import CDP from "chrome-remote-interface";

let server;
try {
  server = spawn("./node_modules/.bin/react-scripts", ["start"]);
  await waitOn({ resources: ["http://localhost:3000"], timeout: 30_000 });
} catch (error) {
  console.error(error);
  process.exitCode = 1;
} finally {
  server?.kill();
}
