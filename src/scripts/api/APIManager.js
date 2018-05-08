const $ = require("jquery")

const APIManager = Object.create(null, {
    getAllAnimals: {
        value: function () {
            return $.ajax("http://localhost:8088/animals")
        }
    },
    getSingleAnimal: {
        value: function (id) {
            return $.ajax(`http://localhost:8088/animals/${id}`)
        }
    },
    createAnimal: {
        value: function (animal) {
            return $.ajax({
                url: "http://localhost:8088/animals",
                method: "POST",
                data: animal
            })
        }
    },
    sellAnimal: {
        value: function (id) {
            return $.ajax({
                url: `http://localhost:8088/animals/${id}`,
                method: "DELETE"
            })
        }
    },
    updateAnimal: {
        value: function (animal) {
            return $.ajax({
                url: `http://localhost:8088/animals/${animal.id}`,
                method: "PUT",
                data: animal
            })
        }
    }
})

module.exports = APIManager

