input.onPinPressed(TouchPin.P2, function () {
    music.playTone(1046, music.beat(BeatFraction.Sixteenth))
})
basic.forever(function () {
    if (pins.analogReadPin(AnalogPin.P1) == 0) {
        music.ringTone(262)
    } else {
        music.stopAllSounds()
    }
})
