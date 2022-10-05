
const generate_shop_items = () => {
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
    'port-and-sherry', 'ctrled-label-wine', 'non-host-support']

    let html_elements = ''
    products.forEach(item => {
        html_elements += `<button id="${item}" onClick="add_to_chart(this.id)">${item}</button>`
    });

    return html_elements
}
