import "./main.scss"
import sayHi from "./utils.js"
import coinFlipperJS from "coinflipperjs"

document.addEventListener("DOMContentLoaded", () => {
    sayHi()

    alert(coinFlipperJS())

    const btn = document.querySelector('button')

    btn.addEventListener('click', () => {
        alert("Algebra")
    })
})