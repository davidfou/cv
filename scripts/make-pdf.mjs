import { preview } from "vite";
import { chromium } from "playwright";

let server;
let browser;
try {
  server = await preview({ preview: { port: 3000 } });
  browser = await chromium.launch({
    headless: true,
  });

  const page = await browser.newPage();
  await page.goto("http://localhost:3000");
  await page.waitForLoadState("networkidle");
  await page.pdf({
    path: "./build/CV_David_Fournier.pdf",
    format: "A4",
    printBackground: true,
  });
} catch (error) {
  process.exitCode = 1;
  console.error(error);
} finally {
  await browser?.close();
  server?.httpServer.close();
}
