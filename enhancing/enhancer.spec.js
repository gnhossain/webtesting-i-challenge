
const { repair, succeed, fail, get }= require('./enhancer.js');
// test away!

function createItem(name='Item 1', durability = 100, enhancement= 20){
    const item = {
        name:name,
        durability:durability,
        enhancement:enhancement
    }
    return item
}

it ('should run the test', function(){
    expect(true).toBe(true)
})

// describe(".succeed()", function() {
//     it("should succeed", function(){
//         expect(succeed({name:"Item 1", enhancement:19, durability:100 }).toBe({name:"Item 1", enhancement:20, durability:100}))
//     })
// })

// describe("enhancer.js", function(){
    describe(".repair()", function(){
        it("returns a new item object with durability:100", function(){
          
            const repairItem = repair(createItem())
          expect(repairItem.durability).toBe(100)
        })
    })
    

describe(".succeed.()", function(){
    it("returns a newItem with enhancemnet increase by 1", function(){
        let succeedItem = succeed(createItem())
        expect(succeedItem.enhancement).toBe(20)

    })
    it("returns a newItem with enhancemnet increase by 1", function(){
        let succeedItem = succeed(createItem("Item 1", 100, 20))
        expect(succeedItem.enhancement).toBe(20)

    })
    it("returns a newItem with enhancement increase by 1", function(){
    let succeedItem = succeed(createItem("Item 1", 100, 20))
    expect(succeedItem.enhancement).toBe(20)

    })


    describe(".fail.()", function(){
        it("returns a newItem with chenged enhancement ", function(){
            let failedItem = fail(createItem())
            expect(failedItem.durability).toBe(90)

        })

        it("returns a newItem with chenged enhancement ", function(){
            let failedItem = fail(createItem("Item 1", 100, 15))
            expect(failedItem.durability).toBe(90)

        })
        it("returns a newItem with chenged enhancement ", function(){
            let failedItem = fail(createItem("Item 1", 100, 18))
            expect(failedItem.enhancement).toBe(17)

        })
    })   
    

    describe(".get.()", function(){
        it("returns a newItem with chenged enhancement ", function(){
            let getItem = get(createItem())
            expect(getItem.name).toBe('[+20] Item 1')

        })

        it("returns a newItem with chenged enhancement ", function(){
            let getItem = get(createItem("Item 1", 100, 7))
            expect(getItem.name).toBe('[+7] Item 1')

        })
        it("returns a newItem with chenged enhancement ", function(){
            let getItem = get(createItem("Item 1", 100, 0))
            expect(getItem.name).toBe('Item 1')

        })
    })   

})