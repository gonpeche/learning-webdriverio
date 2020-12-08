import LoginPage from '../page-objects/pages/LoginPage'
import App from '../page-objects/App'

describe('E2E Tests - Login / Logout Flow', () => {
    it('Should not login with invalid credentials', () => {
        App.openHomepage()
        $('#signin_button').waitForExist()
        $('#signin_button').click()
        LoginPage.pauseShort()
        LoginPage.formIsVisible()
        LoginPage.fillForm('invalid name', 'invalid password')
        LoginPage.submitForm()

        const error = $('.alert-error')
        expect(error).toHaveText('Login and/or password are wrong.')
    })

    it('Should login with valid credentials', () => {
        App.openHomepage()
        $('#signin_button').waitForExist()
        $('#signin_button').click()
        LoginPage.formIsVisible()
        LoginPage.fillForm('username', 'password')
        LoginPage.submitForm()
        $('.nav-tabs').waitForExist()
    })

    it('Should logout from app', () => {
        $('.icon-user').waitForExist()
        $('.icon-user').click()
        $('#logout_link').waitForExist()
        $('#logout_link').click()
        $('#pages-nav').waitForExist()
    })
})
