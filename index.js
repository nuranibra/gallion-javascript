//Musteriden istenenler
var manCode = prompt("Mushterinin kodu(r,c or i)")//Mes: r
var manStart = parseInt(prompt("Bashlangic saygaciniz..."))//Mes:0 gal;
var manEnd = parseInt(prompt("Bitish saygaciniz..."))//Mes :10gal

if (manCode == "r"){ //ehali
    if(manStart > 0){
        var rMoneyGalion = (manEnd * 0.0005) + 5.00;//Adamin galion bash pul
        var ishledilenGalionSu = manEnd - manStart;//ishletdiyi galion
        console.log("Mushteri Kodu :" , manCode)
        console.log("Bashlangic saygaciniz :", manStart)
        console.log("Bitish saygaciniz" , manEnd)
        console.log("Ishledilen Galion Su" , ishledilenGalionSu)
        console.log("Mushterinin Borcu (Dollar)" , rMoneyGalion)
    }
}

else if(manCode == "c"){
    if (manStart < 4000000){
       var cMoneyGalion = 1000.00;
       var cIshledilenGalionSu = manEnd - manStart;
       console.log("Mushteri Kodu :" , manCode)
        console.log("Bashlangic saygaciniz :", manStart)
        console.log("Bitish saygaciniz" , manEnd)
        console.log("Ishledilen Galion Su" , cIshledilenGalionSu)
        console.log("Mushterinin Borcu (Dollar)" , cMoneyGalion)
}
 else if(cIshledilenGalionSu > 4000000){
    var elaveIshledilenGalionSu = cIshledilenGalionSu - 4000000;
    var elaveCMoneyGalion = elaveIshledilenGalionSu * 0.00025;
    console.log("Mushteri Kodu :" , manCode)
    console.log("Bashlangic saygaciniz :", manStart)
    console.log("Bitish saygaciniz" , manEnd)
    console.log("Ishledilen Galion Su" , elaveIshledilenGalionSu  + 4000000)
    console.log("Mushterinin Borcu (Dollar)" , elaveCMoneyGalion + 1000.00)
}

else if(manStart > 4000000){
    var cMoneyGalion = 1000.00;
    var cIshledilenGalionSuChox = manEnd - manStart;
    var elaveIshledilenGalionSuChox = cIshledilenGalionSuChox - 4000000;
    var elaveCMoneyGalionChox = elaveIshledilenGalionSuChox * 0.00025;
    console.log("Mushteri Kodu :" , manCode)
    console.log("Bashlangic saygaciniz :", manStart)
    console.log("Bitish saygaciniz" , manEnd)
    console.log("Ishledilen Galion Su" , elaveIshledilenGalionSuChox  + 4000000)
    console.log("Mushterinin Borcu (Dollar)" , elaveCMoneyGalionChox + 1000.00)
}
}

else if(manCode == "i"){
    if((manEnd - manStart) < 4000000){
        var iMoneyGalion = 1000.00;
    console.log("Mushteri Kodu :" , manCode)
    console.log("Bashlangic saygaciniz :", manStart)
    console.log("Bitish saygaciniz :" , manEnd)
    console.log("Ishledilen Galion Su :" ,(manEnd - manStart))
    console.log("Mushterinin Borcu (Dollar) :" ,(iMoneyGalion) )
    }

    else if((manEnd - manStart) > 4000000 && (manEnd - manStart) < 10000000){
        var iMoneyGalionChox = 2000.00;
        
    console.log("Mushteri Kodu :" , manCode)
    console.log("Bashlangic saygaciniz :", manStart)
    console.log("Bitish saygaciniz :" , manEnd)
    console.log("Ishledilen Galion Su :" ,(manEnd - manStart))
    console.log("Mushterinin Borcu (Dollar) :" ,(iMoneyGalionChox) )
    }

    else if((manEnd - manStart) > 10000000){
        if((manEnd - manStart) - 10000000){
            var iMoneyGalionVery = 2000.00 + 0.00025;
            
    console.log("Mushteri Kodu :" , manCode)
    console.log("Bashlangic saygaciniz :", manStart)
    console.log("Bitish saygaciniz :" , manEnd)
    console.log("Ishledilen Galion Su :" ,(manEnd - manStart))
    console.log("Mushterinin Borcu (Dollar) :" ,(iMoneyGalionVery) )
        }
    }
}