import * as cookie from 'cookie';

/** @type {import('@sveltejs/kit').Handle} */
export const handle = async ({ event, resolve }) => {
	const cookies = cookie.parse(event.request.headers.get('cookie') || '');
	event.locals.userid = cookies['userid'] || crypto.randomUUID();

	let response = await resolve(event, {

		ssr: event.url.pathname =='/operator' ? false:true  //ssr: false,///put from ssr into spa mode ssr: false,
	});

	console.log(event.url.pathname)

	if (!cookies['userid']) {
		// if this is the first time the user has visited this app,
		// set a cookie so that we recognise them when they return
		response.headers.set(
			'set-cookie',
			cookie.serialize('userid', event.locals.userid, {
				path: '/',
				httpOnly: true
			})
		);
	}

	return response;
};

// /** @type {import('@sveltejs/kit').HandleError} */
// export function handleError({ error, event }) {
// 	// example integration with https://sentry.io/
// 	Sentry.captureException(error, { event });
//   }



export async function externalFetch(request) {
	if (request.url.startsWith('https://api.yourapp.com/')) {
	  // clone the original request, but change the URL
	  request = new Request(
		request.url.replace('https://api.yourapp.com/', 'http://localhost:9999/'),
		request
	  );
	}
   
	return fetch(request);
  }
  