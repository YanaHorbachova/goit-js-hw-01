const userCountry = prompt('Выберите страну доставки');
const normalImput = userCountry.toLowerCase();

let price;
let massage 

switch (normalImput){
    case 'китай': {
        price = `100 кредитов`
        massage = `Доставка в ${userCountry} будет стоить ${price} кредитов`
        break;
        }

    case 'чили': {
        price = `250 кредитов`
        massage = `Доставка в ${userCountry} будет стоить ${price} кредитов`
        break;
        }

    case 'австралия': {
        price = `170 кредитов`
        massage = `Доставка в ${userCountry} будет стоить ${price} кредитов`
        break;
        }

    case 'индия': {
        price = `80 кредитов`
        massage = `Доставка в ${userCountry} будет стоить ${price} кредитов`
        break;
        }
    
    case 'ямайка': {
        price = `120 кредитов`
        massage = `Доставка в ${userCountry} будет стоить ${price} кредитов`
        break;
        } 

    default: 
        massage = 'В вашей стране доставка не доступна'

}

alert(massage);