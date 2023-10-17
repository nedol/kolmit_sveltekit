import './index-2b68e648.js';
import 'fs';
import { c as GetText, d as GetDict, R as ReadSpeech, W as WriteSpeech } from './db-53d6f8c0.js';
import 'moment';
import 'lodash';
import 'md5';
import '@vercel/postgres';
import 'nodemailer';

const config = {
  runtime: "edge"
  // isr:{
  // 	expiration: false// 10
  // }
};
async function GET({ url, fetch, cookies }) {
  const abonent = url.searchParams.get("abonent");
  const text = url.searchParams.get("text");
  const dict = url.searchParams.get("dict");
  const key = url.searchParams.get("key");
  if (text) {
    const level = url.searchParams.get("level");
    const theme = url.searchParams.get("theme");
    let text2 = await GetText({ owner: abonent, level, theme });
    let obj = { text: text2 };
    let response = new Response(JSON.stringify({ obj }));
    response.headers.append("Access-Control-Allow-Origin", `*`);
    return response;
  } else if (dict) {
    const level = url.searchParams.get("level");
    const theme = url.searchParams.get("theme");
    let data = await GetDict({ owner: abonent, type: dict, level, theme });
    if (data) {
      let response = new Response(JSON.stringify({ data }));
      response.headers.append("Access-Control-Allow-Origin", `*`);
      return response;
    }
  } else if (key) {
    const audio = await ReadSpeech({ key });
    let response = new Response(JSON.stringify({ audio }));
    response.headers.append("Access-Control-Allow-Origin", `*`);
    return response;
  }
}
async function POST({ request, url, fetch }) {
  const { voice } = await request.json();
  voice["admin"];
  let key = voice["key"];
  let data = voice["data"];
  WriteSpeech({ admin: "admin", key, data });
  return new Response("Successfully post file");
}

export { GET, POST, config };
//# sourceMappingURL=_server-26f0a75f.js.map
