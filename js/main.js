// $(.mopen).on('click', function(){
//     $('.gnb').addClass('on')
// })

document.querySelector('button').addEventListener('click', function () {
    this.classList.toggle('on')
})