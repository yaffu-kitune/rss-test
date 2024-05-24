import fetch from "node-fetch";
import { Readability } from "@mozilla/Radability";
import { JSDOM } from "jsdom";

export async function extractArticleContent(url: string) {
  try {
    // ウェブページの HTML コンテンツを取得
    const response = await fetch(url);
    const html = await response.text();

    // JSDOM を使用して DOM を作成
    const dom = new JSDOM(html, { url });

    // Readability インスタンスを作成
    const reader = new Readability(dom.window.document);

    // 記事の情報を抽出
    const article = reader.parse();

    // 記事のタイトルと本文を表示
    console.log("Title:", article.title);
    console.log("Content:", article.textContent);
  } catch (error) {
    console.error("Error:", error.message);
  }
}
