$(function(){
    $(document).ready(function(){        
        $("#popup-title").css('display','flex').hide().fadeIn();
        //팝업을 flex속성으로 바꿔준 후 hide()로 숨기고 다시 fadeIn()으로 효과
    });
    $("#close-title").click(function(){
        modalClose(); //모달 닫기 함수 호출
    });
    function modalClose(){
        $("#popup-title").fadeOut(function() {
            // 모달이 완전히 닫힌 후 실행되는 콜백 함수
            // #sm-WFF 블록의 top 값을 50%로 변경
            $('#sm-WFF').css('top', '50%');
        });
    }
});

// 페이지 로드 후 실행되는 jQuery 코드
$(document).ready(function() {
    // 화면 가로폭이 특정 크기보다 작아지면 이미지 변경 함수 호출
    checkScreenWidth();
    
    // 창 크기가 변경될 때 이미지 변경 함수 호출
    $(window).resize(function() {
        checkScreenWidth();
    });
});

// 화면 가로폭에 따라 이미지를 변경하는 함수
function checkScreenWidth() {
    // 현재 화면의 가로폭을 가져옴
    var screenWidth = $(window).width();

    // 특정 가로폭 이하일 때 이미지 변경
    if (screenWidth < 768) {
        $('#responsiveImage').attr('src', 'img/timetable_mobile.svg');
    } else {
        // 기본 이미지로 복원
        $('#responsiveImage').attr('src', 'img/timetable_default.svg');
    }
}