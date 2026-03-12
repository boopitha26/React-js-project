import React from "react";

function CouponList({ coupons, deleteCoupon }) {

  const today = new Date();

  return (
    <div>

      <h2>Available Coupons</h2>

      {coupons.length === 0 && <p>No Coupons Added</p>}

      <ul>

        {coupons.map((coupon, index) => {

          const expiryDate = new Date(coupon.expiry);
          const expired = expiryDate < today;

          return (
            <li key={index}>

              <b>{coupon.code}</b> - {coupon.discount}%
              <br />
              Expiry: {coupon.expiry}

              {expired && <span className="expired"> (Expired)</span>}

              <br />

              <button onClick={() => deleteCoupon(index)}>
                Delete
              </button>

            </li>
          );
        })}

      </ul>

    </div>
  );
}

export default CouponList;