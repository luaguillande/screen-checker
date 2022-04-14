import checkScreen from '@luaguillande/checkScreenFn.js'

export default (_context, inject) => {
    if (process.client) {
        inject('sc', checkScreen())
    }
}

