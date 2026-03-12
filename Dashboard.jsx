import React, { useState } from "react";

function Dashboard() {

  const [coupons, setCoupons] = useState([
    { id: 1, name: "WELCOME10", benefit: "10% discount" },
    { id: 2, name: "SAVE50", benefit: "₹50 off above ₹500" },
    { id: 3, name: "FREESHIP", benefit: "Free delivery" }
  ]);

  const [name,setName] = useState("");
  const [benefit,setBenefit] = useState("");

  const addCoupon = () => {
    if(name && benefit){
      setCoupons([...coupons,{id:Date.now(),name,benefit}])
      setName("")
      setBenefit("")
    }
  }

  const deleteCoupon = (id) =>{
    setCoupons(coupons.filter(c => c.id !== id))
  }

  return (
    <div>

      <h2>Admin Dashboard</h2>

      {/* Cards */}

      <div className="cards">

        <div className="card">
          <h3>Total Coupons</h3>
          <p>{coupons.length}</p>
        </div>

        <div className="card">
          <h3>Active Offers</h3>
          <p>{coupons.length}</p>
        </div>

        <div className="card">
          <h3>Status</h3>
          <p>Running</p>
        </div>

      </div>

      {/* Add Coupon */}

      <div className="form">
        <input
        placeholder="Coupon Name"
        value={name}
        onChange={(e)=>setName(e.target.value)}
        />

        <input
        placeholder="Benefit"
        value={benefit}
        onChange={(e)=>setBenefit(e.target.value)}
        />

        <button onClick={addCoupon}>Add Coupon</button>
      </div>

      {/* Table */}

      <table>
        <thead>
          <tr>
            <th>Coupon</th>
            <th>Benefit</th>
            <th>Action</th>
          </tr>
        </thead>

        <tbody>
          {coupons.map(c => (
            <tr key={c.id}>
              <td>{c.name}</td>
              <td>{c.benefit}</td>
              <td>
                <button className="delete"
                onClick={()=>deleteCoupon(c.id)}>
                  Delete
                </button>
              </td>
            </tr>
          ))}
        </tbody>

      </table>

    </div>
  );
}

export default Dashboard;