function fetchNextElement(array) {
    let idx = 0;

    function next() {
        if (idx == array.length) {
            return {value : undefined, done : true};
        }

        const nextElement = array[idx++];
        return {value : nextElement, done : false};
    }

    return { next };
}

const automaticFetcher = fetchNextElement([99, 11, 3, 0, 5]);
console.log(automaticFetcher.next());
console.log(automaticFetcher.next());
console.log(automaticFetcher.next());
console.log(automaticFetcher.next());
console.log(automaticFetcher.next());
console.log(automaticFetcher.next());


