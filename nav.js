const openMenu = () => {
    const backdropElement = document.querySelector('.backdrop'); 
    backdropElement.className = 'backdrop active';
    backdropElement.style = 'display:flex';
    document.querySelector('aside').className = 'active';
}

const closeMenu = () => {
    const backdropElement = document.querySelector('.backdrop');
    backdropElement.className = 'backdrop';
    backdropElement.style = 'display:none'; 
    document.querySelector('aside').className = '';
    
}

document.getElementById('menuBtn').onclick = e => {
    e.preventDefault();
    openMenu();
}

document.querySelector('aside button.close').onclick = e => {
    closeMenu();
}

document.querySelector('.backdrop').onclick = e => {
    closeMenu();
}
