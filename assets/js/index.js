$(document).ready(function() {
  $(window).on('scroll', function() {
    // Get the current scroll position
    let scrollPosition = $(this).scrollTop();

		let percent = scrollPosition * 100 / ($(document).height() - $(window).height());

		$('#scroll').css('width', percent + '%')
  });

	$('button').on({
		click: function() {
			if ($(this).text() === 'More Menu') {
				let menu = $('#our-menu .second-part')
				if (menu.children().length * 2 <= 32) {
					const element = menu.html();
					menu.append($.parseHTML(element))
				}
				else {
					$(this).text("It's All")
				}
			}
		}
	})
});
