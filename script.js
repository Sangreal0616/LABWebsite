// People 링크를 클릭하면 첫 번째 항목인 전임 교수진으로 이동
document.getElementById('people-link').addEventListener('click', function (e) {
    e.preventDefault();
    document.querySelector('#faculty').scrollIntoView({
        behavior: 'smooth'
    });
});

// 각 드롭다운 항목을 클릭하면 해당 섹션으로 이동
document.querySelectorAll('.dropdown-content a').forEach(function (item) {
    item.addEventListener('click', function (e) {
        e.preventDefault();
        const target = e.target.getAttribute('href');
        document.querySelector(target).scrollIntoView({
            behavior: 'smooth'
        });
    });
});
