import { Hono } from 'hono'
import { logger } from 'hono/logger'
import { runRSSReader } from './lib/rssReader'

const app = new Hono()

app.use(logger())

runRSSReader()


app.get('/', (c) => {
  return c.text('Hello Hono!')
})

export default app
