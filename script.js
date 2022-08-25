let btn_white = document.querySelector('.btn-white')
let btn_grey = document.querySelector('.btn-grey')
let photo_a = document.querySelector('.photo-a')
let image = document.querySelector('img')
let buttons_price = document.querySelectorAll('.buttons-price')
let btn_price = document.querySelector('.price')

btn_grey.onclick = () => {
    photo_a.innerHTML = 'Space Grey'
    image.setAttribute('src', './photo/mac-grey.png')
    btn_white.style.backgroundColor = '#CFE7FF'
    btn_white.style.color = '#797979'
    btn_grey.style.backgroundColor = '#0071E3'
    btn_grey.style.color = '#FFFFFF'
}

btn_white.onclick = () => {
    photo_a.innerHTML = 'White'
    image.setAttribute('src', './photo/mac-silver.png')
    btn_white.style.backgroundColor = '#0071E3'
    btn_white.style.color = '#FFFFFF'
    btn_grey.style.backgroundColor = '#CFE7FF'
    btn_grey.style.color = '#797979'
}

let borderColor
buttons_price.forEach((btn) => {
    btn.onclick = () => {
        let gb = btn.getAttribute('data-gb')
        if(gb == '512') {
            btn_price.innerHTML = '$1,999'
        } else if(gb == '1') {
            btn_price.innerHTML = '$2,199'
        } else if(gb == '2') {
            btn_price.innerHTML = '$2,599'
        } else if(gb == '4') {
            btn_price.innerHTML = '$3,199'
        }
        // borderColor = '#0071E3 px solid'
        // btn.style.border = borderColor

    }
    btn.onmouseenter = () => {
        btn.style.border = '#0071E3 2px solid'
    }
    btn.onmouseleave = () => {
        btn.style.border = '#CCE4F7 2px solid'
    }
})

// buttons_price.onmouseenter = () => {
    // buttons_price.style.border = '#0071E3'
// }