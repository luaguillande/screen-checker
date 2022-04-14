export function checkScreen() {
    var sc = {  
        isLargeDesktop: false,
        isDesktop: false,
        isLargeTablet: false,
        isTablet: false,
        isCell: false,
        largeDesktopAndUp:false, 
        desktopAndUp:false, 
        largeTabletAndUp:false, 
        tabletAndUp:false, 
        cellAndUp:false, 
        largeDesktopAndDown:false, 
        desktopAndDown:false, 
        largeTabletAndDown:false, 
        tabletAndDown:false, 
        cellAndDown:false, 
    }
    
    
    
    function checkerFn(arr, rule) {
        arr.forEach(f => {
            let rules = {
                checker: innerWidth >= f.minSize && innerWidth <= f.maxSize,
                checkerBigger: innerWidth >= f.minSize,
                checkerSmaller: innerWidth <= f.maxSize
            }
            if (rules[rule]) {
                sc[f.names[rule]] = true
            }  else {
                sc[f.names[rule]] = false
            }
        })
    }
    
    function checker() {
        let checker = [
            {
                maxSize: 8200,
                minSize: 1600,
                names: {
                    checker: 'isLargeDesktop',
                    checkerSmaller: 'largeDesktopAndDown',
                    checkerBigger: 'largeDesktopAndUp'
                }
            },
            {
                maxSize: 1599,
                minSize: 1280,
                names: {
                    checker: 'isDesktop',
                    checkerSmaller: 'desktopAndDown',
                    checkerBigger: 'desktopAndUp'
                }
            },
            {
                maxSize: 1279,
                minSize: 1024,
                names: {
                    checker: 'isLargeTablet',
                    checkerSmaller: 'largeTabletAndDown',
                    checkerBigger: 'largeTabletAndUp'
                }
            },
            {
                maxSize: 1023,
                minSize: 768,
                names: {
                    checker: 'isTablet',
                    checkerSmaller: 'tabletAndDown',
                    checkerBigger: 'tabletAndUp'
                }
            },
            {
                maxSize: 767,
                minSize: 250,
                names: {
                    checker: 'isCell',
                    checkerSmaller: 'cellAndDown',
                    checkerBigger: 'cellAndUp'
                }
            },
        ]
        
        checkerFn(checker, 'checker')
        checkerFn(checker, 'checkerBigger')
        checkerFn(checker, 'checkerSmaller')
    }
    
    checker()
    addEventListener('resize', checker)
    
    return sc
}

export default checkScreen;