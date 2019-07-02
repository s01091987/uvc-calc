$(document).ready(function(){
	var arr = $(".counter");
	arr.each( function(element, index) {
		var limit = 0;
		var th = $(this);
		var count = th.attr("data-counter");
		var interval = parseFloat(3000/count);
		setInterval(function counterUp(){
		if (limit <=count) {
			th.find(".counter-place").text(limit);
			limit++;	
		}		
	}, interval/2);
	});
	
	$(".counter-text").equalHeights();

	//анимация кнопок
	//вызываем при скролле страницы	

	var buttons = $(".btn"),
	buttonsOffset = [];

	for (var i = 0; i < buttons.length; i++) {
		buttonsOffset.push($(buttons[i]).position().top - $(window).height());
	}

	//animateButtons(".btn");

	$(window).scroll(function(){

		var winScroll = $(window).scrollTop();		

		$(buttonsOffset).each(function(index, element){
			if (winScroll > element + 100) {

				var borderTop = $(buttons[index]).find(".border-top"),
				borderLeft = $(buttons[index]).find(".border-left"),
				borderBottom = $(buttons[index]).find(".border-bottom"),
				borderRight = $(buttons[index]).find(".border-right");

				borderTop.animate({
					"width": "100%"
				}, 500);
				borderLeft.animate({
					"height": "100%"
				}, 500);
				borderBottom.animate({
					"width": "100%"
				}, 500);
				borderRight.animate({
					"height": "100%"
				}, 500);
			}
			
		});
		
	});

	//magnific popup для кнопок
	$('.btn').magnificPopup({
		type:'inline',
		midClick: true,
		mainClass: 'mfp-fade',
		removalDelay: 350
	});

	//отправка с формы
	$("#callback2").submit(function() {
		$.ajax({
			type: "POST",
			url: "mail.php",
			data: $(this).serialize()
		}).done(function() {
			$(this).find("input").val("");
			alert("Спасибо за заявку! Скоро мы с вами свяжемся.");
			$.magnificPopup.close();
			$("#callback2").trigger("reset");
		});
		return false;
	});

	$("#callback").submit(function() {
		$.ajax({
			type: "POST",
			url: "mail.php",
			data: $(this).serialize()
		}).done(function() {
			$(this).find("input").val("");
			alert("Спасибо за заявку! Скоро мы с вами свяжемся.");
			$.magnificPopup.close();
			$("#callback").trigger("reset");
			var contactUsHeight = parseInt($(".contact-us").css("height"));
			var contactUsFormHeight = parseInt($("#contact-us-form").css("height"));
			$("#contact-us-form").animate({
				"bottom": -contactUsFormHeight
			}, 500);

			setTimeout(function(){
				$(".contact-us").animate({
					"bottom": 0
					}, 500);
			}, 1000);
			});
		return false;
	});

	//анимация блока contact-us
	$(".contact-us").click(function(){
		var contactUsHeight = parseInt($(this).css("height"));
		var contactUsFormHeight = parseInt($("#contact-us-form").css("bottom"));		
		$(this).animate({
			"bottom": -contactUsHeight
		}, 500);

		setTimeout(function(){
			$("#contact-us-form").animate({
				"bottom": 0
				}, 500);
		}, 1000);
	});

	$("#contact-us-form h2 i").click(function(){
		var contactUsHeight = parseInt($(".contact-us").css("height"));
		var contactUsFormHeight = parseInt($("#contact-us-form").css("height"));
		$("#contact-us-form").animate({
			"bottom": -contactUsFormHeight
		}, 500);

		setTimeout(function(){
			$(".contact-us").animate({
				"bottom": 0
				}, 500);
		}, 1000);
	})

	//одинаковая высота заголовков
	$('#services .flex-item h3').equalHeights();

	$('[data-toggle]="tooltip"').tooltip();
	
/*!
 * Simple jQuery Equal Heights
 *
 * Copyright (c) 2013 Matt Banks
 * Dual licensed under the MIT and GPL licenses.
 * Uses the same license as jQuery, see:
 * http://docs.jquery.com/License
 *
 * @version 1.5.1
 */
!function(a){a.fn.equalHeights=function(){var b=0,c=a(this);return c.each(function(){var c=a(this).innerHeight();c>b&&(b=c)}),c.css("height",b)},a("[data-equal]").each(function(){var b=a(this),c=b.data("equal");b.find(c).equalHeights()})}(jQuery);
});	

	