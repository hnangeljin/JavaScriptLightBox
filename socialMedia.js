$(document).ready(function(){
	var correctPassword = "12345";
	var correctUser = "joe";
	$("form").submit(function(event){
		var user = $("#user").val();
		var password = $("#password").val();
		if(user===""){
			event.preventDefault();
			$('h2').html("Enter the name please")
			$('h2').css("color", "red");
		} else if(password!==correctPassword||user!==correctUser){
			event.preventDefault();
			$('h2').html("Wrong password or user, try again")
			$('h2').css("color", "red");
		}else{
			event.preventDefault();
			window.location.href="newPage.html";


		}
	})
	$('.head').click(function(){
		$('.head').css("color", "blue");
		$('.head').hide(2000);
		$('.head').show(2000);
		

	})
	
	$(".bar-motion").click(function(){
		$(".bar-motion").css({"color":"blue","font-size":"25px"});
	})
	//detect the operating system
	var OSName="Unknown OS";
	if (navigator.appVersion.indexOf("Win")!=-1) OSName="Windows";
	if (navigator.appVersion.indexOf("Mac")!=-1) OSName="MacOS";
	if (navigator.appVersion.indexOf("X11")!=-1) OSName="UNIX";
	if (navigator.appVersion.indexOf("Linux")!=-1) OSName="Linux";
	console.log("Operating system: " + OSName);
	//browser name
	console.log("browser name: " + window.navigator.appName);
	//size of the window
	var windowWidth = window.innerWidth;
	var windowHeight = window.innerHeight;
	console.log("window's width: " + windowWidth);
	console.log("window's height: " + windowHeight);
	$(window).resize(function() {
	  console.log("window's size is changing");
	});
	$('.lightbox-link').click(function(){
		var imageURL = $(this).data("img-url");
		var image = $('#lightbox-image')
		image.attr('src', imageURL);
		centerImage(image);
		$('.lightbox-outer').show();
		$('.lightbox-outer').click(function(){
			// $('.lightbox-outer').hide();
		})
	});
	function centerImage(picture){
		picture.load(function(){
			var page_height = $(window).height();
			console.log(page_height);
			var image_height = picture.height();
			console.log(image_height);
			var image_height_offset = (page_height - image_height)/2;
			picture.css("margin-top", image_height_offset);
		})
	}

	
});