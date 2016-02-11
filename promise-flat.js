var
  concat= Array.prototype.concat,
  all= Promise.all

function PromiseFlat(){
	return Promise.all(arguments).then(function(args){
		return concat.apply([], args)
	})
}

module.exports= PromiseFlat
module.exports.default= PromiseFlat
module.exports.PromiseFlat= PromiseFlat
