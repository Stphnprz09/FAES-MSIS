function calculateTotal(row) {
    const inputs = row.querySelectorAll('input[type="number"]');
    let total = 0;
    inputs.forEach(input => {
        total += parseInt(input.value) || 0;
    });
    row.querySelector('.total').textContent = total;
}

function attachInputListeners() {
    const rows = document.querySelectorAll('tbody tr');
    rows.forEach(row => {
        const inputs = row.querySelectorAll('input[type="number"]');
        inputs.forEach(input => {
            input.addEventListener('input', () => calculateTotal(row));
        });
    });
}

document.addEventListener('DOMContentLoaded', attachInputListeners);