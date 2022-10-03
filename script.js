Cookies.set('somevalue', 'true', {expires: 2,  sameSite: 'strict', secure: true})
var myCookie = Cookies.get('somevalue')
console.log(myCookie)
var title = document.querySelector('h1')
if (myCookie){
    title.classList.add('cookie')
    title.innerHTML = 'Cookies Found'
}
else{
    title.innerHTML = 'No Cookies Found'
}