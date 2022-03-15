let caloriesConsumedCurrentData;
let caloriesBurnedCurrentData;
let consumedChart;
let burnedChart;


function getUserId() {
    const userId = localStorage.getItem('userId');
    return userId ?? 1;
}
function getConsumedCurrent(userId,) {
    let route = `http://localhost:3001/api/caloriesconsumed/${userId}`;

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
    let route = `http://localhost:3001/api/caloriesburned/${userId}`;
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
    console.log('Calories Consumed Current', caloriesConsumedCurrentData, 'Calories Burned Current', caloriesBurnedCurrentData);
    return chartsetup(caloriesBurnedCurrentData, caloriesConsumedCurrentData), caloriesBurnedCurrentData, caloriesConsumedCurrentData;
}
displayChart();

async function caloriesConsumedSubmitHandler(event) {
    event.preventDefault();
    let userId = getUserId();
    let consumed = parseInt(document.getElementById('consumedInput').value);
    console.log(consumed);
    caloriesConsumedCurrentData.amount += consumed;
    console.log(caloriesConsumedCurrentData.amount)
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
    console.log(burned);
    caloriesBurnedCurrentData.amount += burned;
    console.log(caloriesBurnedCurrentData.amount)

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

document.querySelector('#burned-submit').addEventListener('click', caloriesBurnedSubmitHandler);
document.querySelector('#consumed-submit').addEventListener('click', caloriesConsumedSubmitHandler);
