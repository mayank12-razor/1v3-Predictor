function startProcess() {
    const name = document.getElementById("name").value;
    const age = document.getElementById("age").value;
    const gender = document.getElementById("gender").value;
    const idType = document.getElementById("idType").value;
    const idNumber = document.getElementById("idNumber").value;
    const height = document.getElementById("height").value;
    const weight = document.getElementById("weight").value;
    const bloodGroup = document.getElementById("bloodGroup").value;
    const HeartRate = document.getElementById("HeartRate").value;
    const temperature = document.getElementById("temperature").value;
    const HbloodPressure = document.getElementById("HbloodPressure").value;
    const LbloodPressure = document.getElementById("LbloodPressure").value;
    const bloodSugar = document.getElementById("bloodSugar").value;
    const logistics = document.getElementById("logistics").value;

    if (!name || !age || !gender || !idType || !idNumber || !height || !weight || !bloodGroup || !temperature || !HbloodPressure || !LbloodPressure || !bloodSugar || !logistics) {
        alert("Please fill in all fields.");
        return;
    }

    const bmi = (weight / ((height / 100) ** 2)).toFixed(2);


    
let BmiRange;
if (bmi >= 30) {
BmiRange = 'Obese';
} else if (bmi >= 25 && bmi < 30) {
BmiRange = 'Overweight';
} else if (bmi >= 18.5 && bmi < 25) {
BmiRange = 'Normal weight';
} else if (bmi >= 0 && bmi < 18.5) {
BmiRange = 'Underweight';
} else {
BmiRange = 'Invalid';
}



let HeartRateRange;
if (HeartRate < 60) {
HeartRateRange = 'Low Heart Rate';
} else if (HeartRate >= 60 && HeartRate <= 100) {
HeartRateRange = 'Normal Heart Rate';
} else if (HeartRate > 100 && HeartRate <= 120) {
HeartRateRange = 'High Heart Rate (Tachycardia)';
} else if (HeartRate > 120) {
HeartRateRange = 'Very High Heart Rate';
} else {
HeartRateRange = 'Invalid';
}


    let temperatureRange;
    if (temperature >= 100 && temperature <= 104) {
        temperatureRange = 'High Fever';
    } else if (temperature >= 80 && temperature <= 99) {
        temperatureRange = 'Mild Fever';
    } else if (temperature >= 98 && temperature <= 94) {
        temperatureRange = 'Normal';
    } else if (temperature >= 0 && temperature <= 93) {
        temperatureRange = 'Hypothermia';
    } else {
        temperatureRange = 'Invalid';
    }


    let BPRange;
if (HbloodPressure >= 140 && LbloodPressure >= 90) {
BPRange = 'High Blood Pressure';
} else if ((HbloodPressure >= 130 && HbloodPressure <= 139) || (LbloodPressure >= 80 && LbloodPressure <= 89)) {
BPRange = 'Elevated Blood Pressure';
} else if (HbloodPressure >= 120 && HbloodPressure <= 129 && LbloodPressure < 80) {
BPRange = 'Normal Blood Pressure';
} else if (HbloodPressure < 120 && LbloodPressure < 80) {
BPRange = 'Optimal Blood Pressure';
} else if (HbloodPressure < 90 || LbloodPressure < 60) {
BPRange = 'Hypotension (Low Blood Pressure)';
} else {
BPRange = 'Invalid Blood Pressure';
}


    let BSRange;
    if (bloodSugar >= 126) {
        BSRange = 'Hyperglycemia';
    } else if (bloodSugar >= 100 && bloodSugar <= 125) {
        BSRange = 'Prediabetes';
    } else if (bloodSugar >= 70 && bloodSugar <= 99) {
        BSRange = 'Normal Blood Sugar';
    } else if (bloodSugar < 70) {
        BSRange = 'Hypoglycemia';
    } else {
        BSRange = 'Invalid Blood Sugar';
    }



let Conditions;
if(age >= 0 && age <= 18)
{
if (HeartRateRange == 'Low Heart Rate' && temperatureRange == 'High Fever' && BPRange == 'High Blood Pressure') {
Conditions = 'Disease 1';
} else if (HeartRateRange == 'Low Heart Rate' && temperatureRange == 'High Fever' && BPRange == 'Elevated Blood Pressure') {
Conditions = 'Disease 2';
} else if (HeartRateRange == 'Low Heart Rate' && temperatureRange == 'High Fever' && BPRange == 'Normal Blood Pressure') {
Conditions = 'Disease 3';
} else if (HeartRateRange == 'Low Heart Rate' && temperatureRange == 'High Fever' && BPRange == 'Optimal Blood Pressure') {
Conditions = 'Disease 4';
} else if (HeartRateRange == 'Low Heart Rate' && temperatureRange == 'High Fever' && BPRange == 'Hypotension (Low Blood Pressure)') {
Conditions = 'Disease 5';
} else if (HeartRateRange == 'Low Heart Rate' && temperatureRange == 'Mild Fever' && BPRange == 'High Blood Pressure') {
Conditions = 'Disease 6';
} else if (HeartRateRange == 'Low Heart Rate' && temperatureRange == 'Mild Fever' && BPRange == 'Elevated Blood Pressure') {
Conditions = 'Disease 7';
} else if (HeartRateRange == 'Low Heart Rate' && temperatureRange == 'Mild Fever' && BPRange == 'Normal Blood Pressure') {
Conditions = 'Disease 8';
} else if (HeartRateRange == 'Low Heart Rate' && temperatureRange == 'Mild Fever' && BPRange == 'Optimal Blood Pressure') {
Conditions = 'Disease 9';
} else if (HeartRateRange == 'Low Heart Rate' && temperatureRange == 'Mild Fever' && BPRange == 'Hypotension (Low Blood Pressure)') {
Conditions = 'Disease 10';
} else if (HeartRateRange == 'Low Heart Rate' && temperatureRange == 'Normal' && BPRange == 'High Blood Pressure') {
Conditions = 'Disease 11';
} else if (HeartRateRange == 'Low Heart Rate' && temperatureRange == 'Normal' && BPRange == 'Elevated Blood Pressure') {
Conditions = 'Disease 12';
} else if (HeartRateRange == 'Low Heart Rate' && temperatureRange == 'Normal' && BPRange == 'Normal Blood Pressure') {
Conditions = 'Disease 13';
} else if (HeartRateRange == 'Low Heart Rate' && temperatureRange == 'Normal' && BPRange == 'Optimal Blood Pressure') {
Conditions = 'Disease 14';
} else if (HeartRateRange == 'Low Heart Rate' && temperatureRange == 'Normal' && BPRange == 'Hypotension (Low Blood Pressure)') {
Conditions = 'Disease 15';
} else if (HeartRateRange == 'Low Heart Rate' && temperatureRange == 'Hypothermia' && BPRange == 'High Blood Pressure') {
Conditions = 'Disease 16';
} else if (HeartRateRange == 'Low Heart Rate' && temperatureRange == 'Hypothermia' && BPRange == 'Elevated Blood Pressure') {
Conditions = 'Disease 17';
} else if (HeartRateRange == 'Low Heart Rate' && temperatureRange == 'Hypothermia' && BPRange == 'Normal Blood Pressure') {
Conditions = 'Disease 18';
} else if (HeartRateRange == 'Low Heart Rate' && temperatureRange == 'Hypothermia' && BPRange == 'Optimal Blood Pressure') {
Conditions = 'Disease 19';
} else if (HeartRateRange == 'Low Heart Rate' && temperatureRange == 'Hypothermia' && BPRange == 'Hypotension (Low Blood Pressure)') {
Conditions = 'Disease 20';
} else if (HeartRateRange == 'Normal Heart Rate' && temperatureRange == 'High Fever' && BPRange == 'High Blood Pressure') {
Conditions = 'Disease 21';
} else if (HeartRateRange == 'Normal Heart Rate' && temperatureRange == 'High Fever' && BPRange == 'Elevated Blood Pressure') {
Conditions = 'Disease 22';
} else if (HeartRateRange == 'Normal Heart Rate' && temperatureRange == 'High Fever' && BPRange == 'Normal Blood Pressure') {
Conditions = 'Disease 23';
} else if (HeartRateRange == 'Normal Heart Rate' && temperatureRange == 'High Fever' && BPRange == 'Optimal Blood Pressure') {
Conditions = 'Disease 24';
} else if (HeartRateRange == 'Normal Heart Rate' && temperatureRange == 'High Fever' && BPRange == 'Hypotension (Low Blood Pressure)') {
Conditions = 'Disease 25';
} else if (HeartRateRange == 'Normal Heart Rate' && temperatureRange == 'Mild Fever' && BPRange == 'High Blood Pressure') {
Conditions = 'Disease 26';
} else if (HeartRateRange == 'Normal Heart Rate' && temperatureRange == 'Mild Fever' && BPRange == 'Elevated Blood Pressure') {
Conditions = 'Disease 27';
} else if (HeartRateRange == 'Normal Heart Rate' && temperatureRange == 'Mild Fever' && BPRange == 'Normal Blood Pressure') {
Conditions = 'Disease 28';
} else if (HeartRateRange == 'Normal Heart Rate' && temperatureRange == 'Mild Fever' && BPRange == 'Optimal Blood Pressure') {
Conditions = 'Disease 29';
} else if (HeartRateRange == 'Normal Heart Rate' && temperatureRange == 'Mild Fever' && BPRange == 'Hypotension (Low Blood Pressure)') {
Conditions = 'Disease 30';
} else if (HeartRateRange == 'Normal Heart Rate' && temperatureRange == 'Normal' && BPRange == 'High Blood Pressure') {
Conditions = 'Disease 31';
} else if (HeartRateRange == 'Normal Heart Rate' && temperatureRange == 'Normal' && BPRange == 'Elevated Blood Pressure') {
Conditions = 'Disease 32';
} else if (HeartRateRange == 'Normal Heart Rate' && temperatureRange == 'Normal' && BPRange == 'Normal Blood Pressure') {
Conditions = 'Disease 33';
} else if (HeartRateRange == 'Normal Heart Rate' && temperatureRange == 'Normal' && BPRange == 'Optimal Blood Pressure') {
Conditions = 'Disease 34';
} else if (HeartRateRange == 'Normal Heart Rate' && temperatureRange == 'Normal' && BPRange == 'Hypotension (Low Blood Pressure)') {
Conditions = 'Disease 35';
} else if (HeartRateRange == 'Normal Heart Rate' && temperatureRange == 'Hypothermia' && BPRange == 'High Blood Pressure') {
Conditions = 'Disease 36';
} 

else if (HeartRateRange == 'Normal Heart Rate' && temperatureRange == 'Hypothermia' && BPRange == 'Elevated Blood Pressure') {
Conditions = 'Disease 37';
}


else if (HeartRateRange == 'Normal Heart Rate' && temperatureRange == 'Hypothermia' && BPRange == 'Normal Blood Pressure') {
Conditions = 'Disease 38';
} else if (HeartRateRange == 'Normal Heart Rate' && temperatureRange == 'Hypothermia' && BPRange == 'Optimal Blood Pressure') {
Conditions = 'Disease 39';
} else if (HeartRateRange == 'Normal Heart Rate' && temperatureRange == 'Hypothermia' && BPRange == 'Hypotension (Low Blood Pressure)') {
Conditions = 'Disease 40';
} else if (HeartRateRange == 'High Heart Rate (Tachycardia)' && temperatureRange == 'High Fever' && BPRange == 'High Blood Pressure') {
Conditions = 'Disease 41';
} else if (HeartRateRange == 'High Heart Rate (Tachycardia)' && temperatureRange == 'High Fever' && BPRange == 'Elevated Blood Pressure') {
Conditions = 'Disease 42';
} else if (HeartRateRange == 'High Heart Rate (Tachycardia)' && temperatureRange == 'High Fever' && BPRange == 'Normal Blood Pressure') {
Conditions = 'Disease 43';
} else if (HeartRateRange == 'High Heart Rate (Tachycardia)' && temperatureRange == 'High Fever' && BPRange == 'Optimal Blood Pressure') {
Conditions = 'Disease 44';
} else if (HeartRateRange == 'High Heart Rate (Tachycardia)' && temperatureRange == 'High Fever' && BPRange == 'Hypotension (Low Blood Pressure)') {
Conditions = 'Disease 45';
} else if (HeartRateRange == 'High Heart Rate (Tachycardia)' && temperatureRange == 'Mild Fever' && BPRange == 'High Blood Pressure') {
Conditions = 'Disease 46';
} else if (HeartRateRange == 'High Heart Rate (Tachycardia)' && temperatureRange == 'Mild Fever' && BPRange == 'Elevated Blood Pressure') {
Conditions = 'Disease 47';
} else if (HeartRateRange == 'High Heart Rate (Tachycardia)' && temperatureRange == 'Mild Fever' && BPRange == 'Normal Blood Pressure') {
Conditions = 'Disease 48';
} else if (HeartRateRange == 'High Heart Rate (Tachycardia)' && temperatureRange == 'Mild Fever' && BPRange == 'Optimal Blood Pressure') {
Conditions = 'Disease 49';
} else if (HeartRateRange == 'High Heart Rate (Tachycardia)' && temperatureRange == 'Mild Fever' && BPRange == 'Hypotension (Low Blood Pressure)') {
Conditions = 'Disease 50';
} else if (HeartRateRange == 'High Heart Rate (Tachycardia)' && temperatureRange == 'Normal' && BPRange == 'High Blood Pressure') {
Conditions = 'Disease 51';
} else if (HeartRateRange == 'High Heart Rate (Tachycardia)' && temperatureRange == 'Normal' && BPRange == 'Elevated Blood Pressure') {
Conditions = 'Disease 52';
} else if (HeartRateRange == 'High Heart Rate (Tachycardia)' && temperatureRange == 'Normal' && BPRange == 'Normal Blood Pressure') {
Conditions = 'Disease 53';
} else if (HeartRateRange == 'High Heart Rate (Tachycardia)' && temperatureRange == 'Normal' && BPRange == 'Optimal Blood Pressure') {
Conditions = 'Disease 54';
} else if (HeartRateRange == 'High Heart Rate (Tachycardia)' && temperatureRange == 'Normal' && BPRange == 'Hypotension (Low Blood Pressure)') {
Conditions = 'Disease 55';
} else if (HeartRateRange == 'High Heart Rate (Tachycardia)' && temperatureRange == 'Hypothermia' && BPRange == 'High Blood Pressure') {
Conditions = 'Disease 56';
} else if (HeartRateRange == 'High Heart Rate (Tachycardia)' && temperatureRange == 'Hypothermia' && BPRange == 'Elevated Blood Pressure') {
Conditions = 'Disease 57';
} else if (HeartRateRange == 'High Heart Rate (Tachycardia)' && temperatureRange == 'Hypothermia' && BPRange == 'Normal Blood Pressure') {
Conditions = 'Disease 58';
} else if (HeartRateRange == 'High Heart Rate (Tachycardia)' && temperatureRange == 'Hypothermia' && BPRange == 'Optimal Blood Pressure') {
Conditions = 'Disease 59';
} else if (HeartRateRange == 'High Heart Rate (Tachycardia)' && temperatureRange == 'Hypothermia' && BPRange == 'Hypotension (Low Blood Pressure)') {
Conditions = 'Disease 60';
} else if (HeartRateRange == 'Very High Heart Rate' && temperatureRange == 'High Fever' && BPRange == 'High Blood Pressure') {
Conditions = 'Disease 61';
} else if (HeartRateRange == 'Very High Heart Rate' && temperatureRange == 'High Fever' && BPRange == 'Elevated Blood Pressure') {
Conditions = 'Disease 62';
} else if (HeartRateRange == 'Very High Heart Rate' && temperatureRange == 'High Fever' && BPRange == 'Normal Blood Pressure') {
Conditions = 'Disease 63';
} else if (HeartRateRange == 'Very High Heart Rate' && temperatureRange == 'High Fever' && BPRange == 'Optimal Blood Pressure') {
Conditions = 'Disease 64';
}
else
{"invalid..";}

}



else if (age >= 19 && age <= 64)
{

if (HeartRateRange == 'Low Heart Rate' && temperatureRange == 'High Fever' && BPRange == 'High Blood Pressure') {
Conditions = 'Disease 65';
} else if (HeartRateRange == 'Low Heart Rate' && temperatureRange == 'High Fever' && BPRange == 'Elevated Blood Pressure') {
Conditions = 'Disease 66';
} else if (HeartRateRange == 'Low Heart Rate' && temperatureRange == 'High Fever' && BPRange == 'Normal Blood Pressure') {
Conditions = 'Disease 67';
} else if (HeartRateRange == 'Low Heart Rate' && temperatureRange == 'High Fever' && BPRange == 'Optimal Blood Pressure') {
Conditions = 'Disease 68';
} else if (HeartRateRange == 'Low Heart Rate' && temperatureRange == 'High Fever' && BPRange == 'Hypotension (Low Blood Pressure)') {
Conditions = 'Disease 69';
} else if (HeartRateRange == 'Low Heart Rate' && temperatureRange == 'Mild Fever' && BPRange == 'High Blood Pressure') {
Conditions = 'Disease 70';
} else if (HeartRateRange == 'Low Heart Rate' && temperatureRange == 'Mild Fever' && BPRange == 'Elevated Blood Pressure') {
Conditions = 'Disease 71';
} else if (HeartRateRange == 'Low Heart Rate' && temperatureRange == 'Mild Fever' && BPRange == 'Normal Blood Pressure') {
Conditions = 'Disease 72';
} else if (HeartRateRange == 'Low Heart Rate' && temperatureRange == 'Mild Fever' && BPRange == 'Optimal Blood Pressure') {
Conditions = 'Disease 73';
} else if (HeartRateRange == 'Low Heart Rate' && temperatureRange == 'Mild Fever' && BPRange == 'Hypotension (Low Blood Pressure)') {
Conditions = 'Disease 74';
} else if (HeartRateRange == 'Low Heart Rate' && temperatureRange == 'Normal' && BPRange == 'High Blood Pressure') {
Conditions = 'Disease 75';
} else if (HeartRateRange == 'Low Heart Rate' && temperatureRange == 'Normal' && BPRange == 'Elevated Blood Pressure') {
Conditions = 'Disease 76';
} else if (HeartRateRange == 'Low Heart Rate' && temperatureRange == 'Normal' && BPRange == 'Normal Blood Pressure') {
Conditions = 'Disease 77';
} else if (HeartRateRange == 'Low Heart Rate' && temperatureRange == 'Normal' && BPRange == 'Optimal Blood Pressure') {
Conditions = 'Disease 78';
} else if (HeartRateRange == 'Low Heart Rate' && temperatureRange == 'Normal' && BPRange == 'Hypotension (Low Blood Pressure)') {
Conditions = 'Disease 79';
} else if (HeartRateRange == 'Low Heart Rate' && temperatureRange == 'Hypothermia' && BPRange == 'High Blood Pressure') {
Conditions = 'Disease 80';
} else if (HeartRateRange == 'Low Heart Rate' && temperatureRange == 'Hypothermia' && BPRange == 'Elevated Blood Pressure') {
Conditions = 'Disease 81';
} else if (HeartRateRange == 'Low Heart Rate' && temperatureRange == 'Hypothermia' && BPRange == 'Normal Blood Pressure') {
Conditions = 'Disease 82';
} else if (HeartRateRange == 'Low Heart Rate' && temperatureRange == 'Hypothermia' && BPRange == 'Optimal Blood Pressure') {
Conditions = 'Disease 83';
} else if (HeartRateRange == 'Low Heart Rate' && temperatureRange == 'Hypothermia' && BPRange == 'Hypotension (Low Blood Pressure)') {
Conditions = 'Disease 84';
} else if (HeartRateRange == 'Normal Heart Rate' && temperatureRange == 'High Fever' && BPRange == 'High Blood Pressure') {
Conditions = 'Disease 85';
} else if (HeartRateRange == 'Normal Heart Rate' && temperatureRange == 'High Fever' && BPRange == 'Elevated Blood Pressure') {
Conditions = 'Disease 86';
} else if (HeartRateRange == 'Normal Heart Rate' && temperatureRange == 'High Fever' && BPRange == 'Normal Blood Pressure') {
Conditions = 'Disease 87';
} else if (HeartRateRange == 'Normal Heart Rate' && temperatureRange == 'High Fever' && BPRange == 'Optimal Blood Pressure') {
Conditions = 'Disease 88';
} else if (HeartRateRange == 'Normal Heart Rate' && temperatureRange == 'High Fever' && BPRange == 'Hypotension (Low Blood Pressure)') {
Conditions = 'Disease 89';
} else if (HeartRateRange == 'Normal Heart Rate' && temperatureRange == 'Mild Fever' && BPRange == 'High Blood Pressure') {
Conditions = 'Disease 90';
} else if (HeartRateRange == 'Normal Heart Rate' && temperatureRange == 'Mild Fever' && BPRange == 'Elevated Blood Pressure') {
Conditions = 'Disease 91';
} else if (HeartRateRange == 'Normal Heart Rate' && temperatureRange == 'Mild Fever' && BPRange == 'Normal Blood Pressure') {
Conditions = 'Disease 92';
} else if (HeartRateRange == 'Normal Heart Rate' && temperatureRange == 'Mild Fever' && BPRange == 'Optimal Blood Pressure') {
Conditions = 'Disease 93';
} else if (HeartRateRange == 'Normal Heart Rate' && temperatureRange == 'Mild Fever' && BPRange == 'Hypotension (Low Blood Pressure)') {
Conditions = 'Disease 94';
} else if (HeartRateRange == 'Normal Heart Rate' && temperatureRange == 'Normal' && BPRange == 'High Blood Pressure') {
Conditions = 'Disease 95';
} else if (HeartRateRange == 'Normal Heart Rate' && temperatureRange == 'Normal' && BPRange == 'Elevated Blood Pressure') {
Conditions = 'Disease 96';
} else if (HeartRateRange == 'Normal Heart Rate' && temperatureRange == 'Normal' && BPRange == 'Normal Blood Pressure') {
Conditions = 'Disease 97';
} else if (HeartRateRange == 'Normal Heart Rate' && temperatureRange == 'Normal' && BPRange == 'Optimal Blood Pressure') {
Conditions = 'Disease 98';
} else if (HeartRateRange == 'Normal Heart Rate' && temperatureRange == 'Normal' && BPRange == 'Hypotension (Low Blood Pressure)') {
Conditions = 'Disease 99';
} else if (HeartRateRange == 'Normal Heart Rate' && temperatureRange == 'Hypothermia' && BPRange == 'High Blood Pressure') {
Conditions = 'Disease 100';
} 

else if (HeartRateRange == 'Normal Heart Rate' && temperatureRange == 'Hypothermia' && BPRange == 'Elevated Blood Pressure') {
Conditions = 'Disease 101';
}


else if (HeartRateRange == 'Normal Heart Rate' && temperatureRange == 'Hypothermia' && BPRange == 'Normal Blood Pressure') {
Conditions = 'Disease 102';
} else if (HeartRateRange == 'Normal Heart Rate' && temperatureRange == 'Hypothermia' && BPRange == 'Optimal Blood Pressure') {
Conditions = 'Disease 103';
} else if (HeartRateRange == 'Normal Heart Rate' && temperatureRange == 'Hypothermia' && BPRange == 'Hypotension (Low Blood Pressure)') {
Conditions = 'Disease 104';
} else if (HeartRateRange == 'High Heart Rate (Tachycardia)' && temperatureRange == 'High Fever' && BPRange == 'High Blood Pressure') {
Conditions = 'Disease 105';
} else if (HeartRateRange == 'High Heart Rate (Tachycardia)' && temperatureRange == 'High Fever' && BPRange == 'Elevated Blood Pressure') {
Conditions = 'Disease 106';
} else if (HeartRateRange == 'High Heart Rate (Tachycardia)' && temperatureRange == 'High Fever' && BPRange == 'Normal Blood Pressure') {
Conditions = 'Disease 107';
} else if (HeartRateRange == 'High Heart Rate (Tachycardia)' && temperatureRange == 'High Fever' && BPRange == 'Optimal Blood Pressure') {
Conditions = 'Disease 108';
} else if (HeartRateRange == 'High Heart Rate (Tachycardia)' && temperatureRange == 'High Fever' && BPRange == 'Hypotension (Low Blood Pressure)') {
Conditions = 'Disease 109';
} else if (HeartRateRange == 'High Heart Rate (Tachycardia)' && temperatureRange == 'Mild Fever' && BPRange == 'High Blood Pressure') {
Conditions = 'Disease 110';
} else if (HeartRateRange == 'High Heart Rate (Tachycardia)' && temperatureRange == 'Mild Fever' && BPRange == 'Elevated Blood Pressure') {
Conditions = 'Disease 111';
} else if (HeartRateRange == 'High Heart Rate (Tachycardia)' && temperatureRange == 'Mild Fever' && BPRange == 'Normal Blood Pressure') {
Conditions = 'Disease 112';
} else if (HeartRateRange == 'High Heart Rate (Tachycardia)' && temperatureRange == 'Mild Fever' && BPRange == 'Optimal Blood Pressure') {
Conditions = 'Disease 113';
} else if (HeartRateRange == 'High Heart Rate (Tachycardia)' && temperatureRange == 'Mild Fever' && BPRange == 'Hypotension (Low Blood Pressure)') {
Conditions = 'Disease 114';
} else if (HeartRateRange == 'High Heart Rate (Tachycardia)' && temperatureRange == 'Normal' && BPRange == 'High Blood Pressure') {
Conditions = 'Disease 115';
} else if (HeartRateRange == 'High Heart Rate (Tachycardia)' && temperatureRange == 'Normal' && BPRange == 'Elevated Blood Pressure') {
Conditions = 'Disease 116';
} else if (HeartRateRange == 'High Heart Rate (Tachycardia)' && temperatureRange == 'Normal' && BPRange == 'Normal Blood Pressure') {
Conditions = 'Disease 117';
} else if (HeartRateRange == 'High Heart Rate (Tachycardia)' && temperatureRange == 'Normal' && BPRange == 'Optimal Blood Pressure') {
Conditions = 'Disease 118';
} else if (HeartRateRange == 'High Heart Rate (Tachycardia)' && temperatureRange == 'Normal' && BPRange == 'Hypotension (Low Blood Pressure)') {
Conditions = 'Disease 119';
} else if (HeartRateRange == 'High Heart Rate (Tachycardia)' && temperatureRange == 'Hypothermia' && BPRange == 'High Blood Pressure') {
Conditions = 'Disease 120';
} else if (HeartRateRange == 'High Heart Rate (Tachycardia)' && temperatureRange == 'Hypothermia' && BPRange == 'Elevated Blood Pressure') {
Conditions = 'Disease 121';
} else if (HeartRateRange == 'High Heart Rate (Tachycardia)' && temperatureRange == 'Hypothermia' && BPRange == 'Normal Blood Pressure') {
Conditions = 'Disease 122';
} else if (HeartRateRange == 'High Heart Rate (Tachycardia)' && temperatureRange == 'Hypothermia' && BPRange == 'Optimal Blood Pressure') {
Conditions = 'Disease 123';
} else if (HeartRateRange == 'High Heart Rate (Tachycardia)' && temperatureRange == 'Hypothermia' && BPRange == 'Hypotension (Low Blood Pressure)') {
Conditions = 'Disease 124';
} else if (HeartRateRange == 'Very High Heart Rate' && temperatureRange == 'High Fever' && BPRange == 'High Blood Pressure') {
Conditions = 'Disease 125';
} else if (HeartRateRange == 'Very High Heart Rate' && temperatureRange == 'High Fever' && BPRange == 'Elevated Blood Pressure') {
Conditions = 'Disease 126';
} else if (HeartRateRange == 'Very High Heart Rate' && temperatureRange == 'High Fever' && BPRange == 'Normal Blood Pressure') {
Conditions = 'Disease 127';
} else if (HeartRateRange == 'Very High Heart Rate' && temperatureRange == 'High Fever' && BPRange == 'Optimal Blood Pressure') {
Conditions = 'Disease 128';
}
else
{"invalid..";}

}




else if(age >= 65 && age <= 120)
{

if (HeartRateRange == 'Low Heart Rate' && temperatureRange == 'High Fever' && BPRange == 'High Blood Pressure') {
Conditions = 'Disease 129';
} else if (HeartRateRange == 'Low Heart Rate' && temperatureRange == 'High Fever' && BPRange == 'Elevated Blood Pressure') {
Conditions = 'Disease 130';
} else if (HeartRateRange == 'Low Heart Rate' && temperatureRange == 'High Fever' && BPRange == 'Normal Blood Pressure') {
Conditions = 'Disease 131';
} else if (HeartRateRange == 'Low Heart Rate' && temperatureRange == 'High Fever' && BPRange == 'Optimal Blood Pressure') {
Conditions = 'Disease 132';
} else if (HeartRateRange == 'Low Heart Rate' && temperatureRange == 'High Fever' && BPRange == 'Hypotension (Low Blood Pressure)') {
Conditions = 'Disease 133';
} else if (HeartRateRange == 'Low Heart Rate' && temperatureRange == 'Mild Fever' && BPRange == 'High Blood Pressure') {
Conditions = 'Disease 134';
} else if (HeartRateRange == 'Low Heart Rate' && temperatureRange == 'Mild Fever' && BPRange == 'Elevated Blood Pressure') {
Conditions = 'Disease 135';
} else if (HeartRateRange == 'Low Heart Rate' && temperatureRange == 'Mild Fever' && BPRange == 'Normal Blood Pressure') {
Conditions = 'Disease 136';
} else if (HeartRateRange == 'Low Heart Rate' && temperatureRange == 'Mild Fever' && BPRange == 'Optimal Blood Pressure') {
Conditions = 'Disease 137';
} else if (HeartRateRange == 'Low Heart Rate' && temperatureRange == 'Mild Fever' && BPRange == 'Hypotension (Low Blood Pressure)') {
Conditions = 'Disease 138';
} else if (HeartRateRange == 'Low Heart Rate' && temperatureRange == 'Normal' && BPRange == 'High Blood Pressure') {
Conditions = 'Disease 139';
} else if (HeartRateRange == 'Low Heart Rate' && temperatureRange == 'Normal' && BPRange == 'Elevated Blood Pressure') {
Conditions = 'Disease 140';
} else if (HeartRateRange == 'Low Heart Rate' && temperatureRange == 'Normal' && BPRange == 'Normal Blood Pressure') {
Conditions = 'Disease 141';
} else if (HeartRateRange == 'Low Heart Rate' && temperatureRange == 'Normal' && BPRange == 'Optimal Blood Pressure') {
Conditions = 'Disease 142';
} else if (HeartRateRange == 'Low Heart Rate' && temperatureRange == 'Normal' && BPRange == 'Hypotension (Low Blood Pressure)') {
Conditions = 'Disease 143';
} else if (HeartRateRange == 'Low Heart Rate' && temperatureRange == 'Hypothermia' && BPRange == 'High Blood Pressure') {
Conditions = 'Disease 144';
} else if (HeartRateRange == 'Low Heart Rate' && temperatureRange == 'Hypothermia' && BPRange == 'Elevated Blood Pressure') {
Conditions = 'Disease 145';
} else if (HeartRateRange == 'Low Heart Rate' && temperatureRange == 'Hypothermia' && BPRange == 'Normal Blood Pressure') {
Conditions = 'Disease 146';
} else if (HeartRateRange == 'Low Heart Rate' && temperatureRange == 'Hypothermia' && BPRange == 'Optimal Blood Pressure') {
Conditions = 'Disease 147';
} else if (HeartRateRange == 'Low Heart Rate' && temperatureRange == 'Hypothermia' && BPRange == 'Hypotension (Low Blood Pressure)') {
Conditions = 'Disease 148';
} else if (HeartRateRange == 'Normal Heart Rate' && temperatureRange == 'High Fever' && BPRange == 'High Blood Pressure') {
Conditions = 'Disease 149';
} else if (HeartRateRange == 'Normal Heart Rate' && temperatureRange == 'High Fever' && BPRange == 'Elevated Blood Pressure') {
Conditions = 'Disease 150';
} else if (HeartRateRange == 'Normal Heart Rate' && temperatureRange == 'High Fever' && BPRange == 'Normal Blood Pressure') {
Conditions = 'Disease 151';
} else if (HeartRateRange == 'Normal Heart Rate' && temperatureRange == 'High Fever' && BPRange == 'Optimal Blood Pressure') {
Conditions = 'Disease 152';
} else if (HeartRateRange == 'Normal Heart Rate' && temperatureRange == 'High Fever' && BPRange == 'Hypotension (Low Blood Pressure)') {
Conditions = 'Disease 153';
} else if (HeartRateRange == 'Normal Heart Rate' && temperatureRange == 'Mild Fever' && BPRange == 'High Blood Pressure') {
Conditions = 'Disease 154';
} else if (HeartRateRange == 'Normal Heart Rate' && temperatureRange == 'Mild Fever' && BPRange == 'Elevated Blood Pressure') {
Conditions = 'Disease 155';
} else if (HeartRateRange == 'Normal Heart Rate' && temperatureRange == 'Mild Fever' && BPRange == 'Normal Blood Pressure') {
Conditions = 'Disease 156';
} else if (HeartRateRange == 'Normal Heart Rate' && temperatureRange == 'Mild Fever' && BPRange == 'Optimal Blood Pressure') {
Conditions = 'Disease 157';
} else if (HeartRateRange == 'Normal Heart Rate' && temperatureRange == 'Mild Fever' && BPRange == 'Hypotension (Low Blood Pressure)') {
Conditions = 'Disease 158';
} else if (HeartRateRange == 'Normal Heart Rate' && temperatureRange == 'Normal' && BPRange == 'High Blood Pressure') {
Conditions = 'Disease 159';
} else if (HeartRateRange == 'Normal Heart Rate' && temperatureRange == 'Normal' && BPRange == 'Elevated Blood Pressure') {
Conditions = 'Disease 160';
} else if (HeartRateRange == 'Normal Heart Rate' && temperatureRange == 'Normal' && BPRange == 'Normal Blood Pressure') {
Conditions = 'Disease 161';
} else if (HeartRateRange == 'Normal Heart Rate' && temperatureRange == 'Normal' && BPRange == 'Optimal Blood Pressure') {
Conditions = 'Disease 162';
} else if (HeartRateRange == 'Normal Heart Rate' && temperatureRange == 'Normal' && BPRange == 'Hypotension (Low Blood Pressure)') {
Conditions = 'Disease 163';
} else if (HeartRateRange == 'Normal Heart Rate' && temperatureRange == 'Hypothermia' && BPRange == 'High Blood Pressure') {
Conditions = 'Disease 164';
} 

else if (HeartRateRange == 'Normal Heart Rate' && temperatureRange == 'Hypothermia' && BPRange == 'Elevated Blood Pressure') {
Conditions = 'Disease 165';
}


else if (HeartRateRange == 'Normal Heart Rate' && temperatureRange == 'Hypothermia' && BPRange == 'Normal Blood Pressure') {
Conditions = 'Disease 166';
} else if (HeartRateRange == 'Normal Heart Rate' && temperatureRange == 'Hypothermia' && BPRange == 'Optimal Blood Pressure') {
Conditions = 'Disease 167';
} else if (HeartRateRange == 'Normal Heart Rate' && temperatureRange == 'Hypothermia' && BPRange == 'Hypotension (Low Blood Pressure)') {
Conditions = 'Disease 168';
} else if (HeartRateRange == 'High Heart Rate (Tachycardia)' && temperatureRange == 'High Fever' && BPRange == 'High Blood Pressure') {
Conditions = 'Disease 169';
} else if (HeartRateRange == 'High Heart Rate (Tachycardia)' && temperatureRange == 'High Fever' && BPRange == 'Elevated Blood Pressure') {
Conditions = 'Disease 170';
} else if (HeartRateRange == 'High Heart Rate (Tachycardia)' && temperatureRange == 'High Fever' && BPRange == 'Normal Blood Pressure') {
Conditions = 'Disease 171';
} else if (HeartRateRange == 'High Heart Rate (Tachycardia)' && temperatureRange == 'High Fever' && BPRange == 'Optimal Blood Pressure') {
Conditions = 'Disease 172';
} else if (HeartRateRange == 'High Heart Rate (Tachycardia)' && temperatureRange == 'High Fever' && BPRange == 'Hypotension (Low Blood Pressure)') {
Conditions = 'Disease 173';
} else if (HeartRateRange == 'High Heart Rate (Tachycardia)' && temperatureRange == 'Mild Fever' && BPRange == 'High Blood Pressure') {
Conditions = 'Disease 174';
} else if (HeartRateRange == 'High Heart Rate (Tachycardia)' && temperatureRange == 'Mild Fever' && BPRange == 'Elevated Blood Pressure') {
Conditions = 'Disease 175';
} else if (HeartRateRange == 'High Heart Rate (Tachycardia)' && temperatureRange == 'Mild Fever' && BPRange == 'Normal Blood Pressure') {
Conditions = 'Disease 176';
} else if (HeartRateRange == 'High Heart Rate (Tachycardia)' && temperatureRange == 'Mild Fever' && BPRange == 'Optimal Blood Pressure') {
Conditions = 'Disease 177';
} else if (HeartRateRange == 'High Heart Rate (Tachycardia)' && temperatureRange == 'Mild Fever' && BPRange == 'Hypotension (Low Blood Pressure)') {
Conditions = 'Disease 178';
} else if (HeartRateRange == 'High Heart Rate (Tachycardia)' && temperatureRange == 'Normal' && BPRange == 'High Blood Pressure') {
Conditions = 'Disease 179';
} else if (HeartRateRange == 'High Heart Rate (Tachycardia)' && temperatureRange == 'Normal' && BPRange == 'Elevated Blood Pressure') {
Conditions = 'Disease 180';
} else if (HeartRateRange == 'High Heart Rate (Tachycardia)' && temperatureRange == 'Normal' && BPRange == 'Normal Blood Pressure') {
Conditions = 'Disease 181';
} else if (HeartRateRange == 'High Heart Rate (Tachycardia)' && temperatureRange == 'Normal' && BPRange == 'Optimal Blood Pressure') {
Conditions = 'Disease 182';
} else if (HeartRateRange == 'High Heart Rate (Tachycardia)' && temperatureRange == 'Normal' && BPRange == 'Hypotension (Low Blood Pressure)') {
Conditions = 'Disease 183';
} else if (HeartRateRange == 'High Heart Rate (Tachycardia)' && temperatureRange == 'Hypothermia' && BPRange == 'High Blood Pressure') {
Conditions = 'Disease 184';
} else if (HeartRateRange == 'High Heart Rate (Tachycardia)' && temperatureRange == 'Hypothermia' && BPRange == 'Elevated Blood Pressure') {
Conditions = 'Disease 185';
} else if (HeartRateRange == 'High Heart Rate (Tachycardia)' && temperatureRange == 'Hypothermia' && BPRange == 'Normal Blood Pressure') {
Conditions = 'Disease 186';
} else if (HeartRateRange == 'High Heart Rate (Tachycardia)' && temperatureRange == 'Hypothermia' && BPRange == 'Optimal Blood Pressure') {
Conditions = 'Disease 187';
} else if (HeartRateRange == 'High Heart Rate (Tachycardia)' && temperatureRange == 'Hypothermia' && BPRange == 'Hypotension (Low Blood Pressure)') {
Conditions = 'Disease 188';
} else if (HeartRateRange == 'Very High Heart Rate' && temperatureRange == 'High Fever' && BPRange == 'High Blood Pressure') {
Conditions = 'Disease 189';
} else if (HeartRateRange == 'Very High Heart Rate' && temperatureRange == 'High Fever' && BPRange == 'Elevated Blood Pressure') {
Conditions = 'Disease 190';
} else if (HeartRateRange == 'Very High Heart Rate' && temperatureRange == 'High Fever' && BPRange == 'Normal Blood Pressure') {
Conditions = 'Disease 191';
} else if (HeartRateRange == 'Very High Heart Rate' && temperatureRange == 'High Fever' && BPRange == 'Optimal Blood Pressure') {
Conditions = 'Disease 192';
}
else
{"invalid..";}

}



    const userResults = document.getElementById("userResults");
    userResults.innerHTML = `<h2>Health Summary</h2>`;
    userResults.innerHTML += `<p>Name: ${name}</p>`;
    userResults.innerHTML += `<p>Age: ${age}</p>`;
    userResults.innerHTML += `<p>Gender: ${gender}</p>`;
    userResults.innerHTML += `<p>ID Type: ${idType}</p>`;
    userResults.innerHTML += `<p>ID Number: ${idNumber}</p>`;
    userResults.innerHTML += `<p>Height: ${height} cm</p>`;
    userResults.innerHTML += `<p>Weight: ${weight} kg</p>`;
    userResults.innerHTML += `<p>Blood Group: ${bloodGroup}</p>`;
    userResults.innerHTML += `<p>BMI: ${bmi}</p>`;
    userResults.innerHTML += `<p>Service Choosed: ${logistics}</p>`;
    userResults.innerHTML += `<p>Heart Rate: ${HeartRate} bpm</p>`;
    userResults.innerHTML += `<p>Temperature: ${temperature} F</p>`;
    userResults.innerHTML += `<p>Higher Blood Pressure: ${HbloodPressure} mmHg</p>`;
    userResults.innerHTML += `<p>Lower Blood Pressure: ${LbloodPressure} mmHg</p>`;
    userResults.innerHTML += `<p>Blood Sugar: ${bloodSugar} mm/dL</p>`;
    userResults.innerHTML += `<p>Predicted Symptoms: ${HeartRateRange},  ${temperatureRange} ,  ${BPRange}</p>`;
    userResults.innerHTML += `<p>Predicted Conditions: ${Conditions}</p>`;
    userResults.innerHTML += `<p>(BMI)Predicted Conditions: ${BmiRange}</p>`;
    userResults.innerHTML += `<p>(Blood Sugar)Predicted Conditions: ${BSRange}</p>`;

    
    const resultsDiv = document.getElementById("results");
    resultsDiv.style.display = "block";

    // Saving Excel file
    const csvContent = `"Name","Age","Gender","ID Type","ID Number","Height (cm)","Weight (kg)","Blood Group","BMI","Service Choosed","Heart rate(bpm)","Temperature (F)","Higher Blood Pressure (mmHg)","Lower Blood Pressure (mmHg)","Blood Sugar (mg/dL)","Predicted Condition","(BMI)Predicted Condition","(Blood Sugar)Predicted Condition"\n`;                                                                                                
    const rowData = `"${name}","${age}","${gender}","${idType}","${idNumber}","${height}","${weight}","${bloodGroup}","${bmi}","${logistics}","${HeartRate}","${temperature}","${HbloodPressure}","${LbloodPressure}","${bloodSugar}","${Conditions}","${BmiRange}","${BSRange}"\n`;                      
    const csvData = csvContent + rowData;
    const blob = new Blob([csvData], { type: 'text/csv;charset=utf-8;' });
    const link = document.createElement("a");
    if (link.download !== undefined) {
        const url = URL.createObjectURL(blob);
        link.setAttribute("href", url);
        link.setAttribute("download", "health_summary.csv");
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
    } else {
        alert("browser does not support automatic download. right-click the link and select 'Save link as...' to download.");
    }

}