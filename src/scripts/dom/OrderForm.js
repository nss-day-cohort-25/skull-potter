// Purpose: Build the order form
const $ = require("jquery")
const api = require("../api/APIManager")


const buildOrderForm = function (id) {

    // What customer selected
    api.getSingleAnimal(id).then(animal => {
        const output = $("#order-form")
        const fragment = document.createDocumentFragment()
        const parentContainer = document.createElement("div")
        parentContainer.classList = "container"

        // Header
        const header = document.createElement("h2")
        header.textContent = "Skull & Potter Order Form"
        parentContainer.appendChild(header)

        // Customer info
        const nameContainer = document.createElement("div")
        nameContainer.classList = "form-group"

        const nameLabel = document.createElement("label")
        nameLabel.textContent = "Name"

        const name = document.createElement("input")
        name.type = "text"
        name.placeholder = "Enter your name here"
        name.classList = "customer__name form-control"

        nameContainer.appendChild(nameLabel)
        nameContainer.appendChild(name)
        parentContainer.appendChild(nameContainer)

        // Payment type
        const paymentTypesContainer = document.createElement("div")
        paymentTypesContainer.classList = "form-group"

        const paymentTypesLabel = document.createElement("label")
        paymentTypesLabel.textContent = "Payment Type"

        const visa = document.createElement("option")
        visa.textContent = "Visa"
        const mastercard = document.createElement("option")
        mastercard.textContent = "Mastercard"
        const amex = document.createElement("option")
        amex.textContent = "American Express"
        const paymentTypes = document.createElement("select")
        paymentTypes.classList = "form-control"

        paymentTypes.appendChild(visa)
        paymentTypes.appendChild(mastercard)
        paymentTypes.appendChild(amex)

        paymentTypesContainer.appendChild(paymentTypesLabel)
        paymentTypesContainer.appendChild(paymentTypes)

        parentContainer.appendChild(paymentTypesContainer)


        // Quantity
        const quantityContainer = document.createElement("div")
        quantityContainer.classList = "form-group"

        const quantityLabel = document.createElement("label")
        quantityLabel.textContent = "Quantity"

        const quantity = document.createElement("input")
        quantity.classList = "form-control"
        quantity.type = "number"
        quantity.min = 1
        quantity.max = 10
        quantityContainer.appendChild(quantityLabel)
        quantityContainer.appendChild(quantity)
        parentContainer.appendChild(quantityContainer)


        /*
            Jumbotron element to hold the message about the
            animal and the order button
        */
        const jumbotron = document.createElement("div")
        jumbotron.classList = "jumbotron"

        const animalComponent = document.createElement("p")
        animalComponent.classList = "lead"
        animalComponent.textContent = `
        You are ordering a${animal.mounted ? " mounted" : "n unmounted"} ${animal.species}
        for ${animal.price.toLocaleString("en-US", { style: "currency", currency: "USD" })}
        `
        jumbotron.appendChild(animalComponent)

        // Submit button
        const order = document.createElement("button")
        order.type = "button"
        order.classList = "button--order btn btn-primary btn-lg"
        order.textContent = "Order Animal"
        order.id = `animalOrder--${animal.id}`
        order.onclick = function (event) {
            console.log(event.target.id.split("--")[1])
            $("#order-form").empty()

            /*
                Only include modules in the event listener when
                you **only** need it for the event. This eliminates
                circular dependency problems
            */
            const showCatalog = require("./DisplayCatalog")
            showCatalog()



            // $(".container").animate({
            //     opacity: 0,
            //     width: "20%"
            // }, 1500, function() {
            //     $(".container").before("<h1 class='alert--complete'>Order Complete</h1>")
            // });
        }
        jumbotron.appendChild(order)
        parentContainer.appendChild(jumbotron)
        output.append(parentContainer)
    })
}

module.exports = buildOrderForm
