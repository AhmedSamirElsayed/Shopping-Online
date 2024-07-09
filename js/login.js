const emailEle = document.getElementById("email");
const passwordEle = document.getElementById("password");
const registerBtn = document.querySelector(".btn-form");
const email_messageEle = document.querySelector(".email-message");
const password_messageEle = document.querySelector(".password-message");
const success_messageEle = document.querySelector(".success-message");
const btn1 = document.querySelector('.registerBtn');
const btn2 = document.querySelector('.loginBtn');


registerBtn.addEventListener('click', (e) => {
    e.preventDefault();
    // Validate email input
    const emailRegex = /^[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.(com|net)$/;
    if (!emailRegex.test(emailEle.value)) {
        email_messageEle.style.display = 'block';
    } else {
        email_messageEle.style.display = 'none';

        // Validate password input
        if (passwordEle.value.length < 6) {
            password_messageEle.style.display = 'block';
        } else {
            password_messageEle.style.display = 'none';

            // If all validations pass
            success_messageEle.style.display = 'block';

            // redirect page to Home page after 1s
            setTimeout(() => {
                window.location.href = "../index.html";
            }, 1000);

        }
    }
});
