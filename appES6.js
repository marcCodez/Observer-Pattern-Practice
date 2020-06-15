// create function constructor
class EventObserver {
    // Add property observers, represents the functions that will be passed into it
    constructor(){
    this.observers = [];
    }


// clean way of adding methods in the prototpe instead of e.g. prototype.subscribe

     subscribe(fn) {
        this.observers.push(fn);
        console.log(`You are now subscribed to ${fn.name} `)
    }
    unsubscribe(fn) {
        this.observers = this.observers.filter(function(item){
            // Filter out from the list whatever matches the callback function. If there is
            //no match the callback gets to stay on the list. The filter returns a new list and
            //reassigns the list of observers that are subscribed to
            if(item!== fn) {
              return item;  
            }
        });
        console.log(`You are now unsubscirbed from ${fn.name}`)
    }
    
    // loop through observers
    fire() {
        this.observers.forEach(function(item){
            item.call();
        });
    }
}


const click = new EventObserver();

// Event Listeners
// Subscribe ms
document.querySelector('.sub-ms').addEventListener('click', 
function() {
    click.subscribe(getCurrentMilliseconds);
});

// Unsubscribe ms
document.querySelector('.unsub-ms').addEventListener('click', 
function() {
    click.unsubscribe(getCurrentMilliseconds);
});

// loop
document.querySelector('.fire').addEventListener('click', 
function() {
    click.fire();
});

// Subscribe s
document.querySelector('.sub-s').addEventListener('click', 
function() {
    click.subscribe(getCurrentSeconds);
});

// Unsubscribe s
document.querySelector('.unsub-s').addEventListener('click', 
function() {
    click.unsubscribe(getCurrentSeconds);
});



// subscribe() takes in a function to subscribe to, so we need to create it
// Click Handler
const getCurrentMilliseconds = function() {
    console.log(`Current Milliseconds: ${new Date().getMilliseconds()}`)
}

const getCurrentSeconds = function() {
    console.log(`Current Seconds: ${new Date().getSeconds()}`)
}