# Embedded map scraper
![npm](https://img.shields.io/npm/v/embedded-map-scraper?color=red)

a scraper to replace the maps javascript API
# how to use
* ## installation
    * run `npm i embedded-map-scraper`
* ## usage
    * ### importing
        * import the package like this `const scraper = require("embedded-map-scraper")` or like this `import scraper from "embedded-map-scraper"` 
    * ### there are three functions available to the user
        1. `getIframeSrcCoords` - gives you an url to use in the src param of the iframe tag with a pin set to specific coordinates
            * PARAMS:
            * lat: latitude of the pin location (Number from -90 to 90)
            * lng: longitude of the pin location (Number from -180 to 180)
            * zoom: level of zoom (Number from 1 to 19)
            * satellite: will the satellite images be used (Boolean)
        2. `getIframeSrcSearch` - gives you an url to use in the src param of the iframe tag with a pin set to a position specified in the search term or nowhere if the location can't be found
            * PARAMS:
            * searchTerm: the search term (String)
            * zoom: level of zoom (Number from 1 to 19)
            * satellite: will the satellite images be used (Boolean)
        1. `getIframeSrcNoPin` - gives you an url to a map with no pin set
            * PARAMS:
            * satellite: will the satellite images be used (Boolean)