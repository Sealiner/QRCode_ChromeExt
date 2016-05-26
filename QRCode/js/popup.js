(function () {
	var bg = chrome.extension.getBackgroundPage();
	var qrcode = new QRCode(document.getElementById("qrcode"), {
    	width: 128,
    	height: 128,
    	colorDark : "#000000",
    	colorLight : "#ffffff"
	});
	bg.refreshPopup(function (data) {
		console.log(data);
		qrcode.clear();
		qrcode.makeCode(data.url);
	});
    
})();