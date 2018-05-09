//景区选区选项卡
$(function() {
	$('#allji li').click(function(){
		var index = $(this).index();
		$(this).addClass('now1').siblings().removeClass('now1');
		$('.all2 ol').eq(index).fadeIn().siblings('.all2 ol').hide();
	})
	
	$('#alljing li').click(function() {
		var index = $(this).index();
		$(this).addClass('now').siblings().removeClass('now');
		$('#all1 ol').eq(index).fadeIn().siblings('#all1 ol').hide();
	})
	
	
	
	var tage=0;
	ajaj();
	function ajaj(){
		$.ajax({
	   		type:"get",
	   		url:"jianzhu.json",
	   		async:true,
	   		success:function(data){
	   			if(data[tage]){
	   				$(".all2 ul").html("")
	   				var data=data[tage];
		 			for(var i=0;i<9;i++){
		 				var dat = data[i];
		 				console.log(dat);
		 				console.log($(".jiazai").html());
		 				var item = $(".jiazai").html().replace("$pic$",dat.pic).replace("$one1$",dat.one1).replace("$two1$",dat.two1);
		 				
		 				$(".all2 ul").append(item);
		 			}
	   			}
	   		}
	  	});
	}
	$("#jiabtn").click(function(){
		tage++;
		ajaj();
		
	})
})