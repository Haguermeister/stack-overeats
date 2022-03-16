let caloriesConsumedCurrentData;
let caloriesBurnedCurrentData;
let consumedChart;
let burnedChart;


function getUserId() {
    const userId = localStorage.getItem('userId');
    return userId ?? 1;
}
function getConsumedCurrent(userId,) {
    let route = `/api/caloriesconsumed/${userId}`;

    return fetch(route, {
        method: "get",
        headers: {
            'Content-Type': 'application/json'
        }
    }).then(response => response.json()).then(data => {
        return data;
    }
    );
}
function getBurnedCurrent(userId) {
    let route = `/api/caloriesburned/${userId}`;
    return fetch(route, {
        method: "get",
        headers: {
            'Content-Type': 'application/json'
        }
    }).then(response => response.json()).then(data => {
        return data;
    });
}
function chartsetup(caloriesConsumedCurrentData, caloriesBurnedCurrentData) {
    consumedChart = new Chart(document.getElementById('calorieConsumedChart'), {
        type: 'doughnut',
        data: {
            datasets: [{
                borderColor: "rgba(0,255,255,.75)",
                pointBorderColor: "#fff",
                data: [caloriesConsumedCurrentData.amount, caloriesConsumedCurrentData.goal - caloriesConsumedCurrentData.amount],
                backgroundColor: [
                    '#13726d',
                    '#42e4dc'],
                hoverOffset: 4
            }]
        },
        options: {
            responsive: true,
            plugins: {
                title: {
                    display: true,
                    color: "#fff",
                    font: function (context) {
                        var width = context.chart.width;
                        var size = Math.round(width / 9);
                        return {
                            size: size,
                            weight: 600
                        };
                    },
                    text: 'Calorie Consumption'
                }
            }
        }
    });
    let mathConsumed = caloriesConsumedCurrentData.goal - caloriesConsumedCurrentData.amount;
    if (mathConsumed <= 0) {
        mathConsumed = 0;
        consumedChart.data.datasets[0].backgroundColor[0] = "#8D814B";
        consumedChart.data.datasets[0].data = [caloriesConsumedCurrentData.amount, mathConsumed];
        consumedChart.update();
    }
    burnedChart = new Chart(document.getElementById('calorieBurnedChart'), {
        type: 'doughnut',
        data:
        {
            datasets: [{
                borderColor: "rgba(0,255,255,.75)",
                pointBorderColor: "#fff",
                data: [caloriesBurnedCurrentData.amount, caloriesBurnedCurrentData.goal - caloriesBurnedCurrentData.amount],
                backgroundColor: [
                    '#13726d',
                    '#42e4dc'],
                hoverOffset: 4
            }]
        },
        options: {
            responsive: true,
            plugins: {
                title: {
                    display: true,
                    color: "#fff",
                    font: function (context) {
                        var width = context.chart.width;
                        var size = Math.round(width / 9);
                        return {
                            size: size,
                            weight: 600
                        };
                    },
                    text: 'Calories Burnt'
                }
            },

        }
    });
    let mathBurned = caloriesBurnedCurrentData.goal - caloriesBurnedCurrentData.amount;
    if (mathBurned <= 0) {
        mathBurned = 0;
        burnedChart.data.datasets[0].backgroundColor[0] = "#8D814B";
        burnedChart.data.datasets[0].data = [caloriesBurnedCurrentData.amount, mathBurned];
        burnedChart.update();
    }
    return consumedChart, burnedChart;
}
async function displayChart() {
    let userId = getUserId();
    caloriesConsumedCurrentData = await getConsumedCurrent(userId);
    caloriesBurnedCurrentData = await getBurnedCurrent(userId);
    console.log('Calories Consumed Current Data', caloriesConsumedCurrentData, 'Calories Burned Current Data', caloriesBurnedCurrentData);
    return chartsetup(caloriesConsumedCurrentData, caloriesBurnedCurrentData);
}
displayChart();

async function caloriesConsumedSubmitHandler(event) {
    event.preventDefault();
    let userId = getUserId();
    let consumed = parseInt(document.getElementById('consumedInput').value);
    caloriesConsumedCurrentData.amount += consumed;
    const response = await fetch(`/api/caloriesconsumed/${userId}`, {
        method: "PUT",
        body: JSON.stringify({
            amount: caloriesConsumedCurrentData.amount
        }),
        headers: {
            'Content-Type': 'application/json'
        }
    });
    if (response.ok) {
        let math = caloriesConsumedCurrentData.goal - caloriesConsumedCurrentData.amount;
        if (math <= 0) {
            math = 0;
            consumedChart.data.datasets[0].backgroundColor[0] = "#8D814B";
        }
        else {
            consumedChart.data.datasets[0].backgroundColor[0] = "#13726d";
        }
        consumedChart.data.datasets[0].data = [caloriesConsumedCurrentData.amount, math];
        consumedChart.update();
    }
    else {
        alert(response.statusText);
    }
}
async function caloriesBurnedSubmitHandler(event) {
    event.preventDefault();

    let userId = getUserId();
    let burned = parseInt(document.getElementById('burnedInput').value);
    caloriesBurnedCurrentData.amount += burned;

    const response = await fetch(`/api/caloriesburned/${userId}`, {
        method: "PUT",
        body: JSON.stringify({
            user_id: userId,
            amount: caloriesBurnedCurrentData.amount
        }),
        headers: {
            'Content-Type': 'application/json'
        }
    });
    if (response.ok) {
        let math = caloriesBurnedCurrentData.goal - caloriesBurnedCurrentData.amount;
        if (math <= 0) {
            math = 0;
            burnedChart.data.datasets[0].backgroundColor[0] = "#8D814B";
        }
        else {
            burnedChart.data.datasets[0].backgroundColor[0] = "#13726d";
        }
        burnedChart.data.datasets[0].data = [caloriesBurnedCurrentData.amount, math];
        burnedChart.update();
    }
    else {
        alert(response.statusText);
    }
}
async function resetBurnedSubmitHandler(event) {
    event.preventDefault();

    let userId = getUserId();
    caloriesBurnedCurrentData.amount = 0;

    const response = await fetch(`/api/caloriesburned/${userId}`, {
        method: "PUT",
        body: JSON.stringify({
            user_id: userId,
            amount: caloriesBurnedCurrentData.amount
        }),
        headers: {
            'Content-Type': 'application/json'
        }
    });
    if (response.ok) {
        let math = caloriesBurnedCurrentData.goal - caloriesBurnedCurrentData.amount;
        burnedChart.data.datasets[0].data = [caloriesBurnedCurrentData.amount, math];
        burnedChart.update();
    }
    else {
        alert(response.statusText);
    }
}
async function resetConsumedSubmitHandler(event) {
    event.preventDefault();

    let userId = getUserId();
    caloriesConsumedCurrentData.amount = 0;

    const response = await fetch(`/api/caloriesconsumed/${userId}`, {
        method: "PUT",
        body: JSON.stringify({
            user_id: userId,
            amount: caloriesConsumedCurrentData.amount
        }),
        headers: {
            'Content-Type': 'application/json'
        }
    });
    if (response.ok) {
        let math = caloriesConsumedCurrentData.goal - caloriesConsumedCurrentData.amount;
        consumedChart.data.datasets[0].data = [caloriesConsumedCurrentData.amount, math];
        consumedChart.update();
    }
    else {
        alert(response.statusText);
    }
}

document.querySelector('#reset-burned').addEventListener('click', resetBurnedSubmitHandler);
document.querySelector('#reset-consumed').addEventListener('click', resetConsumedSubmitHandler);
document.querySelector('#burned-submit').addEventListener('click', caloriesBurnedSubmitHandler);
document.querySelector('#consumed-submit').addEventListener('click', caloriesConsumedSubmitHandler);
