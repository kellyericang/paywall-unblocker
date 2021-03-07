let hamiltonSpec = document.getElementById("hamiltonSpec");

hamiltonSpec.addEventListener("click", async () => {
	let [tab] = await chrome.tabs.query({ active: true, currentWindow: true });
	
	chrome.scripting.executeScript({
		target: { tabId: tab.id },
		function: unblockHamiltonSpec,
	});
});

function unblockHamiltonSpec() {
	console.log("Hamilton Spec button clicked!");
	if (window.location.href.search("www.thespec.com") == -1) return;
	
	try {
		let adblockPrompt = document.getElementsByClassName("fc-ab-root");
		if (adblockPrompt != undefined) adblockPrompt[0].remove();
		document.body.style.overflow = "scroll";
		console.log("adblockPrompt removed")
	} catch (e) {
		console.log(e)
	}

	try {
		let recommendations = document.getElementsByClassName("article-related-inline");
		for (i in recommendations) {
			recommendations[i].style.display = "none";
		}
		console.log("inline recommendations removed")
	} catch (e) {
		console.log(e)
	}

	try {
		let banner = document.getElementsByClassName("c-article-meter-banner");
		if (banner != undefined) banner.remove();
		console.log("end banner removed")
	} catch (e) {
		console.log(e)
	}

	try {
		let subscribePrompt = document.getElementsByClassName("basic-paywall-new");
		if (subscribePrompt != undefined) subscribePrompt[0].remove();
		let bodyText = document.getElementsByClassName("text-block-container");
		for (i in bodyText) {
			bodyText[i].style.display = "block";
		}
		console.log("subscribe prompt removed, body text shown");
	} catch (e) {
		console.log(e)
	}

}

// https://www.bloomberg.com/
// id graphics-paywall-overlay set data-status="hide"
// body set data-paywall-overlay-status="hide"
// class hub-main

let bloomberg = document.getElementById("bloomberg");

bloomberg.addEventListener("click", async () => {
	let [tab] = await chrome.tabs.query({ active: true, currentWindow: true });
	
	chrome.scripting.executeScript({
		target: { tabId: tab.id },
		function: unblockBloomberg,
	});
});

function unblockBloomberg() {
	console.log("Bloomberg button clicked!");
}

// https://www.glassdoor.ca/
// id="ContentWallHardsell" remove()
// body overflow: "scroll"

let outlook = document.getElementById("outlook");
outlook.addEventListener("click", async () => {
	let [tab] = await chrome.tabs.query({ active: true, currentWindow: true });
	
	chrome.scripting.executeScript({
		target: { tabId: tab.id },
		function: unblockOutlook,
	});
});

function unblockOutlook() {
	console.log("Outlook button clicked!");
	if (window.location.href.search("outlook.live.com") == -1) return;
	try {
		let sidebar = document.getElementsByClassName("_3_hHr3kfEhbNYRFM5YJxH9");
		if (sidebar != undefined) sidebar[0].remove();
		console.log("sidebar removed");
	} catch (e) {
		console.log(e)
	}

	try {
		let premium = document.getElementsByClassName("_2F6rWwLisyawGGg32JOcop");
		if (premium != undefined) premium[0].remove();
		console.log("premium prompt removed");
	} catch (e) {
		console.log(e)
	}
}

// https://www.nytimes.com/
// id="gateway-content" remove
// id="myAccountAuth" remove 

let narcity = document.getElementById("narcity");
narcity.addEventListener("click", async () => {
	let [tab] = await chrome.tabs.query({ active: true, currentWindow: true });
	
	chrome.scripting.executeScript({
		target: { tabId: tab.id },
		function: unblockNarcity,
	});
});

function unblockNarcity() {
	console.log("Narcity button clicked!");
	if (window.location.href.search("www.narcity.com") == -1) return;
	try {
		let overlay = document.getElementsByClassName("fc-ab-root");
		console.log(overlay)
		if (overlay != undefined) overlay[0].remove();
		console.log("overlay removed");
		document.body.style.overflow = "scroll";
	} catch (e) {
		console.log(e)
	}
}