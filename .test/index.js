var
  flat= require(".."),
  tape= require("tape")

tape("Basic test of PromiseFlat concattenation", function(t){
	flat(4, 5, [6, 7], 8).then(function(result){
		t.deepEqual(result, [4, 5, 6, 7, 8], "Concattenated primitives")
		t.end()
	})
})

tape("Promises test of PromiseFlat concattenation", function(t){
	var
	  a= Promise.resolve("a"),
	  b= Promise.resolve("b")
	flat(a, b, "c").then(function(result){
		t.deepEqual(result, ["a", "b", "c"], "Concattenated promises")
		t.end()
	})
})
