const moment = new Date()
const min =  moment.getMinutes()
const hour = moment.getHours()
const time = moment.toLocaleString('en-us', {timeStyle:'short'}) 

if(navigator.language != 'en'){
    time = moment.toLocaleString('fr-fr', {timeStyle:'short'})
} 
function ToMgTime(){
    if(hour === 0 && min <= 30){

        return `Misasakalina`

    }
    
    else if(hour === 1 && min <= 30){

        return`Mody mpamosavy`
    }
    
    else if(hour === 1 && min > 30){

        return`Mitrena omby lahy`
    }
    
    else if(hour === 2 && min <= 30){

        return`Maneno sahona`
    }
    
    else if(hour === 2 && min > 30){

        return`Mivoaka goaika`
    }
    
    else if(hour === 3 && min <= 30){

        return`Maneno akoho`
    }
    
    else if(hour === 3 && min > 30){

        return`Maneno fitatra`
    }
    
    else if(hour === 4 && min <= 30){

        return`Mazava ratsy`
    }
    
    else if(hour === 4 && min > 30){

        return`Mifoha olo-mazoto`
    }
    
    else if(hour === 5 && min <= 30){

        return`Mifoha olo-mazoto`
    }
    
    else if(hour === 5 && min > 30){

        return`Mipoaka andron-dolo`
    }
    
    else if(hour === 6 && min <= 30){

        return`Miranandro`
    }
    
    else if(hour === 6 && min > 30){

        return`Maim-bohon-dravina`
    }
    
    else if(hour === 7){

        return`Vaky masoandro`
    }
    
    else if(hour === 8){

        return`Misandratrandro`
    }
    
    else if(hour === 9 && min <= 30){

        return`Mivoaka omby`
    }
    
    else if(hour === 9 && min > 30){

        return`Mivoak'omby terabao`
    }
    
    else if(hour === 10){

        return`Atoandroben' nanahary`
    }
    
    else if(hour === 11){

        return`Ambolom-boditrano ny andro`
    }
    
    else if(hour === 12){

        return`Mitatao vovonana`
    }
    
    else if(hour === 13){

        return`Mihilana ny andro`
    }
    
    else if(hour === 14 && min <= 30){

        return`Tafalatsaka ny andro`
    }
    
    else if(hour === 14 && min > 30){

        return`Am-pamatoran-janak'omby`
    }
    
    else if(hour === 15 && min <= 30){

        return`Ampitotoam-bary olona`
    }
    
    else if(hour === 15 && min > 30){

        return`Ambava fisoko ny andro`
    }
    
    else if(hour === 16 && min <= 30){

        return`Tafapaka ny andro`
    }
    
    else if(hour === 16 && min > 30){

        return`Mody omby tera-bao`
    }
    
    else if(hour === 17){

        return`Mody omby`
    }
    
    else if(hour === 18 && min <= 30 ){

        return`Maty masoandro`
    }
    
    else if(hour === 18 && min > 30){

        return`Maizim-bavavilany tsy 
        ahita-mitsinjo, tsy ahita-tsoratr'omby`
    }
    
    else if(hour === 19){

        return`Manokom-bary olona`
    }
    
    else if(hour === 20){

        return`Homam-bary olona`
    }
    
    else if(hour === 21 && min <= 30){

        return`Tapimandry olona`
    }
    
    else if(hour === 21 && min > 30){

        return`Loha tory`
    }
    
    else if(hour === 22){

        return`Mivoaka mpamosavy`
    }
    
    else if(hour === 23){

        return`Mamanton'alina`
    }


}

setInterval(()=>{
    document.getElementById('current-time').textContent = time
    document.getElementById('fuzzy-ntaolo-time').textContent = ToMgTime()
}, 1000)
SearchBg()

// rendering relevant background images
// function findWord(){
//     let key = ''
//     if(hour <= 3 ){
//         key = 'night'
//     } else if(hour >= 4 && hour < 6){
//         key = 'dawn'
//     } else if(hour >=6 && hour < 11){
//         key = 'earlymorning'
//     } else if(hour === 9){
//         key ='zebu'
//     } else if(hour>= 10 && hour < 12 ){
//         key = 'morning'
//     } else if (hour > 12 && hour < 18){
//         key = 'afternoon'
//     } else if( hour === 16 && min >= 0 || hour === 17){
//         key = 'zebu'
//     } else if(hour > 18 && hour < 20){
//         key = 'sunset'
//     } else if(hour > 20 && hour < 21){
//         key = 'evning'
//     } else if( hour > 21 ){
//         key = 'night'
//     }
//     return key
// }

function SearchBg(){
    fetch(`https://api.unsplash.com/photos/random/?client_id=qQQKUM62z0GDpNtSb2o4gMFjg9gEjifKCHXmQxHp1g4&query=madagascar`)
    .then(res => res.json())
    .then(data => {
        document.body.style.backgroundImage = `URL(${data.urls.regular})`
        console.log(data.urls.raw)
        console.log(data)
    })
    .catch(err =>{
        console.error(err)
        console.log('Oops, failed to fetch background Image')
        document.body.style.backgroundImage = `URL('./photo-1484506097116-1bcba4fa7568.jpg')`

    })
}

