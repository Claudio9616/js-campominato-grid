const button = document.getElementById('pulsante')
const grid = document.getElementById('grid')
const rows = 10
const cols = 10
const totCells = rows * cols
const createCells = () => {
    const cells = document.createElement('div')
    cells.className = 'cells'
    return cells
}
button.addEventListener('click', function(){
    for (let i = 1; i <= totCells; i++){
        const newCells = createCells()
        newCells.addEventListener('click', () => {
           newCells.classList.toggle('clicca')
        })
        grid.appendChild(newCells)
    }
})