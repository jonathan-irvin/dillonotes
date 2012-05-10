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
var migrating_bases = /(Patrick|Cape Canaveral|AFTAC|Ascension|Antigua|Barks|Hick|Elmen|Vance)/ig;

//Common Issue Vars

var port_security_info = false;
var mail_info = false;
var migration_info = false;
var bb_info = false;
var sharedrive_info = false;
var printer_info = false;

//Global Base List
baselist = ["Ahmed Al Jaber AB KW", "Al Dhafra AB UAE", "Al Musnana AB OM", "Al Udeid AB QA", "Ali Al Salem AB KW", "Allen C. Thompson Field, MS", "Alpena County RAP, MI", "Altus AFB, OK", "Andersen AFB", "Andrews AFB, MD", "Ankara AS", "Araxos AB", "Arnold AFB, TN", "Aruba", "Atlantic City ANGB, NJ", "Aviano AB (USAFE)", "Bangor ANGB, ME", "Barksdale AFB, LA", "Barnes ANGB, MA", "Battle Creek ANGB, MI", "Beale AFB, CA", "Bellows AFS, HI", "Bergstrom ARS,TX", "Berry Field ANGB, TN", "Birmingham IAP, AL", "Bitburg AB", "Bolling AFB, DC", "Borinquen AP, PR", "Bradley ANGB, CT", "Brooks City-Base, TX", "Buckley AFB, CO", "Burgas AP", "Burlington IAP, VT", "Byrd Field, VA", "Cannon AFB, NM", "Capital MAP, IL", "Channel Islands ANGS, CA", "Charleston AFB, SC", "Charlotte/Douglas IAP, NC", "Cheong Ju (Chongju) AB, ROK", "Cheyenne MAP, WY", "Clark AB, PL", "Clear AFS, AK", "Columbus AFB, MS", "Comalapa AB", "Comiso AB", "Costa Mesa ANGS", "Creech AFB, NV", "Curacao", "Dannelly Field AGS, AL", "Davis-Monthan AFB, AZ", "Decimomannu AB", "Des Moines IAP, IA", "Dhahr AB SA", "Diego Garcia BIOT", "Dobbins JARB, GA", "Doha IAP QA", "Dover AFB, DE", "Duke Field, FL", "Duluth ANGB, MN", "Dyess AFB, TX", "Ebbing ANGB, AR", "Edwards AFB, CA", "Eglin AFB, FL", "Eielson AFB, AK", "Einsiedlerhof AS", "Ellington Field, TX", "Ellsworth AFB, SD", "Elmendorf AFB, AK", "England AFB, LA", "Eskan Village SA", "F. E. Warren AFB, WY", "Fairchild AFB, WA", "Forbes Field, KS", "Fort Smith MAP, AR", "Fort Wayne IAP, IN", "Fort Worth JRB, TX (Carswell AFB)", "Francis Gabreski ANGB, NY", "Fresno ANGB, CA", "Fujairah IAP UAE", "Galena Airport", "Geilenkirchen AB", "General Mitchell ARS, WI", "George AFB, CA", "Ghedi AB", "Gila Bend AAF, AZ", "Goodfellow AFB, TX", "Gowen Field ANGB, ID", "Grand Forks AFB, ND", "Great Falls IAP, MT", "Griffiss AFB, NY", "Grissom JARB, IN", "Gulfport-Biloxi IAP, MS", "Hahn AB", "Hancock Field ANGB, NY", "Hanscom AFB, MA", "Harrisburg IAP, PA", "Hector IAP, ND", "Hellenkion AB", "Hensley Field/NAS Dallas, TX", "Hickam AFB, HI", "Hill AFB, UT", "Holloman AFB, NM", "Homestead JARB, FL", "Howard AFB", "Hulman RAP, IN", "Hurlburt Field, FL", "Incirlik AB", "Indian Springs AAF, NV", "Izmir AS", "Jacksonville IAP, FL", "Jeddah AB SA", "Joe Foss Field, SD", "Kadena AB, JP", "Keesler AFB, MS", "Keflavik NAS, IC ", "Kegelman AAF, OK", "Kelly AFB, TX", "Key Field, MS", "Khamis Mushayt AB SA", "Khobar Towers SA", "Kimhae (Gimhae) AB, ROK", "King Khalid Military City SA", "Kingsley Field, OR", "Kirtland AFB, NM", "Kulis ANGB, AK", "Kunsan AB, ROK", "Kuwait IAP KW", "Kwangju (Gwangju) AB, ROK", "Lackland AFB, TX", "Lajes Field, AZR", "Lambert-St. Louis IAP, MO", "Langley AFB, VA", "Laughlin AFB, TX", "Lincoln MAP, NE", "Lindsey AS", "Little Rock AFB, AR", "Los Angeles AFB, CA", "Lowry AFB, CO", "Luke AFB, AZ", "MacDill AFB, FL", "Malmstrom AFB, MT", "Mansfield Lahm AP, OH", "Manta AB", "March JARB, CA", "Martin State AP, MD", "Masirah OM", "Mather AFB, CA", "Maxwell-Gunter AFB, AL", "McChord AFB, WA", "McClellan AFB, CA", "McConnell AFB, KS", "McEntire ANGB,SC", "McGhee Tyson ANGB, TN", "McGuire AFB, NJ", "Memphis IAP, TN", "Minneapolis-St. Paul JARS, MN", "Minot AFB, ND", "Misawa AB, JP", "Moffett Field, CA", "Moody AFB, GA", "Morón AB", "Mostar AB", "Mountain Home AFB, ID", "Muharraq BH", "Muñiz ANGB, PR", "Nashville IAP, TN", "Nellis AFB, NV", "New Castle County AP, DE", "New Orleans JRB, LA", "Newark AFB, OH", "Niagara Falls JARS, NY", "North Highlands ANGS, CA", "Offutt AFB, NB", "O'Hare ARS, IL", "Okuma, JP", "Ontario AGS, CA", "Osan AB, ROK", "Other", "Otis ANGB, MA", "Patrick AFB, FL", "Paya Lebar AB, SG", "Pease ANGB, NH", "Peoria AP, IL", "Peterson AFB, CO", "Pittsburgh IAP, PA", "Pittsburgh JARS, PA", "Pope AFB, NC", "Portland IAP, OR", "Prince Sultan AB SA", "Pusan (Busan) AB, ROK", "Quonset State AAP, RI", "RAF Alconbury", "RAF Fairford", "RAF Lakenheath", "RAF Mildenhall", "RAF Molesworth", "RAF Upwood", "Ramstein AB", "Randolph AFB, TX", "Reese AFB, TX", "Reno-Tahoe IAP, NV", "Rhein-Main AB", "Richards-Gebaur ARS, MO", "Richmond IAP, VA", "Rickenbacker ANGB, OH", "Riyadh AB SA", "Robins AFB, GA", "Rosecrans MAP, MO", "Roslyn ANGS, NY", "Sachon AB, ROK", "Salt Lake City IAP, UT", "San Vito del Normanni AS", "Savannah IAP, GA", "Schenectady AP, NY", "Schriever AFB, CO", "Scott AFB, IL", "Seattle ANGB, WA", "Seeb AB OM", "Selfridge ANGB, MI", "Sembach AB", "Seymour Johnson AFB, NC", "Shaheed Mwaffaq AB JO", "Shaikh Isa AB BH", "Shaw AFB, SC", "Shepherd AGS, WV", "Sheppard AFB, TX", "Sioux Gateway AP, IA", "Sky Harbor IAP, AZ", "Soesterberg AB", "Soto Cano AB", "Spangdahlem AB", "Springfield ANGB, OH", "Standiford Field, DY", "Stavanger AB", "Stewart ANGB, NY", "Stratton ANGB, NY", "Suwon AB, ROK", "Tabuk AB SA", "Taegu (Daegu) AB, ROK", "Taif AB SA", "Taszar AB", "Thompson Field ANGB, MS", "Thumrait AB OM", "Tinker AFB, OK", "Toledo Express AP, OH", "Tonopah AFS, NV", "Travis AFB, CA", "Tres Esquinas AB", "Truax Field, WI", "Tucson IAP, AZ", "Tulsa IAP, OK", "Tuzla AB", "Tyndall AFB, FL", "USAF Academy, CO", "Utapao AB, TH", "Vance AFB, OK", "Vandenberg AFB, CA", "Volk Field ANGB, WI", "W.K. Kellogg AP, MI", "Wallace AS, PL", "Westover JARB, MA", "White Oak, MD", "Whiteman AFB, MO", "Will Rogers ANGB, OK", "Williams AFB, AZ", "Willow Grove NAS, PA", "Wright-Patterson AFB, OH", "Yeager AGS, WV", "Yechon (Yecheon) AB, ROK", "Yokota AB, JP", "Youngstown JARS, OH", "Zaragoza AB", "Zweibrucken AB", "Menwith Hill AB"];	

(function( $ ) {
	$.fn.updateqs = function () {		
		var currentTime = new Date();
		var month = currentTime.getMonth() + 1;
		var day = currentTime.getDate();
		var year = currentTime.getFullYear();		
		var em_name = document.getElementById('user_name').value;
		
		var qc_msg = " Incident has been Quality Checked by " + em_name + " on " + month + "/" + day + "/" + year;
		
		var adx1 = "Routing to ADX for assistance." + qc_msg ;
		var cfp1 = "Transferring to CFP." + qc_msg;
		var cfp2 = "Transferring to CFP for validation." + qc_msg;
		var cfp3 = "Transferring to CFP for touch maintenance." + qc_msg;
		var l21 = "Assigning Level 2 TT to PB for validation and completion.";
		var inosc1 = "Transferring to INE-Event Manager (83 NOS)." + qc_msg;
		var inosc2 = "Transferring to INW-Event Manager (561 NOS)." + qc_msg;
		var afds1 = "Routing to AFDS for assistance." + qc_msg;
		var ra1 = "Assigning to RA Team for assistance." + qc_msg;
		var cbq = "Routing to CallBack Queue for more information or follow-up." + qc_msg;
		var ra1 = "Assigning to RA Team for assistance." + qc_msg;
		
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
	$.fn.splitText = function (st, n) {
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
	$.fn.splitDSEText = function (st, n) {
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
	$.fn.toggleHigh = function () {		
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
	$.fn.togglePrevtkt = function () {
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
	$.fn.togglePOCisUser = function () {
		if (document.intro.isuser.checked === false) {
			$('#pocisuser').switchClass("hide", "show", 1);
			document.intro.isaffecteduser.value = "";
		} else {
			$('#pocisuser').switchClass("show", "hide", 1);
			document.intro.isaffecteduser.value = document.intro.poccaller.value;
		}
	}
	$.fn.toggledsetxt = function () {
		if (document.intro.dsecheckbox.checked === true) {
			$('#dse_field').switchClass("hide", "show", 1);
		} else {
			$('#dse_field').switchClass("show", "hide", 1);
			document.intro.dsecontents.value = "";
		}
	}
	$.fn.togglecontactinfo = function () {
		if (document.intro.contactcheckbox.checked === true) {
			$('#poccontactinfo').switchClass("hide", "show", 1);
		} else {
			$('#poccontactinfo').switchClass("show", "hide", 1);
			
		}
	}
	$.fn.toggleLevelII = function () {
		if (document.getElementById('l2-mode').checked === true) {
			if (!l2mode) {
				$('#basic1').hide('blind', 1000);
				$('#basic2').hide('blind', 1000);
				$('#basic3').hide('blind', 1000);
				$('#basic4').hide('blind', 1000);
				l2mode = 1;			
			}
			
		} else {
			if (l2mode) {
				$('#basic1').show('blind', 1000);
				$('#basic2').show('blind', 1000);
				$('#basic3').hide('blind', 1000);
				$('#basic4').hide('blind', 1000);
				l2mode = 0;			
			}		
		}
	}
	$.fn.resetValidation = function () {		
		$('#prevtktdiv').removeClass("show", 1);
		$('#hightxtpoc').removeClass("show", 1);
		$('#migration').removeClass("show", 1);
		$('#migration').addClass("hide", 1);
		$('#prevtktdiv').addClass("hide", 1);
		$('#hightxtpoc').addClass("hide", 1);
	}
	$.fn.dynBase = function () {
		var pbase = document.intro.baseloc.value;
		
		if (usafe_bases.test(pbase)) {
			$('#usafe_check').switchClass('hide', 'show', 1);
		} else {
			$('#usafe_check').switchClass('show', 'hide', 1);
		}
		
		if (migrating_bases.test(pbase)) {
			$('#migrating_check').switchClass('hide', 'show', 1);
		} else {
			$('#migrating_check').switchClass('show', 'hide', 1);
		}
	}
	$.fn.dynBaseReset = function () {
		$('#usafe_check').switchClass('show', 'hide', 1);
		$('#migrating_check').switchClass('show', 'hide', 1);
	}
	$.fn.dynReset = function () {
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
	$.fn.dynFields = function () {
		var pdesc = document.intro.identification.value;
		var psec = /(port|sec)/ig;
		var email = /(mail|outlook|exchange)/ig;
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
	$.fn.genNotes = function () {
		
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
		
		if (document.intro.isiao1[0].checked) {
			iao = "IAO";
		} else {
			iao = "USER";
		}	

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
		if (sharedrive_info) {
			document.intro.generatednotes.value += "Share Drive Path: " + document.intro.share_path.value + "\n";
		}		
		if (printer_info) {
			document.intro.generatednotes.value += "Printer IP: " + document.intro.printer_network_ip.value + "\n";
		}
		if (port_security_info) {
			document.intro.generatednotes.value += "MAC Address: " + document.intro.network_mac.value + "\n";
		}		
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
		
		document.intro.generatednotes.value += "\n";

		var notes_complete = document.intro.generatednotes.value;
		if (document.intro.troubleshooting.value != "") {
			document.intro.generatednotes.value = $(this).splitText(notes_complete, 55);
			$("#gennotes").switchClass('std-input-notes', 'border-red', 1);
		} else {
			document.intro.generatednotes.value = "Need more troubleshooting information.\nPlease fill out the troubleshooting section";
		}
	}
	$.fn.shiftRight = function () {
		if (shift) {
			$("#bodyelm").removeClass('content-left', 1);
			$("#bodyelm").addClass('content-right', 1);
		} else {
			$("#bodyelm").addClass('content-right', 1);
			shift = 1;
		}
	}
	$.fn.shiftLeft = function () {
		if (shift) {
			$("#bodyelm").removeClass('content-right', 1);
			$("#bodyelm").addClass('content-left', 1);
		} else {
			$("#bodyelm").addClass('content-left', 1);
			shift = 1;
		}
	}
	$.fn.shiftReset = function () {
		$("#bodyelm").removeClass('content-right', 1);
		$("#bodyelm").removeClass('content-left', 1);
		shift = 0;
	}
	$.fn.gReset = function () {
		document.intro.generatednotes.style.height = '50px';
		document.intro.dsecontents.style.height = '50px';
		document.intro.troubleshooting.style.height = '75px';
		$(this).toggleCommon();
		$('#dse_field').switchClass("show", "hide", 1);
		document.intro.dsecontents.value = "";
		var pocinfo = setTimeout("$('#poccontactinfo').switchClass('show', 'hide', 1);", 1000);
	}
	$.fn.high_contrast = function (enabled) {
		document.getElementById('high-contrast-box').disabled = true;
		document.getElementById('wide-screen-box').disabled = true;
		if (enabled) {
			document.getElementById('page-style').href = 'assets/css/trontastic/jquery-ui-1.8.20.custom.css';		
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
			var msg = setTimeout("$(this).success('Beast Mode ENABLED')", 3100);
		} else {
			document.getElementById('page-style').href = 'assets/css/redmond/jquery-ui-1.8.20.custom.css';		
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
			var msg = setTimeout("$(this).success('Beast Mode DISABLED')", 3100);
		}
	}
	$.fn.wide_screen = function (enabled) {
		document.getElementById('high-contrast-box').disabled = true;
		document.getElementById('wide-screen-box').disabled = true;
		if (enabled) {
			$(".content").switchClass('content', 'content-wide', 1500);
			$(".accordion").switchClass('accordion', 'accordion-wide', 1500);
			document.getElementById('wide-screen-box').checked = true;			
			wscreen = true;
			var t = setTimeout("document.getElementById('wide-screen-box').disabled = false", 1600);
			var r = setTimeout("document.getElementById('high-contrast-box').disabled = false", 1600);
			var msg = setTimeout("$(this).success('Wide Screen ENABLED')", 1600);
		} else {
			$(".content-wide").switchClass('content-wide', 'content', 1500);
			$(".accordion-wide").switchClass('accordion-wide', 'accordion', 1500);
			document.getElementById('wide-screen-box').checked = false;			
			wscreen = false;
			var t = setTimeout("document.getElementById('wide-screen-box').disabled = false", 1600);
			var r = setTimeout("document.getElementById('high-contrast-box').disabled = false", 1600);
			var msg = setTimeout("$(this).success('Wide Screen DISABLED')", 1600);
		}
	}
	$.fn.info = function (notice_text) {
		$.noticeAdd({
			text : notice_text,
			stay : false,
			type : 'notice'
		});
	}
	$.fn.error = function (notice_text) {
		$.noticeAdd({
			text : notice_text,
			stay : false,
			type : 'error'
		});
	}
	$.fn.success = function (notice_text) {
		$.noticeAdd({
			text : notice_text,
			stay : false,
			type : 'success'
		});
	}
	$.fn.notice = function (notice_text) {
		$.noticeAdd({
			text : notice_text,
			stay : true,
			type : 'info'
		});
	}
})(jQuery);
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
$(window).resize(function () {
	$("#section").tabs("option", "position", "center");
	$("#gobutton").button("option", "position", "left");
	$("#resetbutton").button("option", "position", "left");
	$("#popout").button("option", "position", "left");
});
jQuery(function ($) {
	$('#errmsg').addClass('hide', 0);	
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
	$('#section').tabs({cache : true});
		
	$('#section').show('slide', 750);
	$('#copheader').show('slide', 750);
	$('#copfooter').show('slide', 750);
	$('#searcharea').show('slide', 750);
	$('#page-options').show('slide', 750);
	$('#shifts').show('slide', 750);	

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

	$('#bodyelm').addClass('backgrd', 1500);
	
	//Inbox
	
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
