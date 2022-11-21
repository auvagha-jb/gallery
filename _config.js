var config = {}

var username = 'Jerry';

var password = 'Yp7GgIxkgmy6urTC';

// Update to have your correct username and password
config.mongoURI = {
    production: `mongodb+srv://${username}:${password}@awssouthafricafree.gtlu6lu.mongodb.net/?retryWrites=true&w=majority`,
    development: `mongodb+srv://${username}:${password}@awssouthafricafree.gtlu6lu.mongodb.net/?retryWrites=true&w=majority`,
    test: `mongodb+srv://${username}:${password}@awssouthafricafree.gtlu6lu.mongodb.net/?retryWrites=true&w=majority`,
}
module.exports = config;
