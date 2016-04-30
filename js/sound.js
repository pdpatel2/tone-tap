var synth = new Tone.SimpleSynth().toMaster();
var notes = ['C', 'D', 'E', 'F', 'G', 'A', 'B', 'C'];
var oct4 = [90, 88, 67, 86, 78, 77, 188, 190];
var oct5 = [65, 83, 68, 70, 74, 75, 76, 186];
var oct6 = [81, 87, 69, 82, 85, 73, 79, 80];


$(document).keydown(function(e){
    if (e.keyCode) { 
    	playSound(e.keyCode);
    }
});

var playSound = function(keyCode) {
	console.log(keyCode);
	if(oct4.indexOf(keyCode) > -1) {
		var idx = oct4.indexOf(keyCode);
		var note = idx === 7 ? notes[idx] + '4' : notes[idx] + '3'
		synth.triggerAttackRelease(note, "8n")
	}
	if(oct5.indexOf(keyCode) > -1) {
		var idx = oct5.indexOf(keyCode);
		var note = idx === 7 ? notes[idx] + '5' : notes[idx] + '4'
		synth.triggerAttackRelease(note, "8n")
	}
	if(oct6.indexOf(keyCode) > -1) {
		var idx = oct6.indexOf(keyCode);
		var note = idx === 7 ? notes[idx] + '6' : notes[idx] + '5'
		synth.triggerAttackRelease(note, "8n")
	}
};

