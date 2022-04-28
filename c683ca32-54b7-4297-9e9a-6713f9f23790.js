function isMatch(str1) {
    var s = 'localhost,fashentv.com,www.fashentv.com'
    return s.indexOf(str1) !== -1;
}


var ikan = {
	browser: {
		url: document.URL,
		domain: document.domain,
		title: document.title,
		urlpath: document.location.pathname,
		language: (navigator.browserLanguage || navigator.language).toLowerCase(),
		canvas: function() {
			return !!document.createElement("canvas").getContext
		}(),
		useragent: function() {
			var a = navigator.userAgent;
			return {
				mobile: !! a.match(/AppleWebKit.*Mobile.*/),
				ios: !! a.match(/\(i[^;]+;( U;)? CPU.+Mac OS X/),
				android: -1 < a.indexOf("Android") || -1 < a.indexOf("Linux"),
				iPhone: -1 < a.indexOf("iPhone") || -1 < a.indexOf("Mac"),
				iPad: -1 < a.indexOf("iPad"),
				trident: -1 < a.indexOf("Trident"),
				presto: -1 < a.indexOf("Presto"),
				webKit: -1 < a.indexOf("AppleWebKit"),
				gecko: -1 < a.indexOf("Gecko") && -1 === a.indexOf("KHTML"),
				weixin: -1 < a.indexOf("MicroMessenger")
			}
		}()
	},
	mobile: {
		share: function(){
		$(".open-share").click(function(){
			$(".am-share").addClass("am-modal-active");	
			if($(".sharebg").length>0){
				$(".sharebg").addClass("sharebg-active");
			}else{
				$("body").append('<div class="sharebg"></div>');
				$(".sharebg").addClass("sharebg-active");
			}
			$(".sharebg-active,.share_btn").click(function(){
				$(".am-share").removeClass("am-modal-active");	
				setTimeout(function(){
					$(".sharebg-active").removeClass("sharebg-active");	
					$(".sharebg").remove();	
				},300);
			})
	    })
		}
	},
	swiper: function() {
		$.getScript("https://vkceyugu.cdn.bspapp.com/VKCEYUGU-68fc112d-b102-42aa-8f73-4f57534e664b/33193d2b-410f-4035-a16c-cf203db0f7fd.js", function() {
				var swiper = new Swiper('.banner-top', {
					autoplay: 5000,
					autoplayDisableOnInteraction : false,
					speed: 1000,
					loop: true,
					slidesPerView: 5,
					centeredSlides: true,
					mousewheelControl : true,
					prevButton: '.swiper-button-prev',
                    nextButton: '.swiper-button-next',
					lazyLoading : true,
					lazyLoadingInPrevNext : true,
					runCallbacksOnInit : false,
					onInit:function() {
						setTimeout(function () {
							var Bgimgurl = $(".banner-top .swiper-slide-active a").css("backgroundImage").replace('url(','').replace(')','');
						    document.getElementById("bgimage").style.backgroundImage="url("+Bgimgurl+")";
						},1500);
					},
					onSlideChangeStart: function() {
                       	var Bgimgurl = $(".banner-top .swiper-slide-active a").css("backgroundImage").replace('url(','').replace(')','');
						document.getElementById("bgimage").style.backgroundImage="url("+Bgimgurl+")";
                    },
					breakpoints: {
                       1024: {
                          slidesPerView: 4.6,
                       },
					   820: {
                          slidesPerView: 2.5, 
                       },
                    }
				});
			    var swiper = new Swiper('.banner-wtop', {
					autoplay: 5000,
					autoplayDisableOnInteraction : false,
					loop: true,
					prevButton: '.swiper-button-prev',
                    nextButton: '.swiper-button-next',
					pagination: '.swiper-pagination',
					paginationClickable: true,
					onInit:function() {
						setTimeout(function () {
							$.adaptiveBackground.run()	
						},1500);
					},
				});
				var swiper = new Swiper('.art_banner', {
					autoplay: 5000,
					autoplayDisableOnInteraction : false,
					spaceBetween: 1,
                    speed: 1000,
					slidesPerView: 1,
					loop: true,
					prevButton: '.swiper-button-prev',
                    nextButton: '.swiper-button-next',
					pagination: '.swiper-pagination',
					paginationClickable: true,
					lazyLoading : true,
					lazyLoadingInPrevNext : true,
				});
		});
	},
	menu: function(){
		var windowWidth = $(window).width();
		if (windowWidth < 820) {
			$(".menu").click(function(){
				$('html,body').addClass("overhidden");
				$(".all_menu").addClass("menu_block");
				$(".close_menu").click(function(){
					$('html,body').removeClass("overhidden");
					$(".all_menu").removeClass("menu_block");	
				});
			});
		}else{
			$(".head_menu_b").each(function(s){
				$(this).hover(
					function(){
						$(".all_menu").eq(s).show();
					},
					function(){
						$(".all_menu").eq(s).hide();
					})
			})
		}
	},
	fixed: function(){
		if(window.location.hash){
			var targetScroll = $(window.location.hash).offset().top - 80;
			$("html,body").animate({scrollTop:targetScroll},300);
		};
		$(window).scroll(function(){
			var $this = $(this);
			var targetTop = $(this).scrollTop();
			var height = $(window).height();
			if (targetTop >= 50){
				$("#topnav,.listnow,.art_navlist").addClass("nav_fixed");
			}else{
				$("#topnav,.listnow,.art_navlist").removeClass("nav_fixed");
			}
		});
		$(window).scroll(function(){
			var $this = $(this);
			var targetTop = $(this).scrollTop();
			var height = $(window).height();
			if (targetTop >= 1200){
				$(".ads_rbox").addClass("adfixed");
			}else{
				$(".ads_rbox").removeClass("adfixed");
			}
		})
    },
	Search: function() {
		$("input.form_control").focus(function(){
			$(".submit").addClass("search_btn");	
		});
		$("input.form_control").blur(function(){
			$(".submit").removeClass("search_btn");
		});
	},
	wrapper: function() {
		var windowWidth = $(window).width();
		if (windowWidth < 820) {
		$.getScript("https://cdn.staticfile.org/iScroll/5.2.0/iscroll.min.js", function() {
		   $(".wrapper").navbarscroll()
		   $('#ik01').navbarscroll({SelectName:'.ik-n-01'});
		   $('#ik02').navbarscroll({SelectName:'.ik-n-02'});
		   $('#ik03').navbarscroll({SelectName:'.ik-n-03'});
		   $('#ik04').navbarscroll({SelectName:'.ik-n-04'});
		   $('#ik05').navbarscroll({SelectName:'.ik-n-05'});
		   $('#ik06').navbarscroll({SelectName:'.ik-n-06'});
		})
		}
	},
	flip: function(){
		$(".flip").click(function(){
			$(".panel").slideToggle("slow");
			$(".xs1").toggle();
			$(".xs2").toggle();
		});
    },
	closebtn: function(){
		$(".close_ads_btn").click(function(){
			$("#bottom_ads").remove();
			$(".foot").removeClass("foot_stem");
		});
		$(".close_tips").click(function(){
			$("#fd_tips").remove();
		});
	},
	images: {
		lazyload: function() {
			$.getScript("https://cdn.staticfile.org/jquery_lazyload/1.9.3/jquery.lazyload.min.js", function() {
				$(".lazyload").lazyload({
					effect: "fadeIn",
					threshold: 200,
					failurelimit: 20,
				});
				var windowWidth = $(window).width();
				if (windowWidth < 820) {
					$(".list_scroll .vodlist_thumb").removeClass("lazyload");
					$(".list_scroll .vodlist_thumb").addClass("boxload");
					$(".boxload").lazyload({
						effect: "fadeIn",
						threshold: 150,
						failurelimit: 5,
						container: $(".vodlist_sm,.vodlist_sh")
					});
				}
			})
		},
		qrcode: function() {
			$.getScript("https://cdn.staticfile.org/jquery.qrcode/1.0/jquery.qrcode.min.js", function() {
				$(".cans").qrcode({
					width:120,
					height:120,
					text:encodeURI(ikan.browser.url)
				});  
				function convertCanvasToImage(canvas) {  
					var image = new Image();  
					image.src = canvas.toDataURL("image/png");  
					return image;  
				}   
				var mycans=$('canvas')[0];   
				var img=convertCanvasToImage(mycans);  
				$('.qrcode').append(img); 
			})			
		}
	},
	scrolltop: function() {
		var a = $(window);
		$scrollTopLink = $("a.backtop");
		a.scroll(function() {
			500 < $(this).scrollTop() ? $scrollTopLink.css("display", "block") : $scrollTopLink.css("display", "none")
		});
		$scrollTopLink.on("click", function() {
			$("html, body").animate({
				scrollTop: 0
			}, 400);
			return !1
		})
	},
	copy: function() {
		$.getScript("https://cdn.staticfile.org/clipboard.js/1.7.1/clipboard.min.js", function() {
			var btn=document.getElementsByClassName('copy_btn');
			var clipboard=new Clipboard(btn);
			clipboard.on('success', function(e){
				$('#show').slideDown().delay(1500).slideUp(300);
				console.log(e);
			});
			clipboard.on('error', function(e){
				$('#show').slideDown().delay(1500).slideUp(300);
				console.log(e);
			});
		})
	}
};
$(document).ready(function() {
	ikan.browser.useragent.mobile && (ikan.mobile.share());
	ikan.swiper();
	ikan.menu();
	ikan.fixed();
	ikan.Search();
	ikan.wrapper();
	ikan.flip();
	ikan.closebtn();
	ikan.images.lazyload();
	ikan.images.qrcode();
	ikan.scrolltop();
	ikan.copy();
});