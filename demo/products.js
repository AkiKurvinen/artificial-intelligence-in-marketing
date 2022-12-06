var json = new Object

async function read_json_data() {
    json = await fetch('../model/rulesjson.json')
    .then(response => response.json())
    .catch(error => console.log(error));
}

const generate_shop_items_rec = (chart_items) => {
    const products = ['grocery-misc', 'baby-needs', 'bread-and-cake', 'baking-needs', 'coupons',
    'juice-sat-cord-ms', 'tea', 'biscuits', 'canned-fish-meat', 'canned-fruit', 'canned-vegetables',
    'breakfast-food', 'cigs-tobacco-pkts', 'cigarette-cartons', 'cleaners-polishers', 'coffee',
    'sauces-gravy-pkle', 'confectionary', 'puddings-deserts', 'dishcloths-scour', 'deod-disinfectant',
    'frozen-foods', 'razor-blades', 'fuels-garden-aids', 'spices', 'jams-spreads', 'insecticides',
    'pet-foods', 'laundry-needs', 'party-snack-foods', 'tissues-paper-prd', 'wrapping', 'dried-vegetables',
    'pkt-canned-soup', 'soft-drinks', 'health-food-other', 'beverages-hot', 'health&beauty-misc',
    'deodorants-soap', 'mens-toiletries', 'medicines', 'haircare', 'dental-needs', 'lotions-creams',
    'sanitary-pads', 'cough-cold-pain', 'meat-misc', 'cheese', 'chickens', 'milk-cream', 'cold-meats',
    'deli-gourmet', 'margarine', 'salads', 'small-goods', 'dairy-foods', 'fruit-drinks', 'delicatessen-misc',
    'beef', 'hogget', 'lamb', 'pet-food', 'pork', 'poultry', 'veal', 'gourmet-meat', 'produce-misc', 'fruit',
    'plants', 'potatoes', 'vegetables', 'flowers', 'variety-misc', 'brushware', 'electrical', 'haberdashery',
    'kitchen', 'manchester', 'pantyhose', 'plasticware', 'stationary', 'prepared-meals', 'preserving-needs',
    'condiments', 'cooking-oils', 'health-food-bulk', 'bake-off-products', 'small-goods2', 'offal', 'mutton',
    'trim-pork', 'trim-lamb', 'imported-cheese', 'casks-white-wine', 'casks-red-wine', '750ml-white-nz',
    '750ml-red-nz', '750ml-white-imp', '750ml-red-imp', 'sparkling-nz', 'sparkling-imp', 'brew-kits/accesry',
    'port-and-sherry', 'ctrled-label-wine', 'non-host-support'].sort()

    function get_proba(item){
        let proba = json[item]

        return proba
        return Math.floor(Math.random() * 100) + 0
    }
    function get_color(num){
        if (num < 21){
            let propa_col = Math.round(255*(num/100))
            return `rgba(255,${propa_col},${propa_col})`

        }
        else if (num > 79){
            let propa_col = Math.round(255-255*(num/100))
            return `rgba(${propa_col*2},255,${propa_col})`
        }
        else{
            return '#fff'
        }

    }
    let html_elements = []
    let recom_items = []
    chart_items.forEach(item => {
        recom_items.push(item)
    })
    // let recom_items = json[chart_items[0]]
    let return_items = []
    products.forEach(item => {
        recom_items.forEach(itm=>{
            try {
                if(json[itm].includes(item)){
                    if(!return_items.includes(item)){
                        return_items.push(item)
                       // return_items.push(`<button id="${item}" onClick="add_to_chart(this.id)" style="background-color:green;">${item}</button>`)
                    }
                }
           // else{
            //    html_elements.push(`<button id="${item}" onClick="add_to_chart(this.id)" style="background-color:crimson;">${item}</button>`)
           // }
            }
            catch (error) {
                console.log(`${itm} not in data`);
             //   html_elements.push(`<button id="${item}" onClick="add_to_chart(this.id)" style="background-color:white;">${item}</button>`)
            }
        })

        // Algorithm goes here
        let probability = get_proba(item)

    });
    /*products.forEach(item => {
        // Algorithm goes here
        let probability = get_proba(item)
        html_elements += `<button id="${item}" onClick="add_to_chart(this.id)" style="background-color:${get_color(probability)}">${item} ${probability}%</button>`
    });
    */
    let html = ''
    products.forEach(item => {

        if(return_items.includes(item)){
             html += `<button id="${item}" onClick="add_to_chart(this.id)" style="background-color:green;">${item}</button>`
        }
        else{
            html += `<button id="${item}" onClick="add_to_chart(this.id)" style="background-color:white;">${item}</button>`
        }

    })

    return html
}

const generate_shop_items = () => {
    read_json_data()
    const products = ['grocery-misc', 'baby-needs', 'bread-and-cake', 'baking-needs', 'coupons',
    'juice-sat-cord-ms', 'tea', 'biscuits', 'canned-fish-meat', 'canned-fruit', 'canned-vegetables',
    'breakfast-food', 'cigs-tobacco-pkts', 'cigarette-cartons', 'cleaners-polishers', 'coffee',
    'sauces-gravy-pkle', 'confectionary', 'puddings-deserts', 'dishcloths-scour', 'deod-disinfectant',
    'frozen-foods', 'razor-blades', 'fuels-garden-aids', 'spices', 'jams-spreads', 'insecticides',
    'pet-foods', 'laundry-needs', 'party-snack-foods', 'tissues-paper-prd', 'wrapping', 'dried-vegetables',
    'pkt-canned-soup', 'soft-drinks', 'health-food-other', 'beverages-hot', 'health&beauty-misc',
    'deodorants-soap', 'mens-toiletries', 'medicines', 'haircare', 'dental-needs', 'lotions-creams',
    'sanitary-pads', 'cough-cold-pain', 'meat-misc', 'cheese', 'chickens', 'milk-cream', 'cold-meats',
    'deli-gourmet', 'margarine', 'salads', 'small-goods', 'dairy-foods', 'fruit-drinks', 'delicatessen-misc',
    'beef', 'hogget', 'lamb', 'pet-food', 'pork', 'poultry', 'veal', 'gourmet-meat', 'produce-misc', 'fruit',
    'plants', 'potatoes', 'vegetables', 'flowers', 'variety-misc', 'brushware', 'electrical', 'haberdashery',
    'kitchen', 'manchester', 'pantyhose', 'plasticware', 'stationary', 'prepared-meals', 'preserving-needs',
    'condiments', 'cooking-oils', 'health-food-bulk', 'bake-off-products', 'small-goods2', 'offal', 'mutton',
    'trim-pork', 'trim-lamb', 'imported-cheese', 'casks-white-wine', 'casks-red-wine', '750ml-white-nz',
    '750ml-red-nz', '750ml-white-imp', '750ml-red-imp', 'sparkling-nz', 'sparkling-imp', 'brew-kits/accesry',
    'port-and-sherry', 'ctrled-label-wine', 'non-host-support'].sort()

    let html_elements = ''
    products.forEach(item => {
        html_elements += `<button id="${item}" onClick="add_to_chart(this.id)">${item}</button>`
    });

    return html_elements
}
