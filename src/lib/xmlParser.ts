export function parseRSS(xml: string) {
    const items = [];
    const itemRegex = /<item>([\s\S]*?)<\/item>/g;
    let match;
  
    while ((match = itemRegex.exec(xml)) !== null) {
      const itemXML = match[1];
      const title = extractValue(itemXML, 'title');
      const link = extractValue(itemXML, 'link');
      const description = extractValue(itemXML, 'description');
      const pubDate = extractValue(itemXML, 'pubDate');
      
      items.push({ title, link, description, pubDate });
    }
    
    return items;
  }
  
  function extractValue(xml: string, tag: string): string {
    const regex = new RegExp(`<${tag}>(.*?)<\/${tag}>`);
    const match = regex.exec(xml);
    return match ? match[1] : '';
  }
  