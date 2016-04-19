function getCanvasMap (element) {
    var MAP = {
        width: element.offsetWidth,
        height: 700,
        padding: {
            horizontal: 40,
            vertical: 50,
            left: 20,
            right: 20,
            top: 25,
            bottom: 25
        }
    }

    return MAP
} 

export {getCanvasMap};