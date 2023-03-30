function mutation(arr){
    var firstItem = arr[0].toLowerCase();
    var secondItem = arr[1].toLowerCase();

    for(var i=0; i<secondItem.length; i++){
        if(firstItem.indexOf(secondItem[i]) === -1)
        return false;
    }

    return true;
}
mutation(["cars", "trains", ["roads", ["railways"]]], ["cars", "trains", ["roads", ["railways"]]])
