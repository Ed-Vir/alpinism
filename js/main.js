jQuery("document").ready(function($){
 
	var nav = $('.mnu');
// CAROUSEL________________________________________________ 	
 	$('.owl-carousel').owlCarousel({
   		items: 6,
        loop:false,
        pagination: true,
        slideSpeed: 700,
        paginationSpeed: 700,
        rewindSpeed: 700,
        lazyLoad: false,
        nav: true,
        autoHeight: true,
        margin: 2,
    	rewindNav : true,
    	dots: false,
    	responsive:{
        	0:{
            	items: 2
        	},
        	600:{
            	items: 3
        	},
        	992:{
            	items: 6
        	}
    	},
    	navText: ["<i class='fa fa-chevron-left'></i>","<i class='fa fa-chevron-right'></i>"],
    	rewindNav : true
	});

	$('.customNextBtn').click(function() {
		owl.trigger('next.owl.carousel');
	})
//FANCYBOX__________________________________________
	$().fancybox({
		selector : '.owl-item:not(.cloned) a',
		hash   : false,
		thumbs : {
			autoStart : true
		},
		buttons : [
			'zoom',
			'close'
		],
		backFocus : true,
		beforeClose: function() {
			$(nav).removeClass("index");
			$(".top-line").css("z-index", 5);
		},
		beforeLoad: function() {
 			$(nav).addClass("index");
 			$(".top-line").css("z-index", 0);	
 		}
	});
//FIXED MENU__________________________________________
	$(window).scroll(function () {
		if ($(this).scrollTop() > 815) {
			$(".mnu").addClass("fixed");
			$(".empty").removeClass("hidden");
		} 
		else {
			nav.removeClass("fixed");
			$(".empty").addClass("hidden");
		}
	});
//ANIMATE SCROLL TO ANCHOR____________________________________ 	
 	jQuery.easing['jswing'] = jQuery.easing['swing'];
 	jQuery.extend( jQuery.easing,
 	{
		easeInOutQuint: function (x, t, b, c, d) {
			if ((t/=d/2) < 1) return c/2*t*t*t*t*t + b;
			return c/2*((t-=2)*t*t*t*t + 2) + b;
	}
	});

 	$('a[href^="#"]').click(function(){
		var target = $(this).attr('href');
		if ($(window).width() > 992) {
			$('html, body').animate({scrollTop: $(target).offset().top - 65}, 2000, "easeInOutQuint");
		}
		if ($(window).width() > 768 && $(window).width() <= 992) {
			$('html, body').animate({scrollTop: $(target).offset().top - 40}, 2000, "easeInOutQuint");
		}
		if ($(window).width() <= 768) {
			$('html, body').animate({scrollTop: $(target).offset().top}, 2000, "easeInOutQuint");	
		}
		return false;
	});
//GAMBURGER MENU________________________________________
	$("#navToggle").click(function() {
    	$(this).toggleClass("active");
   		$(".overlay").toggleClass("open");
    // this line ▼ prevents content scroll-behind
    	$("body").toggleClass("locked"); 
	});

	$(".nav-link").click(function() {
		$(".overlay").toggleClass("open");
		$("body").removeClass("locked");
		$("#navToggle").toggleClass("active");
	});
//ACCORDION_MOBILE________________________________		
	$(".title").click(function() {
		var o, n;
		o = $(this).parents(".item");
		n = o.find(".content");
		if (o.hasClass("active_block")) {
			o.removeClass("active_block");
			n.slideUp();
		} else {
			o.addClass("active_block");
			n.stop(!0, !0).slideDown();
			o.siblings(".active_block").removeClass("active_block").children(".content").stop(!0, !0).slideUp();
		}
	});
});