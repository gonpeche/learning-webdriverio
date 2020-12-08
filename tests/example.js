import { short, long } from '../lib/timeouts'
import { mobile, tablet, desktop } from '../lib/devices'

describe('First Steps with WebdrverIO', () => {
    it('Assert Attribute', () => {
        browser.url('https://devexpress.github.io/testcafe/example/')
        const button = $('#submit-button')
        button.waitForExist()
        expect(button).toHaveAttrContaining('type', 'submit')
    })

    it('Assert Value', () => {
        const button = $('#populate')
        button.waitForExist()
        expect(button).toHaveValue('Populate')
    })

    it('Save Screenshot', () => {
        browser.saveScreenshot('your-name.png')
    })

    it('Change Browser Viewport', () => {
        browser.setWindowSize(800, 600)
        browser.pause(long)
    })

    it('Set Mobile View', () => {
        browser.setWindowSize(mobile[0], mobile[1])
        browser.pause(short)
    })

    it('Set Tablet View', () => {
        browser.setWindowSize(tablet[0], tablet[1])
        browser.pause(short)
    })

    it('Set Desktop View', () => {
        browser.setWindowSize(desktop[0], desktop[1])
        browser.pause(short)
    })
})