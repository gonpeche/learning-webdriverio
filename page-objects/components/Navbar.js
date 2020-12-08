import Base from '../Base'

class Navbar extends Base {
    get searchbox() {
        return $('#searchTerm')
    }

    get signInButton() {
        return $('#signin_button')
    }

    get insideNavbar() {
        return $('.nav-tabs')
    }

    get settingsButton() {
        return $('.icon-cog')
    }

    get helpButton() {
        return $('#help_link')
    }

    search(text) {
        this.searchbox.waitForExist()
        this.searchbox.setValue(text)
        browser.keys('Enter')
    }

    signInButtonIsVisible() {
        this.signInButton.waitForExist()
    }

    clickSignIn() {
        this.signInButton.waitForExist()
        this.signInButton.click()
    }

    insideNavbarIsVisible() {
        this.insideNavbar.waitForExist()
    }

    clickSettings() {
        this.settingsButton.waitForExist()
        this.settingsButton.click()
    }

    clickHelp() {

    }
}

export default new Navbar;