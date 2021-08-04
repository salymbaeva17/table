const divs = document.querySelectorAll(".wrapper div")
const colors = ["yellow", "green", "blue", "purple", "red", "aquamarine"]
const wrapper = document.querySelector(".wrapper")
const text = ["Тут вам не здесь", "Тут вам не там", "Мы это не вы", "Их это не наш", "Я это не ты", "Наш значит не ваш"]


// // ------------ FIRST OPTION ----------- работает медленнее
// divs.forEach((item) =>
//     item.addEventListener("click", () => {
//         divs.forEach(el => el.removeAttribute("class"))
//         const randomNumber = Math.floor(Math.random() * 6)
//         item.classList.add(colors[randomNumber])
//         item.innerText = text[randomNumber]
//     })
// )


// ------------- SECOND OPTION ----------
wrapper.addEventListener("click", (e) => {
    if (e.target.classList[0] !== "wrapper"){
        divs.forEach(el => {
            el.removeAttribute("class")
            el.innerText = ""
        })
        const randomNumber = Math.floor(Math.random() * 6)
        const randomNum = Math.floor(Math.random() * 6)
        e.target.classList.add(colors[randomNumber])
        e.target.innerText = text[randomNum]
    }
})


