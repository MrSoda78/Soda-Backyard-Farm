document.addEventListener("DOMContentLoaded", function () {
    const orderForm = document.getElementById("orderForm");
    const formMessage = document.getElementById("formMessage");

    if (orderForm) {
        orderForm.addEventListener("submit", function (event) {
            event.preventDefault();

            formMessage.textContent = "Thank you. Your order request has been recorded. We will contact you soon to confirm availability and pickup details.";

            orderForm.reset();
        });
    }

    console.log("Garden website loaded.");
});