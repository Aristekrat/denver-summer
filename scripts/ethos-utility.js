$(document).ready(function() { 

var stormCloud = $('<div class="theClouds" id="stormCloud"><span id="theLightning"></span></div>'),
	happyCloud1 = $('<div class="theClouds" id="happyCloud1"></div>'),
	happyCloud2 = $('<div class="theClouds" id="happyCloud2"></div>'); 
	
var spawnClouds = setInterval(createClouds, 10000); 
function createClouds() {
	var cloudTypeSwitch = Math.floor(Math.random() * 3 + 1),
		cloudType = "";
	switch(cloudTypeSwitch) {
		case 1: 
			cloudType = happyCloud1; 
			break; 
		case 2: 
			cloudType = happyCloud2; 
			break; 
		case 3: 
			cloudType = stormCloud; 
			break;
		};
	$(".lightningContainer").append(cloudType); 
	$(".theClouds").animate({
		left: "+=1000", 
	}, 100000, "linear", function() {
		$(this).css("left","14%").remove();
	}); 
} 
createClouds(); 
	
(function CloudStrike(){
	var lightningImageSrcIndex = Math.floor(Math.random() * 3 + 1);
	$("#stormCloud").html('<img src="images/Lightning' + lightningImageSrcIndex + '.png" id="theLightning"/>');
	$("#theLightning").toggle("pulsate",{times: 5.5});
	strikeDuration = lightningImageSrcIndex * 1000 + 4000;
	setTimeout(CloudStrike,strikeDuration);
})();

}); 