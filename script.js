const emailInput = document.getElementById('emailInput');
const submitBtn = document.getElementById('submitBtn');
const error = document.querySelector('.error');

submitBtn.addEventListener('click', checkEmail);

function checkEmail(e) {
	e.preventDefault();
	const email = emailInput.value;
	const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
	const valid = re.test(String(email).toLowerCase());
	displayOrHideError(valid);
}

function displayOrHideError(valid) {
	valid ? error.classList.add('hidden') : error.classList.remove('hidden');
}

//on Load
error.classList.add('hidden');
