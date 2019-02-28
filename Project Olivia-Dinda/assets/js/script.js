var endTime = 31000

function countdown1(endTime, nyawas) {
    cd = setInterval(calculate, 1000);

    function calculate() {

        let timeRemaining = parseInt((endTime - 1) / 1000);

        if (timeRemaining > 0) {
            seconds = parseInt(timeRemaining);

            document.getElementById("seconds").innerHTML = ("0" + seconds).slice(-2);
        } else {
            nyawas = nyawas - 1
            if (nyawas > 0) {
                document.getElementById("nyawa").innerHTML = nyawas
                document.getElementById("seconds").innerHTML = 30
                endTime = 31000
            } else {
                if (!alert("Game Over")) {
                    document.location = 'index.html'
                }
            }
        }
        endTime = endTime - 1000
    }
}

function countdown2(endTime, nyawas) {
    clearInterval(cd)
    document.getElementById("nyawa").innerHTML = nyawas
    document.getElementById("seconds").innerHTML = 30
    cd = setInterval(calculate, 1000);

    function calculate() {

        let timeRemaining = parseInt((endTime - 1) / 1000);

        if (timeRemaining > 0) {
            seconds = parseInt(timeRemaining);

            document.getElementById("seconds").innerHTML = ("0" + seconds).slice(-2);
        } else {
            nyawas = nyawas - 1
            if (nyawas > 0) {
                document.getElementById("nyawa").innerHTML = nyawas
                document.getElementById("seconds").innerHTML = 30
                endTime = 31000
            } else {
                if (!alert("Game Over")) {
                    document.location = 'index.html'
                }
            }
        }
        endTime = endTime - 1000
    }
}

function timeRemainings1() {
    countdown1(31000, 3);
};

function timeRemainings2() {
    countdown2(31000, document.getElementById("nyawa").innerHTML);
};