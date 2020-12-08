class App {
    openHomepage() {
        browser.url('http://zero.webappsecurity.com/index.html')
    }

    openLoginPage() {
        browser.url('http://zero.webappsecurity.com/login.html')
    }

    logout() {
        browser.url('http://zero.webappsecurity.com/logout.html')
    }

}

export default new App;