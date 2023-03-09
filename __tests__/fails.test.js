/**
 * @jest-environment jsdom
 */
const { expect, it } = require('@jest/globals')
const { axe, toHaveNoViolations } = require('jest-axe')
const { renderPage } = require('./helpers/helpers')

expect.extend(toHaveNoViolations)

it('should demonstrate accessibility FAILS', async () => {
  // const render = () => '<img src="#"/>'

  // pass anything that outputs html to axe
  const html = await renderPage('fails.html')

  expect(await axe(html)).toHaveNoViolations()
})
