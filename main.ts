input.onButtonPressed(Button.A, function () {
    Send("CDEFGAB")
})
radio.onReceivedString(function (receivedString) {
    if (!(receivedString == sentString)) {
        radio.sendString(receivedString)
        index = 0
        for (let index2 = 0; index2 < receivedString.length; index2++) {
            if (receivedString.charAt(index) == "C") {
                music.play(music.tonePlayable(262, music.beat(BeatFraction.Whole)), music.PlaybackMode.UntilDone)
            } else if (receivedString.charAt(index) == "D") {
                music.play(music.tonePlayable(294, music.beat(BeatFraction.Whole)), music.PlaybackMode.UntilDone)
            } else if (receivedString.charAt(index) == "E") {
                music.play(music.tonePlayable(330, music.beat(BeatFraction.Whole)), music.PlaybackMode.UntilDone)
            } else if (receivedString.charAt(index) == "F") {
                music.play(music.tonePlayable(349, music.beat(BeatFraction.Whole)), music.PlaybackMode.UntilDone)
            } else if (receivedString.charAt(index) == "G") {
                music.play(music.tonePlayable(392, music.beat(BeatFraction.Whole)), music.PlaybackMode.UntilDone)
            } else if (receivedString.charAt(index) == "A") {
                music.play(music.tonePlayable(440, music.beat(BeatFraction.Whole)), music.PlaybackMode.UntilDone)
            } else if (receivedString.charAt(index) == "B") {
                music.play(music.tonePlayable(494, music.beat(BeatFraction.Whole)), music.PlaybackMode.UntilDone)
            } else {
            	
            }
            index += 1
        }
        basic.pause(200)
    }
})
function Send (thisMessage: string) {
    sentString = thisMessage
    radio.sendString(thisMessage)
}
let sentString = ""
let index = 0
radio.setGroup(66)
index = 0
basic.forever(function () {
	
})
