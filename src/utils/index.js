import add from 'date-fns/add';
import format from 'date-fns/format';

// функция расчета времени вылета / приземления в формате ЧЧ:ММ
function getFlyingTime(seconds) {
	const hours = (seconds / 3600) ^ 0;
	const minutes = ((seconds - hours * 3600) / 60) ^ 0;

	const str = `${hours === 0 ? '' : hours < 10 ? '0' + hours + 'ч' : hours + 'ч'} ${
		minutes === 0 ? '' : minutes < 10 ? '0' + minutes + ' м' : minutes + ' м'
	}`;

	return str;
}

// функция перевода времени "В ПУТИ" в сек.
function getTimeOnFly(date, second) {
	var result = add(new Date(date), {
		seconds: second,
	});

	return `${format(new Date(date), 'HH:mm')} - ${format(new Date(result), 'HH:mm')}`;
}

// устанавливаем правильное окончание для n-го количества остановок в билете
function stopsCaseEndings(number) {
	switch (number) {
		case 0:
			return 'Без пересадок';
		case 1:
			return '1 пересадка';
		case 2:
			return '2 пересадки';
		case 3:
			return '3 пересадки';

		default:
			return `${number} пересадки`;
	}
}

// функция сортировки билетов по цене от меньшего к большему
function sortByPrice(a, b) {
	const priceA = a.price;
	const priceB = b.price;

	if (priceA > priceB) {
		return 1;
	}
	return -1;
}

// функция сортировки билетов по времени полета от меньшего к большему

function sortByTime(tickets_1, ticket_2) {
	// I вариант ( для сортировки по одному направлениям билета (ТУДА)
	return tickets_1.segments[0].duration - ticket_2.segments[0].duration;

	// II вариант ( для сортировки по двум направлениям билета (ТУДА - ОБРАТНО))
	// 	let timeA = 0;
	// 	let timeB = 0;

	// 	a.segments.forEach((e) => {
	// 		timeA = timeA + e.duration;
	// 	});
	// 	b.segments.forEach((e) => {
	// 		timeB = timeB + e.duration;
	// 	});
	// 	if (a.segments.duration > b.segments.duration) {
	// 		return 1;
	// 	}
	// 	return -1;
}

// добавляем приставку Р в конце цены, отделяем тысячные доли пробелом
function getPrettyPrice(price) {
	// I вариант
	return `${price.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ' ')} Р`;

	// II вариант
	// return `${price.toLocaleString('ru-RU', {
	// 	style: 'decimal',
	// 	currency: 'RUB',
	// })} Р`;
}

// функция записи данных в локальное хранилище по ключу
const setToLocalStorage = (key, value) => {
	localStorage.setItem(key, JSON.stringify(value));
};

// функция получения данных из локального хранилища по ключу
const getInitFromLocalStorage = (key, data) => {
	const str = localStorage.getItem(key);
	if (!str) {
		return data;
	}
	return JSON.parse(str || '');
};

export {
	getFlyingTime,
	getTimeOnFly,
	stopsCaseEndings,
	sortByPrice,
	sortByTime,
	getPrettyPrice,
	getInitFromLocalStorage,
	setToLocalStorage,
};
