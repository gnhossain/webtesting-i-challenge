
const { succeed, fail, repair, get }= require('./enhancer.js');
// test away!

it ('should run the test', function(){
    expect(true).toBe(true)
})

// describe(".succeed()", function() {
//     it("should succeed", function(){
//         expect(succeed({name:"Item 1", enhancement:19, durability:100 }).toBe({name:"Item 1", enhancement:20, durability:100}))
//     })
// })