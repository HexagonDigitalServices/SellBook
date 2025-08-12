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

                