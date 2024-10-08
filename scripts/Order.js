import { Order } from "./TransientState.js"

export const submitOrder = () => {
    document.addEventListener("click", handleOrder)
    return `<button id="purchase">Purchase Combo</button>`
}

const handleOrder = (clickEvent) => {
    if (clickEvent.target.id === "purchase") {
        Order()
    }
}