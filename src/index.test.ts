/* eslint-disable ts/no-floating-promises */
import assert from "node:assert"
import { describe, it } from "node:test"

import { app, ranTimes } from "./index.ts"

describe("test", () => {
  it("test", async () => {
    const response = await app.fetch("/test")

    const body = (await response.json()) as { value: number }
    assert.equal(body.value, 1)
    assert.equal(ranTimes.value, 1)
  })
})
