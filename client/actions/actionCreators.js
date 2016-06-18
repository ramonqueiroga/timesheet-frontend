function sendLoginForm(username, password) {
    return {
        type: 'SEND_LOGIN_FORM',
        username,
        password
    }
}