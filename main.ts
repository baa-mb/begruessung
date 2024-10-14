input.onButtonPressed(Button.A, function () {
    basic.showIcon(IconNames.Heart)
})
input.onButtonPressed(Button.B, function () {
    music.play(music.builtinPlayableSoundEffect(soundExpression.hello), music.PlaybackMode.UntilDone)
})
basic.forever(function () {
    basic.showString("Guten Tag - Taste A und Taste B?")
})
