document.getElementById('resolution-select').addEventListener('change', function () {
    const image = document.getElementById('selected-image');
    const heartContainer = document.getElementById('heart-container');
    const selectedValue = this.value;

    if (selectedValue === '240p') {
        image.src = '240px.png';
        image.style.display = 'block';
        heartContainer.style.display = 'none';
    } else if (selectedValue === '360p') {
        image.src = '360px.png';
        image.style.display = 'block';
        heartContainer.style.display = 'none';
    } else if (selectedValue === '480p') {
        image.src = '480px.png';
        image.style.display = 'block';
        heartContainer.style.display = 'none';
    } else if (selectedValue === '720p') {
        image.src = '720px.png';
        image.style.display = 'block';
        heartContainer.style.display = 'none';
    } else if (selectedValue === '1080p') {
        image.src = '1080px.jpg';
        image.style.display = 'block';
        heartContainer.style.display = 'block';

        // Tạo hiệu ứng trái tim bay
        for (let i = 0; i < 20; i++) {
            const heart = document.createElement('div');
            heart.classList.add('heart');
            heart.style.left = Math.random() * 100 + 'vw';
            heart.style.animationDuration = Math.random() * 2 + 3 + 's';
            heartContainer.appendChild(heart);

            // Xóa trái tim sau khi hoàn tất hoạt ảnh
            heart.addEventListener('animationend', function() {
                heart.remove();
            });
        }
    } else {
        image.style.display = 'none';
        heartContainer.style.display = 'none';
    }
});
