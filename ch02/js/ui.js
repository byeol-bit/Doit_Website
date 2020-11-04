$(document).ready(function(){
	$("#container").addClass("start");
		$("nav li").click(function(){
			$("#container").css("max-width", "100%");
			var id = $(this).attr("data-rol");
			$("nav li").removeClass("on");
			$(this).addClass("on");
			$(".content").removeClass("prev this next");
			$("#" + id).addClass("this").prevAll().addClass("prev");
			$("#" + id).nextAll().addClass("next");
		});

		$(".logo_box").click(function(){
			$("nav li").removeClass("on");
			$(".content").removeClass("prev this next");
			$("$container").css("max-width", "1200px");
		});

		$(".roll_left").click(function(){
			$(".book_roll li").eq(0).insertAfter(".book_roll li:last-child");
		});
		$(".roll_right").click(function(){
			$(".book_roll li").eq(-1).insertBefore(".book_roll li:first-child");
		});
		// ajax 사용
		$(".book_roll li").click(function(){
			var _this = $(this);
			var liurl = _this.data("url");
			$(".notebook").html();
			$.ajax({
				type : 'post', // HTTP 요청 방식
				url : liurl, // 해당 li_url
				dataType : 'html', // data 타입
				success : function(data) {
					$(".notebook").html(data);
				}
			});
		});
		// 아코디언 기능 구현하기
		$(".accordio_box ol li").click(function(){
			$(".accordio_box ol li").removeClass("on");
			$(this).addClass("on");
		});
		$(".close").click(function(){
			$(".thankyou_message").css("display", "none");
		});
});
