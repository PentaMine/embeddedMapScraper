# Embedded map scraper
[![npm](https://img.shields.io/npm/v/embedded-map-scraper?color=red)](https://www.npmjs.com/package/embedded-map-scraper)

a scraper to partially replace the maps javascript API

# How to use
* ## installation
1. Download the package `npm i embedded-map-scraper`
* ## Usage
    * ### Importing
        1. import the package like this `const scraper = require("embedded-map-scraper")` or like this `import scraper from "embedded-map-scraper"` 
    * ### Functionality
        * `getIframeSrcCoords` - returns a URL intended to be used as the src parameter in the `<iframe>` HTML tag, the iframe will display a map with a pin on the specified coordinates, PARAMS:
            * lat: latitude of the location where the pin is located (Number from -90 to 90)
            * lng: longitude of the location where the pin is located (Number from -180 to 180)
            * zoom: level of zoom (Number from 1 to 19)
            * satellite: will the satellite or map images be used (Boolean)
        * `getIframeSrcSearch` - returns a URL intended to be used as the src parameter in the `<iframe>` HTML tag, the iframe will display a map with a pin on the location of the search term or nowhere if the location can't be found, PARAMS:
            * searchTerm: the search term (String)
            * zoom: level of zoom (Number from 1 to 19)
            * satellite: will the satellite or map images be used (Boolean)
        * `getIframeSrcNoPin` -  returns a URL intended to be used as the src parameter in the `<iframe>` HTML tag, the iframe will display a map with no pin, PARAMS:
            * satellite: will the satellite images be used (Boolean)
            * zoom: level of zoom (Number from 1 to 19)
