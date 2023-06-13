let grid;

window.addEventListener('load', () => {
	grid = new Isotope('#protfolios', {
		itemSelector: 'article',
		columnWidth: 'article',
		transitionDuration: '0.5s',
	});
	hashchange();
});

window.addEventListener('hashchange', hashchange);

function hashchange() {
	const currentHash = location.hash;
	const filter = currentHash.replace('#', '.');
	grid.arrange({
		filter,
	});

	const btns = document.querySelectorAll('#filters li');
	for (let el of btns) {
		const href = el.querySelector('a').getAttribute('href');

		if (href === currentHash) {
			el.classList.add('on');
		} else {
			el.classList.remove('on');
		}
	}
}
