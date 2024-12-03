<script>
    document.addEventListener("DOMContentLoaded", function () {
        const submenus = document.querySelectorAll(".has-submenu > a");

        submenus.forEach(menu => {
            menu.addEventListener("click", function (event) {
                event.preventDefault();
                const submenu = this.nextElementSibling;
                submenu.style.display = submenu.style.display === "block" ? "none" : "block";
            });
        });
    });
</script>

/*图片轮播*/
document.addEventListener('DOMContentLoaded', function() {
    let slideIndex = 0;
    const slides = document.getElementsByClassName("carousel-slide");
    const dots = document.getElementsByClassName("dot");

    // 初始化显示第一张图片
    showSlides(slideIndex);

    // 设置自动播放
    let autoPlayInterval = setInterval(function() {
        plusSlides(1);
    }, 3000);

    // 显示指定索引的图片
    function showSlides(n) {
        if (n >= slides.length) {slideIndex = 0}
        if (n < 0) {slideIndex = slides.length - 1}

        // 隐藏所有图片
        for (let i = 0; i < slides.length; i++) {
            slides[i].style.display = "none";
            dots[i]?.classList.remove("active-dot");  // 使用 classList 进行类名操作
        }

        // 显示当前图片
        slides[slideIndex].style.display = "block";
        dots[slideIndex]?.classList.add("active-dot");  // 使用 classList 进行类名操作
    }

    // 切换到下一张/上一张图片
    function plusSlides(n) {
        showSlides(slideIndex += n);
    }

    // 切换到指定图片
    function currentSlide(n) {
        showSlides(slideIndex = n);
    }

    // 为前后按钮添加点击事件
    const prevButton = document.querySelector('.carousel-prev');
    const nextButton = document.querySelector('.carousel-next');

    const restartAutoPlay = () => {
        clearInterval(autoPlayInterval);  // 停止自动播放
        autoPlayInterval = setInterval(function() {  // 重新启动自动播放
            plusSlides(1);
        }, 3000);
    };

    if (prevButton) {
        prevButton.addEventListener('click', function() {
            plusSlides(-1);
            restartAutoPlay();
        });
    }

    if (nextButton) {
        nextButton.addEventListener('click', function() {
            plusSlides(1);
            restartAutoPlay();
        });
    }

    // 为指示点添加点击事件
    for (let i = 0; i < dots.length; i++) {
        dots[i].addEventListener('click', function() {
            currentSlide(i);
            restartAutoPlay();
        });
    }

    // 鼠标悬停时暂停自动播放
    const carouselContainer = document.querySelector('.carousel-container');
    if (carouselContainer) {
        carouselContainer.addEventListener('mouseenter', function() {
            clearInterval(autoPlayInterval);
        });

        carouselContainer.addEventListener('mouseleave', function() {
            restartAutoPlay();
        });
    }
});
