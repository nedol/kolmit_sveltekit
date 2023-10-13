import { c as create_ssr_component, a as subscribe, e as escape, f as each, v as validate_component, d as add_attribute } from "../../../../chunks/ssr.js";
import md5 from "md5";
import translate from "translate";
import { l as langs, o as operatorst } from "../../../../chunks/stores2.js";
let path = "";
const Word_svelte_svelte_type_style_lang = "";
const css$2 = {
  code: "sup.trans.svelte-1caqcag{visibility:hidden;position:absolute;width:100px;top:0.6px;color:darkblue;background-color:whitesmoke}span.a.svelte-1caqcag{display:inline;color:red;position:relative;padding:1px}",
  map: null
};
const Word = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $langs, $$unsubscribe_langs;
  $$unsubscribe_langs = subscribe(langs, (value) => $langs = value);
  let { text, woorden } = $$props;
  let trans = "trans";
  translate.from = "nl";
  translate.engine = "google";
  async function Translate(text2) {
    for (const key of Object.keys(woorden)) {
      if (text2.toLowerCase().includes(`${key}`) && woorden[key][$langs]) {
        trans = woorden[key][$langs];
        return;
      }
    }
    trans = await translate(text2.trim().toLowerCase(), $langs);
  }
  if ($$props.text === void 0 && $$bindings.text && text !== void 0)
    $$bindings.text(text);
  if ($$props.woorden === void 0 && $$bindings.woorden && woorden !== void 0)
    $$bindings.woorden(woorden);
  $$result.css.add(css$2);
  {
    if ($langs && text) {
      Translate(text);
    }
  }
  $$unsubscribe_langs();
  return ` <span class="a svelte-1caqcag"><sup class="trans svelte-1caqcag">${escape(trans)}</sup>${escape(text)}</span> `;
});
const Sentence = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { text } = $$props;
  let textAr, keys;
  let woorden, focus;
  fetch("/operator/lesson?path=woorden.1_2.json").then((response) => response.json()).then((data) => {
    woorden = JSON.parse(data.data);
  }).catch(
    (error) => {
      console.log(
        error
      );
      return [];
    }
  );
  function isInWoorden(text2) {
    for (let i in keys) {
      if (text2.trim().toLowerCase().includes(keys[i])) {
        return true;
      }
    }
    return false;
  }
  if ($$props.text === void 0 && $$bindings.text && text !== void 0)
    $$bindings.text(text);
  {
    if (woorden) {
      keys = Object.keys(woorden);
      keys.map((word) => {
        let expr = word.trim().replaceAll(" ", "&nbsp;");
        text = text.replaceAll(word, expr);
        return text;
      });
      let repl = text.replaceAll(" ", " ю");
      textAr = repl.split("ю");
      textAr = textAr.map((word, i) => {
        return word.replaceAll("&nbsp;", " ");
      });
    }
  }
  return `    <div>${keys ? `${each(textAr, (text2, i) => {
    return `${isInWoorden(text2) ? `${validate_component(Word, "Word").$$render($$result, { text: text2, woorden }, {}, {})}` : `${escape(text2)}`}`;
  })}` : ``}</div> <div${add_attribute("this", focus, 0)}></div> <div style="height:10px"></div>`;
});
const bootstrap_min = "";
const Control_svelte_svelte_type_style_lang = "";
const css$1 = {
  code: ".flex_container.svelte-1rlx1tl{display:flex;position:fixed;bottom:0;right:50%}",
  map: null
};
const Control = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { bottomOpen: bottomOpen2 = false } = $$props;
  let { onContinueClick } = $$props;
  if ($$props.bottomOpen === void 0 && $$bindings.bottomOpen && bottomOpen2 !== void 0)
    $$bindings.bottomOpen(bottomOpen2);
  if ($$props.onContinueClick === void 0 && $$bindings.onContinueClick && onContinueClick !== void 0)
    $$bindings.onContinueClick(onContinueClick);
  $$result.css.add(css$1);
  return ` <div class="flex_container svelte-1rlx1tl"> <button color="danger" data-svelte-h="svelte-1xguzdp">&gt;&gt;</button></div>  `;
});
const Luister_svelte_svelte_type_style_lang = "";
const css = {
  code: ".selected_sentence.svelte-1l038g8{font-weight:100}",
  map: null
};
let bottomOpen = true;
const Luister = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $operatorst, $$unsubscribe_operatorst;
  $$unsubscribe_operatorst = subscribe(operatorst, (value) => $operatorst = value);
  let api_key = ["d1654c16b135479cbe429e3d2967a5fb", "7a4b7dd989dd4086a626f34dbf21d3a9"];
  let { data } = $$props;
  let { component } = $$props;
  let video, selected_sentence, audio_data = {}, speech, text, cnt = 0, spanAr = [];
  fetch(path + "/operator/lesson?path=" + data.path).then((response) => response.text()).then((data2) => {
    text = JSON.parse(data2).data;
    text = text.replaceAll("\r\n", "");
    text = text.replaceAll(".", "..");
    text = text.split(". ");
    text = text.map((txt) => {
      return txt.trim();
    });
    fetchText();
  }).catch((error) => {
    console.log(error);
    return [];
  });
  function fetchText() {
    if (!text[cnt]) {
      return;
    }
    if (text[cnt]) {
      fetch(path + "/operator/lesson?key=" + md5(text[cnt])).then((response) => response.text()).then((data2) => {
        if (JSON.parse(data2).audio) {
          speech = JSON.parse(data2).audio;
          audio_data[md5(text[cnt])] = speech;
          spanAr.push(text[cnt]);
          spanAr = spanAr;
        } else {
          if ($operatorst.role === "admin")
            fetchVoice();
          else {
            cnt++;
            fetchText();
          }
        }
      }).catch((error) => {
        console.log(error);
        return [];
      });
    } else {
      if ($operatorst.role === "admin")
        fetchVoice();
      else {
        cnt++;
        fetchText();
      }
    }
  }
  function fetchVoice() {
    fetch(`https://api.voicerss.org/?key=${api_key[0]}&hl=nl-be&c=MP3&f=16khz_16bit_mono&r=0&b64=true
				&src=${encodeURIComponent(text[cnt])}`).then((response) => response.text()).then((data2) => {
      speech = data2;
      let key = md5(text[cnt]);
      audio_data[key] = data2;
      fetch(path + "/operator/lesson/", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        // 'Content-Type': 'application/x-www-form-urlencoded',
        body: JSON.stringify({ voice: { [key]: data2 } })
      }).then((response) => response.text()).then((data3) => {
        spanAr.push(text[cnt]);
        spanAr = spanAr;
      });
    }).catch((error) => {
      console.log(error);
      return [];
    });
  }
  function onContinueClick() {
    cnt++;
    fetchText();
  }
  function onBackClick() {
    component.$destroy();
  }
  if ($$props.data === void 0 && $$bindings.data && data !== void 0)
    $$bindings.data(data);
  if ($$props.component === void 0 && $$bindings.component && component !== void 0)
    $$bindings.component(component);
  $$result.css.add(css);
  $$unsubscribe_operatorst();
  return `${$$result.head += `<!-- HEAD_svelte-10pr4d2_START --><link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0/dist/css/bootstrap.min.css"><link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap-icons@1.10.5/font/bootstrap-icons.css"><!-- HEAD_svelte-10pr4d2_END -->`, ""} <div>${each(spanAr, (text2, i) => {
    return `   <div class="selected_sentence svelte-1l038g8"${add_attribute("cnt", i, 0)}${add_attribute("this", selected_sentence, 0)}>${validate_component(Sentence, "Sentence").$$render($$result, { text: text2 }, {}, {})} </div>`;
  })}</div> ${validate_component(Control, "Control").$$render($$result, { bottomOpen, onContinueClick, onBackClick }, {}, {})}  <audio autoplay name="media"${add_attribute("src", speech, 0)}${add_attribute("this", video, 0)}></audio> <div style="height:200px"></div>`;
});
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { data } = $$props;
  if ($$props.data === void 0 && $$bindings.data && data !== void 0)
    $$bindings.data(data);
  return `${validate_component(Luister, "Luister").$$render($$result, { data }, {}, {})}`;
});
export {
  Page as default
};
