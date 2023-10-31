function updateToUnits() {
    const fromUnit = document.getElementById("fromUnit").value;
    const toUnitSelect = document.getElementById("toUnit");

    for (let option of toUnitSelect.options) {
        option.disabled = false;
    }
    if (fromUnit === "meter") {
        toUnitSelect.value = "feet";
        toUnitSelect.options.namedItem("gallon").disabled = true;
        toUnitSelect.options.namedItem("pound").disabled = true;
    } else if (fromUnit === "liter") {
        toUnitSelect.value = "gallon";
        toUnitSelect.options.namedItem("feet").disabled = true;
        toUnitSelect.options.namedItem("pound").disabled = true;
    } else if (fromUnit === "kilogram") {
        toUnitSelect.value = "pound";
        toUnitSelect.options.namedItem("feet").disabled = true;
        toUnitSelect.options.namedItem("gallon").disabled = true;
    }
}

function convert() {
    const inputValue = parseFloat(document.getElementById("inputValue").value);
    const fromUnit = document.getElementById("fromUnit").value;
    const toUnit = document.getElementById("toUnit").value;
    let result = 0;

    if (fromUnit === "meter" && toUnit === "feet") {
        result = inputValue * 3.281;
    } else if (fromUnit === "liter" && toUnit === "gallon") {
        result = inputValue * 0.264;
    } else if (fromUnit === "kilogram" && toUnit === "pound") {
        result = inputValue * 2.204;
    }

    document.getElementById("result").innerHTML = `${inputValue} ${fromUnit} is ${result.toFixed(2)} ${toUnit}`;
}