function attachEventsListeners() {
    const types = {
        km: 1000,
        m: 1,
        cm: 0.01,
        mm: 0.001,
        mi: 1609.34,
        yrd: 0.9144,
        ft: 0.3048,
        in: 0.0254
    };
    const button = document.querySelector('#convert');
    const inputUnits = document.querySelector('#inputUnits');
    const outputUnits = document.querySelector('#outputUnits');
    const inputDistance = document.querySelector('#inputDistance');
    const outputDistance = document.querySelector('#outputDistance');

    button.addEventListener('click', () => {
        let inputType = inputUnits.value;
        let outputType = outputUnits.value;
        let distanceInMeters = Number(inputDistance.value) * types[inputType];
        outputDistance.value = distanceInMeters / types[outputType];
    });
}