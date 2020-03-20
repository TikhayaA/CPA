$(document).ready(function() {
	$('#clock').countdown('2020/01/01', function(event) {
	  $(this).html(event.strftime('<div class="counter-item"><div class="counter-item-block">%D</div><span>שניות</span></div><div class="counter-item"><div class="counter-item-block">%H</div><span>דקות</span></div><div class="counter-item"><div class="counter-item-block">%M</div><span>השעה</span></div><div class="counter-item"><div class="counter-item-block">%S</div><span>ימים</span></div>'));
	});
});