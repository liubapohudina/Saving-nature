const bgSky = document.getElementById('bg-sky')
const bgTrees = document.getElementById('bg-tree')
const mainText = document.getElementById('main-text')

window.addEventListener('scroll', () => {
    let value = window.scrollY;
    bgSky.style.top = value * 0.7 + 'px';
    bgTrees.style.bottom = -value * 2 + 'px';
    mainText.style.top = value * 1 + 'px';
})