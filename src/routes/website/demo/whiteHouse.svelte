
  <h3 style=" text-align:center">White House Call Center Demo</h3>
  
  <div style="display:flex;justify-content: space-between;height:220px; margin:20px;">
      <div style="flex:0 0 4%">
          <div style="position:absolute;text-align: center;">
              <img src="https://nedol.ru/assets/user/biden.png" title='' alt=''  style="height:180px"/>
              <iframe class="kolmit" 
              src="../src/routes/user/iframe.svelte?em=biden@wh.com&abonent=white@house.usa" 
              scrolling="no" frameBorder="0" style="position: absolute;height:30px; width:100%;top:0;left:0;" title=''  
              on:load={OnLoad}>
              </iframe>
              <div>
                <a href="../operator?operator=biden@wh.com&abonent=white@house.usa&psw=demo&lan={lang}" target="_blank">Click to open operator</a>
              </div>
          </div>
      </div>

      <div style="flex:0 0 0%">
          <div style="position:absolute;text-align: center;">
              <img src="https://nedol.ru/assets/user/trump.png" title='' alt=''  style="height:180px"/>
              <iframe class="kolmit" 
              src="../src/routes/user/iframe.svelte?em=trump@wh.com&abonent=white@house.usa" 
              scrolling="no" frameBorder="0" style="position: absolute;height:30px; width:100%;top:0;left:0;" title=''  on:load={OnLoad}>
              </iframe>
              <div>
                <a href="../operator?operator=trump@wh.com&abonent=white@house.usa&psw=demo&lan={lang}" target="_blank">Click to open operator</a>
              </div>
          </div>
      </div>

      <div style="flex:0 0 20%">
          <div style="position:absolute;text-align: center;">
              <img src="https://nedol.ru/assets/user/obama.png" title='' alt=''  style="height:180px" />
              <iframe class="kolmit" 
              src="../src/routes/user/iframe.svelte?em=obama@wh.com&abonent=white@house.usa" 
              scrolling="no" frameBorder="0" style="position: absolute;height:30px; width:100%;top:0;left:0;" title=''  
              on:load={OnLoad}>
              </iframe>
              <div>
                <a href="../operator?operator=obama@wh.com&abonent=white@house.usa&psw=demo&lan={lang}" target="_blank">Click to open operator</a>
              </div>
          </div>
      </div>
  </div>

  <script>
    let lang = 'en'

    function OnLoad(ev) {
      let iframe = ev.currentTarget;
      const rect = iframe.previousElementSibling.getBoundingClientRect();
      if (iframe && iframe.previousElementSibling) {
        if (iframe.previousElementSibling.tagName.toLowerCase() === "img") {
          iframe.style.width = iframe.previousElementSibling.width + "px";
          iframe.style.height = iframe.previousElementSibling.height + "px";
          // iframe.style.top =  rect.top + window.scrollY +'px';
          iframe.style.left = "0px";
        } else if (
          iframe.previousElementSibling.tagName.toLowerCase() === "svg"
        ) {
          iframe.style.width =
            iframe.previousElementSibling.width.baseVal.valueAsString + "px";
          iframe.style.height =
            iframe.previousElementSibling.height.baseVal.valueAsString + "px";
          iframe.style.top = rect.top + window.scrollY + "px";
          iframe.style.left = rect.left + window.scrollX + "px";
        } else {
          iframe.style.maxWidth = "100px";
          iframe.style.maxHeight = "100px";
        }
      }
    }
  
  function OnClickRef(event){
      // window.open(ev.currentTarget.href, "_blank").focus();
      event.preventDefault();
      const {href, target} = event.currentTarget;
      const features = "resizable";
      window.open(href, target, features);
    }

  </script>

