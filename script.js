document.addEventListener('DOMContentLoaded', () => {
    const topHeart = document.getElementById('top-heart');
    const orderHeart = document.getElementById('order-heart');
    const likesCounter = document.getElementById('likes');
    let likes = 0;

    function updateLikes() {
        likes++;
        likesCounter.textContent = likes;
    }

    function changeColor(element) {
        element.style.color = 'rgb(255, 167, 181)';
    }

    topHeart.addEventListener('click', () => {
        updateLikes();
        changeColor(topHeart);
    });

    orderHeart.addEventListener('click', () => {
        updateLikes();
        changeColor(orderHeart);
    });
});




document.addEventListener("DOMContentLoaded", () => {
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add("show");
            }
        });
    }, { threshold: 0.3 }); // Trigger when 30% of the element is visible

    document.querySelectorAll('.part2').forEach(el => observer.observe(el));
});
