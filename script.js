const divs = document.querySelectorAll(".wrapper div")
const colors = ["yellow", "green", "blue", "purple", "red", "aquamarine"]
const text = ["Тут вам не здесь", "Тут вам не там", "Мы это не вы", "Их это не наш", "Я это не ты", "Наш значит не ваш"]

divs.forEach((item) =>
    item.addEventListener("click", () => {
        divs.forEach(el => el.removeAttribute("class"))
        const randomNumber = Math.floor(Math.random() * 6)
        item.classList.add(colors[randomNumber])
        item.innerText = text[randomNumber]
    })
)


