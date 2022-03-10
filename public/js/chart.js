const data = {
    datasets: [{
        borderColor: "rgba(0,255,255,.75)",
        pointBorderColor: "#fff",
        data: [80, 20],
        backgroundColor: [
            '#13726d',
            '#42e4dc'],
        hoverOffset: 4
    }]
};
new Chart(document.getElementById('calorieProgress'), {
    type: 'doughnut',
    data: data,
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
new Chart(document.getElementById('protienProgress'), {
    type: 'doughnut',
    data: data,
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
                text: 'Protien Consumption'
            }
        }
    }
});
new Chart(document.getElementById('carbProgress'), {
    type: 'doughnut',
    data: data,
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
                text: 'Carb Consumption'
            }
        },

    }
});
new Chart(document.getElementById('calorieGoal'), {
    type: 'doughnut',
    data: data,
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
