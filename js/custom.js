/* =========================================================
 * site.js 
 * =========================================================
 * This is a place to hold your custom scripts for your site
 * ========================================================= */

/* 
 * Use functions like this to call additional javascript files through js.This * way you don't have to add any additional code to the template 
 */
// (function() {
//   var url = "https://raw.github.com/jquery/jquery-color/master/jquery.color.js";
//   $.getScript(url, function() {
//     $("#go").click(function(){
//       $(".block")
//         .animate( { backgroundColor: "rgb(255, 180, 180)" }, 1000 )
//         .delay(500)
//         .animate( { backgroundColor: "olive" }, 1000 )
//         .delay(500)
//         .animate( { backgroundColor: "#00f" }, 1000 );
//     });
//   });
// })();

/* 
 * Trunctate the long title of "On Our Terms" to something more breadcrumb
 * friendly. 
 */

// Long title
fullTitle = 'On Our Terms: The Undergraduate Journal of the Athena Center for Leadership Studies at Barnard College';

// Friendly title
friendlyTitle = 'On Our Terms';

$(document).ready(function(){
	// Shorten the title in the breadcrumbs
	$('#breadcrumb a').each(function() {
		if( $(this).text() == fullTitle ) { 
			$(this).text(friendlyTitle);
		}
	});

	// Hide the page title if it's the journal title
	if( $('#breadcrumb + h2').text() == fullTitle ) { 
			$('#breadcrumb + h2').hide();
		}
});