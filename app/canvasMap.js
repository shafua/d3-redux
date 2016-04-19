function getCanvasMap (element, bricksQuantity, typesQuantity) {
    var MAP = {
        width: 500,
        height: 500,
        padding: {
            horizontal: 40,
            vertical: 50,
            left: 20,
            right: 20,
            top: 25,
            bottom: 25
        }
    }

    MAP.elements = {
        barHegiht: MAP.height / bricksQuantity
    }

    return MAP
} 

export {getCanvasMap};