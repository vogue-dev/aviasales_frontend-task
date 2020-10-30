// export const formatPrice = (price) => {
// 	return (
// 		String(price || 0)
// 			.split(/(?=(?:...)*$)/)
// 			.join(' ') + ' P'
// 	)
// }

// function sortByPrice(a: ITicket, b: ITicket) {
// 	const priceA = a.price
// 	const priceB = b.price

// 	if (priceA > priceB) {
// 		return 1
// 	}
// 	return -1
// }

// function sortByTime(a: ITicket, b: ITicket) {
// 	let timeA = 0
// 	let timeB = 0

// 	a.segments.forEach((e) => {
// 		timeA = timeA + e.duration
// 	})

// 	b.segments.forEach((e) => {
// 		timeB = timeB + e.duration
// 	})

// 	if (timeA > timeB) {
// 		return 1
// 	}
// 	return -1
// }
