
export function GET({params}){

	return  {
		status: 303,
		headers: {
		    location: '/user',//`/items/${item.id}`
			// 'set-cookie':
			// __vite_ssr_import_1__.serialize(
			// 	'kolmit', JSON.stringify({email:user.email,psw:user.psw}), 
			// {
			// 	path: '/',
			// 	httpOnly: true
			// })
		}
	}

};