basic.forever(function () {
    led.toggle(2, 2)
    if (pins.analogReadPin(AnalogPin.P1) < 512) {
        music.playTone(1046, music.beat(BeatFraction.Sixteenth))
    }
})
