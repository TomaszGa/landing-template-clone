$(document).ready(function(){

	pageAnimations.checkScroll();
	pageAnimations.checkWidth();


	$(window).scroll(function(){
		pageAnimations.checkScroll();
	});
	$(window).resize(function(){
		pageAnimations.checkWidth();
	});
});

const pageAnimations = {
	wScroll: $(window).scrollTop(),
	wWidth: $(window).width(),

	checkScroll: function(){
		this.wScroll = $(window).scrollTop();
		if (this.wScroll > 110){
			this.navbarAlternate();
		} else if (this.wWidth > 1000) {
			this.navbarDefault();
		}
	},
	checkWidth: function(){
		this.wWidth = $(window).width();
		if (this.wWidth < 1000){
			this.navbarAlternate();
		} else if (this.wScroll < 110) {
			this.navbarDefault();
		}
	},
	navbarDefault: function(){
		$(".navbar").css({
			"background-color" : "transparent"
		});
		$(".navbar-brand").css({
			"font-size" : "1.2rem"
		});
		$(".navbar a").css({
			"color" : "white"
		});	
	},
	navbarAlternate: function(){
		$(".navbar").css({
			"background-color" : "#fff"
		});
		$(".navbar-brand").css({
			"font-size" : "1.1rem"
		});		
		$(".navbar a").css({
			"color" : "#F05F40"
		});
	}
}