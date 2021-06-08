

export async function get(request) {
	try {
		const completed = request.query.get('completed') === 'true';

		return {
			status: 200,
			body: {
				completed: completed
			}
		};
	} 

