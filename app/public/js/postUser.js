const registerButton = document.getElementById('registerButton');

registerButton.addEventListener('click', async () => {
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;
    let isValid = true;

    if (!name.trim()) {
        isValid = false;
        document.getElementById('nameError').textContent = 'El nombre es obligatorio';
    } else {
        document.getElementById('nameError').textContent = '';
    }

    if (!email.trim() || !isValidEmail(email)) {
        isValid = false;
        document.getElementById('emailError').textContent = 'Ingrese un correo electrónico válido';
    } else {
        document.getElementById('emailError').textContent = '';
    }

    if (!password.trim()) {
        isValid = false;
        document.getElementById('passwordError').textContent = 'La contraseña es obligatoria';
    } else {
        document.getElementById('passwordError').textContent = '';
    }

    if(isValid){
        const data = {
            name: name,
            email: email,
            password: password
        };
        try {
            const response = await fetch('/auth/register', {
              method: 'POST',
              headers: {
                'Content-Type': 'application/json'
              },
              body: JSON.stringify(data)
            });
    
            if (response.ok) {
                const responseData = await response.json();
                console.log(responseData.message);
                console.log(responseData.data); 
            } else {
                const responseData = await response.json();
                console.error('Error al registrar usuario');
                console.log(responseData.message);
            }
        } catch (error) {
            console.error('Error de conexión:', error);
        }
    }
});

function isValidEmail(email) {
    const emailPattern = /\S+@\S+\.\S+/;
    return emailPattern.test(email);
}