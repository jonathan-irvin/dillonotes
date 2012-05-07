var timerID ;

function tzone(tz, os, ds, cl){
	this.ct = new Date(0) ;		// datetime
	this.tz = tz ;		// code
	this.os = os ;		// GMT offset
	this.ds = ds ;		// has daylight savings
	this.cl = cl ;		// font color
}

function UpdateClocks(){	

	var ct = new Array(
		new tzone('PDT: ',   -8,   1, 'violet'),
		new tzone('MDT: ',   -7,   1, 'cyan'),
		new tzone('CDT: ',   -6,   1, 'yellow'),
		new tzone('EDT: ',   -5,   1, '#FFAA00'),
		new tzone('HDT: ',   -10,  0, 'lime'),
		new tzone('USAFE: ',  1,   1, 'pink'),
		new tzone('GUAM:  ',  10,   0, 'red'),
		new tzone('ZULU: ',   0,   0, '#FFFFFF'),
		new tzone('JAPAN: ',  9,   0, 'orange'),
		new tzone('AFGAN: ',  4.5, 1, '#C0C0C0')		
	) ;

	var dt = new Date() ;	// [GMT] time according to machine clock
	var startDST = new Date(dt.getFullYear(), 3, 11) ;
	while (startDST.getDay() != 0)
		startDST.setDate(startDST.getDate() + 1) ;
	var endDST = new Date(dt.getFullYear(), 11, 4) ;
	while (endDST.getDay() != 0)
		endDST.setDate(endDST.getDate() - 1) ;
	var ds_active ;		// DS currently active
	if (startDST < dt && dt < endDST)
		ds_active = 1 ;
	else
		ds_active = 0 ;

	// Adjust each clock offset if that clock has DS and in DS.

	for(n=0 ; n<ct.length ; n++)
		if (ct[n].ds == 1 && ds_active == 1) ct[n].os++ ;

	// compensate time zones
	gmdt = new Date() ;
	for (n=0 ; n<ct.length ; n++)
		ct[n].ct = new Date(gmdt.getTime() + ct[n].os * 3600 * 1000) ;

	document.all.Clock0.innerHTML =
		'<font color="' + ct[0].cl + '">' + ct[0].tz + ClockString(ct[0].ct) + '</font>' ;

	document.all.Clock1.innerHTML =
		'<font color="' + ct[1].cl + '">' + ct[1].tz + ClockString(ct[1].ct) + '</font>' ;

	document.all.Clock2.innerHTML =
		'<font color="' + ct[2].cl + '">' + ct[2].tz + ClockString(ct[2].ct) + '</font>' ;

	document.all.Clock3.innerHTML =
		'<font color="' + ct[3].cl + '">' + ct[3].tz + ClockString(ct[3].ct) + '</font>' ;

	document.all.Clock4.innerHTML =
		'<font color="' + ct[4].cl + '">' + ct[4].tz + ClockString(ct[4].ct) + '</font>' ;

	document.all.Clock5.innerHTML =
		'<font color="' + ct[5].cl + '">' + ct[5].tz + ClockString(ct[5].ct) + '</font>' ;

	document.all.Clock6.innerHTML =
		'<font color="' + ct[6].cl + '">' + ct[6].tz + ClockString(ct[6].ct) + '</font>' ;

	document.all.Clock7.innerHTML =
		'<span style="font-size:13px"><font color="' + ct[7].cl + '">' + '<strong>' + ct[7].tz + ClockString(ct[7].ct) + '</strong></font></span>' ;

	document.all.Clock8.innerHTML =
		'<font color="' + ct[8].cl + '">' + ct[8].tz + ClockString(ct[8].ct) + '</font>' ;

	document.all.Clock9.innerHTML =
		'<font color="' + ct[9].cl + '">' + ct[9].tz + ClockString(ct[9].ct) + '</font>' ;

	timerID = window.setTimeout("UpdateClocks()", 1001) ;
}



function ClockString(dt)

{
	var stemp, ampm ;

	var dt_year   = dt.getUTCFullYear() ;
	var dt_month  = dt.getUTCMonth() + 1 ;
	var dt_day    = dt.getUTCDate() ;
	var dt_hour   = dt.getUTCHours()  ;
	var dt_minute = dt.getUTCMinutes() ;
	var dt_second = dt.getUTCSeconds() ;


	dt_year = dt_year.toString() ;
	ampm = '';

	/*
	if (0 <= dt_hour && dt_hour < 12)
	{
		ampm = 'AM' ;
		if (dt_hour == 0) dt_hour = 12 ;
	} else {
		ampm = 'PM' ;
		dt_hour = dt_hour - 12 ;
		if (dt_hour == 0) dt_hour = 12 ;
	}
	*/

	if (dt_minute < 10)
		dt_minute = '0' + dt_minute ;

	if (dt_second < 10)
		dt_second = '0' + dt_second ;


	stemp = dt_month + '/' + dt_day + '/' + dt_year.substr(2,2) ;
	stemp = stemp + ' ' + dt_hour + ":" + dt_minute + ":" + dt_second + ' ' + ampm ;
	return stemp ;
}

function sDate(dt)

{
	var dt = new Date() ;
	var stemp, ampm ;

	var dt_year   = dt.getUTCFullYear() - 1900;
	var dt_month  = dt.getUTCMonth() + 1 ;
	var dt_day    = dt.getUTCDate() ;
	var dt_hour   = dt.getUTCHours() ;
	var dt_minute = dt.getUTCMinutes() ;
	var dt_second = dt.getUTCSeconds() ;


	dt_year = dt_year.toString() ;
	ampm = '';

	/*
	if (0 <= dt_hour && dt_hour < 12)
	{
		ampm = 'AM' ;
		if (dt_hour == 0) dt_hour = 12 ;
	} else {
		ampm = 'PM' ;
		dt_hour = dt_hour - 12 ;
		if (dt_hour == 0) dt_hour = 12 ;
	}
	*/

	if (dt_month < 10)
		dt_month = '0' + dt_month ;

	if (dt_day < 10)
		dt_day = '0' + dt_day ;

	if (dt_hour < 10)
		dt_hour = '0' + dt_hour ;

	if (dt_minute < 10)
		dt_minute = '0' + dt_minute ;

	if (dt_second < 10)
		dt_second = '0' + dt_second ;


	//stemp = dt_month + '/' + dt_day + '/' + dt_year.substr(2,2) ;

	stemp = 'Current Stardate ' + dt_year + dt_month + '.' + dt_day;
	//stemp = 'Stardate ' + stemp + ' ' + dt_hour + ":" + dt_minute + ":" + dt_second + ' ' + ampm ;
	return stemp ;
}