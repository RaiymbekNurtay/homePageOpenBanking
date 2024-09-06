document.addEventListener("DOMContentLoaded", function(event) {
    const showNavbar = (toggleId, navId, bodyId, headerId, mainId) => {
        const toggle = document.getElementById(toggleId),
              nav = document.getElementById(navId),
              bodypd = document.getElementById(bodyId),
              headerpd = document.getElementById(headerId),
              main = document.getElementById(mainId); // Add this line
        
        if (toggle && nav && bodypd && headerpd && main) {
            toggle.addEventListener('click', () => {
                nav.classList.toggle('show');
                bodypd.classList.toggle('body-pd');
                headerpd.classList.toggle('body-pd');
                main.classList.toggle('blur-layer'); // Add this line
                if (toggleId === 'header-toggle') {
                    toggle.classList.toggle('bx-x');
                }
            });
        }
    };

    const handleNavbarToggle = () => {
        const isMobile = window.matchMedia("(max-width: 768px)").matches;

        if (isMobile) {
            showNavbar('header-toggle', 'nav-bar', 'body-pd', 'header', 'main'); 
            document.getElementById('logo-toggle').removeEventListener('click', toggleLogoNav);
        } else {
            showNavbar('logo-toggle', 'nav-bar', 'body-pd', 'header', 'main'); 
            document.getElementById('header-toggle').removeEventListener('click', toggleBurgerNav);
        }
    };

    const toggleBurgerNav = () => {
        document.getElementById('header-toggle').click();
    };

    const toggleLogoNav = () => {
        document.getElementById('logo-toggle').click();
    };

    window.addEventListener('resize', handleNavbarToggle);
    handleNavbarToggle();

    /*===== LINK ACTIVE =====*/
    const linkColor = document.querySelectorAll('.nav_link');

    function colorLink() {
        if (linkColor) {
            linkColor.forEach(l => l.classList.remove('active'));
            this.classList.add('active');
        }
    }

    linkColor.forEach(l => l.addEventListener('click', colorLink));
});


// CHART

document.addEventListener('DOMContentLoaded', function () {
    const ctx = document.getElementById('cashflowChart').getContext('2d');
    const cashflowChart = new Chart(ctx, {
        type: 'line',
        data: {
            labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'],
            datasets: [{
                label: 'Cashflow',
                data: [30, 40, 35, 64, 45, 50, 20, 60, 50, 65, 55, 60],
                borderColor: '#0052cc',
                backgroundColor: 'rgba(0, 82, 204, 0.1)',
                fill: true,
                tension: 0.4,
                pointRadius: 5,
                pointBackgroundColor: '#0052cc'
            }]
        },
        options: {
            responsive: true,
            maintainAspectRatio: false,
            plugins: {
                legend: {
                    display: false
                },
                tooltip: {
                    callbacks: {
                        label: function(context) {
                            return context.parsed.y;
                        }
                    }
                }
            },
            scales: {
                x: {
                    grid: {
                        display: false
                    }
                },
                y: {
                    beginAtZero: true,
                    max: 100,
                    grid: {
                        color: '#f0f0f0'
                    }
                }
            }
        }
    });
});