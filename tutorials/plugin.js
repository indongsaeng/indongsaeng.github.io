$(document).ready(function(){
			$('.navi-btn').click(function() {
				var iframeSrc = $(this).attr('data-iframe');
				$("iframe").attr('src', iframeSrc);
				$('.navi-btn').parents().removeClass('active');
				$(this).parents().addClass('active');
			});

			// responsive video
			$(function() {

			    var $allVideos = $("iframe[src^='//player.vimeo.com'], iframe[src^='//www.youtube.com'], object, embed, iframe[src^='https://openload.co']"),
			    $fluidEl = $("figure");

				$allVideos.each(function() {

				  $(this)
				    // jQuery .data does not work on object/embed elements
				    .attr('data-aspectRatio', this.height / this.width)
				    .removeAttr('height')
				    .removeAttr('width');

				});

				$(window).resize(function() {

				  var newWidth = $fluidEl.width();
				  $allVideos.each(function() {

				    var $el = $(this);
				    $el
				        .width(newWidth)
				        .height(newWidth * $el.attr('data-aspectRatio'));

				  });

				}).resize();

			});
			
			// pagination slideshow
				$('.pagination').slick({
					  dots: false,
					  infinite: false,
					  speed: 300,
					  slidesToShow: 10,
					  slidesToScroll: 10,
					  responsive: [
					    {
					      breakpoint: 1024,
					      settings: {
					        slidesToShow: 9,
					        slidesToScroll: 9,
					        
					      }
					    },
					    {
					      breakpoint: 600,
					      settings: {
					        slidesToShow: 6,
					        slidesToScroll: 6
					      }
					    },
					    {
					      breakpoint: 480,
					      settings: {
					        slidesToShow: 3,
					        slidesToScroll: 3
					      }
					    }
					   
					  ]
					});
				
			// mobile menu
			 $(".button-collapse").sideNav();
		})