const userId = JSON.parse(localStorage.getItem('userId'));
let caloriesBurnedCurrent = 0;
function getCurrent() {
    const response = await fetch(`/api/calorieoutput/${userId}`, {
        method: "get"
        ,
        headers: {
            'Content-Type': 'application/json'
        }
    });
    if (response.ok) {
        caloriesBurnedCurrent = response.json.calories;
    }
    else {
        alert(response.statusText);
    }
}

new Chart(document.getElementById('calorieProgress'), {
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
new Chart(document.getElementById('calorieGoal'), {
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

async function caloriesBurnedSubmitHandler(event) {
    event.preventDefault();

    //const id = ;

    const validation = document.getElementById('caloriesInput').value
    if (validation.isInterger()) {
        caloriesBurnedCurrent += document.getElementById('caloriesInput').value;
    }

    const response = await fetch('/api/calorieoutput/upvote', {
        method: "PUT",
        body: JSON.stringify({
            user_id: id,
            calories_burnt_text: caloriesBurnedCurrent
        }),
        headers: {
            'Content-Type': 'application/json'
        }
    });
    if (response.ok) {
        document.location.reload();
    }
    else {
        alert(response.statusText);
    }
}
document.querySelector('.upvote-btn').addEventListener('click', caloriesBurnedSubmitHandler);
