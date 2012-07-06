$().ready(function(){
	$("form").each(function(){
		$(this).attr("id",$(this).attr("name"))
	});	
	
	$.formValidator.initConfig({formID:"form_1",debug:false,
		onError:function(msg,obj,errorlist){
			alert(msg);
		},
		submitAfterAjaxPrompt : '有数据正在异步验证，请稍等...'
	});
	
	$("#pageName").formValidator({
		onShow:"请输入用户名",
		onFocus:"用户名在5至10个字符",
		onCorrect:"该用户名可以注册"
		}).inputValidator({min:5,max:10,onError:"用户名非法"});
		
	$("#keyWork").formValidator({
		onShow:"请输入用户名",
		onFocus:"用户名在5至10个字符",
		onCorrect:"该用户名可以注册"
		}).inputValidator({min:5,max:10,onError:"用户名非法"});
});
