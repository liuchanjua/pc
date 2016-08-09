$(function(){
	//鼠标点击导航，塔普图显示
	$(".daohang").on("click",function(){

		$(".tapu").animate({
			"opacity":1,
			"transition":".3s"
		})
	})

	//做二级菜单
	$(".tp_list").on("click","h3",function(){
		$(this).next().toggleClass("tp_hide");
		
	})
})