document.addEventListener('DOMContentLoaded', ready)

function ready() {
    const colorName = document.querySelector('.color_name')
    const button = document.querySelector('.change')
    const changeColor = () => {
        let r = Math.floor(Math.random()*(255))
        let g = Math.floor(Math.random()*(255))
        let b = Math.floor(Math.random()*(255))
        const color = '#'+ r.toString(16) + g.toString(16) + b.toString(16)
        document.body.style.backgroundColor = color
        colorName.style.color = color
        // console.log(button)
        document.querySelector('.color_name').innerHTML = color
    }
    button.addEventListener('click', changeColor)

    // console.log(button)
}