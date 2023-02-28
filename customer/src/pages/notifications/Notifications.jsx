import React from "react";
import OrderMessaging from "./OrderMessaging";

const Notifications = () => {
  return (
    <div className="accordion-1 py-5 mt-5">
      <div className="container">
        <div className="row ">
          <h2 style={{ color: "#F27329" }}>Notifications</h2>
        </div>
        <div className="row card">
          <div className="col-md-10 mx-auto ">
            <div className="row">
              <OrderMessaging />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Notifications;
