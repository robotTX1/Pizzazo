const content = document.querySelector('.content-holder');
const modal = document.getElementById('descriptionModal');

function renderPizzas(data) {
	console.log(data);
	content.innerHTML = data
		.map((item) => {
			return `
				<div id=${item.id} class="item bg-light text-center m-1">
					<img class="img img-fluid" src="images/${item.img_url}" alt="" />
					<h5 class="m-2">${item.name}</h5>
					<button class="details-btn" onClick="showModal(this)">Részletek</button>
				</div>
		`;
		})
		.join('');
}

fetchData('../server/getAllPizzas.php', renderPizzas);

async function showModal(obj) {
	modal.querySelector('.modal-title').innerText =
		obj.parentElement.querySelector('h5').innerText;

	const table = modal.querySelector('tbody');
	table.innerHTML = '';

	await fetchData(
		'../server/getPizzaDetailsById.php?id=' + obj.parentElement.id,
		(data) => {
			console.log(data);
			table.innerHTML += data
				.map(
					(item) =>
						`<tr>
						<td>${item.size}</td>
						<td>${item.price}</td>
					</tr>`
				)
				.join('');
		}
	);

	$('#descriptionModal').modal('show', true);
}
