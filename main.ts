function Biratu_eskuinera () {
    basic.showArrow(ArrowNames.North)
    basic.showArrow(ArrowNames.NorthEast)
    basic.showArrow(ArrowNames.East)
    basic.showArrow(ArrowNames.SouthEast)
    basic.showArrow(ArrowNames.South)
    basic.showArrow(ArrowNames.SouthWest)
    basic.showArrow(ArrowNames.West)
    basic.showArrow(ArrowNames.NorthWest)
}
function Biratu_ezkerrera () {
    basic.showArrow(ArrowNames.NorthWest)
    basic.showArrow(ArrowNames.West)
    basic.showArrow(ArrowNames.SouthWest)
    basic.showArrow(ArrowNames.South)
    basic.showArrow(ArrowNames.SouthEast)
    basic.showArrow(ArrowNames.East)
    basic.showArrow(ArrowNames.NorthEast)
    basic.showArrow(ArrowNames.North)
}
basic.forever(function () {
    if (input.isGesture(Gesture.TiltRight)) {
        Biratu_eskuinera()
    }
    if (input.isGesture(Gesture.TiltLeft)) {
        Biratu_ezkerrera()
    }
})
