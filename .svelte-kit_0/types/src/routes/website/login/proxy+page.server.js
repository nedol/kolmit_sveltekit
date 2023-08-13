// @ts-nocheck

import { error } from '@sveltejs/kit';
import { pool } from '$lib/db/mysql';
import md5 from 'md5'

/** @param {Parameters<import('./$types').Action>[0]} event */
export async function POST({ request, setHeaders, url }) {
	const values = await request.formData();

	const email = /** @type {string} */ (values.get('email'));
	const psw = /** @type {string} */ (values.get('password'));
	const lang = /** @type {string} */ (values.get('lang'));
  
	const vals = [md5(psw), email,email];
	const sql = "SELECT * FROM operators WHERE psw=? AND operator=? AND abonent=?";
	try{
		const pr = pool.execute(sql, vals)

		const [rows, fields] = await pr;

		
		console.log(psw)

		let path  = '/operator?operator='+email+"&abonent="+email

		// if (rows.length == 0) {
		// 	path = '/'
		return {
			status: 403,
			location: url.searchParams.get('redirectTo') ?? path,
			errors: {
			username: 'No user with this username'
			}
		};
		//}

		const session = md5(email);

		setHeaders({
		'set-cookie': email+'='+JSON.stringify({session:session,email:email,abonent:email,psw:md5(psw),lang:lang}),
		});
		

		return {
			location: url.searchParams.get('redirectTo') ?? path
		};

	}catch(ex){
		
	}

}
	// if (user.password !== hash(password)) {
	//   return {
	// 	status: 403,
	// 	errors: {
	// 	  password: 'Incorrect password'
	// 	}
	//   };
	// }
   
	// setHeaders({
	//   'set-cookie': createSessionCookie(user.id)
	// });
   

  

