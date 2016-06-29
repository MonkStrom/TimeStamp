var lastTime;

function stamp() {
	var t = new Date();
	var table = document.getElementById('timetable');
	var rowCount = table.rows.length;
	var row = table.insertRow(rowCount);
	row.insertCell(0).innerHTML=rowCount;
	row.insertCell(1).innerHTML=t.toDateString();
	row.insertCell(2).innerHTML=t.toLocaleTimeString();
	if(lastTime === undefined) {
		row.insertCell(3).innerHTML="0ms";
	}
	else {
		var e = timeConvert(t-lastTime);
		row.insertCell(3).innerHTML=e;
	}
	lastTime = t;
	//document.getElementById("total").innerHTML = "Stamps: "+ rows;//.toLocaleTimeString();
	//x.text = t.toDateString();
}

function timeConvert(diff) {
	var elapsed = "";
	var hrs = Math.floor(diff/3600000);
	if(hrs > 0) {
		elapsed += hrs+"h ";
		diff = diff%3600000;
	}
	var mins = Math.floor(diff/60000);
	if(mins > 0) {
		elapsed += mins+"m ";
		diff = diff%60000;
	}
	var secs = Math.floor(diff/1000);
	if(secs > 0) {
		elapsed += secs+"s ";
		diff = diff%1000;
	}
	var millis = diff;
	elapsed += millis+"ms";
	return elapsed;
}