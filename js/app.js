let degreelat = document.getElementById('degree_lat');
let minuteLat = document.getElementById('minute_lat');
let secondLat = document.getElementById('second_lat');
let resultLat = document.getElementById('results_lat');

let degreeLong = document.getElementById('degree_long');
let minuteLong = document.getElementById('minute_long');
let secondLong = document.getElementById('second_long');
let resultLong = document.getElementById('results_long');

const Calaculatelatitude =  () =>{

    // CALCULATIONS FOR LATIUDE
    let degreelatValue = Math.round(degreelat.value);
    let minuteLatValue =  minuteLat.value / 60;
    //Math.round((minuteLat.value / 60 + Number.EPSILON) * 100) / 100
    let secondLatValue = secondLat.value/3600;
   
    let latMinuSeconds = minuteLatValue + secondLatValue;
    let latResult = degreelatValue + latMinuSeconds;

    resultLat.value = latResult;

    // CALCULATIONS FOR LONGITUDE
    let degreelongValue = Math.round(degreeLong.value);
    let minuteLongValue =  minuteLong.value / 60;
    //Math.round((minuteLat.value / 60 + Number.EPSILON) * 100) / 100
    let secondLongValue = secondLong.value/3600;
   
    let longMinuSeconds = minuteLongValue + secondLongValue;
    let longResult = degreelongValue + longMinuSeconds;

    resultLong.value = longResult;
};

degreelat.addEventListener('input', e =>{
    
});

minuteLat.addEventListener('input', e =>{
    
})

secondLat.addEventListener('input', e =>{
    
})

degreeLong.addEventListener('input', e =>{
   
})

minuteLong.addEventListener('input', e =>{
   
})

secondLong.addEventListener('input', e =>{
    
})


