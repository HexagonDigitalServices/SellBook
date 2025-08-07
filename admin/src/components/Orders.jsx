import { 
  Search, ChevronDown, ChevronUp, Truck, CreditCard, DollarSign, 
  CheckCircle, Clock, AlertCircle, BookOpen, User, MapPin, 
  Mail, Phone, Edit, X, Package, RefreshCw 
} from "lucide-react";

const statusOptions = [
  {
    value: "Pending",
    label: "Pending",
    icon: Clock,
    color: "bg-yellow-100 text-yellow-800",
    iconColor: "text-yellow-500",
  },
  {
    value: "Processing",
    label: "Processing",
    icon: RefreshCw,
    color: "bg-blue-100 text-blue-800",
    iconColor: "text-blue-500",
  },
  {
    value: "Shipped",
    label: "Shipped",
    icon: Truck,
    color: "bg-indigo-100 text-indigo-800",
    iconColor: "text-indigo-500",
  },
  {
    value: "Delivered",
    label: "Delivered",
    icon: CheckCircle,
    color: "bg-green-100 text-green-800",
    iconColor: "text-green-500",
  },
  {
    value: "Cancelled",
    label: "Cancelled",
    icon: AlertCircle,
    color: "bg-red-100 text-red-800",
    iconColor: "text-red-500",
  },
];

  const [orders, setOrders] = useState([]);
  const [counts, setCounts] = useState({ totalOrders: 0, pending: 0, processing: 0, shipped: 0, delivered: 0, cancelled: 0, pendingPayment: 0 });
  const [searchTerm, setSearchTerm] = useState("");
  const [activeTab, setActiveTab] = useState("all");
  const [sortConfig, setSortConfig] = useState({ key: null, direction: "asc" });
  const [selectedOrder, setSelectedOrder] = useState(null);


  const sortedOrders = useMemo(() => {
    if (!sortConfig.key) return orders;
    return [...orders].sort((a, b) => {
      const aVal = sortConfig.key === "date" ? new Date(a[sortConfig.key]) : a[sortConfig.key];
      const bVal = sortConfig.key === "date" ? new Date(b[sortConfig.key]) : b[sortConfig.key];
      return sortConfig.direction === "asc" ? aVal > bVal ? 1 : -1 : aVal > bVal ? -1 : 1;
    });
  }, [orders, sortConfig]);

    const StatusBadge = ({ status }) => {
    const opt = statusOptions.find(o => o.value === status);
    if (!opt) return null;
    const Icon = opt.icon;
    return (
      <div className={`flex items-center gap-1 px-3 py-1 rounded-full text-xs font-medium ${opt.color}`}>
        <Icon className={`w-4 h-4 ${opt.iconColor}`} />
        <span>{opt.label}</span>
      </div>
    );
  };

  const stats = [
    { label: "Total Orders", value: counts.totalOrders, icon: Package, color: "bg-indigo-100", iconColor: "text-[#43C6AC]" },
    { label: "Processing", value: counts.processing, icon: RefreshCw, color: "bg-blue-100", iconColor: "text-blue-600" },
    { label: "Delivered", value: counts.delivered, icon: CheckCircle, color: "bg-green-100", iconColor: "text-green-600" },
    { label: "Pending Payment", value: counts.pendingPayment, icon: CreditCard, color: "bg-purple-100", iconColor: "text-purple-600" }
  ];


 <tbody className="divide-y divide-gray-200">
                {sortedOrders.map(order => (
                  <tr key={order._id} className={styles.tableRow}>
                    <td className={`${styles.tableCell} ${styles.idCell}`}>{order.orderId}</td>
                    <td className={`${styles.tableCell} ${styles.customerCell}`}>{order.shippingAddress.fullName}</td>
                    <td className={`${styles.tableCell} ${styles.dateCell}`}>
                      {new Date(order.placedAt).toLocaleDateString()}
                    </td>
                    <td className={`${styles.tableCell} ${styles.amountCell}`}>₹{order.finalAmount.toFixed(2)}</td>
                    <td className={styles.tableCell}>
                      <div className={styles.paymentBadge(order.paymentMethod === "Online Payment")}>
                        {order.paymentMethod === "Online Payment" ? 
                          <CreditCard className="w-4 h-4" /> : 
                          <DollarSign className="w-4 h-4" />
                        }
                        <span>{order.paymentMethod === "Online Payment" ? "Online" : "COD"}</span>
                      </div>
                    </td>
                    <td className={styles.tableCell}>
                      <StatusBadge status={order.orderStatus} />
                    </td>
                    <td className={`${styles.tableCell} text-right`}>
                      <button onClick={() => viewOrder(order._id)} className={styles.viewButton}>
                        View
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>



                    { label: "Online Payment", color: "bg-purple-500" },
                  { label: "Cash on Delivery", color: "bg-orange-500" }



                       { icon: User, label: "Customer", value: selectedOrder.shippingAddress.fullName },
                    { icon: Mail, label: "Email", value: selectedOrder.shippingAddress.email },
                    { icon: Phone, label: "Phone", value: selectedOrder.shippingAddress.phoneNumber },
                    { 
                      icon: MapPin, 
                      label: "Address", 
                      value: `${selectedOrder.shippingAddress.street}, ${selectedOrder.shippingAddress.city}, ${selectedOrder.shippingAddress.state} ${selectedOrder.shippingAddress.zipCode}` 
                    }


                                       { label: "Subtotal:", value: `₹${selectedOrder.totalAmount.toFixed(2)}` },
                      { label: "Shipping:", value: `₹${selectedOrder.shippingCharge.toFixed(2)}` },
                      { label: "Tax (5%):", value: `₹${selectedOrder.taxAmount.toFixed(2)}` },
                      { label: "Total:", value: `₹${selectedOrder.finalAmount.toFixed(2)}`, isTotal: true }


                         { 
                      label: "Method:", 
                      value: selectedOrder.paymentMethod,
                      color: selectedOrder.paymentMethod === "Online Payment" ? 
                        "bg-purple-100 text-purple-800" : "bg-orange-100 text-orange-800"
                    },
                    { 
                      label: "Status:", 
                      value: selectedOrder.paymentStatus,
                      color: selectedOrder.paymentStatus === "Paid" ? 
                        "bg-green-100 text-green-800" : "bg-yellow-100 text-yellow-800"
                    } 




                    
