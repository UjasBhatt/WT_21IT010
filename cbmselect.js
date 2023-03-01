function car() {
    const car = {
        name: "CRETA",
        company: "hyundai",
        Mileage: "16.8 kmpl",
        BHP: "113.18 - 138.12 Bhp",
        Engine: "1353 cc - 1497 cc",
        Price: "₹ 10.4 Lakhs - ₹ 18.2 Lakhs ",
    };
    dis(car);
}

function mobile() {
    const mobile = {
        name: "Samsung S21 FE",
        company: "Samsung",
        Processor: "Samsung Exynos 9155",
        RearCamera: "Triple (12MP + 64MP + 12MP)  ",
        Price: "₹ 53,100 ",

    };
    dis(mobile);
}

function bike() {
    const bike = {
        name: "Suzuki Gixxer SF",
        company: "SUZUKI",
        EngineCC: "154.9 CC",
        Mileage: "47 KM/L",
        Price: "₹ 1.29 Lakh",
    };
    dis(bike);
}

function dis(temp) {
    document.getElementById("print").innerHTML = null;
    for (i in temp) {
        let carddetail = document.createElement("td");
        carddetail.textContent = i
        document.getElementById("print").appendChild(car);
        carddetail.textContent = temp[i];
        document.getElementById("print").appendChild(bike);
    }


}