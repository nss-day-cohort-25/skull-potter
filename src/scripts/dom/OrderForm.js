// Purpose: Build the order form
const $ = require("jquery")
const api = require("../api/APIManager")

const buildOrderForm = function (id) {

    // What customer selected
    api.getSingleAnimal(id).then(animal => {
        const output = $("#order-form")
        const fragment = document.createDocumentFragment()


/*
<div class="form-group">
    <label for="exampleInputEmail1">Email address</label>
    <input type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter email">
    <small id="emailHelp" class="form-text text-muted">We'll never share your email with anyone else.</small>
  </div>
*/

        // Header
        const header = document.createElement("h2")
        header.textContent = "Skull & Potter Order Form"
        fragment.appendChild(header)

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
        fragment.appendChild(nameContainer)

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

        fragment.appendChild(paymentTypesContainer)


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
        fragment.appendChild(quantityContainer)


/*
<div class="jumbotron">
  <h1 class="display-4">Hello, world!</h1>
  <p class="lead">This is a simple hero unit, a simple jumbotron-style component for calling extra attention to featured content or information.</p>
  <hr class="my-4">
  <p>It uses utility classes for typography and spacing to space content out within the larger container.</p>
  <a class="btn btn-primary btn-lg" href="#" role="button">Learn more</a>
</div>
*/


        const jumbotron = document.createElement("div")
        jumbotron.classList = "jumbotron"


        const animalComponent = document.createElement("p")
        animalComponent.classList = "lead"
        animalComponent.textContent = `
        You are ordering a ${animal.species}
        for ${animal.price.toLocaleString("en-US", { style: "currency", currency: "USD" })}
        `
        jumbotron.appendChild(animalComponent)

        // Submit button
        const order = document.createElement("button")
        order.type = "button"
        order.classList = "btn btn-primary btn-lg"
        order.textContent = "Order Animal"
        order.id = `animalOrder--${animal.id}`
        order.onclick = function (event) {
            console.log(event.target.id.split("--")[1])
        }
        jumbotron.appendChild(order)

        fragment.appendChild(jumbotron)


        output.append(fragment)
    })

}

module.exports = buildOrderForm
