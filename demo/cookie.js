
const update_cookie = (items) =>{
    let title = document.querySelector('h1')
    let cookie_content_p = document.getElementById('content')

    if(items.length != 0){

        let json_str = JSON.stringify(items);
        Cookies.set('chart', json_str, {expires: 2,  sameSite:'strict', secure: true})

    }
    if (Cookies.get('chart')){
        title.classList.add('cookie')
        title.innerHTML = 'Cookies Found'
        cookie_content_p.innerHTML = Cookies.get('chart')
    }
    else{
        title.innerHTML = 'No Cookies Found'
    }

}
const load_cookie = () => {
    console.log('load cookie')
    let chart = []
    let items = []
    try {
        chart = JSON.parse(Cookies.get('chart'))
    } catch (error) {
        console.log('No items')
        return items
    }
    
    chart.forEach(element => {
        items.push(element)
    });
    
    return items
}