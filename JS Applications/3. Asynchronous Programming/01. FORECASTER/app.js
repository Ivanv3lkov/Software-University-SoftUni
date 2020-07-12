import el from './dom.js';
import * as data from './data.js';

const symbols = {
    'Sunny': '&#x2600;',
    'Partly sunny': '&#x26C5;',
    'Overcast': '&#x2601;',
    'Rain': '&#x2614;',
    'Degrees': '&#176;'
};

window.addEventListener('load', () => {
    const input = document.querySelector('#location');
    const mainDiv = document.querySelector('#forecast');
    const todayDiv = document.querySelector('#current');
    const upcomingDiv = document.querySelector('#upcoming');

    document.querySelector('#submit').addEventListener('click', getForecast);

    async function getForecast() {
        const locationName = input.value;
        const code = await data.getCode(locationName);

        const todayP = data.getToday(code);
        const upcomingP = data.getUpcoming(code);

        const [today, upcoming] = [
            await todayP,
            await upcomingP
        ];

        const symbolSpan = el('span', '', { className: 'condition symbol' });
        symbolSpan.innerHTML = symbols[today.forecast.condition];

        todayDiv.appendChild(el('div', [
            symbolSpan,
            el('span', [
                el('span', today.name, { className: 'forecast-data' }),
                el('span', `${today.forecast.low}/${today.forecast.high}`, { className: 'forecast-data' }),
                el('span', today.forecast.condition, { className: 'forecast-data' })
            ], { className: 'condition' })
        ], {
            className: 'forecast'
        }));

        const forecastInfoDiv = el('div', upcoming.forecast.map(renderUpcoming), { className: 'forecast-info' });
        upcomingDiv.appendChild(forecastInfoDiv);

        mainDiv.style.display = 'block';
    }

    function renderUpcoming(forecast) {
        const symbolSpan = el('span', '', { className: 'symbol' });
        symbolSpan.innerHTML = symbols[forecast.condition];

        const tempSpan = el('span', '', { className: 'forecast-data' });
        tempSpan.innerHTML = `${forecast.low}${symbols.Degrees}/${forecast.high}${symbols.Degrees}`;

        const result = el('span', [
            symbolSpan,
            tempSpan,
            el('span', forecast.condition, { className: 'forecast-data' }),
        ], {
            className: 'upcoming'
        });

        return result
    }
});
