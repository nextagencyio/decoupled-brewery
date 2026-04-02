import { test, expect } from '@playwright/test'

test.describe('Brewery - Non-demo mode', () => {
  test('homepage returns 200 and shows real content', async ({ request }) => {
    const res = await request.get('/')
    expect(res.status()).toBe(200)
    const body = await res.text()
    expect(body).toContain('Craft Beer')
  })

  test('beers page returns 200 and lists beverages', async ({ request }) => {
    const res = await request.get('/beers')
    expect(res.status()).toBe(200)
    const body = await res.text()
    expect(body).toContain('Ironwood IPA')
    expect(body).toContain('Copper Ridge Amber')
  })

  test('events page returns 200 and lists events', async ({ request }) => {
    const res = await request.get('/events')
    expect(res.status()).toBe(200)
    const body = await res.text()
    expect(body).toContain('Spring Tap Takeover')
  })

  test('about page returns 200', async ({ request }) => {
    const res = await request.get('/about')
    expect(res.status()).toBe(200)
    const body = await res.text()
    expect(body).toContain('About')
  })

  test('contact page returns 200', async ({ request }) => {
    const res = await request.get('/contact')
    expect(res.status()).toBe(200)
    const body = await res.text()
    expect(body).toContain('Contact')
  })

  test('beverage detail page returns 200', async ({ request }) => {
    const res = await request.get('/beverages/ironwood-ipa')
    expect(res.status()).toBe(200)
    const body = await res.text()
    expect(body).toContain('Ironwood IPA')
  })

  test('event detail page returns 200', async ({ request }) => {
    const res = await request.get('/events/tap-takeover')
    expect(res.status()).toBe(200)
    const body = await res.text()
    expect(body).toContain('Spring Tap Takeover')
  })
})
