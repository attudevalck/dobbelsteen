input.onGesture(Gesture.Shake, function () {
    basic.showNumber(randint(0, 7))
    basic.pause(2000)
    basic.clearScreen()
})
