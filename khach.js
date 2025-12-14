let data = JSON.parse(localStorage.getItem("cosoList"));
let ci = localStorage.getItem("cosoIndex");
let ti = localStorage.getItem("tangIndex");
let pi = localStorage.getItem("phongIndex");

let room = data[ci].tang[ti].phong[pi];

function saveGuest(){
    room.khach = {
        name: name.value,
        phone: phone.value,
        people: +people.value,
        vehicle: +vehicle.value,
        months: +months.value,
        start: start.value,
        roomFee: +roomFee.value,
        deposit: +deposit.value
    };
    localStorage.setItem("cosoList", JSON.stringify(data));
    alert("Đã lưu khách");
}

function calculate(){
    const peopleCount = +people.value;

    const electricRoom =
        (newElectric.value - oldElectric.value) * priceElectric.value;

    const wifi = 100000;
    const servicePerPerson =
        (+water.value + +trash.value + +wash.value +
         +dry.value + +filter.value + +clean.value);

    const serviceTotal = wifi + servicePerPerson * peopleCount;

    const total =
        +roomFee.value +
        electricRoom +
        serviceTotal;

    total.innerText = "TỔNG TIỀN: " +
        total.toLocaleString("vi-VN") + " đ";
}
