import { parseRSS } from "./xmlParser";

// RSSフィードのURL
const rssUrl = "https://news.google.com/rss?hl=ja&gl=JP&ceid=JP:ja";

// RSSフィードを取得する関数
async function fetchRSS(url: string): Promise<string> {
    try {
        const response = await fetch(url);
        if (!response.ok) {
            throw new Error(`Failed to fetch RSS feed: ${response.statusText}`);
        }
        return response.text();
    } catch (error: any) {
        throw new Error(`Error fetching RSS feed: ${error.message}`);
    }
}

// アイテムを表示する関数
function displayItems(items: any[]) {
  items.forEach((item) => {
    console.log(`Title: ${item.title}`);
    console.log(`Link: ${item.link}`);
    console.log(`Description: ${item.description}`);
    console.log(`Publication Date: ${item.pubDate}`);
    console.log("-----------------------------------");
  });
}

// RSSリーダーの実行
export function runRSSReader() {
  fetchRSS(rssUrl)
    .then(parseRSS)
    .then(displayItems)
    .catch((err) => {
      console.error(`Error: ${err.message}`);
    });
}
