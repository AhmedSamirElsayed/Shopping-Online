const nameEle = document.getElementById("name");
const emailEle = document.getElementById("email");
const passwordEle = document.getElementById("password");
const registerBtn = document.querySelector(".btn-form");
const name_messageEle = document.querySelector(".name-message");
const email_messageEle = document.querySelector(".email-message");
const password_messageEle = document.querySelector(".password-message");
const success_messageEle = document.querySelector(".success-message");

registerBtn.addEventListener('click', () => {
    // Validate name input
    if (nameEle.value == '' || nameEle.value.length <= 3) {
        name_messageEle.style.display = 'block';

    } else {
        name_messageEle.style.display = 'none';
        email_messageEle.style.display = 'block';
        password_messageEle.style.display = 'block';



        // Validate email input
        const emailRegex = /^[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.(com|net)$/;
        if (!emailRegex.test(emailEle.value)) {
            email_messageEle.style.display = 'block';
            password_messageEle.style.display = 'block';


        } else {
            email_messageEle.style.display = 'none';


            // Validate password input
            if (passwordEle.value.length < 6) {
                password_messageEle.style.display = 'block';

            } else {
                password_messageEle.style.display = 'none';

                // If all validations pass
                success_messageEle.style.display = 'block';

                // redirect page to login page after 1s
                setTimeout(() => {
                    window.location.href = '../html/login.html';
                }, 1000);

            }
        }
    }
});
