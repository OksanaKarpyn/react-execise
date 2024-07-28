import React, { useState } from "react";
import QrCode from "react-qr-code";
const QRcode = () => {
  const [qrCode, setQrCode] = useState("");
  const [input, setInput] = useState("");

  function handleGenerationCode() {
    setQrCode(input);
  }
  return (
    <div>
      <h1>QR Code generation</h1>
      <div>
        <input
          type="text"
          name="qr-code"
          placeholder="enter your value here"
          onChange={(e) => setInput(e.target.value)}
        />
        <button
          disabled={input && input.trim() !== "" ? false : true}
          onClick={handleGenerationCode}
        >
          generation
        </button>
      </div>
      <div>
        <QrCode id="qr-code-value" value={qrCode} size={400} bgColor="#ffff" />
      </div>
    </div>
  );
};

export default QRcode;
