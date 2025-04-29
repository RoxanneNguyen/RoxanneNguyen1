const showMoreBtn = document.getElementById('showMoreBtn');
const moreContent = document.getElementById('moreContent');

showMoreBtn.addEventListener('click', () => {
    if (moreContent.classList.contains('hidden')) {
        moreContent.classList.remove('hidden');
        showMoreBtn.textContent = "Show Less";
    } else {
        moreContent.classList.add('hidden');
        showMoreBtn.textContent = "Show More";
    }
});
