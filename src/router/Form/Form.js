import React, { useRef, useState } from "react";
import "./Form.css";

const BOT_TOKEN = "6549091574:AAHD0Oc0CDtRWqEcDI1fTCpTXDJ7kUkNAVQ";

const CHAT_ID = "-4267965369";
const USER_ID = "5383462353";

//https://api.telegram.org/bot6549091574:AAHD0Oc0CDtRWqEcDI1fTCpTXDJ7kUkNAVQ/getUpdates
//https://api.telegram.org/bot[your_token]/sendMessage?chat_id=[your chat_id]&parse_mode=html

function Form() {
  const [fullName, setFullName] = useState();
  const tel = useRef();
  const address = useRef();
  const messages = useRef();

  const heandleSubmit = (e) => {
    e.preventDefault();

    let text = "Vazifa ";
    text += ` Name: ${fullName} %0A`;
    text += ` TeL: ${tel.current.value} %0A`;
    text += ` Address ${address.current.value} %0A`;
    text += ` Comment ${messages.current.value} %0A %0A`;

    let url = `https://api.telegram.org/bot${BOT_TOKEN}/sendMessage?chat_id=${CHAT_ID}&text=${text}&parse_mode=html`;

    let api = new XMLHttpRequest();
    api.open("GET", url, true);
    api.send();

    setFullName("");
    tel.current.value = "";
    address.current.value = "";
    messages.current.value = "";
  };

  return (
    <div className="container">
      <div className="Form">
        <form onSubmit={heandleSubmit}>
          <input
            required
            onChange={(e) => setFullName(e.target.value)}
            type="text"
            placeholder="Ismingizni kriting"
          />
          <input
            required
            ref={tel}
            type="number"
            placeholder="+998 00 000 00 00"
          />
          <input required ref={address} type="text" placeholder="Manzilingiz" />
          <input
            required
            ref={messages}
            type="text"
            placeholder="Habar Yollash"
          />
          <button className="btn-reg">Jo'natish</button>
        </form>
      </div>
    </div>
  );
}

export default Form;
