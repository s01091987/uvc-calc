$(document).ready(function(){
	var monkeyWork = {};
	$.getJSON("https://spreadsheets.google.com/feeds/list/1gdA5_GxDcTFmHKWTrfOVg6f7y7mJtem444NQUKuFgiY/od6/public/values?alt=json", function(data){
		data = data['feed']['entry'];
		console.log(data);
		data2 = data[2]['gsx$_cpzh4']['$t'];
		monkeyWork.Truck15TWidth1mA = data[2]['gsx$_cpzh4']['$t'];
		console.log(monkeyWork.Truck15TWidth1mA);
		console.log(typeof data);
		console.log(data[2]['gsx$_cpzh4']['$t'].length);
	})
	$('.shop-button').each(function(){
		$(this).click(function(){
			$(this).find('input').prop('checked', true);
			//console.log($(this).find('input').val());

			check_status();
		});
	});

	function check_status(){
		var total_cost = '';
		$('.shop-button').each(function(){			
			if ($(this).find('input').prop('checked') == true) {
				total_cost += $(this).find('input').val();
			}
		});
		console.log(total_cost);
		$('.total_cost').text(total_cost);
	}

	check_status();

	var monkeyWork = {
		Truck15TWidth1mA: 1,
		Truck15TWidth1mD: 2,
		Truck20TWidth1mA: 3,
		Truck20TWidth1mD: 4
	}
	
})
