	function select_all(obj) { 
		var text_val=eval(obj);   
		text_val.focus();   
		text_val.select();   
		if (!document.all) {return;}
		// IE only   
		r = text_val.createTextRange();   
		r.execCommand('copy'); 
		$(this).success("Notes copied to clipboard.  Ready for transfer into Remedy");
		$("#gennotes").switchClass('border-red','std-input-notes',1000);
	}
	function ctc(obj) { 
		var text_val=eval(obj);   
		text_val.focus();   
		text_val.select();   
		if (!document.all) {return;}
		// IE only   
		r = text_val.createTextRange();   
		r.execCommand('copy'); 
		$(this).success("Copied to clipboard.");
	}