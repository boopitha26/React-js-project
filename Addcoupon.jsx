import React, { useState } from "react";

function AddCoupon({ addCoupon }) {

  const [code, setCode] = useState("");
  const [discount, setDiscount] = useState("");
  const [expiry, setExpiry] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!code || !discount || !expiry) {
      alert("Please fill all fields");
      return;
    }

    const newCoupon = {
      code,
      discount,
      expiry
    };

    addCoupon(newCoupon);

    setCode("");
    setDiscount("");
    setExpiry("");
  };

  return (
    <form onSubmit={handleSubmit} className="form">

      <input
        type="text"
        placeholder="Coupon Code"
        value={code}
        onChange={(e) => setCode(e.target.value)}
      />

      <input
        type="number"
        placeholder="Discount %"
        value={discount}
        onChange={(e) => setDiscount(e.target.value)}
      />

      <input
        type="date"
        value={expiry}
        onChange={(e) => setExpiry(e.target.value)}
      />

      <button type="submit">Add Coupon</button>

    </form>
  );
}

export default AddCoupon;