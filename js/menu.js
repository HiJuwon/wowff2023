document.addEventListener('DOMContentLoaded', function () {
    var showListButton = document.getElementById('showListButton');
    var hiddenList = document.getElementById('hiddenList');
    var menuIcon = document.getElementById('menuIcon');

    var isMenuOpen = false; // 메뉴 상태를 저장하는 변수

    showListButton.addEventListener('click', function () {
        // 토글링을 통해 #hiddenList의 transform을 변경
        if (isMenuOpen) {
            hiddenList.style.transform = 'translate(-100%, 0)';
            menuIcon.src = '../img/menu.svg';
        } else {
            hiddenList.style.transform = 'translate(0%, 0)';
            menuIcon.src = '../img/menu-cancel.svg'; // 메뉴가 나올 때 이미지 변경
        }

        // 상태를 토글
        isMenuOpen = !isMenuOpen;
    });
});