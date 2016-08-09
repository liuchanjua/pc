$(function(){
	//模仿下拉菜单的功能
	function selectStyle(tag){
		//首先将原来的select隐藏
		$(tag).hide();

		$(tag).each(function(){
			var defaultTxt=$(this).children().first().text();
			var HTML=['<div class="select">','<h5>'+defaultTxt+'</h5>','<i class="up"></i>','<ul>'];
			$(this).find("option").each(function(){
				HTML.push('<li>'+$(this).text()+'</li>');
				console.log($(this).text())
			})

			HTML.push('</ul>','</div>');
			console.log(HTML);
			console.log(HTML.join(""))
			$(this).before(HTML.join(""));

			//为模仿出来的列表添加单击事件
			var show=false;
			
			$(".select").on("click",function(){
				var sub=$(this).find("ul");
				var cur=$(this).find("h5");
				if(show){
					$(this).find("ul").hide();
					
					$(this).find("i").removeClass("up");
					show=false;
				}else{
					$(this).find("ul").show();
					
					$(this).find("i").addClass("up");
					show=true;
				}

				//点击li时
				sub.on("click","li",function(){
					//获取二级菜单并添加到h5中
					alert($(this).text());
					
					
					cur.text($(this).text());
				})
				
			})

			
		})


	}
	selectStyle("select")
})