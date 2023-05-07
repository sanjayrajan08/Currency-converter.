$(document).ready(function() {
	$("#convert").click(function() {
		var from = $("#from").val();
		var to = $("#to").val();
		var amount = $("#amount").val();
		if(amount == "") {
			$("#amount").focus();
			return;
		}
		if(from == to) {
			$("#result").val(amount);
			return;
		}
		var url = "https://v6.exchangerate-api.com/v6/da4b0fd6ff4afdfd1c20ab89/latest/" + from;
		
		$.get(url, function(data) {
			var rate = data.conversion_rates[to];
			var result = amount * rate;
			$("#result").val(result.toFixed(2));
		});
	});
});
