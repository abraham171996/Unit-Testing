function CurrencyConverter(converter,exchangeRate){
    if(typeof converter !== "number" || typeof exchangeRate !== "number"){
        return
    }
    else if(converter<=0 || exchangeRate<= 0){
        return
    }
    else{
        return converter*exchangeRate
    }
    
}

module.exports = {CurrencyConverter}