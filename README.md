# hideHeader.js
 Header hiding on scroll.  

## CDN:
 #### Minified:  
 https://cdn.jsdelivr.net/gh/manchakkay/hideHeader@2f37a19/hideHeader.min.js
 #### Default:  
 https://cdn.jsdelivr.net/gh/manchakkay/hideHeader@2f37a19/hideHeader.js  
 
## Usage
 #### Initialization:  
 For initialization use:
 ```
 hideHeader.init(timeout, selector, height, height_func)
 ``` 
 `timeout` - Time to reappear (in millisecons), use `0` to disable reappearance  
 `selector` - HTML selector of header  
 `height` - Header height with "px". Example: "100px".  
 `height_func` - Height calculation function in string format, works if "height" equal to "auto". Required "px" suffix.  
 For example: `"document.querySelector('.header').clientHeight + 'px'"`
 </br>
