import React, { useState, useEffect } from "react";

function Subscription(props) {
  const [isValid, setValid] = useState(false);
  const [isLoading, setLoading] = useState(false);

  function emailIsValid(email) {
    return /\S+@\S+\.\S+/.test(email);
  }

  function validateFunction() {
    const input = document.getElementById("mailInput").value;
    setValid(emailIsValid(input));
  }

  function submitFunc(e) {
    e.preventDefault();
    const inputValue = document.getElementById("mailInput").value;
    console.log(inputValue);
    let bodyObj = {
      email: inputValue,
      hotel: props.name,
    };

    fetch("api/hotels/subscribe", {
      method: "POST",
      mode: "no-cors",
      body: bodyObj,
    }).then((response) => console.log(response));
  }

  console.log(isValid);
  return (
    <div>
      <h4> Request more info about </h4>
      {!isLoading ? (
        <form action="" id="upLoadForm">
          <input type="email" id="mailInput" onChange={() => validateFunction()} />
          <button disabled={!isValid} id="button" onClick={submitFunc}>
            submit
          </button>
        </form>
      ) : (
        <div>loading</div>
      )}
    </div>
  );
}

export default Subscription;
