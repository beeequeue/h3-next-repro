import { H3 } from "h3"

let value = 0
export const ranTimes = {
  get value(): number {
    return value
  },
}

export const app = new H3()
  .use(async (event, next) => {
    const start = Date.now()
    console.log(event.url.pathname)

    await next()

    console.log(`took ${Date.now() - start}ms`)
  })
  .get("/test", async () => {
    value++

    return { value: ranTimes.value }
  })
