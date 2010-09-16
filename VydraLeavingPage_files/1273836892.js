if (TFSMFlash_VERSION){
	var MM_contentVersion = TFSMFlash_VERSION;
	var plugin = (navigator.mimeTypes && navigator.mimeTypes["application/x-shockwave-flash"]) ? navigator.mimeTypes["application/x-shockwave-flash"].enabledPlugin : 0;
	if ( plugin ) {
		var words = navigator.plugins["Shockwave Flash"].description.split(" ");
			for (var i = 0; i < words.length; ++i) {
				if (isNaN(parseInt(words[i]))) continue;
				var MM_PluginVersion = words[i];
		    }
		var MM_FlashCanPlay = false;
		try{
			MM_FlashCanPlay = parseFloat(MM_PluginVersion) >= parseFloat(MM_contentVersion);
		}catch(e){
			MM_FlashCanPlay = false;
		}
	}
	else if (navigator.userAgent && navigator.userAgent.indexOf("MSIE")>=0 && (navigator.appVersion.indexOf("Win") != -1)) {
		try{
			var flashActiveX = new ActiveXObject("ShockwaveFlash.ShockwaveFlash." + MM_contentVersion);
		}catch(e){
			//axo.AllowScriptAccess = "always"; // throws if player version < 6.0.47
		}
		var MM_FlashCanPlay = (flashActiveX != null)? true : false;

		if(TFSMFlash_FSCOMMAND)	{
			document.write('<SCR' + 'IPT type="text/javascript"\> \n');
			document.write("function "+TFSMFlash_OASADID+"_DoFSCommand(){ window.open('"+TFSMFlash_OASCLICK+"'); }\n");
			document.write('</SCR' + 'IPT\> \n');
			document.write('<SCR' + 'IPT LANGUAGE=VBScript\> \n');
			document.write('on error resume next \n');
			document.write('Sub '+TFSMFlash_OASADID+'_FSCommand(ByVal command, ByVal args)\n');
			document.write(' call   '+TFSMFlash_OASADID+'_DoFSCommand(command, args)\n');
			document.write('end sub\n');
			document.write('</SCR' + 'IPT\> \n');
		}
	}
}
if (typeof(TFSMFlash_PRETAG)=="undefined") TFSMFlash_PRETAG="";
if (typeof(TFSMFlash_POSTTAG)=="undefined") TFSMFlash_POSTTAG="";

if ( MM_FlashCanPlay ){
document.write(TFSMFlash_PRETAG+'<OBJECT classid="clsid:D27CDB6E-AE6D-11cf-96B8-444553540000" codebase="'+TFSMFlash_OASPROTOCOL+'download.macromedia.com/pub/shockwave/cabs/flash/swflash.cab#version='+TFSMFlash_VERSION+',0,0,0" ID="'+TFSMFlash_OASADID+'" '+TFSMFlash_OASDIM+' ALIGN="" alt="'+TFSMFlash_OASALTTEXT+'">');
document.write('<PARAM NAME=movie VALUE="'+TFSMFlash_SWFFILE+'"><PARAM NAME=quality VALUE=high><PARAM NAME="wmode" VALUE="'+TFSMFlash_WMODE+'">'); 
document.write('<PARAM NAME="AllowScriptAccess" value="always">');
document.write('<EMBED src="'+TFSMFlash_SWFFILE+'" quality=high wmode='+TFSMFlash_WMODE+' swLiveConnect=FALSE '+TFSMFlash_OASDIM+' NAME="'+TFSMFlash_OASADID+'" ALIGN="" AllowScriptAccess="always" TYPE="application/x-shockwave-flash" PLUGINSPAGE="'+TFSMFlash_OASPROTOCOL+'www.macromedia.com/go/getflashplayer"  alt="'+TFSMFlash_OASALTTEXT+'">');
document.write('</EMBED></OBJECT>'+TFSMFlash_POSTTAG);
} else if ( TFSMFlash_IMAGEALTERNATE ) {
document.write(TFSMFlash_PRETAG+'<a href="'+TFSMFlash_OASCLICK+'" target="'+TFSMFlash_OASTARGET+'"><IMG SRC="'+TFSMFlash_IMAGEALTERNATE+'" '+TFSMFlash_OASDIM+' BORDER=0 alt="'+TFSMFlash_OASALTTEXT+'"></a>'+ TFSMFlash_POSTTAG);
}
