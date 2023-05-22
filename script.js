//your JS code here. If required.
let p = document.getElementById("status");

function change() {
	let h = document.createElement("h1");
	h.innerText = "Entered Metaverse";
	p.innerText = "";
	p.appendChild(h);
}