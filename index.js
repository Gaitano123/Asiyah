document.addEventListener('DOMContentLoaded', () => {
    const PopIn = document.getElementById('view_video')
    PopIn.addEventListener('click', (e) =>{
        e.preventDefault();
        document.getElementById('popup').classList.remove('hide')
    })

    const popOut = document.getElementById('clossing')
    popOut.addEventListener('click', (e) =>{
        e.preventDefault();
        document.getElementById('popup').classList.add('hide')
    })

    const form = document.getElementById('about_me')
    form.addEventListener('submit', (e) => {
        e.preventDefault();
    })
})