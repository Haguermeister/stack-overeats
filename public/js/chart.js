let caloriesBurnedCurrent = 0;
let caloriesConsumedCurrent = 0;
let calorieConsumedGoal = 1000;
let calorieBurnedGoal = 1000;


function getUserId() {
    const userId = localStorage.getItem('userId');
    return userId ?? 1;
}
function getConsumedCurrent(userId) {
    /*  //console.log('Start of consumned function');
     let route = `http://localhost:3001/api/caloriesconsumed/${userId}`;
     const response = await fetch(route, {
         method: "get",
         headers: {
             'Content-Type': 'application/json'
         }
     });
     if (response.ok) {
         caloriesConsumedCurrent = response.json.amount;
         console.log(response);
         //console.log(response.json.amount);
 
         //console.log('caloriesConsumedCurrent', caloriesConsumedCurrent);
         return caloriesConsumedCurrent;
     }
     else {
         alert(response.statusText);
     } */
    fetch(`http://localhost:3001/api/caloriesconsumed/${userId}`)
        .then(response => response.json())
        .then(data => console.log(data));
}
function getBurnedCurrent(userId) {
    //console.log('Start of burned function');
    let route = `http://localhost:3001/api/caloriesburned/${userId}`;
    /* const response = await fetch(route, {
        method: "get",
        headers: {
            'Content-Type': 'application/json'
        }
    });
    if (response.ok) {
         caloriesBurnedCurrent = response.json.amount;
        console.log('caloriesBurnedCurrent', caloriesBurnedCurrent);
        return caloriesBurnedCurrent; 
    }
    else {
        alert(response.statusText);
    } */
    fetch(route, {
        method: "get",
        headers: {
            'Content-Type': 'application/json'
        }
    })
        .then(response => response.json())
        .then(data => console.log(data));
}

function getCurrentCalories() {
    let userId = getUserId();
    console.log('UserId:', userId);
    getBurnedCurrent(userId);
    getConsumedCurrent(userId);
    if (caloriesBurnedCurrent, caloriesConsumedCurrent) {
        return caloriesBurnedCurrent, caloriesConsumedCurrent;
    }
}

function chartsetup() {
    getCurrentCalories();
    const consumedChart = new Chart(document.getElementById('calorieConsumedChart'), {
        type: 'doughnut',
        data: {
            datasets: [{
                borderColor: "rgba(0,255,255,.75)",
                pointBorderColor: "#fff",
                data: [caloriesConsumedCurrent, calorieConsumedGoal - caloriesConsumedCurrent],
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
    const burnedChart = new Chart(document.getElementById('calorieBurnedChart'), {
        type: 'doughnut',
        data:
        {
            datasets: [{
                borderColor: "rgba(0,255,255,.75)",
                pointBorderColor: "#fff",
                data: [caloriesBurnedCurrent, calorieBurnedGoal - caloriesBurnedCurrent],
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
    return consumedChart, burnedChart;
}
chartsetup();
async function caloriesConsumedSubmitHandler(event) {
    event.preventDefault();
    let userId = getUserId();
    let consumed = parseInt(document.getElementById('consumedInput').value);
    if (Number.isInteger(consumed)) {
        caloriesBurnedCurrent += consumed;
    }
    else {
        alert('Please input an interger into the input');
    }
    const response = await fetch(`/api/caloriesconsumed/${userId}`, {
        method: "PUT",
        body: JSON.stringify({
            amount: caloriesConsumedCurrent
        }),
        headers: {
            'Content-Type': 'application/json'
        }
    });
    if (response.ok) {
        consumedChart.data.datasets[0].data = [caloriesConsumedCurrent, calorieConsumedGoal - caloriesConsumedCurrent];
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
    if (Number.isInteger(burned)) {
        caloriesBurnedCurrent += burned;
    }
    else {
        alert('Please input an interger into the input');
    }
    const response = await fetch(`/api/caloriesburned/${userId}`, {
        method: "PUT",
        body: JSON.stringify({
            user_id: userId,
            amount: caloriesBurnedCurrent
        }),
        headers: {
            'Content-Type': 'application/json'
        }
    });
    if (response.ok) {
        burnedChart.data.datasets[0].data = [caloriesBurnedCurrent, calorieBurnedGoal - caloriesBurnedCurrent];
        burnedChart.update();
    }
    else {
        alert(response.statusText);
    }
}

document.querySelector('#burned-submit').addEventListener('click', caloriesBurnedSubmitHandler);
document.querySelector('#consumed-submit').addEventListener('click', caloriesConsumedSubmitHandler);
