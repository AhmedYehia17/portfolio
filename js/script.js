document.getElementById('menu-btn').addEventListener('click', function() {
    var menu = document.getElementById('menu');
    if (menu.style.display === 'none' || menu.style.display === '') {
        menu.style.display = 'flex';
        menu.style.right = 0;
    } else {
        menu.style.display = 'none';
    }
});