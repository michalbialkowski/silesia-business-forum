$(window).on('load', function() {
	$('.slider--coach').flickity({
		cellAlign: 'center',
		contain: true,
		freeScroll: false,
		wrapAround: true,
		pageDots: false,
		autoPlay: true,
		prevNextButtons: true,
        arrowShape: { 
			x0: 15,
			x1: 65, y1: 50,
			x2: 65, y2: 40,
			x3: 25
		}
	});
	
	
	$('.slider--tickets').flickity({
		cellAlign: 'center',
		contain: true,
		freeScroll: false,
		wrapAround: true,
		pageDots: false,
		autoPlay: true,
		prevNextButtons: true,
        arrowShape: { 
			x0: 15,
			x1: 65, y1: 50,
			x2: 65, y2: 40,
			x3: 25
		}
	});
	
	
	// Samples
	
	$('.flickity--slider').flickity({
		cellAlign: 'center',
		contain: true,
		freeScroll: false,
		wrapAround: true,
		pageDots: true,
		autoPlay: true,
		prevNextButtons: true,
        arrowShape: { 
			x0: 15,
			x1: 65, y1: 50,
			x2: 65, y2: 40,
			x3: 25
		}
	});
    
    $('.flickity--fullwidth').flickity({
		cellAlign: 'left',
		contain: true,
		freeScroll: false,
		wrapAround: true,
		pageDots: true,
		autoPlay: true,
		prevNextButtons: false,
        arrowShape: { 
			x0: 15,
			x1: 65, y1: 50,
			x2: 65, y2: 40,
			x3: 25
		}
	});
});