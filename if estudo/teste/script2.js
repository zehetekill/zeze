document.getElementById('search-input').addEventListener('input', function () {
    const query = this.value.toLowerCase();
    const links = document.querySelectorAll('.links li');

    links.forEach(link => {
        const text = link.textContent.toLowerCase();
        link.style.display = text.includes(query) ? 'block' : 'none';
    });
});
