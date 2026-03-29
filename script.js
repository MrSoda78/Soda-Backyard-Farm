document.addEventListener("DOMContentLoaded", function () {
    const totalDisplay = document.getElementById("orderTotal");
    const quantityInputs = document.querySelectorAll(".product-row input[type='number']");

    function updateTotal() {
        let total = 0;

        quantityInputs.forEach(function (input) {
            const price = parseFloat(input.dataset.price) || 0;
            const quantity = parseInt(input.value, 10) || 0;
            total += price * quantity;
        });

        if (totalDisplay) {
            totalDisplay.textContent = total.toFixed(2);
        }
    }

    quantityInputs.forEach(function (input) {
        input.addEventListener("input", updateTotal);
    });

    updateTotal();

    console.log("Garden website loaded.");
});