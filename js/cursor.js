document.addEventListener("DOMContentLoaded", function(event) {
    var cursor = document.querySelector(".custom-cursor");
    var links = document.querySelectorAll("a");
    var initCursor = false;
  
    for (var i = 0; i < links.length; i++) {
      var selfLink = links[i];
  
      selfLink.addEventListener("mouseover", function() {
        cursor.classList.add("custom-cursor--link");
      });
      selfLink.addEventListener("mouseout", function() {
        cursor.classList.remove("custom-cursor--link");
      });
    }
  
    window.onmousemove = function(e) {
      var mouseX = e.clientX;
      var mouseY = e.clientY;
  
      if (!initCursor) {
        // cursor.style.opacity = 1;
        TweenLite.to(cursor, 0.3, {
          opacity: 1
        });
        initCursor = true;
      }
  
      TweenLite.to(cursor, 0, {
        top: mouseY + "px",
        left: mouseX + "px"
      });
    };
  
    window.onmouseout = function(e) {
      TweenLite.to(cursor, 0.3, {
        opacity: 0
      });
      initCursor = false;
    };
  });

// JavaScript로 디바이스 타입 감지 및 추가 CSS 파일 동적으로 생성 및 추가
if (window.matchMedia('(min-width: 992px)').matches) {
  const desktopStyles = document.createElement('link');
  desktopStyles.rel = 'stylesheet';
  desktopStyles.href = '../css/cursor.css';
  document.head.appendChild(desktopStyles);
}