function fun() {
  for (let i = 0; i < 3; i++) {
    setTimeout(function gun() {
      console.log(`i : ${i}`);
    }, i * 1000);
  }
}

fun();
