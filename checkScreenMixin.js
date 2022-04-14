import checkScreen from './checkScreenFn.js'

var checkScreenMixin = {
    data: () => ({
        sc: {},
    }),
    mounted() {
        this.sc = checkScreen()
    }
}

export default checkScreenMixin