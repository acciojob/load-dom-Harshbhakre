document.addEventListener("DOMContentLoaded",()=>{
	let msg = document.createElement("p")
	msg.innerHTML = "DOM load success"
	document.querySelector("body").appendChild(msg)
})