function validateUserData(user) {
    return user && user.name ? true : false;
}

module.exports = { validateUserData };
