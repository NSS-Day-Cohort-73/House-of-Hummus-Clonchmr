import { entreeList } from "./Entrees.js"
import { submitOrder } from "./Order.js"
import { Sales } from "./Sales.js"
import { Sides } from "./SideDishes.js"
import { Veggies } from "./Vegetables.js"

export const FoodTruck = async () => {
    const allSales = await Sales()
    const allEntrees = await entreeList()
    const allVeggies = await Veggies()
    const allSides = await Sides()
    const order = submitOrder()

    return `
        <header class="header">
            <img src="./images/hummus.png" class="logo" />
            <h1 class="title">Laura Kathryn's House of Hummus</h1>
        </header>

        <article id="choices">
            <section class="choice">
                <h3>Base Dish</h3>
                ${allEntrees}
            </section>
            
            <section class="choice">
                <h3>Vegetable</h3>
                ${allVeggies}
            </section>
            
            <section class="choice">
                <h3>Sides</h3>
                ${allSides}
            </section>
            
        </article>

        <article>
            ${order}
        </article>

        <article class="customerOrders">
            <h2>Monthly Sales</h2>
            ${allSales}
        </article>
        

    `
}




// define a new custom event that will re-render the html on click