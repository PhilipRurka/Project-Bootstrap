/***********************************************************
                         	Var
************************************************************/
/*   3     #    */






/***********************************************************
                      Append + CSS + Hide
************************************************************/
/*   3     #    */





/***********************************************************
                       Event Function
************************************************************/





/*****************
      Mouse
*****************/


$('.box li').click(function(event) {
	event.preventDefault();
	$(this).toggleClass('checked');
});

// Hack to solve the outline issue.
$('button').each(function() {
	$(this).click(function(event) {
		$('#outline a').focus();
	});
});
// Hack to solve the outline issue.

$('.add-comment').each(function() {
	$(this).click(function (event) {
		event.preventDefault();
		$('.comment-section').not($(this).siblings('.comment-section')).removeClass('disable');
		$(this).siblings('.comment-section').toggleClass('disable');

		// Hack to solve the outline issue.
		if (!$('.comment-section').hasClass('disable')) {
			$('#outline a').focus();
		// Hack to solve the outline issue.

		} else {
			$(this).siblings('.comment-section').children('.textarea').focus();
		}
	});
})

$('.checkbox label').each(function(){
	$(this).mousedown(function(){
		if ( !$(this).parent('.checkbox').hasClass('disabled') ) {
			$(this).find('.box').toggleClass('checked-mark');
		};
	});
});

/*****************
       Key
*****************/





/***********************************************************
                      Non-Event Function
************************************************************/
/*   3     #    */

$(window).on("resize", function() {

    if($(window).width() < 1200) {

        $(".content-list").insertBefore($(".content-members"));
        $(".content-admin").insertBefore($(".content-list"));

    } else {

        $(".content-comments").insertBefore($(".content-list"));
        $(".content-admin").insertBefore($(".content-comments"));
        $(".content-members").insertBefore($(".content-admin"));

    }

}).resize();


// Hack to solve the outline issue.
$('a, button').each(function(){
	$(this).addClass('outline-hover');
});
// Hack to solve the outline issue.




/***********************************************************
                       	   Test
************************************************************/
/*   3     #    */

// var test;
