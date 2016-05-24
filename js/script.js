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

$('button').each(function() {
	$(this).click(function(event) {
		$('#outline a').focus();
	});
});


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
/*****************
       Key
*****************/





/***********************************************************
                      Non-Event Function
************************************************************/
/*   3     #    */

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
