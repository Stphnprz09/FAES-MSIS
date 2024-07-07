document.addEventListener('DOMContentLoaded', function() {
    const yearDropdown = document.getElementById('year-dropdown');
    const monthDropdown = document.getElementById('month-dropdown');
    const todayButton = document.getElementById('today-button');
    const calendar = document.getElementById('calendar');
    const modal = document.getElementById('holidayModal');
    const span = document.getElementsByClassName('close')[0];
    const holidayDescription = document.getElementById('holidayDescription');

    const today = new Date();
    const currentYear = today.getFullYear();
    const currentMonth = today.getMonth();
    const currentDate = today.getDate();

    // List of holidays
    const holidays = [
        { date: '01-01', name: 'New Year\'s Day' },
        { date: '04-09', name: 'Araw ng Kagitingan' },
        { date: '05-01', name: 'Labor Day' },
        { date: '06-12', name: 'Independence Day' },
        { date: '08-21', name: 'Ninoy Aquino Day' },
        { date: '11-01', name: 'All Saints\' Day' },
        { date: '12-25', name: 'Christmas Day' },
        { date: '12-30', name: 'Rizal Day' }
        // add more holidays
    ];

    // Populate year dropdown
    for (let year = currentYear - 24; year <= currentYear; year++) {
        const option = document.createElement('option');
        option.value = year;
        option.textContent = year;
        if (year === currentYear) {
            option.selected = true;
        }
        yearDropdown.appendChild(option);
    }

    // Populate month dropdown
    const months = [
        'January', 'February', 'March', 'April', 'May', 'June',
        'July', 'August', 'September', 'October', 'November', 'December'
    ];
    months.forEach((month, index) => {
        const option = document.createElement('option');
        option.value = index;
        option.textContent = month;
        if (index === currentMonth) {
            option.selected = true;
        }
        monthDropdown.appendChild(option);
    });

    // Generate calendar
    function generateCalendar(year, month) {
        calendar.innerHTML = '';
        
        const firstDayOfMonth = new Date(year, month, 1).getDay();
        const daysInMonth = new Date(year, month + 1, 0).getDate();
        
        const daysOfWeek = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];
        
        // Add day headers
        daysOfWeek.forEach((day, index) => {
            const dayHeader = document.createElement('div');
            dayHeader.textContent = day;
            dayHeader.classList.add('day', 'day-header');
            if (index === 0) dayHeader.classList.add('sunday');
            if (index === 6) dayHeader.classList.add('saturday');
            calendar.appendChild(dayHeader);
        });
        
        // Add blank days for the first week
        for (let i = 0; i < firstDayOfMonth; i++) {
            const blankDay = document.createElement('div');
            blankDay.classList.add('day');
            calendar.appendChild(blankDay);
        }
        
        // Add days of the month
        for (let day = 1; day <= daysInMonth; day++) {
            const dayCell = document.createElement('div');
            dayCell.textContent = day;
            dayCell.classList.add('day');
            const dayOfWeek = (firstDayOfMonth + day - 1) % 7;
            if (dayOfWeek === 0) dayCell.classList.add('sunday');
            if (dayOfWeek === 6) dayCell.classList.add('saturday');
            if (year === currentYear && month === currentMonth && day === currentDate) {
                dayCell.classList.add('today');
            }

            // check if theres holiday
            const formattedDate = `${String(month + 1).padStart(2, '0')}-${String(day).padStart(2, '0')}`;
            const holiday = holidays.find(h => h.date === formattedDate);
            if (holiday) {
                dayCell.classList.add('holiday');
                dayCell.title = holiday.name;
                dayCell.addEventListener('click', () => {
                    holidayDescription.textContent = `Holiday: ${holiday.name}`;
                    modal.style.display = 'block';
                });
            }

            calendar.appendChild(dayCell);
        }
    }

    // Event listeners
    yearDropdown.addEventListener('change', () => {
        generateCalendar(parseInt(yearDropdown.value), parseInt(monthDropdown.value));
    });

    monthDropdown.addEventListener('change', () => {
        generateCalendar(parseInt(yearDropdown.value), parseInt(monthDropdown.value));
    });

    todayButton.addEventListener('click', () => {
        yearDropdown.value = currentYear;
        monthDropdown.value = currentMonth;
        generateCalendar(currentYear, currentMonth);
    });

    // Close modal
    span.onclick = function() {
        modal.style.display = 'none';
    };

    window.onclick = function(event) {
        if (event.target == modal) {
            modal.style.display = 'none';
        }
    };

    // Initial calendar generation
    generateCalendar(currentYear, currentMonth);
});
