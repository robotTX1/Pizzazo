async function fetchData(url, func) {
	const response = await fetch(url);
	const data = await response.json();
	func(data);
}
