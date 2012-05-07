//Global Vars
var gVersion = "Version 2.6b" ;
var hcontrast = false ;
var wscreen = false ;
var aTags_distinct = new Array() ;
var newwindow ;
var stayontop = false ;
var ishighticket ;
var snapts = document.lastModified;
var curts;
var vercnt = 0;
var errstatus = 0;
var l2mode = 0;
var shift = 0;

var is_usafe = false;
var is_migrating = false;

var usafe_bases = /(^Aviano|^Spang|^Rams|^Lajes|^Moron|^Izmir|^Ankara|^Inc|^Alcon|^Laken|^Mil|^Cro|^Mol|^Upw|^Wel|^Menwith|^Fairf|^RAF)/ig;
var migrating_bases = /(Patrick|Cape Canaveral|AFTAC|Ascension|Antigua|Barks|Hick|Elmen|vance)/ig;

//Common Issue Vars

var port_security_info = false;
var mail_info = false;
var migration_info = false;
var bb_info = false;
var sharedrive_info = false;
var printer_info = false;

jQuery.fn.updateqs = function () {
	
	var currentTime = new Date();
	var month = currentTime.getMonth() + 1;
	var day = currentTime.getDate();
	var year = currentTime.getFullYear();
	
	var em_name = document.getElementById('user_name').value;
	var adx1 = "Routing to ADX for assistance. TT has been QC’ed by " + em_name + " on " + month + "/" + day + "/" + year;
	var cfp1 = "Transferring to CFP.  TT has been QC’ed by " + em_name + " on " + month + "/" + day + "/" + year;
	var cfp2 = "Transferring to CFP for validation.  TT has been QC’ed by " + em_name + " on " + month + "/" + day + "/" + year;
	var cfp3 = "Transferring to CFP for touch maintenance.  TT has been QC’ed by " + em_name + " on " + month + "/" + day + "/" + year;
	var l21 = "Assigning Level 2 TT to PB for validation and completion.";
	var inosc1 = "Transferring to INE-Event Manager (83 NOS).  TT has been QC’ed by " + em_name + " on " + month + "/" + day + "/" + year;
	var inosc2 = "Transferring to INW-Event Manager (561 NOS).  TT has been QC’ed by " + em_name + " on " + month + "/" + day + "/" + year;
	var afds1 = "Routing to AFDS for assistance.  TT has been QC’ed by " + em_name + " on " + month + "/" + day + "/" + year;
	var ra1 = "Assigning to RA Team for assistance.";
	var cbq = "Routing to CallBack Queue for more information or follow-up.  TT has been QC’ed by " + em_name + " on " + month + "/" + day + "/" + year;
	var ra1 = "Assigning to RA Team for assistance.";
	
	if (em_name != "") {
		$('#quickshot').switchClass("hide", "show", 1);
		document.getElementById('adx1').value = adx1;
		document.getElementById('cfp1').value = cfp1;
		document.getElementById('cfp2').value = cfp2;
		document.getElementById('cfp3').value = cfp3;
		document.getElementById('l21').value = l21;
		document.getElementById('inosc1').value = inosc1;
		document.getElementById('inosc2').value = inosc2;
		document.getElementById('afds1').value = afds1;
		document.getElementById('ra1').value = ra1;
		document.getElementById('cbq').value = cbq;
	}
}
jQuery.fn.populate = function () {
	/*C
	var links = new Array();
	var aTags = new Array();
	$(this).info("Indexing content...");
	for (i = 0; i < document.links.length; i++) {
	//Test for empty links with #
	var patt = /#/g;
	var result = patt.test(document.links[i].href);
	//alert(document.links[i].innerText+'\n');
	if (!result) {
	links.push(document.links[i].href);
	aTags.push(document.links[i].innerText);
	}
	}
	var sorted = aTags.sort();
	for (i = 0; i < sorted.length - 1; i++) {
	if (sorted[i + 1] != sorted[i]) {
	aTags_distinct.push(sorted[i]);
	}
	}
	//$(this).success("Indexing Complete!");
	 */
	/*$(this).info("This page was last modified on: " + document.lastModified);
	//$(this).info("NOTE: These documents are intended for the use of the U.S. Military and Government only.");
	//$(this).info("Do not reproduce or distribute these documents to a wider audience without coordination with the information owner and your unit public affairs office.");*/
	
	$(this).inlineerror("Test");
	
}
jQuery.fn.poptastic = function (url) {
	newwindow = window.open(url, 'name', 'height=600,width=800,resizable=no,scrollbars=yes,toolbar=no,status=no');
	if (window.focus) {
		newwindow.focus()
	}
}
jQuery.fn.splitText = function (st, n) {
	var b = '';
	var s = st;
	while (s.length > n) {
		var c = s.substring(0, n);
		var d = c.lastIndexOf(' ');
		var e = c.lastIndexOf('\n');
		if (e != -1)
			d = e;
		if (d == -1)
			d = n;
		b += c.substring(0, d) + '\n';
		s = s.substring(d + 1);
	}
	return b + s;
}
jQuery.fn.splitDSEText = function (st, n) {
	var b = '';
	var s = st;
	while (s.length > n) {
		var c = s.substring(0, n);
		var d = c.lastIndexOf(' ');
		var e = c.lastIndexOf('\n');
		if (e != -1)
			d = e;
		if (d == -1)
			d = n;
		b += c.substring(0, d) + '\n';
		s = s.substring(d + 1);
	}
	return b + s;
}
jQuery.fn.toggleHigh = function () {
	//alert(document.intro.prioritymatrix.options[document.intro.prioritymatrix.selectedIndex].value);
	var myselect = document.intro.prioritymatrix.options;
	for (var i = 0; i < myselect.length; i++) {
		if (myselect[i].selected == true) {
			if ((document.intro.prioritymatrix.options[i].value == "HIGH") || (document.intro.prioritymatrix.options[i].value == "CRITICAL")) {
				ishighticket = true;
			} else {
				ishighticket = false;
			}
			break;
		}
	}
	if (ishighticket) {
		$('#hightxtpoc').switchClass("hide", "show", 1);
	} else {
		$('#hightxtpoc').switchClass("show", "hide", 1);
	}
}
jQuery.fn.togglePrevtkt = function () {
	var neworexisting;
	for (i = 0; i < document.intro.newexisting.length; i++) {
		if (document.intro.newexisting[i].checked === true) {
			neworexisting = document.intro.newexisting[i].value;
		}
	}
	if (neworexisting == "EXISTING") {
		$('#prevtktdiv').switchClass("hide", "show", 1);
	} else if (neworexisting == "NEW") {
		$('#prevtktdiv').switchClass("show", "hide", 1);
	}
}
jQuery.fn.togglePOCisUser = function () {
	if (document.intro.isuser.checked === false) {
		$('#pocisuser').switchClass("hide", "show", 1);
		document.intro.isaffecteduser.value = "";
	} else {
		$('#pocisuser').switchClass("show", "hide", 1);
		document.intro.isaffecteduser.value = document.intro.poccaller.value;
	}
}
jQuery.fn.toggledsetxt = function () {
	if (document.intro.dsecheckbox.checked === true) {
		$('#dse_field').switchClass("hide", "show", 1);
	} else {
		$('#dse_field').switchClass("show", "hide", 1);
		document.intro.dsecontents.value = "";
	}
}
jQuery.fn.togglecontactinfo = function () {
	if (document.intro.contactcheckbox.checked === true) {
		$('#poccontactinfo').switchClass("hide", "show", 1);
	} else {
		$('#poccontactinfo').switchClass("show", "hide", 1);
		
	}
}
jQuery.fn.toggleLevelII = function () {
	if (document.getElementById('l2-mode').checked === true) {
		if (!l2mode) {
			$('#basic1').hide('blind', 1000);
			$('#basic2').hide('blind', 1000);
			$('#basic3').hide('blind', 1000);
			$('#basic4').hide('blind', 1000);
			l2mode = 1;
			//$(this).success('Level 2 Mode ACTIVATED');
		}
		
	} else {
		if (l2mode) {
			$('#basic1').show('blind', 1000);
			$('#basic2').show('blind', 1000);
			$('#basic3').hide('blind', 1000);
			$('#basic4').hide('blind', 1000);
			l2mode = 0;
			//$(this).success('Level 2 Mode DEACTIVATED');
		}
		
	}
}
jQuery.fn.resetValidation = function () {
	/* USED FOR FORM VALIDATION */
	/*var epi		= new LiveValidation('edipi');
	var base	= new LiveValidation('blist');
	var pissue	= new LiveValidation('ptkt');
	var works		= new LiveValidation('wks');
	var pdesc		= new LiveValidation('probdesc');
	var res	= new LiveValidation('resarea-cust');
	var afftu		= new LiveValidation('isafftuser');
	var poc	= new LiveValidation('poc');
	var dsn	= new LiveValidation('dsn');
	epi.disable();
	epi.enable();
	base.disable();
	base.enable();
	pissue.disable();
	pissue.enable();
	works.disable();
	works.enable();
	pdesc.disable();
	pdesc.enable();
	res.disable();
	res.enable();
	afftu.disable();
	afftu.enable();
	poc.disable();
	poc.enable();
	dsn.disable();
	dsn.enable();
	
	epi.add(Validate.Presence, {
	failureMessage: "EDI PI cannot be empty!"
	});
	epi.add(Validate.Length, {
	is: 10
	});
	epi.add(Validate.Numericality, {
	onlyInteger: true,
	failureMessage: "EDI PI number can only be numbers!"
	});
	base.add(Validate.Presence, {
	failureMessage: "Enter a base!"
	});
	pissue.add(Validate.Presence, {
	failureMessage: "Enter existing TT Numbers!"
	});
	works.add(Validate.Presence, {
	failureMessage: "Enter a workstation!"
	});
	pdesc.add(Validate.Presence, {
	failureMessage: "Please specify an issue!"
	});
	res.add(Validate.Presence, {
	failureMessage: "Don't leave empty!"
	});
	afftu.add(Validate.Presence, {
	failureMessage: "Who's the ticket for?"
	});
	poc.add(Validate.Presence, {
	failureMessage: "Who's calling?"
	});
	dsn.add(Validate.Presence, {
	failureMessage: "Where can the user be reached?"
	});*/
	
	$('#prevtktdiv').removeClass("show", 1);
	$('#hightxtpoc').removeClass("show", 1);
	$('#migration').removeClass("show", 1);
	$('#migration').addClass("hide", 1);
	$('#prevtktdiv').addClass("hide", 1);
	$('#hightxtpoc').addClass("hide", 1);
}
jQuery.fn.inboxReset = function () {
	//Reset What's Shown
	document.inboxgen.inboxgeneratednotes.value = "";
	$('#pocrolediv').addClass("hide", 1);
	$('#primatrixdiv').addClass("hide", 1);
	$('#dsediv').addClass("hide", 1);
	$('#inboxgendiv').addClass("hide", 1);
}
jQuery.fn.genInboxNotes = function () {
	var template = document.inbox.inboxtemplates.options[document.inbox.inboxtemplates.selectedIndex].value;
	var pocuser;
	var pocrole = "not an IAO";
	var priority = "LOW";
	var pocsex;
	var ticket;
	
	var dseraw = document.inbox.inboxdse.value;
	var dsetrim = dseraw.replace(/^\s+/, '');
	var dse = dsetrim.replace(/^\s+/, '');
	var dsetext = $(this).splitDSEText(dseraw, 65);
	var dsesplit = dsetext.split("\n");
	var dseoutput = "";
	
	document.inboxgen.inboxgeneratednotes.value = "";
	
	for (i = 0; i < document.inbox.pocrolesel.length; i++) {
		if (document.inbox.pocrolesel[i].checked == true) {
			pocrole = document.inbox.pocrolesel[i].value;
			if (pocrole != "TA") {
				pocrole = "an " + document.inbox.pocrolesel[i].value;
			} else {
				pocrole = "a " + document.inbox.pocrolesel[i].value;
			}
		}
	}
	for (i = 0; i < document.inbox.inboxprioritymatrix.length; i++) {
		if (document.inbox.inboxprioritymatrix[i].checked == true) {
			priority = document.inbox.inboxprioritymatrix[i].value;
		}
	}
	
	if (template != "null") {
		$('#inboxgendiv').removeClass("hide", 1500);
	}
	
	if (template == "std_template") {
		$('#pocrolediv').removeClass("hide", 1);
		$('#primatrixdiv').removeClass("hide", 1);
		$('#dsediv').removeClass("hide", 1);
		
		document.inboxgen.inboxgeneratednotes.value += "POC is " + pocrole + "\n";
		document.inboxgen.inboxgeneratednotes.value += "Priority Matrix is " + priority + "\n";
		
		if (dse.length > 0) {
			document.inboxgen.inboxgeneratednotes.value += "DSE Received? " + "YES" + "\n\n";
			document.inboxgen.inboxgeneratednotes.value += "Received DSE from POC stating the following:" + "\n\n";
			document.inboxgen.inboxgeneratednotes.value += "|<--------------BEGIN DSE---------------->|" + "\n";
			
			for (i = 0; i < dsesplit.length; i++) {
				document.inboxgen.inboxgeneratednotes.value += "|	 " + dsesplit[i] + "\n";
			}
			
			document.inboxgen.inboxgeneratednotes.value += "|<---------------END DSE----------------->|\n";
		} else {
			document.inboxgen.inboxgeneratednotes.value += "DSE Received? " + "NO" + "\n";
		}
	}
	
	var notes_complete = document.inboxgen.inboxgeneratednotes.value;
	document.inboxgen.inboxgeneratednotes.value = $(this).splitText(notes_complete, 72);
}
jQuery.fn.toggleCommon = function () {
	var myselect = document.intro.calldrivers.options;
	var selected;
	
	var migration = false;
	var dmdc = false;
	var printer = false;
	var wkstation = false;
	
	for (var i = 0; i < myselect.length; i++) {
		if (myselect[i].selected === true) {
			selected = document.intro.calldrivers.options[i].value;
			
			if (i == 1) {
				migration = true;
			} else if (i == 2) {
				printer = true;
			} else if (i == 3) {
				wkstation = true;
			}
			
			if (i > 0) {
				/* Hide everything first */
				$('#migration').switchClass("show", "hide", 1);
				$('#dmdc_info').switchClass("show", "hide", 1);
				
				//$('#location_info').switchClass("show", "hide", 1);
				//$('#device_info_basic').switchClass("show", "hide", 1);
				$('#device_info_adv').switchClass("show", "hide", 1);
				$('#network_info_basic').switchClass("show", "hide", 1);
				$('#network_info_adv').switchClass("show", "hide", 1);
				$('#email_info_basic').switchClass("show", "hide", 1);
				//$('#ws_info').switchClass("show", "hide", 1);
			}
			
			if (i == 0) {
				/* Hide everything first */
				$('#migration').switchClass("show", "hide", 1);
				$('#dmdc_info').switchClass("show", "hide", 1);
				
				//$('#location_info').switchClass("show", "hide", 1);
				//$('#device_info_basic').switchClass("show", "hide", 1);
				$('#device_info_adv').switchClass("show", "hide", 1);
				$('#network_info_basic').switchClass("show", "hide", 1);
				$('#network_info_adv').switchClass("show", "hide", 1);
				$('#email_info_basic').switchClass("show", "hide", 1);
				//$('#ws_info').switchClass("show", "hide", 1);
			}
			break;
		}
	}
	/*
	if (migration) {
	$('#migration').switchClass("hide", "show", 1);
	}else if (dmdc) {
	$('#dmdc_info').switchClass("hide", "show", 1);
	}else if (printer) {
	//$('#device_info_basic').switchClass("hide", "show", 1);
	$('#network_info_basic').switchClass("hide", "show", 1);
	}else if (wkstation) {
	//$('#ws_info').switchClass("hide", "show", 1);
	//$('#device_info_basic').switchClass("hide", "show", 1);
	//$('#network_info_basic').switchClass("hide", "show", 1);
	}
	 */
}
jQuery.fn.dynBase = function () {
	var pbase = document.intro.baseloc.value;
	
	if (usafe_bases.test(pbase)) {
		$('#baseinfo').removeClass('hide', 1);
	} else {
		$('#baseinfo').addClass('hide', 1);
	}
	
	if (migrating_bases.test(pbase)) {
		$('#baseinfo2').removeClass('hide', 1);
	} else {
		$('#baseinfo2').addClass('hide', 1);
	}
	
}
jQuery.fn.dynReset = function () {
	//Reset Fields
	$('#network_info').addClass('hide', 1);
	$('#email_info_exserver').addClass('hide', 1);
	$('#migration').addClass('hide', 1);
	$('#bb_info').addClass('hide', 1);
	$('#share_info').addClass('hide', 1);
	
	//Reset gVars
	port_security_info = false;
	email_info = false;
	migration_info = false;
	bb_info = false;
	sharedrive_info = false;
	printer_info = false;
}
jQuery.fn.dynFields = function () {
	var pdesc = document.intro.identification.value;
	var psec = /(port|sec)/ig;
	var email = /(mail|outlook|exch)/ig;
	var mig = /(mig|migration)/ig;
	var hd = /(herp|derp)/ig;
	var bb = /(blackberry|bb|mobile phone|cell)/ig;
	var sdrive = /(share(drive| drive)|folder)/ig;
	var printr = /(print)/ig;
	
	if (psec.test(pdesc)) {
		$('#network_info').removeClass('hide', 1);
		$('#network_info_ip').addClass('hide', 1);
		if (!printer_info) {
			$('#printer_network_info_ip').addClass('hide', 1);
		}
		port_security_info = true;
	}
	if (mig.test(pdesc)) {
		$('#network_info').removeClass('hide', 1);
		$('#migration').removeClass('hide', 1);
		$('#network_info_ip').addClass('hide', 1);
		if (!printer_info) {
			$('#printer_network_info_ip').addClass('hide', 1);
		}
		migration_info = true;
	}
	if (printr.test(pdesc)) {
		$('#network_info').removeClass('hide', 1);
		$('#network_info_ip').addClass('hide', 1);
		if (!migration_info) {
			$('#network_info_domain').removeClass('hide', 1);
		}
		$('#printer_network_info_ip').removeClass('hide', 1);
		printer_info = true;
	}
	
	if (email.test(pdesc)) {
		$('#email_info_exserver').removeClass('hide', 1);
		email_info = true;
	}
	if (hd.test(pdesc)) {
		$(this).info('Potato!');
	}
	if (bb.test(pdesc)) {
		$('#bb_info').removeClass('hide', 1);
		bb_info = true;
	}
	if (sdrive.test(pdesc)) {
		$('#share_info').removeClass('hide', 1);
		sharedrive_info = true;
	}
}
jQuery.fn.genNotes = function () {
	
	document.intro.generatednotes.value = "";
	
	var niprsipr;
	for (i = 0; i < document.intro.niprsipr.length; i++) {
		if (document.intro.niprsipr[i].checked == true) {
			niprsipr = document.intro.niprsipr[i].value;
		}
	}
	var neworexisting;
	for (i = 0; i < document.intro.newexisting.length; i++) {
		if (document.intro.newexisting[i].checked == true) {
			neworexisting = document.intro.newexisting[i].value;
		}
	}
	
	var iao;
	var cfp;
	var csa;
	var isaffecteduser;
	
	var dseraw = document.intro.dsecontents.value;
	var dsetrim = dseraw.replace(/^\s+/, '');
	var dse = dsetrim.replace(/^\s+/, '');
	var dsetext = $(this).splitDSEText(dseraw, 65);
	var dsesplit = dsetext.split("\n");
	var dseoutput = "";
	
	var tstext = document.intro.troubleshooting.value.split("\n");
	var restext = document.intro.resolution.value.split("\n");
	
	/* USAFE Bases
	
	Aviano
	Spangdahlem
	Ramstein
	Lajes
	Moron
	Izmir
	Ankara
	Incirlik
	Alconbury
	Lakenheath
	Mildenhall
	Croughton
	Molesworth
	Upwood
	Welford
	Menwith Hill
	Fairford
	
	 */
	
	if (document.intro.isiao1[0].checked) {
		iao = "IAO";
	} else {
		iao = "USER";
	}
	//if (document.intro.isiao3.checked)	{csa = "CSA";}else{csa = "";}
	//if (document.intro.isiao4.checked)	{cfp = "CFP";}else{cfp = "";}
	
	//document.intro.generatednotes.value = "This is a " + niprsipr + " issue.\n";
	if (niprsipr == "SIPR") {
		document.intro.generatednotes.value = "*** SIPRNET ticket reference SIPRNET email for more information ***\n"
	}
	
	if (usafe_bases.test(document.intro.baseloc.value)) {
		document.intro.generatednotes.value += "*** USAFE BASE *** \n\n\n";
	}
	
	document.intro.generatednotes.value += "POC is " + iao + "\n"
	if (iao == "IAO") {
		document.intro.generatednotes.value += "->Validated against UDG_Base_IAO Distro List\n";
	}
	document.intro.generatednotes.value += "PM is " + document.intro.prioritymatrix.options[document.intro.prioritymatrix.selectedIndex].value + "\n";
	if ((document.intro.highpoc.value !== "") && (document.intro.prioritymatrix.options[2].selected)) {
		document.intro.generatednotes.value += "HIGH Ticket 24HR POC: " + document.intro.highpoc.value + "\n";
	}
	//document.intro.generatednotes.value += neworexisting + " Issue\n";
	if (neworexisting == "EXISTING") {
		document.intro.generatednotes.value += "Prior Incidents: " + document.intro.prevtkt.value + "\n";
	}
	if (!l2mode) {
		if (document.intro.poccaller.value != "") {
			document.intro.generatednotes.value += "\n";
			document.intro.generatednotes.value += "POC/Caller is " + document.intro.poccaller.value + "\n";
		}
		if (document.intro.dsnnum.value != "") {
			document.intro.generatednotes.value += "DSN: " + document.intro.dsnnum.value + "\n";
		}
		if (document.intro.commnum.value != "") {
			document.intro.generatednotes.value += "Comm: " + document.intro.commnum.value + "\n";
		}
		if (document.intro.isaffecteduser.value != "") {
			document.intro.generatednotes.value += "Affected User is " + document.intro.isaffecteduser.value + "\n";
		}
		if (document.intro.baseloc.value != "") {
			document.intro.generatednotes.value += "Affected BASE: " + document.intro.baseloc.value + "\n";
		}
		
	}
	
	if (document.intro.probdesc.value != "") {
		document.intro.generatednotes.value += "Issue: " + document.intro.probdesc.value + "\n";
	}
	
	/* document.intro.generatednotes.value += "Impact: " + document.intro.numaffected.value + "\n";	*/
	
	if (dse.length > 0) {
		document.intro.generatednotes.value += "Digitally-Signed Email Received? " + "YES" + "\n\n";
		document.intro.generatednotes.value += "Received Digitally-Signed Email stating the following:" + "\n\n";
		document.intro.generatednotes.value += "---BEGIN Digitally-Signed Email---\n";
		
		for (i = 0; i < dsesplit.length; i++) {
			document.intro.generatednotes.value += "|  " + dsesplit[i] + "\n";
		}
		
		document.intro.generatednotes.value += "---END Digitally-Signed Email---\n";
		if (!l2mode) {
			document.intro.generatednotes.value += "\n";
		}
	}
	
	/* Location info req'd on all calls */
	if (!l2mode) {
		if (document.intro.edipi.value != "") {
			document.intro.generatednotes.value += "EDI PI#: " + document.intro.edipi.value + "\n";
			document.intro.generatednotes.value += "\n";
		}
		if (document.intro.loc_building.value != "") {
			document.intro.generatednotes.value += "Building: " + document.intro.loc_building.value + "\n";
		}
		if (document.intro.loc_room.value != "") {
			document.intro.generatednotes.value += "Room: " + document.intro.loc_room.value + "\n";
		}
		if ((document.intro.workstation.value != "") || (document.intro.workstation.value != "NA")) {
			document.intro.generatednotes.value += "Workstation Name: " + document.intro.workstation.value.toUpperCase() + "\n";
		}
		
		if (printer_info) {
			document.intro.generatednotes.value += "Printer IP: " + document.intro.printer_network_ip.value + "\n";
		}
		if (port_security_info) {
			document.intro.generatednotes.value += "MAC Address: " + document.intro.network_mac.value + "\n";
		}
		
		if (bb_info) {
			document.intro.generatednotes.value += "BB Serial: " + document.intro.blackberry_serial.value + "\n";
			document.intro.generatednotes.value += "BB Model: " + document.intro.blackberry_model.value + "\n";
			document.intro.generatednotes.value += "BB Phone: " + document.intro.blackberry_phone.value + "\n";
		}
		
		if (migration_info) {
			document.intro.generatednotes.value += "\n---Migration Issue Notes---\n";
			if (document.intro.ismigrated.checked) {
				document.intro.generatednotes.value += "Account is migrated as 'migration.qmm' is present.\n";
			} else {
				document.intro.generatednotes.value += "Account is NOT migrated as 'migration.qmm' is NOT present.\n";
			}
			if (document.intro.isexchangeupdated.checked) {
				document.intro.generatednotes.value += "Exchange server setting & domain matches Outlook and DRA\n";
			} else {
				document.intro.generatednotes.value += "Exchange server setting & domain does not match Outlook and DRA\n";
			}
			if (document.intro.isworkstationmigrated.checked) {
				document.intro.generatednotes.value += "Workstation resides within AREA52 domain\n";
			} else {
				document.intro.generatednotes.value += "Workstation resides in a NON-AREA52 domain\n";
				document.intro.generatednotes.value += "Therefore, isn't fully migrated\n";
			}
		}
	}
	
	/* COMMON CALL DRIVERS TROUBLESHOOTING */
	
	var calldrivers = document.intro.calldrivers.options;
	var selected;
	var migration = false;
	var dmdc = false;
	for (var i = 0; i < calldrivers.length; i++) {
		if (calldrivers[i].selected == true) {
			selected = document.intro.calldrivers.options[i].value;
			
			document.intro.generatednotes.value += "\n";
			if (i > 0) {
				document.intro.generatednotes.value += "Info\n--------------- \n";
			} else {
				document.intro.generatednotes.value += "Troubleshooting\n--------------- \n";
			}
			
			if (i == 1) {
				document.intro.generatednotes.value += "---Migration Issue Notes---\n";
				if (document.intro.ismigrated.checked) {
					document.intro.generatednotes.value += "Account is migrated as 'migration.qmm' is present.\n";
				} else {
					document.intro.generatednotes.value += "Account is NOT migrated as 'migration.qmm' is NOT present.\n";
				}
				if (document.intro.isexchangeupdated.checked) {
					document.intro.generatednotes.value += "Exchange server setting & domain matches Outlook and DRA\n";
				} else {
					document.intro.generatednotes.value += "Exchange server setting & domain doesn't match Outlook and DRA\n";
				}
				if (document.intro.isworkstationmigrated.checked) {
					document.intro.generatednotes.value += "Workstation resides within AREA52 domain\n";
				} else {
					document.intro.generatednotes.value += "Workstation resides in a NON-AREA52 domain\n";
					document.intro.generatednotes.value += "Therefore, isn't fully migrated\n";
				}
				if (!document.intro.isworkstationmigrated.checked) {
					document.intro.generatednotes.value += "Workstation Domain: " + document.intro.workstationdomain.value + "\n";
				}
			} else if (i == 2) {
				document.intro.generatednotes.value += "[Printer Issue Notes]\n";
				document.intro.generatednotes.value += "Printer Make/Model: " + document.intro.device_model.value + "\n";
				document.intro.generatednotes.value += "Printer IP: " + document.intro.network_ip.value + "\n";
			} else if (i == 3) {
				document.intro.generatednotes.value += "[Workstation Issue Notes]\n";
				document.intro.generatednotes.value += "Workstation Name: " + document.intro.workstation.value.toUpperCase() + "\n";
				document.intro.generatednotes.value += "Workstation Make/Model: " + document.intro.device_model.value + "\n";
				document.intro.generatednotes.value += "Workstation IP (if needed): " + document.intro.network_ip.value + "\n";
			} else if (i == 1000) {
				document.intro.generatednotes.value += "[DMDC Issue Notes]\n";
				document.intro.generatednotes.value += "Work Schedule: " + document.intro.dmdc_work_schedule.value + "\n";
				document.intro.generatednotes.value += "DoD Component: " + document.intro.dmdc_dod_component.value + "\n";
				document.intro.generatednotes.value += "DoD CAC Role: " + document.intro.dmdc_cac_role.value + "\n";
				document.intro.generatednotes.value += "Actively Working Role: " + document.intro.dmdc_role_working.value + "\n";
			} else {
				for (i = 0; i < tstext.length; i++) {
					document.intro.generatednotes.value += tstext[i] + "\n";
				}
				document.intro.generatednotes.value += "--------------- \n";
				break;
			}
			
			if (i > 0) {
				/* Additional Troubleshooting */
				
				if (tstext.length > 0) {
					
					document.intro.generatednotes.value += "\n";
					document.intro.generatednotes.value += "Troubleshooting\n--------------- \n";
					
					for (i = 0; i < tstext.length; i++) {
						document.intro.generatednotes.value += tstext[i] + "\n";
					}
					
					document.intro.generatednotes.value += "--------------- \n";
					
				} else {
					document.intro.generatednotes.value = "Need more troubleshooting information";
				}
			}
			
			break;
		}
	}
	
	document.intro.generatednotes.value += "\n";
	/* Per Ops, DW, Removed 3/12/2012
	if(restext.length > 0){
	//document.intro.generatednotes.value += "In closing... \n--------------- \n";
	for (i = 0; i < restext.length; i++) {
	document.intro.generatednotes.value += restext[i] + "\n";
	}
	}
	 */
	var notes_complete = document.intro.generatednotes.value;
	if (document.intro.troubleshooting.value != "") {
		document.intro.generatednotes.value = $(this).splitText(notes_complete, 55);
		$("#gennotes").switchClass('std-input-notes', 'border-red', 1);
	} else {
		document.intro.generatednotes.value = "Need more troubleshooting information.\nPlease fill out the troubleshooting section";
	}
}
jQuery.fn.shiftRight = function () {
	if (shift) {
		$("#bodyelm").removeClass('content-left', 1);
		$("#bodyelm").addClass('content-right', 1);
	} else {
		$("#bodyelm").addClass('content-right', 1);
		shift = 1;
	}
}
jQuery.fn.shiftLeft = function () {
	if (shift) {
		$("#bodyelm").removeClass('content-right', 1);
		$("#bodyelm").addClass('content-left', 1);
	} else {
		$("#bodyelm").addClass('content-left', 1);
		shift = 1;
	}
}
jQuery.fn.shiftReset = function () {
	$("#bodyelm").removeClass('content-right', 1);
	$("#bodyelm").removeClass('content-left', 1);
	shift = 0;
}
jQuery('#probdesc').bind('change keyup', function () {
	var str = String(jQuery(this).val().toLowerCase());
	if (str.indexOf('"do a barrel') == 0) {
		jQuery('body').addClass('barrel_roll');
		setTimeout(function () {
			jQuery('body').removeClass('barrel_roll');
		}, 4000);
		jQuery(this).unbind('change keyup');
	}
});
jQuery.fn.gReset = function () {
	document.intro.generatednotes.style.height = '50px';
	document.intro.dsecontents.style.height = '50px';
	document.intro.troubleshooting.style.height = '75px';
	$(this).toggleCommon();
	$('#dse_field').switchClass("show", "hide", 1);
	document.intro.dsecontents.value = "";
	var pocinfo = setTimeout("$('#poccontactinfo').switchClass('show', 'hide', 1);", 1000);
}
jQuery.fn.sot = function () {
	if (!stayontop) {
		stayontop = true;
	} else {
		stayontop = false;
	}
	if (stayontop == true) {
		$(this).info('I will stay in front of windows behind me');
		window.onblur = function () {
			self.focus();
		}
	} else {
		$(this).info('I will not stay in front of windows behind me');
		window.onblur = function () {}
	}
}
jQuery.fn.high_contrast = function (enabled) {
	document.getElementById('high-contrast-box').disabled = true;
	document.getElementById('wide-screen-box').disabled = true;
	if (enabled) {
		document.getElementById('page-style').href = 'assets/css/trontastic/jquery-ui-1.8.13.custom.css';
		//document.getElementById('searchbox').size = 37;
		$(".backgrd").switchClass('backgrd', 'backgrd_black', 3000);
		$(".notes").switchClass('notes', 'notes-hc', 3000);
		$(".std-input-notes").switchClass('std-input-notes', 'hc-input-notes', 3000);
		$(".std-input").switchClass('std-input', 'hc-input', 3000);
		$(".accordion").switchClass('accordion', 'accordion-hc', 3000);
		$(".page-header").switchClass('page-header', 'page-header-hc', 3000);
		$(".page-copy").switchClass('page-copy', 'page-copy-hc', 3000);
		$(".options").switchClass('options', 'options-hc', 3000);
		$(".important").switchClass('important', 'important-hc', 3000);
		document.getElementById('high-contrast-box').checked = true;
		hcontrast = true;
		var hce = setTimeout("document.getElementById('high-contrast-box').disabled = false", 3100);
		var wse = setTimeout("document.getElementById('wide-screen-box').disabled = false", 3100);
		//$(".backgrd").toggleClass('backgrd_black', 3000);
		var msg = setTimeout("$(this).success('Beast Mode ENABLED')", 3100);
	} else {
		document.getElementById('page-style').href = 'assets/css/redmond/jquery-ui-1.8.13.custom.css';
		//document.getElementById('searchbox').size = 39;
		$(".hc-input-notes").switchClass('hc-input-notes', 'std-input-notes', 3000);
		$(".notes-hc").switchClass('notes-hc', 'notes', 3000);
		$(".hc-input").switchClass('hc-input', 'std-input', 3000);
		$(".page-header-hc").switchClass('page-header-hc', 'page-header', 3000);
		$(".page-copy-hc").switchClass('page-copy-hc', 'page-copy', 3000);
		$(".backgrd_black").switchClass('backgrd_black', 'backgrd', 3000);
		$(".options-hc").switchClass('options-hc', 'options', 3000);
		$(".important-hc").switchClass('important-hc', 'important', 3000);
		$(".accordion-hc").switchClass('accordion-hc', 'accordion', 3000);
		
		document.getElementById('high-contrast-box').checked = false;
		hcontrast = false;
		var t = setTimeout("document.getElementById('high-contrast-box').disabled = false", 3100);
		var r = setTimeout("document.getElementById('wide-screen-box').disabled = false", 3100);
		//$(".backgrd").toggleClass('backgrd_black', 3000);
		var msg = setTimeout("$(this).success('Beast Mode DISABLED')", 3100);
	}
}
jQuery.fn.wide_screen = function (enabled) {
	document.getElementById('high-contrast-box').disabled = true;
	document.getElementById('wide-screen-box').disabled = true;
	if (enabled) {
		$(".content").switchClass('content', 'content-wide', 1500);
		$(".accordion").switchClass('accordion', 'accordion-wide', 1500);
		document.getElementById('wide-screen-box').checked = true;
		//document.getElementById('searchbox').size = 85;
		wscreen = true;
		var t = setTimeout("document.getElementById('wide-screen-box').disabled = false", 1600);
		var r = setTimeout("document.getElementById('high-contrast-box').disabled = false", 1600);
		var msg = setTimeout("$(this).success('Wide Screen ENABLED')", 1600);
	} else {
		$(".content-wide").switchClass('content-wide', 'content', 1500);
		$(".accordion-wide").switchClass('accordion-wide', 'accordion', 1500);
		document.getElementById('wide-screen-box').checked = false;
		//document.getElementById('searchbox').size = 39;
		wscreen = false;
		var t = setTimeout("document.getElementById('wide-screen-box').disabled = false", 1600);
		var r = setTimeout("document.getElementById('high-contrast-box').disabled = false", 1600);
		var msg = setTimeout("$(this).success('Wide Screen DISABLED')", 1600);
	}
}
jQuery.fn.inlineinfo = function (text) {
	
	document.getElementById('info').innerHTML = '<p><span class="ui-icon ui-icon-info" style="float: left; margin-right: .3em;"></span><strong>Info: </strong>' + text + '</p>';
	$('#info').show("blind", 1500);
	setTimeout(function () {
		$('#info').hide("blind", 1500);
	}, 9000);
}
jQuery.fn.inlineerror = function (text) {
	document.getElementById('error').innerHTML = '<p><span class="ui-icon ui-icon-alert" style="float: left; margin-right: .3em;"></span><strong>Error! </strong>' + text + '</p>';
	errstatus = 1;
	if (errstatus == 0) {
		$('#error').show("blind", 1500);
	}
}
jQuery.fn.info = function (notice_text) {
	$.noticeAdd({
		text : notice_text,
		stay : false,
		type : 'notice'
	});
}
jQuery.fn.error = function (notice_text) {
	$.noticeAdd({
		text : notice_text,
		stay : false,
		type : 'error'
	});
}
jQuery.fn.success = function (notice_text) {
	$.noticeAdd({
		text : notice_text,
		stay : false,
		type : 'success'
	});
}
jQuery.fn.notice = function (notice_text) {
	$.noticeAdd({
		text : notice_text,
		stay : true,
		type : 'info'
	});
}
jQuery.fn.opencop = function () {
	var links = new Array();
	var aTags = new Array();
	for (i = 0; i < document.links.length; i++) {
		//Test for empty links with #
		var patt = /#/g;
		var result = patt.test(document.links[i].href);
		if (!result) {
			links.push(document.links[i].href);
			aTags.push(document.links[i].innerText);
		}
	}
	var searchfor = document.copsearch.searchbox;
	var searchtext = searchfor.value;
	var success = false;
	
	if (searchtext == "What is the answer to life, the universe, and everything?") {
		$(this).info(42);
		return;
	} else if (searchtext == "version") {
		$(this).info(gVersion);
		return;
	} else if (searchtext == "chuck norris") {
		$(this).error('The ESD CoP Index won\'t search for Chuck Norris because it knows you don\'t find Chuck Norris, he finds you.');
		return;
	} else if (searchtext == "enable high-contrast") {
		document.getElementById('high-contrast-box').checked = true;
		$(this).high_contrast(true);
		return;
	} else if (searchtext == "disable high-contrast") {
		document.getElementById('high-contrast-box').checked = false;
		$(this).high_contrast(false);
		return;
	} else if (searchtext == "enable wide-screen") {
		document.getElementById('wide-screen-box').checked = true;
		$(this).wide_screen(true);
		return;
	} else if (searchtext == "disable wide-screen") {
		document.getElementById('wide-screen-box').checked = false;
		$(this).wide_screen(false);
		return;
	} else if (searchtext == "stats") {
		$(this).inlineinfo('::Current Stats::<br/>\n' + gVersion + '<br/>\n' + 'Total Links: ' + document.links.length + '<br/>\n' + 'Total Indexed: ' + aTags.length + ' (' + Math.round((aTags.length / document.links.length) * 100) + '%)' + '<br/>\n' + 'Total Distinct Links: ' + aTags_distinct.length + '<br/>\n' + 'Total Duplicate Links: ' + (aTags.length - aTags_distinct.length));
		return;
	} else if (searchtext == "feedback") {
		$(this).info('Feel free to email your feedback to jonathan.irvin.ctr@us.af.mil');
		return;
	} else if (searchtext == "help") {
		$(this).inlineinfo('Current Commands<br/>\n' + '<br/><br/>' + '"version" - Reveals the current version. Currently it is ' + gVersion + '<br/>\n' + '"(enable/disable) high-contrast" - Changes the page to a more viewable format in low-light conditions' + '<br/>\n' + '"(enable/disable) wide-screen" - Expands the content area to fill the width of your screen' + '<br/>\n');
		return;
	} else if (searchtext != "") {
		for (i = 0; i < aTags.length; i++) {
			if (aTags[i] == searchtext) {
				//alert(aTags[i]);
				//alert(links[i]);
				var patt = /(#section-)[0-9]/g;
				var result = patt.test(links[i]);
				success = true;
				//alert(result);
				if (result) {
					window.open(links[i], "_parent"); //Open in the same window if it's local
				} else {
					window.open(links[i], "_blank"); //Otherwise, open in a new window
					$(this).success("Launching the Document: <a href=\"" + links[i] + "\">Link</a>");
				}
				return;
			} else {
				if ((i == aTags.length - 1) && (!success)) {
					if (document.getElementById('cop-search-box').checked == false) {
						/* $('#search-cop-dialog').dialog('open').css('display', 'inline'); */
						$(this).error("No results found here!  Searching the CoP!");
						window.open("https://esd.us.af.mil/sop/_layouts/OSSSearchResults.aspx?k=" + searchtext + "&cs=This%20Site&u=https%3A%2F%2Fesd.us.af.mil%2Fsop", height = 600, width = 800, resizable = 1, scrollbars = 1, toolbar = 1, status = 1);
					} else {
						window.open("https://esd.us.af.mil/sop/_layouts/OSSSearchResults.aspx?k=" + searchtext + "&cs=This%20Site&u=https%3A%2F%2Fesd.us.af.mil%2Fsop", height = 600, width = 800, resizable = 1, scrollbars = 1, toolbar = 1, status = 1);
					}
					return;
				}
			}
		}
	}
}
$(window).resize(function () {
	$("#section").tabs("option", "position", "center");
	$("#gobutton").button("option", "position", "left");
	$("#resetbutton").button("option", "position", "left");
	$("#popout").button("option", "position", "left");
});
$(function () {
	$('#errmsg').addClass('hide', 0);
	baselist = ["Ahmed Al Jaber AB KW", "Al Dhafra AB UAE", "Al Musnana AB OM", "Al Udeid AB QA", "Ali Al Salem AB KW", "Allen C. Thompson Field, MS", "Alpena County RAP, MI", "Altus AFB, OK", "Andersen AFB", "Andrews AFB, MD", "Ankara AS", "Araxos AB", "Arnold AFB, TN", "Aruba", "Atlantic City ANGB, NJ", "Aviano AB (USAFE)", "Bangor ANGB, ME", "Barksdale AFB, LA", "Barnes ANGB, MA", "Battle Creek ANGB, MI", "Beale AFB, CA", "Bellows AFS, HI", "Bergstrom ARS,TX", "Berry Field ANGB, TN", "Birmingham IAP, AL", "Bitburg AB", "Bolling AFB, DC", "Borinquen AP, PR", "Bradley ANGB, CT", "Brooks City-Base, TX", "Buckley AFB, CO", "Burgas AP", "Burlington IAP, VT", "Byrd Field, VA", "Cannon AFB, NM", "Capital MAP, IL", "Channel Islands ANGS, CA", "Charleston AFB, SC", "Charlotte/Douglas IAP, NC", "Cheong Ju (Chongju) AB, ROK", "Cheyenne MAP, WY", "Clark AB, PL", "Clear AFS, AK", "Columbus AFB, MS", "Comalapa AB", "Comiso AB", "Costa Mesa ANGS", "Creech AFB, NV", "Curacao", "Dannelly Field AGS, AL", "Davis-Monthan AFB, AZ", "Decimomannu AB", "Des Moines IAP, IA", "Dhahr AB SA", "Diego Garcia BIOT", "Dobbins JARB, GA", "Doha IAP QA", "Dover AFB, DE", "Duke Field, FL", "Duluth ANGB, MN", "Dyess AFB, TX", "Ebbing ANGB, AR", "Edwards AFB, CA", "Eglin AFB, FL", "Eielson AFB, AK", "Einsiedlerhof AS", "Ellington Field, TX", "Ellsworth AFB, SD", "Elmendorf AFB, AK", "England AFB, LA", "Eskan Village SA", "F. E. Warren AFB, WY", "Fairchild AFB, WA", "Forbes Field, KS", "Fort Smith MAP, AR", "Fort Wayne IAP, IN", "Fort Worth JRB, TX (Carswell AFB)", "Francis Gabreski ANGB, NY", "Fresno ANGB, CA", "Fujairah IAP UAE", "Galena Airport", "Geilenkirchen AB", "General Mitchell ARS, WI", "George AFB, CA", "Ghedi AB", "Gila Bend AAF, AZ", "Goodfellow AFB, TX", "Gowen Field ANGB, ID", "Grand Forks AFB, ND", "Great Falls IAP, MT", "Griffiss AFB, NY", "Grissom JARB, IN", "Gulfport-Biloxi IAP, MS", "Hahn AB", "Hancock Field ANGB, NY", "Hanscom AFB, MA", "Harrisburg IAP, PA", "Hector IAP, ND", "Hellenkion AB", "Hensley Field/NAS Dallas, TX", "Hickam AFB, HI", "Hill AFB, UT", "Holloman AFB, NM", "Homestead JARB, FL", "Howard AFB", "Hulman RAP, IN", "Hurlburt Field, FL", "Incirlik AB", "Indian Springs AAF, NV", "Izmir AS", "Jacksonville IAP, FL", "Jeddah AB SA", "Joe Foss Field, SD", "Kadena AB, JP", "Keesler AFB, MS", "Keflavik NAS, IC ", "Kegelman AAF, OK", "Kelly AFB, TX", "Key Field, MS", "Khamis Mushayt AB SA", "Khobar Towers SA", "Kimhae (Gimhae) AB, ROK", "King Khalid Military City SA", "Kingsley Field, OR", "Kirtland AFB, NM", "Kulis ANGB, AK", "Kunsan AB, ROK", "Kuwait IAP KW", "Kwangju (Gwangju) AB, ROK", "Lackland AFB, TX", "Lajes Field, AZR", "Lambert-St. Louis IAP, MO", "Langley AFB, VA", "Laughlin AFB, TX", "Lincoln MAP, NE", "Lindsey AS", "Little Rock AFB, AR", "Los Angeles AFB, CA", "Lowry AFB, CO", "Luke AFB, AZ", "MacDill AFB, FL", "Malmstrom AFB, MT", "Mansfield Lahm AP, OH", "Manta AB", "March JARB, CA", "Martin State AP, MD", "Masirah OM", "Mather AFB, CA", "Maxwell-Gunter AFB, AL", "McChord AFB, WA", "McClellan AFB, CA", "McConnell AFB, KS", "McEntire ANGB,SC", "McGhee Tyson ANGB, TN", "McGuire AFB, NJ", "Memphis IAP, TN", "Minneapolis-St. Paul JARS, MN", "Minot AFB, ND", "Misawa AB, JP", "Moffett Field, CA", "Moody AFB, GA", "Morón AB", "Mostar AB", "Mountain Home AFB, ID", "Muharraq BH", "Muñiz ANGB, PR", "Nashville IAP, TN", "Nellis AFB, NV", "New Castle County AP, DE", "New Orleans JRB, LA", "Newark AFB, OH", "Niagara Falls JARS, NY", "North Highlands ANGS, CA", "Offutt AFB, NB", "O'Hare ARS, IL", "Okuma, JP", "Ontario AGS, CA", "Osan AB, ROK", "Other", "Otis ANGB, MA", "Patrick AFB, FL", "Paya Lebar AB, SG", "Pease ANGB, NH", "Peoria AP, IL", "Peterson AFB, CO", "Pittsburgh IAP, PA", "Pittsburgh JARS, PA", "Pope AFB, NC", "Portland IAP, OR", "Prince Sultan AB SA", "Pusan (Busan) AB, ROK", "Quonset State AAP, RI", "RAF Alconbury", "RAF Fairford", "RAF Lakenheath", "RAF Mildenhall", "RAF Molesworth", "RAF Upwood", "Ramstein AB", "Randolph AFB, TX", "Reese AFB, TX", "Reno-Tahoe IAP, NV", "Rhein-Main AB", "Richards-Gebaur ARS, MO", "Richmond IAP, VA", "Rickenbacker ANGB, OH", "Riyadh AB SA", "Robins AFB, GA", "Rosecrans MAP, MO", "Roslyn ANGS, NY", "Sachon AB, ROK", "Salt Lake City IAP, UT", "San Vito del Normanni AS", "Savannah IAP, GA", "Schenectady AP, NY", "Schriever AFB, CO", "Scott AFB, IL", "Seattle ANGB, WA", "Seeb AB OM", "Selfridge ANGB, MI", "Sembach AB", "Seymour Johnson AFB, NC", "Shaheed Mwaffaq AB JO", "Shaikh Isa AB BH", "Shaw AFB, SC", "Shepherd AGS, WV", "Sheppard AFB, TX", "Sioux Gateway AP, IA", "Sky Harbor IAP, AZ", "Soesterberg AB", "Soto Cano AB", "Spangdahlem AB", "Springfield ANGB, OH", "Standiford Field, DY", "Stavanger AB", "Stewart ANGB, NY", "Stratton ANGB, NY", "Suwon AB, ROK", "Tabuk AB SA", "Taegu (Daegu) AB, ROK", "Taif AB SA", "Taszar AB", "Thompson Field ANGB, MS", "Thumrait AB OM", "Tinker AFB, OK", "Toledo Express AP, OH", "Tonopah AFS, NV", "Travis AFB, CA", "Tres Esquinas AB", "Truax Field, WI", "Tucson IAP, AZ", "Tulsa IAP, OK", "Tuzla AB", "Tyndall AFB, FL", "USAF Academy, CO", "Utapao AB, TH", "Vance AFB, OK", "Vandenberg AFB, CA", "Volk Field ANGB, WI", "W.K. Kellogg AP, MI", "Wallace AS, PL", "Westover JARB, MA", "White Oak, MD", "Whiteman AFB, MO", "Will Rogers ANGB, OK", "Williams AFB, AZ", "Willow Grove NAS, PA", "Wright-Patterson AFB, OH", "Yeager AGS, WV", "Yechon (Yecheon) AB, ROK", "Yokota AB, JP", "Youngstown JARS, OH", "Zaragoza AB", "Zweibrucken AB", "Menwith Hill AB"];
	$(this).populate();
	$(this).resetValidation();
	// Accordion
	$(".accordion").accordion({
		header : "h3",
		collapsible : true,
		autoHeight : false
		
	});
	$(".accordion-notes").accordion({
		header : "h3",
		collapsible : false,
		autoHeight : false
		
	});
	// Tabs
	$('#section').tabs({
		cache : true
	});
	
	$('#section').show('slide', 750);
	$('#copheader').show('slide', 750);
	$('#copfooter').show('slide', 750);
	$('#searcharea').show('slide', 750);
	$('#page-options').show('slide', 750);
	$('#shifts').show('slide', 750);
	
	/*$('.tooltip').tipsy({
	title: function () {
	return this.getAttribute('tooltip');
	},
	fade: true,
	delayOut: 1,
	gravity: $.fn.tipsy.autoWE
	});
	$('#searchbox').tipsy({
	title: function () {
	return this.getAttribute('tooltip');
	},
	fade: true,
	gravity: $.fn.tipsy.autoWE
	});
	$('.notes-tooltip-we').tipsy({
	title: function () {
	return this.getAttribute('tooltip');
	},
	fade: true,
	gravity: $.fn.tipsy.autoWE
	});
	$('.notes-tooltip-east').tipsy({
	title: function () {
	return this.getAttribute('tooltip');
	},
	fade: true,
	gravity: 'e'
	});
	$('.notes-tooltip-we-reqs').tipsy({
	title: function () {
	return this.getAttribute('tooltip');
	},
	fade: true,
	trigger: focus,
	gravity: $.fn.tipsy.autoWE
	});
	$('.notes-tooltip-ns').tipsy({
	title: function () {
	return this.getAttribute('tooltip');
	},
	fade: true,
	gravity: $.fn.tipsy.autoWE
	});*/
	$("#generate").button({
		label : "Click Here To Generate Your Notes"
	});
	$("#generate").click(function () {
		$(this).genNotes();
	});
	$(".greset").button({
		label : "Reset All Fields"
	});
	$("#searchbox").autocomplete({
		source : aTags_distinct,
		minLength : 1
	});
	$("#blist").autocomplete({
		source : baselist,
		minLength : 1,
		delay : 0
	});
	$("#gobutton").button({
		label : "Go",
		icons : {
			primary : 'ui-icon-check'
		},
		text : false
	}).click(function () {
		$(this).submit();
		return false;
	});
	
	$("#csearch").submit(function () {
		$(this).opencop();
		return false;
	});
	
	$("#resetbutton").button({
		label : "Reset",
		icons : {
			primary : 'ui-icon-refresh'
		},
		text : false
	}).click(function () {
		document.getElementById('searchbox').value = '';
	});
	$("#popout").button({
		label : "ESD Portal",
		icons : {
			primary : 'ui-icon-extlink'
		}
	}).click(function () {
		$(this).poptastic('https://esd.us.af.mil/sop/_layouts/Authenticate.aspx?Source=%2Fsop%2Fdefault%2Easpx');
	});
	$("#stayontop").button({
		label : "Toggle Stay On Top",
		icons : {
			primary : 'ui-icon-locked'
		}
	}).click(function () {
		$(this).sot();
	});
	$('#search-cop-dialog').dialog({
		autoOpen : false,
		resizable : false,
		modal : true,
		width : 400,
		height : 150,
		overlay : {
			backgroundColor : "#000",
			opacity : 0.75
		},
		buttons : {
			"Search The CoP" : function () {
				window.location = "https://afkm.wpafb.af.mil/Search/VivisimoSearch.aspx?Filter=AE-SC-00-10&v%3Aproject=vse_main&v%3Asources=vse_int_ext_fe&CoPSearch=TRUE&query=" + document.getElementById('searchbox').value + "&";
				$(this).dialog('close');
			},
			"Close" : function () {
				$(this).dialog('close');
			}
		}
	});
	$('#bodyelm').addClass('backgrd', 1500);
	
	//Inbox
	
	$("#stayontop").button({
		label : "Toggle Stay On Top",
		icons : {
			primary : 'ui-icon-locked'
		}
	}).click(function () {
		$(this).sot();
	});
	
	$("#updatename").button({
		label : "Update",
		icons : {
			primary : 'ui-icon-refresh'
		},
		text : true
	}).click(function () {
		$(".content").switchClass('content', 'content-wide', 1500);
		$(".accordion").switchClass('accordion', 'accordion-wide', 1500);
		document.getElementById('wide-screen-box').checked = true;
		//document.getElementById('searchbox').size = 85;
		wscreen = true;
		var t = setTimeout("document.getElementById('wide-screen-box').disabled = false", 1600);
		var r = setTimeout("document.getElementById('high-contrast-box').disabled = false", 1600);
		$(this).updateqs();
	});
	
	//Buttons
	
	$("#niprsipr").buttonset();
	
	$("#newexisting").buttonset();
	
	$("#iao").buttonset();
	
	$("a, button", ".cdrivers").button();
	
	$("a", ".cdrivers").click(function () {
		return true;
	});
	
	$("a, button", ".shift").button();
	
	$("a", ".shift").click(function () {
		return false;
	});
	
	$("#refpass").button({
		label : "New Pass (Experimental)",
		icons : {
			primary : 'ui-icon-refresh'
		},
		text : false
	}).click(function () {
		password();
	});
	
});
