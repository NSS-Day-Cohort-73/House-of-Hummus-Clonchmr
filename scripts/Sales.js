export const Sales = async () => {
    const sales = await fetch("http://localhost:8088/purchases?_expand=side&_expand=vegetable&_expand=entree").then(res => res.json())

    let salesHTML = ""

    const salesArr = sales.map((sale) => {
        const totalPrice = sale.entree.price + sale.vegetable.price + sale.side.price
        const formattedPrice = totalPrice.toLocaleString("en-us", {style: "currency", currency: "USD"})
        return `<div class="sales">Receipt #${sale.id} = ${formattedPrice}</div>`
    })

    salesHTML += salesArr.join("")

    return salesHTML
}
