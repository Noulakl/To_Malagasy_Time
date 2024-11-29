function ToMgTime(hour, min){
    if(hour === 0 && min <= 30){

        return `Misasakalina`

    }     
    else if(hour === 1 && min <= 30 || hour === 0 && min > 30){

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
    
    else if(hour === 18 && min < 29 ){

        return`Maty masoandro`
    }
    
    else if(hour === 18 && min >= 30){

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
const bgImage = document.getElementById('bgKly')
const currentTimeDisplay = document.getElementById('current-time')
const fuzzyTimeDisplay = document.getElementById('fuzzy-ntaolo-time')
const copywriteDisplay=document.getElementById('copy-rights')
const alinaSaAndroDisplay= document.getElementById("androSaAlina")
setInterval(()=>{
    const moment = new Date()
    const hour = moment.getHours()
    const min =  moment.getMinutes()
    const year = moment.getFullYear()
    const time = moment.toLocaleString('fr-fr', {timeStyle:'short'})
    currentTimeDisplay.textContent = time
    fuzzyTimeDisplay.textContent = ToMgTime(hour, min)

    hour >= 1 && hour <=11 ? alinaSaAndroDisplay.textContent = "Maraina" : 
    hour >= 12 && hour <=16 ? alinaSaAndroDisplay.textContent = "Atoandro" :
    hour >= 17 && hour <=19 ? alinaSaAndroDisplay.textContent = "Hariva" :
    hour >= 20 || hour === 0 ? alinaSaAndroDisplay.textContent = "Alina" : null
    
    copywriteDisplay.textContent = `© ${year} App by Nola Kely`
}, 1000)

// ftching background Images
try{
const res = await fetch(`https://api.unsplash.com/photos/random/?client_id=qQQKUM62z0GDpNtSb2o4gMFjg9gEjifKCHXmQxHp1g4&query=Madagascar`)
if(!res.ok){
    throw  new Error
}
const data= await res.json()
const imageLink = data.urls.full
const photographer = data.user.name
const description =  data.alt_description
// const location = data.location.name

bgImage.style.backgroundImage = `URL(${imageLink})`
document.getElementById('picture-description').textContent = description
document.getElementById('photographer-and-location').textContent = `By ${photographer}, ${location}`
}
catch(err){
    console.log('Oops, failed to fetch background Image. Please connect to the Internet')
    bgImage.style.backgroundImage = `URL('./photo-1484506097116-1bcba4fa7568.jpg')`
}
// fetching the weather
// try{
// const res = await fetch('http://api.accuweather.com/locations/search?q=40.79,77.86&apikey=bzfPG7OMeLSAHXiM4nGmBHpMf14Y1qxC')
// const data = await res.json()
// console.log(data)
// } catch (err){

// }
// navigator.geolocation.getCurrentPosition(position => {
//     console.log(position.coords.latitude, position.coords.longitude)})
// const star ="*"
// for(let i = 1; i < 6 ; i++){
//          console.log(`${star.repeat(i)}\n`)
//     }

