# Screen Checker

  Vue Plugin to help you to identify the size of the screen without complexity.

      
## Quick start guide
  
  
## 1. Add the plugin to your project

  ```bash
    npm i @luaguillande/screen-checker
  ```

## 2. Import

#### Option 1: If you are using Nuxt.js you can import a plugin to inject the property $sc to your Vue instances.

  ```nuxt.config.js
    plugins: [
        { src: '~/node_modules/@luaguillande/screen-checker/checkScreenPlugin.js'}
    ]
  ```

#### Option 2: Import as Mixin

If you are not using a Nuxt environment or if you want to import individually into components use the Mixin.

  ```js
    <scprit>
    import checkScreenMixin from '@luaguillande/screen-checker/checkScreenMixin.js'

    export default {
         mixins:[checkScreenMixin]
    }
    </scprit>
  ```
  or 

  ```js
    <scprit>
    import checkScreenMixin from '@luaguillande/screen-checker/checkScreenMixin.js'

    Vue.mixins(checkScreenMixin)
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

<br>

### 3. Boundaries

#### Specifics screen size

  Property | Min Size | Max Size
--- | --- | --- 
`isLargeDesktop` | 1600px | 8200px
`isDesktop` | 1280px | 1599px
`isLargeTablet` | 1024px | 1279px
`isTablet` | 768px  | 1023px
`isCell` | 250px | 767px


#### Screen size bigger than 

  Property | Min Size
--- | --- 
`largeDesktopAndUp` | 1600px
`desktopAndUp` | 1280px
`largeTabletAndUp` | 1024px
`tabletAndUp` | 768px  | 1023px
`cellAndUp` | 250px

#### Screen size smaller than 

  Property | Max Size
--- | --- 
`largeDesktopAndDown` | 8200px
`desktopAndDown` | 1599px
`largeTabletAndDown` | 1279px
`tabletAndDown`  | 1023px
`cellAndDown` | 767px


 
## Enjoy!

@luaguillande - 31solutions.com

## You might like!

[Scss Helpers Library](https://www.npmjs.com/package/@luaguillande/scss_helpers)