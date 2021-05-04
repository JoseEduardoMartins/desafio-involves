let hotel = [
    {
        name: "Parque das flores",
        classification: 3,
        weekdayRegular: 110.00,
        weekendRegular: 90.00,
        weekdayFidelity: 80.00,
        weekendFidelity: 80.00
    },
    {
        name: "Jardim Botânico",
        classification: 4,
        weekdayRegular: 160.00,
        weekendRegular: 60.00,
        weekdayFidelity: 110.00,
        weekendFidelity: 50.00
    },
    {
        name: "Mar Atlântico",
        classification: 5,
        weekdayRegular: 220.00,
        weekendRegular: 150.00,
        weekdayFidelity: 100.00,
        weekendFidelity: 40.00
    }
];
function gethotelCheaper(typeClient, ...date){
    let valueTotal = 99999999;
    let nameHotel = "";
    let classificationHotel = 0;
    let weekDay = ["mon", "tue", "wed", "thu", "fri"];
    let weekEnd = ["sat", "sun"];
    for(var numbemHotel = 0; numbemHotel < hotel.length; numbemHotel++){
        let value = calcValueTotal(date, weekDay, weekEnd, typeClient, numbemHotel);
        if(value < valueTotal){
            valueTotal = value;
            nameHotel = hotel[numbemHotel].name;
            classificationHotel = hotel[numbemHotel].classification;
            
        }else if(value == valueTotal){
            if(classificationHotel < hotel[numbemHotel].classification){
                valueTotal = value;
                nameHotel = hotel[numbemHotel].name;
                classificationHotel = hotel[numbemHotel].classification;
            }
        }
    }
    return nameHotel;
}
function calcValueTotal(date, weekDay, weekEnd, typeClient, numbemHotel){
    let value = 0;
    for(let i = 0; i < date.length; i++){
        let data = date[i].match(/\(.*\)/);
        data = data[0].replace("(", "");
        data = data.replace(")", "");
        if(undefined != weekDay.find(day => day == data)){
            (typeClient == "Regular") ? value += hotel[numbemHotel].weekdayRegular: value += 0;
            (typeClient == "Fidelidade") ? value += hotel[numbemHotel].weekdayFidelity: value += 0;
        }
        if(undefined != weekEnd.find(day => day == data)){
            (typeClient == "Regular") ? value += hotel[numbemHotel].weekendRegular: value += 0;
            (typeClient == "Fidelidade") ? value += hotel[numbemHotel].weekendFidelity: value += 0;
        }
        
    }
    return value;
}
console.log(gethotelCheaper("Regular", "16Mar2020(mon)", "17Mar2020(tue)", "18Mar2020(wed)"));
console.log(gethotelCheaper("Regular", "20Mar2020(fri)", "21Mar2020(sat)", "22Mar2020(sun)"));
console.log(gethotelCheaper("Fidelidade", "26Mar2020(thu)", "27Mar2020(fri)", "28Mar2020(sat)"));