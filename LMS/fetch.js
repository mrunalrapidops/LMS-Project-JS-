//fetch from myjson.com
	fetch('https://api.myjson.com/bins/jer52');
		.then(function(){
			res = res.json()
			console.log(res);
		})
