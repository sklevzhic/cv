function print(from: number, to: number) {
    let current = from;

    let timerId = setInterval(function() {
        setText(current);
        if (current == to) {
            clearInterval(timerId);
        }
        current++;
    }, 1000);
}