function solve() {
    let infoSpan = document.querySelector("#info > span");
    let departBtn = document.querySelector("#depart");
    let arriveBtn = document.querySelector("#arrive");

    let currentStopID = "depot";
    let stopName;

    function depart() {
        fetch(`http://localhost:3030/jsonstore/bus/schedule/${currentStopID}`)
            .then(res => res.json())
            .then(data => {
                let { name, next } = data;
                stopName = name;
                currentStopID = next;
                infoSpan.textContent = `Next stop ${stopName}`;
                departBtn.disabled = true;
                arriveBtn.disabled = false;
            })
            .catch(err => {
                infoSpan.textContent = "Error";
                departBtn.disabled = true;
                arriveBtn.disabled = true;
            });
    }

    function arrive() {
        departBtn.disabled = false;
        arriveBtn.disabled = true;
        infoSpan.textContent = `Arriving at ${stopName}`;
    }

    return {
        depart,
        arrive
    };
}

let result = solve();