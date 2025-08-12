// ₹

  const { cart, clearCart } = useCart();
  const [formData, setFormData] = useState({
    name: '', email: '', phone: '', address: '',
    city: '', state: '', zip: '', paymentMethod: 'cod'
  });
  const [orderPlaced, setOrderPlaced] = useState(false);
  const [orderId, setOrderId] = useState(null);
  // capture total before clearing
  const [orderTotal, setOrderTotal] = useState(0);

  // State to hold map of book IDs to image paths
  const [images, setImages] = useState({});



  const calculateTotal = () => cart.items.reduce((total, item) => total + (item.price * item.quantity), 0);
  const subtotal = calculateTotal();
  const tax = subtotal * 0.05;
  const total = subtotal + tax;



// After (pick whichever property holds the book ID):
const items = cart.items.map(item => ({
  id:       item.id || item._id,    // <-- make sure this is the Mongo _id of the Book
  name:     item.title,
  price:    item.price,
  quantity: item.quantity || 1,
}));


      const paymentMethodLabel = formData.paymentMethod === 'cod'
        ? 'Cash on Delivery'
        : 'Online Payment';
      const paymentStatus = formData.paymentMethod === 'online'
        ? 'Paid'
        : 'Pending';

      const payload = {
        customer: {
          name: formData.name,
          email: formData.email,
          phone: formData.phone,
          address: {
            street: formData.address,
            city: formData.city,
            state: formData.state,
            zip: formData.zip,
          },
        },
        items,
        paymentMethod: paymentMethodLabel,
        paymentStatus,
        notes: formData.notes || '',
        deliveryDate: formData.deliveryDate || '',
      };



  <div className="bg-white border border-gray-200 rounded-xl p-4 mb-8 max-w-lg mx-auto">
              <p className="text-gray-800">{formData.name}</p>
              <p className="text-gray-600">{formData.address}</p>
              <p className="text-gray-600">{formData.city}, {formData.state} {formData.zip}</p>
            </div>



  const paymentMethods = [
    { 
      id: 'cod', 
      label: 'Cash on Delivery', 
      description: 'Pay when you receive the order',
      icon: DollarSign,
      iconColor: 'text-orange-500'
    },
    { 
      id: 'online', 
      label: 'Online Payment', 
      description: 'Pay with credit/debit card',
      icon: CreditCard,
      iconColor: 'text-purple-500'
    }
  ];


    const formFields = [
    [
      { name: 'name', label: 'Full Name', type: 'text', required: true },
      { name: 'email', label: 'Email', type: 'email', required: true }
    ],
    [
      { name: 'phone', label: 'Phone Number', type: 'tel', required: true },
      { name: 'city', label: 'City', type: 'text', required: true }
    ],
    [
      { name: 'address', label: 'Street Address', type: 'text', required: true, fullWidth: true }
    ],
    [
      { name: 'state', label: 'State', type: 'text', required: true },
      { name: 'zip', label: 'ZIP Code', type: 'text', required: true }
    ]
  ];


  {/* Right Column - Order Summary */}
            <div className="bg-white rounded-2xl shadow-xl p-6 md:p-8 h-fit">
              <h2 className="text-2xl font-bold text-gray-800 mb-6 flex items-center">
                <ShoppingCart className="w-6 h-6 mr-2 text-[#43C6AC]" />
                Order Summary
              </h2>
              
              <div className="border-b border-gray-200 pb-4 mb-4">
                <h3 className="text-lg font-semibold text-gray-800 mb-3">Your Items</h3>
                <div className="space-y-4">
                  {cart.items.length > 0 ? (
                    cart.items.map(item => (
                      <div key={item.id} className="flex items-center">
                          <img
                          src={
                            images[item.id]
                              ? `${IMG_BASE}${images[item.id]}`
                              : "/placeholder.png"
                          }
                          alt={item.title}
                          className="w-16 h-16 object-cover rounded-xl mr-4"
                        />
                        <div className="flex-1">
                          <h4 className="font-medium text-gray-900">{item.title}</h4>
                          <p className="text-gray-600 text-sm">by {item.author}</p>
                        </div>
                        <div className="ml-4 text-right">
                          <p className="font-medium text-gray-900">₹{item.price.toFixed(2)}</p>
                          <p className="text-gray-600 text-sm">Qty: {item.quantity}</p>
                        </div>
                      </div>
                    ))
                  ) : (
                    <p className="text-gray-600">Your cart is empty</p>
                  )}
                </div>
              </div>
              
              <div className="border-b border-gray-200 pb-6 mb-6">
                <h3 className="text-lg font-semibold text-gray-800 mb-3">Order Details</h3>
                <div className="space-y-3">
                  {[
                    { label: 'Subtotal', value: `₹${subtotal.toFixed(2)}` },
                    { label: 'Shipping', value: 'FREE' },
                    { label: 'Tax', value: `₹${tax.toFixed(2)}` }
                  ].map((item, i) => (
                    <div key={i} className="flex justify-between">
                      <span className="text-gray-600">{item.label}</span>
                      <span className="text-gray-900">{item.value}</span>
                    </div>
                  ))}
                </div>
              </div>
              
              <div className="flex justify-between items-center mb-8">
                <span className="text-lg font-bold text-gray-800">Total</span>
                <span className="text-xl font-bold text-[#1A237E]">₹{total.toFixed(2)}</span>
              </div>
              
              <div className="bg-gradient-to-r from-[#43C6AC]/10 to-[#F8FFAE]/10 rounded-xl p-4">
                <h3 className="font-medium text-gray-800 mb-2">Delivery Estimate</h3>
                <p className="text-gray-600">
                  Your order will be delivered within 3-5 business days after processing.
                </p>
              </div>
            </div>
