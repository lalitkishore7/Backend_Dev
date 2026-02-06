function fun() {
    console.log("Fun called");
    setTimeout(function exec() {
        console.log("Inside the 7s timeout");
    }, 7000);

     setTimeout(function process() {
       console.log("Inside the 3s timeout");
     }, 3000);  
}

fun();

// This is an example of how JavaScript timers are not guaranteed to run exactly in the order you expect when the main thread is blocked for a long time — because timer expiration order, not scheduling order, can determine execution.

for (let i = 0; i < 10000000000; i++){

}

 setTimeout(function last() {
   console.log("Inside the 0s timeout");
 }, 0);
 

