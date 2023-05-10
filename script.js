const emailField = document.getElementById("email-field");
const errorTxt = document.getElementById("error-txt");
const errorImg = document.getElementById("error-img");
const mailRegex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/;

emailField.addEventListener("input", (e) => {
	const emailInputValue = e.currentTarget.value;
	if (
		mailRegex.test(emailInputValue) !=
		true
	) {
		errorTxt.style.display = "flex";
		errorImg.style.display = "flex";

	} else {
		emailField.style.outline = "5px dotted hsl(149, 46%, 51%)";
		emailField.style.border = "none";
		errorTxt.style.display = "none";
		errorImg.style.display = "none";
	}
});

form.addEventListener("submit", (e) => {
	if (emailField.value.match(mailRegex)) {
		e.preventDefault();
		form.innerHTML = `<p style="font-size: 2rem; color: hsl(0, 6%, 24%);">Subscribed!</p>`;
	} else {
		e.preventDefault();
		alert("Please check your email")
	}
})

