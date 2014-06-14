define(['module1'], function(module1) {
	return {
		doSomething: function(x) {
			var y = module1.addOne(x);
			return y;		
		}
	}
});