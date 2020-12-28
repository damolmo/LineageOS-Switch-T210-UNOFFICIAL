/*
 * Copyright 2017 Ivan Ridao Freitas
 * Author URI: https://ivanrf.com/en/
 * License: GPL2
 */

"use strict";

jQuery(document).ready(function() {
	jQuery(".notice .notice-dismiss").click(function() {
		jQuery.post(ajaxurl, {
			action : 'grd_dismiss_notice',
			grd_dismiss_notice_id: jQuery(this).parent().attr('id')
		});
	});
});