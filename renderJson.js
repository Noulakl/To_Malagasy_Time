fetch('./times.json')
    .then(res => res.json())
    .then (data => {
        const timeArr = data.time
        timeArr.forEach(time => {
            const {ora,Ntaolo} = time
            document.getElementById('time-list').innerHTML +=`
    <div class="time">
            <h1>${ora}</h1>
            <h1>${Ntaolo}</h1>
    </div>`
            
        });

    })

    document.body.style.backgroundImage = `URL('./photo-1484506097116-1bcba4fa7568.jpg')`
// try{
//     const res = await fetch(`https://api.unsplash.com/photos/random/?client_id=qQQKUM62z0GDpNtSb2o4gMFjg9gEjifKCHXmQxHp1g4&orientation=landscape&query=madagascar`)
//     const data = await res.json()
//     document.body.style.backgroundImage = `URL(${data.urls.raw})`
// } catch(err){
//         console.error(err)
//         console.log('Oops, failed to fetch background Image')

//     }
