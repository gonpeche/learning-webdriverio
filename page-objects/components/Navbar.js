import Base from '../Base'

class Navbar extends Base {
    get signInButton() {
        return $('#signin_button')
    }

    get insideNavbar() {
        return $('.nav-tabs')
    }

    clickSignIn() {
        this.signInButton.waitForExist()
        this.signInButton.click()
    }

    signInButtonIsVisible() {
        this.signInButton.waitForExist()
    }

    insideNavbarIsVisible() {
        this.insideNavbar.waitForExist()
    }
}

export default new Navbar;