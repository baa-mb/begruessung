input.onButtonPressed(Button.A, function () {
    basic.showString("Guten Tag - Taste A und Taste B?")
})
input.onButtonPressed(Button.B, function () {
    music.play(music.builtinPlayableSoundEffect(soundExpression.hello), music.PlaybackMode.UntilDone)
})
basic.forever(function () {
	
})
