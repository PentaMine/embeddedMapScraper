function validateZoomInput(zoom) {

    if (isNaN(zoom)) {
        throw new Error("latitude must not be NaN");
    }

    if (!Number(zoom)) {
        throw new Error("latitude must be a number");
    }

    if (zoom > 19 || zoom < 1) {
        throw new Error("zoom out of range (1 - 19)");
    }

    if (zoom % 1 != 0) {
        throw new Error("zoom must be a whole number")
    }
}

function validateCoords(lat, lng){

    if (isNaN(lat)) {
        throw new Error("latitude must not be NaN");
    }

    if (isNaN(lng)) {
        throw new Error("longitude must not be Nan");
    }

    if (!Number(lat)) {
        throw new Error("latitude must be a number");
    }

    if (!Number(lng)) {
        throw new Error("longitude must be a number");
    }

    if (lat > 90 || lat < -90) {
        throw new Error("latitude out of range (-90 - 90)");
    }

    if (lng > 180 || lng < -180) {
        throw new Error("latitude out of range (-180 - 180)");
    }
}



module.exports = {
    getIframeSrcCoords: (lat, lng, zoom, satellite) => {
        validateZoomInput(zoom);
        validateCoords(lat, lng);
        return `https://maps.google.com/maps?q=${lat.toFixed(6)}%20${lng.toFixed(6)}&t=${satellite ? "k" : ""}&z=${zoom}&ie=UTF8&iwloc=&output=embed`;
    },
    
    getIframeSrcSearch: (searchTerm, zoom, satellite) => {
        searchTerm = String(searchTerm).replace(" ", "%20");
        validateZoomInput(zoom);
        return `https://maps.google.com/maps?q=${searchTerm}&t=${satellite ? "k" : ""}&z=${zoom}&ie=UTF8&iwloc=&output=embed`;
    },
    
    getIframeSrcNoPin: (satellite, zoom) => {
        return `https://maps.google.com/maps?q=&t=${satellite ? "k" : ""}&z=${zoom}&ie=UTF8&iwloc=&output=embed`;
    }
}
