import React from "react";

function Orders() {
  const orders = JSON.parse(localStorage.getItem("orders")) || [];

  if (orders.length === 0) {
    return (
      <div style={{
        textAlign: "center",
        padding: "40px",
        backgroungColor:"red"
      }}>
        <h2>No Orders Found</h2>
        <p>Your ordered items will appear here after purchase.</p>
      </div>
    );
  }

  return (
    <div style={{
      padding: "25px",
      maxWidth: "900px",
      margin: "auto",
      backgroundColor:"green"
    }}>
      
      <h2 style={{
        fontSize: "28px",
        fontWeight: "700",
        marginBottom: "25px",
        textAlign: "center",
        color: "white"
      }}>
        My Orders
      </h2>

      {/* Scrollable List */}
      <div style={{
        maxHeight: "75vh",
        overflowY: "auto",
        paddingRight: "10px"
      }}>

        {orders.map(order => (
          <div 
            key={order.id}
            style={{
              display: "flex",
              gap: "20px",
              padding: "18px",
              marginBottom: "18px",
              background: "#fff",
              borderRadius: "12px",
              border: "1px solid #e0e0e0",
              boxShadow: "0 3px 8px rgba(0,0,0,0.06)",
              transition: "0.2s ease",
              cursor: "pointer"
            }}
            onMouseOver={(e) => {
              e.currentTarget.style.transform = "translateY(-4px)";
              e.currentTarget.style.boxShadow = "0 6px 14px rgba(0,0,0,0.12)";
            }}
            onMouseOut={(e) => {
              e.currentTarget.style.transform = "translateY(0)";
              e.currentTarget.style.boxShadow = "0 3px 8px rgba(0,0,0,0.06)";
            }}
          >

            {/* Product Image */}
            <img 
              src={order.product.image} 
              alt={order.product.name}
              style={{
                width: "140px",
                height: "160px",
                borderRadius: "10px",
                objectFit: "cover",
                border: "1px solid #ddd"
              }}
            />

            {/* Text Details */}
            <div style={{
              display: "flex",
              flexDirection: "column",
              justifyContent: "center"
            }}>
              
              <h3 style={{
                margin: 0,
                fontSize: "20px",
                fontWeight: "600",
                color: "#222"
              }}>
                {order.product.name}
              </h3>

              <p style={{ margin: "4px 0", fontSize: "15px", color: "#444" }}>
                <b>Brand:</b> {order.product.brand}
              </p>

              <p style={{ margin: "4px 0", fontSize: "15px", color: "#444" }}>
                <b>Price:</b> ₹{order.product.price}
              </p>

              <p style={{ margin: "4px 0", fontSize: "15px", color: "#444" }}>
                <b>Size:</b> {order.size}
              </p>

              <p style={{ margin: "4px 0", fontSize: "15px", color: "#444" }}>
                <b>Payment ID:</b> {order.paymentId}
              </p>

              <p style={{ margin: "4px 0", fontSize: "15px", color: "green", fontWeight: "600" }}>
                {order.date}
              </p>

            </div>

          </div>
        ))}

      </div>
    </div>
  );
}

export default Orders;
