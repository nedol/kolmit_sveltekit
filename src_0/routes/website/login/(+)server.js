import { error } from '@sveltejs/kit';
import { pool } from '$lib/db/mysql';
import md5 from 'md5'


/** @type {import('./$types').Action} */
export async function POST({ params,request,url,setHeaders }) {

	const values = await request.json().then((data) => {
		// do something with the formdata sent in the request
		return data.par;
	})

	const vals = [md5(values.psw), values.send_mail,values.send_mail];
	const sql = "SELECT * FROM operators WHERE psw=? AND operator=? AND abonent=?";
	let err = '';
	let headers = '';
	let location = '/'
  
	const pr = pool.query(sql, vals)

	const [rows, fields] = await pr;

	if(rows.length>0){
		location = "/operator?operator=" + values.send_mail +"&abonent=" + values.send_mail
	}

	// const session = md5(email);

	// setHeaders({
	//   'set-cookie': 'kolmit='+JSON.stringify({session:session,email:values.send_mail,psw:md5(values.psw)}),
	// });
	
	
	return new Response( JSON.stringify({rows:rows,fields:fields,err:err,location:location}));

}

  

