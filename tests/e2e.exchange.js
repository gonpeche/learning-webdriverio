import App from '../page-objects/App'
import LoginPage from '../page-objects/pages/LoginPage'
import Navbar from '../page-objects/components/Navbar'

describe('E2E Tests - Currency Exchange', () => {
    it('Should log into application', () => {
        App.openLoginPage()
        LoginPage.login('username', 'password')
        Navbar.insideNavbarIsVisible()
    })

    it('Should make currency exchange', () => {
        $('#pay_bills_tab').waitForExist()
        $('#pay_bills_tab').click()
        $('#tabs > ul > li:nth-child(3) > a').waitForExist()
        $('#tabs > ul > li:nth-child(3) > a').click()
        const currencySelect = $('#pc_currency')
        currencySelect.waitForExist()
        currencySelect.selectByAttribute('value', 'GBP')
        $('#pc_amount').setValue('500')
        $('#pc_inDollars_true').click()
        $('#purchase_cash').click()
        const message = $('#alert_content')
        expect(message).toHaveText(
            'Foreign currency cash was successfully purchased.'
        )
    })
})

