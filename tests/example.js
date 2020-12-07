describe('First test', () => {
    it('Load Example Website', () => {
        browser.url('https://grid.layoutit.com/')
        browser.pause(3000)
        expect(browser).toHaveTitle('Interactive CSS Grid Generator | Layoutit Grid')
    })
})