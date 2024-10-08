import { chooseVegetable } from "./TransientState.js"

export const Veggies = async () => {
    const getVeggies = await fetch("http://localhost:8088/vegetables")
    const vegetables = await getVeggies.json()

document.addEventListener("change", handleVeggies)

    let veggiesHTML = ""
    const veggieArr = vegetables.map((vegetable) => {
        return `<label class="choiceContainer"><input type="radio" name="vegetables" value="${vegetable.id}"/>${vegetable.type}</label>`
    })

    veggiesHTML += veggieArr.join("")
    return veggiesHTML
}

const handleVeggies = (changeEvent) => {
    if (changeEvent.target.name === "vegetables") {
        chooseVegetable(parseInt(changeEvent.target.value))
    }
}