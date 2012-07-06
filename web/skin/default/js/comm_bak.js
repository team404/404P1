//载入右侧iframe的内容
function clickFun(e,url){
	$("#rIframe").attr("src",url);
	$(".meunBox_main_l ul li a").removeClass("cur");
	$(e).addClass("cur");
}

//仅用于跳转至用户赋值页面,用户赋值页面返回用户管理和产品管理
function clickFun2(e,url){
	$(parent.document.getElementById("rIframe")).attr("src",url);
}

$().ready(function(){
	
	$("div.meunBox_main_l h4").click(function(e){
		$(this).next("ul").slideToggle("fast");
	});
	
	$(".titleTR th a").click(function(e){
		if($(this).hasClass("aSort")){
			$(this).removeClass("aSort").addClass("dSort");
		}else if($(this).hasClass("dSort")){
			$(this).removeClass("dSort").addClass("aSort");
		}else{
			$(".titleTR th a").removeClass("aSort").removeClass("dSort");
			$(this).addClass("dSort");
		}
	});	
	
	$(".dataTable tr:nth-child(even)").addClass("trEven");
	
	$(".dataTable tr:not(.titleTR)").hover(function(){
		$(this).addClass("trHover");
	},function(){
		$(this).removeClass("trHover");
		
	});
	
	$("input.sBtn").hover(function(){
		$(this).addClass("sBtnHover");
	},function(){
		$(this).removeClass("sBtnHover");
	});
	
	$(".treeList li span.hasNode").css("cursor","pointer").click(function(e){
		var tmpObj=$(this).next("ul");
		tmpObj.slideToggle("fast");
		$(this).toggleClass("hasNodehide");
	});
	
	$(".treeList li span:not(.hasNode) a").click(function(e){
		$(".treeList li a").removeClass("cur");
		$(this).addClass("cur");
	});
	
	$("div.formBox span.rel select").change(function(e){
		$(this).parent().next().attr("value",$(this).attr("value"));
	});
	
	//dTreeNode的鼠标事件
	$(".dTreeNode").hover(function(){
		$(this).addClass("hover");
	},function(){
		$(this).removeClass("hover");
	})
	
	//login页面input的鼠标效果
	$("#loginDiv .txtInput input").focus(function(){
		$(this).parent("span").addClass("hover");
	}).blur(function(){
		$(this).parent("span").removeClass("hover");
	});
	$("#loginDiv .loginBtn input").hover(function(){
		$(this).addClass("hover");
	},function(){
		$(this).removeClass("hover");
	});
	
	//集团客户搜索框
	$(".GU_list li").filter(":even").addClass("trEven").end().filter(":last").css("border-bottom","none").end().hover(function(){$(this).addClass("trHover")},function(){$(this).removeClass("trHover")});
	$(".GU_input,.GU_showSearchIcon").click(function(e){
		$(".GU_box").show().find(".GU_keyWork_input").focus();
		if($.browser.msie && $.browser.version.charAt(0)=="6"){
			$("select").hide();
		}
		
	});
	
	$("#GU_close").click(function(){
		$(".GU_box").hide();
		if($.browser.msie && $.browser.version.charAt(0)=="6"){
			$("select").show();
		}
	});
	
	$(".GU_value").focusin(function(){
		$(".GU_box").hide();
		if($.browser.msie && $.browser.version.charAt(0)=="6"){
			$("select").show();
		}
	});
	
	
	$(".GU_list ul li :radio").click(function(){
		$(".GU_box").hide();
		if($(".GU_input").length=="0"){
			$(".GU_value").attr("value",$(this).next().text());
		}else{
			$(".GU_input").text($(this).next().text());
		}
		
		$(".GU_wrap input[type=hidden]").attr("value",$(this).next().text());
	});
});
	
var winSizeArr=[[450,430],[450,280],[450,135],[230,95]];
//弹窗
//参数依次为：页面url,事件目标，弹窗标题，弹窗大小，内嵌iframe的级数
function popFun(url,target,tit,winSize,is2Parent){

	$("select").css("visibility","hidden");
	if(is2Parent==2){//这里是1以上是用表示 右侧frame里有内嵌了两个或以上的frame
		$(parent.parent.document.getElementById("rIframe").contentWindow.document.getElementById("right_r_m").contentWindow.document.getElementsByTagName("select")).css("visibility","hidden");
		$(parent.parent.document.getElementById("rIframe").contentWindow.document.getElementById("left_r_m").contentWindow.document.getElementsByTagName("select")).css("visibility","hidden");
	}else if(is2Parent==3){
		$(parent.parent.parent.document.getElementById("rIframe").contentWindow.document.getElementById("right_r_m").contentWindow.document.getElementsByTagName("select")).css("visibility","hidden");
		$(parent.parent.parent.document.getElementById("rIframe").contentWindow.document.getElementById("left_r_m").contentWindow.document.getElementsByTagName("select")).css("visibility","hidden");
	}
	
	if(is2Parent==2){
		var _docW=$(parent.parent.document).width(),_docH=$(parent.parent.document).height();
		var _mask=parent.parent.document.getElementById("mask"),tmpW,tmpH;
		var _popWin=parent.parent.document.getElementById("popWin");
		var _scroll=$(parent.parent.document).scrollTop();
	}else if(is2Parent==3){
		var _docW=$(parent.parent.parent.document).width(),_docH=$(parent.parent.parent.document).height();
		var _mask=parent.parent.parent.document.getElementById("mask"),tmpW,tmpH;
		var _popWin=parent.parent.parent.document.getElementById("popWin");
		var _scroll=$(parent.parent.parent.document).scrollTop();
		
	}else{
		var _docW=$(parent.document).width(),_docH=$(parent.document).height();
		var _mask=parent.document.getElementById("mask"),tmpW,tmpH;
		var _popWin=parent.document.getElementById("popWin");
		var _scroll=$(parent.document).scrollTop();
	}
	
	switch(winSize){
		case 1:tmpW=winSizeArr[0][0];tmpH=winSizeArr[0][1];break;
		case 2:tmpW=winSizeArr[1][0];tmpH=winSizeArr[1][1];break;
		case 3:tmpW=winSizeArr[2][0];tmpH=winSizeArr[2][1];break;
		case 4:tmpW=winSizeArr[3][0];tmpH=winSizeArr[3][1];break;
		default:tmpW=500;tmpH=600;break;
	}
	
	var _popWinCont="<h2 height='34' class='title'><span class='fLeft'>"+tit+"</span><a style='cursor:pointer'href='javascript:hidepopWinFun(1,"+is2Parent+");' id='closePopWinBtn'><img src='skin/default/images/blank.gif'></a></h2><iframe scrolling='no' frameborder='0' hspace='0' width='"+tmpW+"' height='"+tmpH+"' src="+url+"></iframe>";
	$(_popWin).empty().append(_popWinCont);
	var _iframeW=$(_popWin).find("iframe").width(),_iframeH=$(_popWin).find("iframe").height(),_h2H=38;
	var _smallWinH=0;//用于更好小窗口的顶部高度
	if(winSize>1){
		_smallWinH=100;
	}
	var _endW=$(_popWin).find("iframe").width(),
		_endH=$(_popWin).find("iframe").height()+_h2H,
		_endT=_docH*0.5-(_iframeH+_h2H)*0.7+_scroll-_smallWinH,
		_endL=_docW*0.5-_iframeW*0.5;
		
	/*
	$(_mask).css({"display": "block","height":_docH,opacity:"0.65"});
	$(_popWin).css({"display":"block",opacity:"1","width":_endW,"height":_endH,"left":_endL,"top":_endT});
	*/
	
	$(_mask).css({"display": "block","height":_docH}).animate({opacity:"0.65"},250,function(){
		$(_popWin).css({"width":_endW*0.9,"height":_endH*0.9,"left":_endL*0.99,"top":_endT*0.99,"display":"block"}).animate({opacity:"1","width":_endW,"height":_endH,"left":_endL,"top":_endT},200);
	});
	
	
}

//弹窗里取消按钮
//param1:判断是点击mask层和右上角关闭按钮 or 弹窗中的取消按钮
//param2:判断显示select的层数
function hidepopWinFun(param1,param2){
	if(param1==1){//点击mask层和右上角关闭按钮
		$("#popWin").css({"display":"none","opacity":"0"});
		$("#mask").css({"display":"none","opacity":"0"});
	}else if(param1==2){//点击弹窗中的取消按钮
		$(parent.document.getElementById("popWin")).css({"display":"none","opacity":"0"});
		$(parent.document.getElementById("mask")).css({"display":"none","opacity":"0"});
	}
	
	//下面是判断显示select的层数
	$(parent.document.getElementById("rIframe").contentWindow.document.getElementsByTagName("select")).css("visibility","visible");
	if(param2==2){
		$(parent.document.getElementById("rIframe").contentWindow.document.getElementById("right_r_m").contentWindow.document.getElementsByTagName("select")).css("visibility","visible");
	}else if(param2==3){
		$(parent.document.getElementById("rIframe").contentWindow.document.getElementById("right_r_m").contentWindow.document.getElementById("frame_r_r_m").contentWindow.document.getElementsByTagName("select")).css("visibility","visible");
	}
}


function setSize(target){
		$(target).attr("width",$("#main").width()-$("#left_m").width()-20);
}

//表格全选函数
var $thList,thIndex;
function selAllFun(target){
	$thList=$(target).parents(".dataTable");
	thIndex=jQuery.inArray(target,$(target).parent().find("th"));
	if($(target).find("input").attr("checked")=="checked"){
		$thList.find("tr td:nth-child("+(thIndex+1)+") input").attr("checked",true);
	}else{
		$thList.find("tr td:nth-child("+(thIndex+1)+") input").attr("checked",false);
	}
}

//设置#right_r_m的宽度
function setRFrameSize(target){
    var _w = screen.width, _h = screen.height;
    if (_w < 1280) {
        $(target).attr("width", "65%");
    }
    else {
        $(target).attr("width", "74%");
    }
}

