document.addEventListener('input', function (e) {
    if (e.target.classList.contains('grade-input')) {
        const row = e.target.closest('tr');
        const gradeInputs = row.querySelectorAll('.grade-input');
        let total = 0;
        gradeInputs.forEach(input => {
            total += parseFloat(input.value) || 0;
        });
        const finalGrade = row.querySelector('.final-grade');
        finalGrade.value = (total / gradeInputs.length).toFixed(2);
    }
});