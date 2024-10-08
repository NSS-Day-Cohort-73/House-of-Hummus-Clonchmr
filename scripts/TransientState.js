const transientState = {
    entreeId: 0,
    vegetableId: 0,
    sideId: 0
}

export const chooseEntree = (entreeChoice) => {
    transientState.entreeId = entreeChoice
}
export const chooseVegetable = (vegetableChoice) => {
    transientState.vegetableId = vegetableChoice
}
export const chooseSide = (sideChoice) => {
    transientState.sideId = sideChoice
}

export const Order = async () => {
    const postOptions = {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(transientState)
    }
    const response = await fetch("http://localhost:8088/purchases", postOptions)
    const customEvent = new CustomEvent ("newPurchasePlaced")
    document.dispatchEvent(customEvent)
}