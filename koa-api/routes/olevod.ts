import koaRouter from 'koa-router'
import Olevod from '../../ole-api'
const router = new koaRouter()

router.prefix('/olevod')

router.get('/search', async (ctx, next) => {
    ctx.body = {
        // @ts-ignore
        alive: await Olevod.getVideos({
            // search: "狂飙",
        }),
    }
})

export default router