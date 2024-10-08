import { chooseSide } from "./TransientState.js"

export const Sides = async () => {
    const getSides = await fetch("http://localhost:8088/sides")
    const sides = await getSides.json()

    document.addEventListener("change", handleSides)

    let sidesHTML = ""
    const sidesArr = sides.map((side) => {
        return `<label class="choiceContainer"><input type="radio" name="sides" value="${side.id}"/>${side.title}</label>`
    })

    sidesHTML += sidesArr.join("")
    return sidesHTML
}

const handleSides = (changeEvent) => {
    if (changeEvent.target.name === "sides") {
        chooseSide(parseInt(changeEvent.target.value))
    }
}