$().ready(function(){
	var tabBoxArr=$(".tabBox"),length=tabBoxArr.length;
	$("#tabWrap").before("<ul  id='tabTit' class='overflowDiv'></ul>")
	
	tabBoxArr.each(function(index,target){
		if(index==0){
			$("#tabTit").append("<li class='cur' id='"+index+"'>"+$(target).attr("title")+"</li>");
		}else{
			$("#tabTit").append("<li id='"+index+"'>"+$(target).attr("title")+"</li>");
		}
	})
	
	$("#tabTit li").click(function(e){
		$("#tabTit li").removeClass("cur");
		$(this).addClass("cur");
		$(".tabBox").addClass("hide");
		$(".tabBox").eq($.inArray(this,$("#tabTit li"))).removeClass("hide");
	}).hover(function(){
		$(this).addClass("hover");
	},function(){
		$(this).removeClass("hover");
	});
});