const table = document.querySelector(".table")
const cell = document.querySelectorAll(".cell")



function fillRed(){
    cell.forEach(squareRed => {
        return squareRed.addEventListener("click", () => {
            squareRed.style.backgroundColor = "red"
        })
    })
}
fillRed()

//
// if (cell.style.backgroundColor === "red"){
//     cell.forEach(squareTransparent => {
//         return squareTransparent.addEventListener("click", () => {
//             squareTransparent.style.backgroundColor = "transparent"
//         })
//     })
// }
