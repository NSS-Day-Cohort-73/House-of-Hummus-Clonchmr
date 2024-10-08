import { chooseEntree } from "./TransientState.js"

export const entreeList = async () => {
    const getEntrees = await fetch("http://localhost:8088/entrees")
    const entrees = await getEntrees.json()

    document.addEventListener("change", handleEntrees)

    let entreeHTML = ""
    const entreesArr = entrees.map((entree) => {
        return `<label class="choiceContainer"><input type="radio" name="entrees" value="${entree.id}" />${entree.name}</label>`
    })
    entreeHTML += entreesArr.join("")
    return entreeHTML
}

const handleEntrees = (changeEvent) => {
    if (changeEvent.target.name === "entrees") {
        chooseEntree(parseInt(changeEvent.target.value))
    }
}