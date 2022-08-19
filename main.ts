basic.forever(function () {
    led.plotBarGraph(
    pins.analogReadPin(AnalogPin.P1),
    2048
    )
    if (pins.analogReadPin(AnalogPin.P1) == 0) {
        music.playTone(1046, music.beat(BeatFraction.Sixteenth))
    }
})
