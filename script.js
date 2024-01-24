<script>
    document.addEventListener('DOMContentLoaded', function () {
        const form = document.querySelector('.form-example');
        form.addEventListener('submit', function (event) {
            const name = document.getElementById('name').value;
            const email = document.getElementById('email').value;
            const password = document.getElementById('password').value;

            if (!name || !email.includes('@') || password.length < 8) {
                alert('Please fill out the form correctly.');
                event.preventDefault(); // Prevent form submission
            }
        });
    });
</script>
