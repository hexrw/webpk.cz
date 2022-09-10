import Koa from "koa"
import serve from "koa-static"


const app = new Koa()


app.use(serve("dist/", {
    brotli: true,
}))


app.listen(3000)
