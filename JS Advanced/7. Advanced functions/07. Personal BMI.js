function solve(name, age, weight, height) {
    if (name !== undefined && age !== undefined && 
        weight !== undefined && height !== undefined) {

        let BMI = weight / (height / 100) ** 2;
        let status = '';

        if (BMI < 18.5) {
            status = 'underweight';
        } else if (BMI < 25) {
            status = 'normal';
        } else if (BMI < 30) {
            status = 'overweight';
        } else {
            status = 'obese';
        };

        let patientChart = {
            name,
            personalInfo: {
                age,
                weight,
                height
            },
            BMI: Math.round(BMI),
            status,
        };
        if (status === 'obese') {
            patientChart.recommendation = 'admission required';
        }
        return patientChart;
    }
}

console.log(solve('Ivan', 27, 89, 180));