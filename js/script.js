let password = document.querySelector("#password");
let conf = document.querySelector("#password_conf");
let submitBtn = document.querySelector("#submit");
let error = document.querySelectorAll(".error");

// password.addEventListener("focus", function () {
// 	console.log(password);
// });

conf.addEventListener("focus", function () {
	conf.addEventListener("keyup", function () {
		checkIn(password, conf);
	});
});

function checkIn(pass1, pass2) {
	if (pass1.value != pass2.value) {
		pass1.style.cssText = "box-shadow: 1px 2px 2px red;";
		pass2.style.cssText = "box-shadow: 1px 2px 2px red;";
	} else {
		pass1.style.cssText = "box-shadow: 1px 2px 2px green;";
		pass2.style.cssText = "box-shadow: 1px 2px 2px green;";
	}
}
