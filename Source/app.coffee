
$(document).ready ->
	# Disable Separator
	$('#separatorButton').removeAttr 'data-toggle'
	
	selected = null
	# List
	$('.ListBody li').click ->
		if (selected != null)
			selected.removeClass 'active'
		selected = $(this)
		selected.addClass 'active'
	
	# Popover
	$('[data-toggle="tooltip"').tooltip();
	
	# SideNav
	content = null
	button = null
	$('.SideNav li a span').click ->
		$('#' + content).addClass 'hideModule'
		if (button != null)
			button.removeClass 'active'
		button = $(this)
		content = $(this).attr('content')
		$('#' + content).removeClass 'hideModule'
		$(this).addClass "active"
		# Layout
		$('#' + content + ' .Layout').layout()
