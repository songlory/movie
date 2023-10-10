const sidebar = document.getElementById("sidebar");
const showNavbarTrigger = document.getElementById("show-navbar-trigger");

window.addEventListener("scroll", function() {
    const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
    const triggerOffsetTop = showNavbarTrigger.offsetTop;

    if (scrollTop >= triggerOffsetTop) {
        sidebar.style.transform = "translateY(0)"; // 显示导航栏
    } else {
        sidebar.style.transform = "translateY(-100%)"; // 隐藏导航栏
    }
});