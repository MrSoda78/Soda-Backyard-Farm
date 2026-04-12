document.addEventListener("DOMContentLoaded", function () {
    const orderForm = document.getElementById("orderForm");
    const totalDisplay = document.getElementById("orderTotal");
    const formMessage = document.getElementById("formMessage");
    const quantityInputs = document.querySelectorAll(".product-row input[type='number']");

    function updateTotal() {
        let total = 0;

        quantityInputs.forEach(function (input) {
            const price = parseFloat(input.dataset.price) || 0;
            const quantity = parseInt(input.value, 10) || 0;
            total += price * quantity;
        });

        if (totalDisplay) {
            totalDisplay.textContent = "Total: $" + total.toFixed(2);
        }
    }

    quantityInputs.forEach(function (input) {
        input.addEventListener("input", updateTotal);
    });

    if (orderForm && formMessage) {
        orderForm.addEventListener("submit", function () {
            formMessage.textContent = "Thank you. Your order request has been submitted.";
        });
    }

    updateTotal();

    console.log("Garden website loaded.");
});