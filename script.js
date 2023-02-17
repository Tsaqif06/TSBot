const question = document.querySelector("#question");
const input = document.querySelector("#input");
const submit = document.querySelector("#submit");

const quest = ["Berapa Umur Kamu?", "Hobi Kamu Apa?", "Kamu Udah Punya Pacar Belum?"];

let i = 0;

input.addEventListener("keydown", (e) => {
	if (e.key == "Enter") {
		submit.click();
	}
});

submit.addEventListener("click", (e) => {
	i++;
	const value = input.value;
	switch (i) {
		case 1:
			question.innerHTML = `Hai ${value}, ${quest[i - 1]}`;
			break;
		case 2:
			question.innerHTML = `Oh Umur ${value}, ${quest[i - 1]}`;
			break;
		case 3:
			question.innerHTML = `Sama Dong Hobi Aku Juga ${value}, ${quest[i - 1]}`;
			break;
		case 4:
			question.innerHTML = `Sama Dong Hobi Aku Juga ${value}, ${quest[i - 1]}`;
			break;
	}
});
