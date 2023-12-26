document.addEventListener('DOMContentLoaded', function () {
    const fadeElements = document.querySelectorAll('.fade-in');
    const firstDiv = document.getElementById('first-div'); // 첫 번째 div의 id 선택자
  
    window.addEventListener('scroll', function () {
      fadeElements.forEach((targetDiv) => {
        const targetRect = targetDiv.getBoundingClientRect();
        const windowHeight = window.innerHeight;
  
        // Check if the target div is in the viewport
        const isTargetVisible = targetDiv === firstDiv || (targetRect.top < windowHeight * 0.8 && targetRect.bottom > 0);
  
        // Check if the target div is already visible
        const isTargetAlreadyVisible = targetDiv.classList.contains('show');
  
        if (isTargetVisible && !isTargetAlreadyVisible) {
          targetDiv.classList.add('show');
        } else if (!isTargetVisible && isTargetAlreadyVisible) {
          targetDiv.classList.remove('show');
        }
      });
    });
  
    // 첫 번째 div에 대해 초기 상태 적용
    firstDiv.classList.add('show');
  
    // 첫 번째 div가 화면을 벗어나면 다시 초기 상태로 변경
    window.addEventListener('scroll', function () {
      const firstDivRect = firstDiv.getBoundingClientRect();
      const windowHeight = window.innerHeight;
      const isFirstDivVisible = firstDivRect.top < windowHeight && firstDivRect.bottom > 0;
  
      if (!isFirstDivVisible) {
        firstDiv.classList.remove('show');
      }
    });
  });
  