function createData(obj) {
    var data = obj;
    return{
    get: function(klucz){
        return data[klucz]
    },
    set: function(klucz, wartosc){
         if(klucz != undefined && wartosc != undefined) {
                return data[klucz] = wartosc;
            }
            else {
                console.log("Error");
            }
        
    }
    
}
}

var data = createData({});

data.set("name", "Janek");

console.log( data.get("name") );