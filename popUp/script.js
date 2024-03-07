const open = document.querySelector('.btnOpen')
const close = document.querySelector('.btnClose')
const showMe = document.querySelector('.openDialog')

open.onclick = function () {
    showMe.showModal()
}

close.onclick = function () {
    showMe.close()
}