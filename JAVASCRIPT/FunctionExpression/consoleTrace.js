function fun() {
    console.log("Enter fun");
}

function gun(fn) {
    console.log("Enter gun")
    fn();
    console.log("Leave gun");
    console.trace();
}

gun(fun);
