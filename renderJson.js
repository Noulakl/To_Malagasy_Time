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

    fetch(`https://api.unsplash.com/photos/random/?client_id=qQQKUM62z0GDpNtSb2o4gMFjg9gEjifKCHXmQxHp1g4&query=madagascar`)
    .then(res => res.json())
    .then(data => {
        document.body.style.backgroundImage = `URL(${data.urls.raw})`
    })
    .catch(err =>{
        console.error(err)
        console.log('Oops, failed to fetch background Image')
        document.body.style.backgroundImage = `URL('https://images.unsplash.com/photo-1562808135-972c1c7f2a70?ixid=M3w2NDI5Mjl8MHwxfHJhbmRvbXx8fHx8fHx8fDE3MjM0NjY5ODl8&ixlib=rb-4.0.3')`

    })
