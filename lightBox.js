$(document).ready(function(){
	$('.lightbox-link').click(function(){
		var imageURL = $(this).data("img-url");
		var image = $('#lightbox-image')
		image.attr('src', imageURL);
		centerImage(image);
		$('.lightbox-outer').show();
		var btnWidth = $(window).width() - 50;
		//close button
		$('.btn').css("margin-left", btnWidth).show();
		//right click disable
		window.oncontextmenu = function () {
   			return false;
		}
		$('.btn').click(function(){
			$('.lightbox-outer').hide();
			//right click enable
			window.oncontextmenu = function () {
   			return true;
		}
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
