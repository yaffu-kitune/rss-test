import { Hono } from 'hono'
import { logger } from 'hono/logger'
import { runRSSReader } from './lib/rssReader'
import { extractArticleContent } from './lib/readability'

const app = new Hono()

app.use(logger())

const targetUrl = "https://example.com"; // 任意のウェブページの URL を指定
extractArticleContent(targetUrl);


app.get('/', (c) => {
  return c.text('Hello Hono!')
})

export default app
