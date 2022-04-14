# Scss Helpers Library 

  Scss Helpers Lbrary is a toolkit of mixins and classes designated to help you to style your SCSS.

      
## Quick start guide
  
  
## 1. Add the plugin to your project

  ```bash
    npm i @luaguillande/screen-checker
  ```

## 2. Import

#### Option 1: If you are using Nuxt.js you can make a plugin to inject the property $sc to your Vue instances.

  ```checkScreenSize.js
    import checkScreen from '@luaguillande/checkScreenFn.js'

    export default (_context, inject) => {
        if (process.client) {
            inject('sc', checkScreen())
        } 
    }
  ```
  ```nuxt.config.js
    plugins: [
        { src: '~/node_modules/@luaguillande/screen-checker/checkScreenPlugin.js'}
    ]
  ```

#### Option 2: Import as Mixin

If you are not using a Nuxt environment or if you want to import individually into components use the Mixin.

  ```js
    <scprit>
    import checkScreenMixin from '@luaguillande/checkScreenMixin.js'

    export default {
         mixins:[checkScreenMixin]
    }
    </scprit>
  ```

### 2. Usage

Use in html. 

  ```html
  <div :class="{ 'some-class': $sc.desktopAndUp,  'another-class': $sc.tabletAndDown}">
  ```
  
  ```html
  <button :v-html="$sc.largeTabletAndDown ? 'Click here' : 'Click here to send me a text' "></button>
  ```

  ```html
  <img :src="my logo" v-if="$sc.isLargeDesktop"/>
  <div v-else>My Logo Text </div>
  ```
Use in js. 

  ```js
 <script>
  export default{
    methods:{
      myFn(value){
        return this.$sc.largeTabletAndDown ? value : 'Not mobile'
      }
    }
  }
 <script>
  ```


### Note: If you are using as a Nuxt injection use '$sc' else use 'sc'.

 
## Enjoy!

@luaguillande - 31solutions.com

## You might like!

[Scss Helpers Library](https://www.npmjs.com/package/@luaguillande/scss_helpers)