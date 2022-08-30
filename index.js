const { returns } = require("chai-spies")

function receivesAFunction(callback) {
    callback()
}

function returnsANamedFunction() {
    return receivesAFunction
}

function returnsAnAnonymousFunction() {
    return () => {}
}