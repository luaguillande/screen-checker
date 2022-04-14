import checkScreen from './checkScreenFn.js'

export default (_context, inject) => {
    if (process.client) {
        inject('sc', checkScreen())
    }
}

