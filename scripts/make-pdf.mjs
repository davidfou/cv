import { promisify } from "node:util";
import { chromium } from "playwright";
import httpServer from "http-server";

let server;
let browser;
try {
  server = httpServer.createServer({ root: "./build" });
  await promisify(server.listen.bind(server))(3000);
  browser = await chromium.launch({
    headless: true,
  });

  const page = await browser.newPage();
  await page.goto("http://localhost:3000");
  await page.waitForLoadState("networkidle");
  await page.pdf({
    path: "./dist/CV_David_Fournier.pdf",
    format: "A4",
    printBackground: true,
  });
} catch (error) {
  process.exitCode = 1;
} finally {
  await browser?.close();
  server?.close();
  console.log("end");
}
