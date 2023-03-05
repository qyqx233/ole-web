import Koa from 'koa'
// @ts-ignore: next-line
import views  from 'koa-views' 
const json = require('koa-json')
// @ts-ignore: next-line
import onerror1 from 'koa-onerror'
const bodyparser = require('koa-bodyparser')
const logger = require('koa-logger')

import index from './routes/index'
import users from './routes/users'
import olevod from './routes/olevod'

const app = new Koa()
// error handler
onerror1(app)

// middlewares
app.use(bodyparser({
  enableTypes:['json', 'form', 'text']
}))
app.use(json())
app.use(logger())
app.use(require('koa-static')(__dirname + '/public'))

app.use(views(__dirname + '/views', {
  extension: 'pug'
}))

// logger
app.use(async (ctx, next) => {
  const start = new Date()
  await next()
  // const ms = new Date() - start
  // console.log(`${ctx.method} ${ctx.url} - ${ms}ms`)
})

// routes
app.use(index.routes())
app.use(users.routes())
app.use(olevod.routes())

// error-handling
app.on('error', (err, ctx) => {
  console.error('server error', err, ctx)
});

app.listen(9876)

