$(function(){
	$("img.seaImg").click(function(e){
		$(this).hide();//隐藏搜索图片
		$(".search").animate({width:"230px"},500);//让搜索框的宽度在500ms内从0变化到230px
		e.stopPropagation();//阻止冒泡事件
	});
	//在任意位置点击时，搜索框要隐藏
	$(document).click(function(){
		$(".search").animate({width:"0px"},500,function(){
			$("img.seaImg").fadeIn();
		});
	});
	$(".search").click(function(e){
		e.stopPropagation();
	});
	//免费试用里面的小图标new的动画效果
	var showAndHideInterval=setInterval(showAndHide,3000);
	showAndHide();
	function showAndHide(){
		$("img.new").animate({opacity:0},1500,function(){
			$(this).animate({opacity:1},1500);
		})
	}
	//“红人专栏”选项卡切换的效果
	//var choosedIndex = 0;
	/*$(".txtBtn ul li").mouseover(function(){
		
		$(this).addClass("hover").siblings("li.hover").removeClass("hover");
		var index = $(this).index();//获取索引值
		$(".imgCon ul li").eq(index).fadeIn().siblings("li").hide();//wanderful!
	});
	//"热门排行"选项卡切换效果
	$(".hotNewsBtn span").mouseover(function(){
		$(this).addClass("hover").css({"cursor":"pointer"}).siblings("span.hover").removeClass("hover");
		var index = $(this).index();
		$(".news_select ul").eq(index).fadeIn().siblings("ul").hide();
	});*/
	//“红人专栏”选项卡切换的效果
	selectCon($(".txtBtn ul li"),"hover","li",$(".imgCon ul li"),"li");
	//"热门排行"选项卡切换效果
	selectCon($(".hotNewsBtn span"),"hover","span",$(".news_select ul"),"ul");
	//动态添加新闻序号
	var len = $(".news_select ul li").length/$(".news_select ul").length;
	for(var i=0;i<len;i++){
		$(".news_select ul li").eq(i).find("span").text(i+1);
	}
	//flash动画轮播效果
	var index = 0;
	var flashInterval = null;
	$("ul.flash3Btn li").mouseover(function(){
		clearInterval(flashInterval);
		$(this).addClass("hover").css("cursor","pointer").siblings("li.hover").removeClass("hover");
		index = $(this).index();
		$(".flash3 .flash3Scroll").stop().css("left",-280*index+"px");
	});
	$("ul.flash3Btn li").mouseout(function(){
		autoPlay();
	});
	//自动轮播的方法
	function autoPlay(){
		flashInterval = setInterval(function(){
			index++;
			if(index>=$("ul.flash3Btn li").length){
				index = 0;
			}
			$("ul.flash3Btn li").eq(index).addClass("hover").siblings("li.hover").removeClass("hover");
			$(".flash3 .flash3Scroll").stop().css("left",-280*index+"px");
		},1000);
	}
	autoPlay();
	//头部动画播放
	var headerIndex = 1;
	var headerScrollInterval = null;
	headerScrollAutoPlay();
	$(".scrollBtn ul li").click(function(){
		$(this).addClass("hover").siblings("li.hover").removeClass("hover");
		headerIndex = $(this).index();
		$(".flash .scroll .imgList").stop().css("left",-750*headerIndex+"px");
	});
	//右边按钮
	$(".flash .scroll .next img").click(headerScrollFlash);
	//左边按钮
	$(".flash .scroll .prev img").click(function(){
		headerIndex--;
		if(headerIndex<=0){
			headerIndex = $(".scrollBtn ul li").length-2;
			$(".flash .scroll .imgList").css("left",-750*(headerIndex+1)+"px").animate({left:-750*headerIndex+"px"},500);
		}else{
			$(".flash .scroll .imgList").animate({left:-750*headerIndex+"px"},500);
		}
		$(".scrollBtn ul li").eq(headerIndex).addClass("hover").siblings("li.hover").removeClass("hover");
	});
	$(".flash .scroll .next img,.flash .scroll .imgList a img,.flash .scroll .scrollBtn ul li").mouseover(function(){
		clearInterval(headerScrollInterval);
	});
	$(".flash .scroll .next img,.flash .scroll .imgList a img,.flash .scroll .scrollBtn ul li").mouseout(headerScrollAutoPlay);
	$(".scrollBtn ul li").mouseover(function(){
		$(this).addClass("hover").siblings("li.hover").removeClass("hover");
		headerIndex = $(this).index();
		$(".flash .scroll .imgList").animate({left:-750*headerIndex+"px"},500);
	});
		
	function headerScrollAutoPlay(){
		headerScrollInterval = setInterval(headerScrollFlash,5000);
	}
	function headerScrollFlash(){
		headerIndex++;
		if(headerIndex >= $(".scrollBtn ul li").length-1){
			headerIndex = 1;
			$(".flash .scroll .imgList").css("left","0px").animate({left:"-750px"},500);
		}else{
			$(".flash .scroll .imgList").animate({left:-750*headerIndex+"px"},500);
		}
		$(".scrollBtn ul li").eq(headerIndex).addClass("hover").siblings("li.hover").removeClass("hover");
	}
	
	/*第一部分右侧抢先试用动画效果*/
	var qxsyScrollIndex = 1;
	var qxsyScrollInterval = null;
	qxsyScrollAutoPlay()
	$("#part1 .part1_right .flash2 img.dirr").click(qxsyScrollFlash);
	$("#part1 .part1_right .flash2 img.dirl").click(function(){
		var $obj = $("#part1 .part1_right .flash2 div.scrollCon div.scrollList ul.scrollImg li");
		var $btnObj = $("#part1 .part1_right .flash2 ul.scrollCircle li");
		qxsyScrollIndex--;
		if(qxsyScrollIndex<=0){
			$obj.parent().parent().stop().css("left",-218*($obj.length-1)+"px");
			qxsyScrollIndex = $obj.length-2;
		}
		$("#part1 .part1_right .flash2 div.scrollCon div.scrollList").stop().animate({left:-218*qxsyScrollIndex+"px"},500);
		$btnObj.eq(qxsyScrollIndex).addClass("choosed").siblings("li.choosed").removeClass("choosed");
	});
	$(".part1_right .flash2 ul.scrollCircle li,.part1_right .flash2 div.scrollCon div.scrollList ul.scrollImg li,#part1 .part1_right .flash2 img.dirr,#part1 .part1_right .flash2 img.dirl").mouseover(function(){
		clearInterval(qxsyScrollInterval);
	});
	$(".part1_right .flash2 ul.scrollCircle li,.part1_right .flash2 div.scrollCon div.scrollList ul.scrollImg li,#part1 .part1_right .flash2 img.dirr,#part1 .part1_right .flash2 img.dirl").mouseout(qxsyScrollAutoPlay);
	$(".part1_right .flash2 ul.scrollCircle li").mouseover(function(){
		$(this).addClass("choosed").siblings("li.choosed").removeClass("choosed");
		qxsyScrollIndex = $(this).index();
		$("#part1 .part1_right .flash2 div.scrollCon div.scrollList").stop().animate({left:-218*qxsyScrollIndex+"px"},500);
	});
	function qxsyScrollAutoPlay(){
		qxsyScrollInterval = setInterval(qxsyScrollFlash,3000);
	}
	function qxsyScrollFlash(){
		var $obj = $("#part1 .part1_right .flash2 div.scrollCon div.scrollList ul.scrollImg li");
		var $btnObj = $("#part1 .part1_right .flash2 ul.scrollCircle li");
		qxsyScrollIndex++;
		if(qxsyScrollIndex>=$obj.length-1){
			$obj.parent().parent().css("left","0px");
			qxsyScrollIndex = 1;
		}
		$("#part1 .part1_right .flash2 div.scrollCon div.scrollList").stop().animate({left:-218*qxsyScrollIndex+"px"},500);
		$btnObj.eq(qxsyScrollIndex).addClass("choosed").siblings("li.choosed").removeClass("choosed");
	}
	

	/*瑞丽互动选项卡底部*/
	$("#part2 .part2_left .part2_l_l p span").mouseover(function(){
		$(this).addClass("hover").siblings("span.hover").removeClass("hover");
		var index = $(this).index();
		$("#part2 .part2_left .part2_l_l .commonCon").eq(index).fadeIn(500).siblings().hide();
	});
	/*瑞丽深度滑动效果*/
	var ruiliDepthInterval = null;
	var ruiliDepthIndex = 0;
	$("#ruiliDepth div.imgCon ul li").mouseover(function(){
		ruiliDepthIndex = $(this).index();
		ruiliDepthFlash(ruiliDepthIndex);
		clearInterval(ruiliDepthInterval);
	});
	$("#ruiliDepth div.imgCon ul li").mouseout(function(){
		ruiliDepthAutoPlay();
	});
	ruiliDepthAutoPlay()
	function ruiliDepthAutoPlay(){
		ruiliDepthInterval = setInterval(function(){
			ruiliDepthIndex++;
			if(ruiliDepthIndex >= $("#ruiliDepth div.imgCon ul li").length){
				ruiliDepthIndex = 0;
			}
			ruiliDepthFlash(ruiliDepthIndex);
		},2000);
	}
	function ruiliDepthFlash(ruiliDepthIndex){
	var $obj = $("#ruiliDepth div.imgCon ul li").eq(ruiliDepthIndex);
	$obj.stop().animate({width:"538px"},500).find("div.image p.abs,div.bottomTxt dl dd").css("display","block");
	$obj.siblings().stop().animate({width:"106px"},500).find("div.image p.abs,div.bottomTxt dl dd").css("display","none");
	$obj.find("div.image a img").addClass("op");
	$obj.siblings().find("div.image a img.op").removeClass("op");
}
	/*第二部分瑞丽互动女装口碑动画效果*/
	$("#part2 .part2_left .part2_l_common ul.mz li").mouseover(function(){
		$(this).addClass("showDetailLi").siblings("li.showDetailLi").removeClass("showDetailLi");
	});
		
	/*第三部分*/
	/*第三部分动画第一节右侧选项卡*/
	$("#part3 .part3_1 .part3_1_r p.part3_l_r_title span").mouseover(function(){
		$(this).addClass("hover").siblings("span.hover").removeClass("hover");
		var index = $(this).index();
		$("#part3 .part3_1 .part3_1_r div.outerCon div.commonCon").eq(index).stop().fadeIn(500).siblings().hide();
	});

	/*第三部分轮播图效果*/
	var part3ScrollIndex = 1;
	var part3ScrollInterval = null;
	var part3ScrollText = ["有了真会穿的高圆圆胖迪 谁说国内无街","无论90后还是50后 都要找准你的时尚Ico","连体裤正确打开方式 穿对才显腿长"];
	part3ScrollAutoPlay();
	$("#part3 .part3_1 .part3_1_l .part3Scroll div.scrollText img.arrowR").click(part3ScrollFlash);
	$(".part3Scroll div.scrollText img.arrowR,.part3Scroll div.scrollText img.arrowL,.part3Scroll div.imgList").mouseover(function(){
		clearInterval(part3ScrollInterval);
	});
	$(".part3Scroll div.scrollText img.arrowR,.part3Scroll div.scrollText img.arrowL,.part3Scroll div.imgList").mouseout(function(){
		part3ScrollAutoPlay();
	});
	$("#part3 .part3_1 .part3_1_l .part3Scroll div.scrollText img.arrowL").click(function(){
		clearInterval(part3ScrollInterval);
		part3ScrollIndex--;
		var $img = $("#part3 .part3_1 .part3_1_l .part3Scroll div.imgList a.imgA");
		if(part3ScrollIndex<=0){
			part3ScrollIndex = $img.length-2;
			$("#part3 .part3_1 .part3_1_l .part3Scroll div.imgList").css("left",-480*($img.length-1)+"px");
		}
		
		$("#part3 .part3_1 .part3_1_l .part3Scroll div.imgList").stop().animate({left:-480*part3ScrollIndex+"px"},500).parent().find(".scrollText p.text a").text(part3ScrollText[part3ScrollIndex-1]).parent().parent().find("p.num span").text(part3ScrollIndex);
	});
	function part3ScrollAutoPlay(){
		part3ScrollInterval=setInterval(part3ScrollFlash,3000);
	}
	function part3ScrollFlash(){
		part3ScrollIndex++;
		var $img = $("#part3 .part3_1 .part3_1_l .part3Scroll div.imgList a.imgA");
		if(part3ScrollIndex>=$img.length-1){
			part3ScrollIndex = 1;
			$("#part3 .part3_1 .part3_1_l .part3Scroll div.imgList").css("left","0px");
		}
		$("#part3 .part3_1 .part3_1_l .part3Scroll div.imgList").stop().animate({left:-480*part3ScrollIndex+"px"},500).parent().find(".scrollText p.text a").text(part3ScrollText[part3ScrollIndex-1]).parent().parent().find("p.num span").text(part3ScrollIndex);
	}
	/*part3第二部分街拍偶像动画效果*/
	var part3_2ScrollIndex = 0;
	$("#part3 .part3_2 .part3_2_l div.part3_2_l_scroll div.scrollCon div.scrollList").append($("#part3 .part3_2 .part3_2_l div.part3_2_l_scroll div.scrollCon div.scrollList").html());
	var part3_2ScrollInterval = null;
	part3_2ScrollAutoPlay();
	$("#part3 .part3_2 .part3_2_l div.part3_2_l_scroll img.dirr").click(part3_2ScrollFlash);
	$("#part3 .part3_2 .part3_2_l div.part3_2_l_scroll img.dirl").click(function(){
		part3_2ScrollIndex--;
		var $obj = $("#part3 .part3_2 .part3_2_l div.part3_2_l_scroll div.scrollCon div.scrollList ul li");
		if(part3_2ScrollIndex < 0){
			$obj.parent().parent().css("left",(-1)*$obj.length/2*170+"px").prepend($obj.parent().parent().find("ul:last"));
			part3_2ScrollIndex = $obj.length/2-1;
		}
		$obj.parent().parent().stop().animate({left:(-1)*part3_2ScrollIndex*170+"px"},500);
	});
	$("div.part3_2_l_scroll div.scrollCon div.scrollList ul li,div.part3_2_l_scroll img.dirr").mouseover(function(){
		clearInterval(part3_2ScrollInterval);
	});
	$("div.part3_2_l_scroll div.scrollCon div.scrollList ul li,div.part3_2_l_scroll img.dirr").mouseout(part3_2ScrollAutoPlay);
	function part3_2ScrollAutoPlay(){
		part3_2ScrollInterval = setInterval(part3_2ScrollFlash,5000);
	}
	function part3_2ScrollFlash(){
		var $obj = $("#part3 .part3_2 .part3_2_l div.part3_2_l_scroll div.scrollCon div.scrollList ul li");
		part3_2ScrollIndex++;
		if(part3_2ScrollIndex+5 >= $obj.length){
			$obj.parent().parent().append($obj.parent().parent().find("ul:first")).css("left","0px");
			part3_2ScrollIndex = $obj.length/2-5;;
		}
		$obj.parent().parent().animate({left:-part3_2ScrollIndex*170+"px"},500);
	}

	/*三张图片轮播效果*/
	part4ScrollIndex = 1;
	threeImgScroll($("#part4 .part4_1 .part4_1_l .part4_1_l_t"),part4ScrollIndex);
	/*明星美丽事图片切换效果*/
	$("#part4 .part4_1 .part4_1_l .part4_1_l_b div.mxmlsCon div.txtBtn ul li").mouseover(function(){
		var index = $(this).index();
		$(this).addClass("on").siblings("li.on").removeClass("on");
		$("#part4 .part4_1 .part4_1_l .part4_1_l_b div.mxmlsCon div.imgCon ul.imgList li").eq(index).fadeIn(1000).siblings().hide();
	});

	/*part4_2优品驾到图片轮播效果*/
	var part4ypjdIndex = 0;
	var part4ypjdInterval = null;
	part4ypjdScrollAutoPlay();
	$("#part4 .part4_2 .part4_2_l div.ypjdScroll  div.ypjdThumbCon div.thumbImg").append($("#part4 .part4_2 .part4_2_l div.ypjdScroll div.ypjdThumbCon div.thumbImg").html());
	$("#part4 .part4_2 .part4_2_l div.ypjdScroll img.dirr").click(function(){
		part4ypjdScrollFlash();
	});
	$("#part4 .part4_2 .part4_2_l div.ypjdScroll img.dirl").click(function(){
		var $obj = $("#part4 .part4_2 .part4_2_l div.ypjdScroll div.ypjdThumbCon div.thumbImg ul li");
		var $list = $("#part4 .part4_2 .part4_2_l div.ypjdThumbCon div.thumbImg");
		part4ypjdIndex--;
		if(part4ypjdIndex < 0){
			part4ypjdIndex = $obj.length/2-1;
			$list.prepend($list.find("ul:last")).css("left",(-1)*(part4ypjdIndex+1)*215+"px");
		}
		$list.stop().animate({"left":(-1)*215*part4ypjdIndex+"px"},500);
	});
	$("#part4 .part4_2 .part4_2_l div.ypjdScroll").mouseover(function(){
		clearInterval(part4ypjdInterval);
	});
	$("#part4 .part4_2 .part4_2_l div.ypjdScroll").mouseout(part4ypjdScrollAutoPlay);
	function part4ypjdScrollAutoPlay(){
		part4ypjdInterval = setInterval(part4ypjdScrollFlash,5000);
	}
	function part4ypjdScrollFlash(){
		var $obj = $("#part4 .part4_2 .part4_2_l div.ypjdScroll div.ypjdThumbCon div.thumbImg ul li");
		var $list = $("#part4 .part4_2 .part4_2_l div.ypjdThumbCon div.thumbImg");
		part4ypjdIndex++;
		if(part4ypjdIndex+4 >= $obj.length){
			part4ypjdIndex = $obj.length/2-4;
			$list.append($list.find("ul:first")).css("left",(-1)*(part4ypjdIndex-1)*215+"px");
		}
		$list.stop().animate({"left":(-1)*215*part4ypjdIndex+"px"},500);
	}
	/*part4_3_r标签页效果*/
	$("#part4 .part4_3 .part4_3_r ul.tab li.tabLi").mouseover(function(){
		$(this).addClass("hover").siblings("li.hover").removeClass("hover");
		var index = $(this).index();
		$("#part4 .part4_3 .part4_3_r div.tabCon ul.totalPart li.left").eq(index).show().siblings().hide();
	});
	/*part5_l图片轮播效果*/
	part5ScrollIndex = 1;
	threeImgScroll($("#part5 div.part5_l"),part5ScrollIndex);
	/*part6_l图片轮播效果*/
	part6ScrollIndex = 1;
	threeImgScroll($("#part6 div.part6_l"),part6ScrollIndex);
	/*part7图片轮播效果*/
	var part7ScrollIndex = 1;
	var part7ScrollInterval = null;
	part7ScrollAutoPlay()
	$("#part7 div.part7_body div.part7_scroll div.next img").click(function(){
		part7ScrollFlash();
	});
	$("#part7 div.part7_body div.part7_scroll div.pre img").click(function(){
		var $scrollLi = $("#part7 div.part7_body div.part7_scroll div.scrollList ul li");
		part7ScrollIndex--;
		if(part7ScrollIndex <= 0){
			part7ScrollIndex = $scrollLi.length-2;
			$("#part7 div.part7_body div.part7_scroll div.scrollList").css("left",(-1)*(part7ScrollIndex+1)*1020+"px");
		}
		$("#part7 div.part7_body div.part7_scroll div.scrollList").animate({left:(-1)*1020*part7ScrollIndex+"px"});
	});
	$("#part7 div.part7_body").mouseover(function(){
		clearInterval(part7ScrollInterval);
	});
	$("#part7 div.part7_body").mouseout(part7ScrollAutoPlay);
	function part7ScrollAutoPlay(){
		part7ScrollInterval = setInterval(part7ScrollFlash,5000);
	}
	function part7ScrollFlash(){
		var $scrollLi = $("#part7 div.part7_body div.part7_scroll div.scrollList ul li");
		part7ScrollIndex++;
		if(part7ScrollIndex >= $scrollLi.length-1){
			part7ScrollIndex = 1;
			$("#part7 div.part7_body div.part7_scroll div.scrollList").css("left","0px");
		}
		$("#part7 div.part7_body div.part7_scroll div.scrollList").animate({left:(-1)*1020*part7ScrollIndex+"px"});
	}
	/*part8图片轮播效果*/
	var part8ScrollIndex = 1;
	var part8ScrollInterval = null;
	$("#part8 div.part8_l div.part8Scroll img.dirr").click(function(){
		part8ScrollFlash();
	});
	$("#part8 div.part8_l div.part8Scroll img.dirl").click(function(){
		$scrollLi = $("#part8 div.part8_l div.part8Scroll div.scrollList ul li");
		part8ScrollIndex--;
		if(part8ScrollIndex <= 0){
			part8ScrollIndex = $scrollLi.length-2;
			$("#part8 div.part8_l div.part8Scroll div.scrollList").css("left",(-1)*(part8ScrollIndex+1)*380+"px");
		}
		$("#part8 div.part8_l div.circle ul li").eq(part8ScrollIndex-1).addClass("on").siblings("li.on").removeClass("on");
		$("#part8 div.part8_l div.part8Scroll div.scrollList").animate({left:(-1)*380*part8ScrollIndex+"px"},500);
	});
	$("#part8 div.part8_l div.part8Scroll,#part8 div.part8_l div.circle ul li").mouseover(function(){
		clearInterval(part8ScrollInterval);
	});
	$("#part8 div.part8_l div.part8Scroll,#part8 div.part8_l div.circle ul li").mouseout(function(){
		part8ScrollAutoPlay();
	});
	$("#part8 div.part8_l div.circle ul li").mouseover(function(){
		$(this).addClass("on").siblings("li.on").removeClass("on");
		var index = $(this).index();
		$("#part8 div.part8_l div.part8Scroll div.scrollList").animate({left:(-1)*380*index+"px"},500);
	});
	function part8ScrollAutoPlay(){
		part8ScrollInterval = setInterval(part8ScrollFlash,5000);
	}
	function part8ScrollFlash(){
		$scrollLi = $("#part8 div.part8_l div.part8Scroll div.scrollList ul li");
		part8ScrollIndex++;
		if(part8ScrollIndex >= $scrollLi.length-1){
			part8ScrollIndex = 1;
			$("#part8 div.part8_l div.part8Scroll div.scrollList").css("left","0px");
		}
		$("#part8 div.part8_l div.circle ul li").eq(part8ScrollIndex-1).addClass("on").siblings("li.on").removeClass("on");
		$("#part8 div.part8_l div.part8Scroll div.scrollList").animate({left:(-1)*380*part8ScrollIndex+"px"},500);
	}
	/*part10左侧magazine部分鼠标移近图片切换效果*/
	$("#part10 div.part10_l div.part10_l_1 ul li").mouseover(function(){
		var index = $(this).index();
		$(this).find("div.imgCon a img").attr("src","images/part10magazineEWM"+(index+1)+".jpg");
	});
	$("#part10 div.part10_l div.part10_l_1 ul li").mouseout(function(){
		var index = $(this).index();
		$(this).find("div.imgCon a img").attr("src","images/part10magazine"+(index+1)+".jpg");
	});
	/*part10右侧二维码轮播效果*/
	var part10ScrollIndex = 1;
	var part10ScrollInterval = null;
	part10ScrollAutoPlay();
	$("#part10 div.part10_r div.btnCon div.dirr").click(function(){
		part10ScrollFlash();
	});
	$("#part10 div.part10_r div.btnCon div.dirl").click(function(){
		var $scrollLi = $("#part10 div.part10_r div.part10Scroll div.scrollList ul li");
		part10ScrollIndex --;
		if(part10ScrollIndex <= 0){
			part10ScrollIndex = $scrollLi.length-2;
			$("#part10 div.part10_r div.part10Scroll div.scrollList").css("left",(-1)*(part10ScrollIndex+1)*380+"px");
		}
		$("#part10 div.part10_r div.btnCon ul li").eq(part10ScrollIndex-1).addClass("on").siblings("li.on").removeClass("on");
		$("#part10 div.part10_r div.part10Scroll div.scrollList").animate({"left":(-1)*part10ScrollIndex*380+"px"},500);
	});
	$("#part10 div.part10_r div.btnCon ul li").mouseover(function(){
		var index = $(this).index();
		$("#part10 div.part10_r div.part10Scroll div.scrollList").animate({"left":(-1)*index*380+"px"},500);
		$(this).addClass("on").siblings("li.on").removeClass("on");
	});
	$("#part10 div.part10_r div.btnCon div.dir,#part10 div.part10_r div.btnCon ul li,#part10 div.part10_r div.part10Scroll").mouseover(function(){
		clearInterval(part10ScrollInterval);
	});
	$("#part10 div.part10_r div.btnCon div.dir,#part10 div.part10_r div.btnCon ul li,#part10 div.part10_r div.part10Scroll").mouseout(function(){
		part10ScrollAutoPlay();
	});
	function part10ScrollFlash(){
		var $scrollLi = $("#part10 div.part10_r div.part10Scroll div.scrollList ul li");
		part10ScrollIndex ++;
		if(part10ScrollIndex >= $scrollLi.length-1){
			part10ScrollIndex = 1;
			$("#part10 div.part10_r div.part10Scroll div.scrollList").css("left","0px");
		}
		$("#part10 div.part10_r div.btnCon ul li").eq(part10ScrollIndex-1).addClass("on").siblings("li.on").removeClass("on");
		$("#part10 div.part10_r div.part10Scroll div.scrollList").animate({"left":(-1)*part10ScrollIndex*380+"px"},500);
	}
	function part10ScrollAutoPlay(){
		part10ScrollInterval = setInterval(part10ScrollFlash,5000);
	}
	/*footer部分标签页切换效果*/
	$("#footer div.content div.footer_t ul.btnUl li").click(function(){
		var index = $(this).index();
		$(this).addClass("on").siblings("li.on").removeClass("on");
		$("#footer div.content div.footer_t div.bodyCon ul.conUl li").eq(index).show().siblings().hide();
	});
});
function selectCon(selectBtnObj,className,siblingBtn,selectContextObj,siblingSelContext){
	selectBtnObj.mouseover(function(){
		$(this).addClass(className).css({"cursor":"pointer"}).siblings(siblingBtn+"."+className).removeClass(className);
		var index = $(this).index();
		selectContextObj.eq(index).fadeIn().siblings(siblingSelContext).hide();
	});
}

/*三张图片轮播效果*/
function threeImgScroll($parent,threeScrollIndex){
	var threeScrollInterval = null;
	threeScrollAutoPlay();
	$parent.find(".imgScrollAll .dirr").click(function(){
		threeScrollFlash();
	});
	$parent.find(".imgScrollAll .dirl").click(function(){
		threeScrollIndex--;
		if(threeScrollIndex <= 0){
			threeScrollIndex = $parent.find(".imgScrollAll ul.scrollList li").length-2;
			$parent.find(".imgScrollAll ul.scrollList").css("left",(-1)*(threeScrollIndex+1)*480+"px");
		}
		$parent.find(".imgScrollAll ul.scrollList").animate({left:(-1)*threeScrollIndex*480+"px"},500,function(){
			$parent.find(".imgScrollAll p.scrollNum span.scrollIndex").html(threeScrollIndex);
		});
	});
	$parent.find(".imgScrollAll").mouseover(function(){
		clearInterval(threeScrollInterval);
	});
	$parent.find(".imgScrollAll").mouseout(function(){
		threeScrollAutoPlay();
	});
	function threeScrollAutoPlay(){
		threeScrollInterval = setInterval(threeScrollFlash,3000);	
	}
	function threeScrollFlash(){
		threeScrollIndex++;
		if(threeScrollIndex >= $parent.find(".imgScrollAll ul.scrollList li").length-1){
			threeScrollIndex = 1;
			$parent.find(".imgScrollAll ul.scrollList").css("left","0px");
		}
		$parent.find(".imgScrollAll ul.scrollList").animate({left:(-1)*threeScrollIndex*480+"px"},500,function(){
			$parent.find(".imgScrollAll p.scrollNum span.scrollIndex").html(threeScrollIndex);
		});
	}
}


