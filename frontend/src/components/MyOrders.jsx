  // Status badge definitions
  const statusOptions = [
    {
      value: "pending",
      label: "Pending",
      icon: Clock,
      color: "bg-yellow-100 text-yellow-800",
      iconColor: "text-yellow-500",
    },
    {
      value: "processing",
      label: "Processing",
      icon: Package,
      color: "bg-blue-100 text-blue-800",
      iconColor: "text-blue-500",
    },
    {
      value: "shipped",
      label: "Shipped",
      icon: Truck,
      color: "bg-indigo-100 text-indigo-800",
      iconColor: "text-indigo-500",
    },
    {
      value: "delivered",
      label: "Delivered",
      icon: CheckCircle,
      color: "bg-green-100 text-green-800",
      iconColor: "text-green-500",
    },
    {
      value: "cancelled",
      label: "Cancelled",
      icon: XCircle,
      color: "bg-red-100 text-red-800",
      iconColor: "text-red-500",
    },
  ];



    // Apply sorting
    const sortedOrders = useMemo(() => {
      if (!sortConfig.key) return orders;
      return [...orders].sort((a, b) => {
        let aVal = a[sortConfig.key],
          bVal = b[sortConfig.key];
        if (sortConfig.key === "placedAt") {
          aVal = new Date(aVal);
          bVal = new Date(bVal);
        }
        if (aVal > bVal) return sortConfig.direction === "asc" ? 1 : -1;
        if (aVal < bVal) return sortConfig.direction === "asc" ? -1 : 1;
        return 0;
      });
    }, [orders, sortConfig]);


           { key: "orderId", label: "Order ID" },
                      { key: "date", label: "Date" },
                      { key: "finalAmount", label: "Amount" },
                      { key: null, label: "Payment" },
                      { key: null, label: "Status" },
                      { key: null, label: "Actions" },



                            <p className="text-gray-600">
                      {selectedOrder.shippingAddress.street},{" "}
                      {selectedOrder.shippingAddress.city},{" "}
                      {selectedOrder.shippingAddress.state}{" "}
                      {selectedOrder.shippingAddress.zipCode}
                    </p>


                    {/* Order Summary */}
<div className="border rounded-xl p-5">
  <h3 className="text-lg font-semibold text-gray-800 mb-4 flex items-center">
    <Package className="w-5 h-5 mr-2 text-[#43C6AC]" />
    Order Summary
  </h3>
  <div className="space-y-6">
    {selectedOrder.books.map((book, i) => (
      <div key={i} className="flex items-start space-x-4 border-b pb-4">
        {/* Book image */}
        <img
          src={`${API_BASE}${book.image}`}
          alt={book.title}
          className="w-16 h-20 object-cover rounded"
        />

        {/* Book metadata */}
        <div className="flex-1">
          <p className="font-medium text-gray-900">{book.title}</p>
          <p className="text-sm text-gray-600">Author: {book.author}</p>
        </div>

        {/* Quantity & price */}
        <div className="text-right">
          <p className="font-medium">Qty: {book.quantity}</p>
          <p className="text-gray-500 text-sm">
            ₹{book.price.toFixed(2)} each
          </p>
        </div>
      </div>
    ))}

    {/* Totals */}
    <div className="pt-4 space-y-2">
      {[
        {
          label: "Subtotal:",
          value: `₹${selectedOrder.totalAmount.toFixed(2)}`,
        },
        {
          label: "Shipping:",
          value: `₹${selectedOrder.shippingCharge.toFixed(2)}`,
        },
        {
          label: "Tax (5%):",
          value: `₹${selectedOrder.taxAmount.toFixed(2)}`,
        },
        {
          label: "Total:",
          value: `₹${selectedOrder.finalAmount.toFixed(2)}`,
          className: "font-bold text-lg text-[#1A237E] pt-2 border-t",
        },
      ].map((item, idx) => (
        <div
          key={idx}
          className={`flex justify-between ${item.className || ""}`}
        >
          <span className="text-gray-600">{item.label}</span>
          <span>{item.value}</span>
        </div>
      ))}
    </div>
  </div>
</div>