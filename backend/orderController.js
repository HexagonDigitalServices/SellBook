export const createOrder = async (req, res, next) => {
    try {
        // Calculate amounts
        const totalAmount = items.reduce((sum, i) => sum + Number(i.price) * Number(i.quantity), 0);
        const taxAmount = +((totalAmount * 0.05).toFixed(2));
        const shippingCharge = 0;

        // 4. Map customer → shippingAddress
        const shippingAddress = {
            fullName: customer.name,
            email: customer.email,
            phoneNumber: customer.phone,
            street: customer.address.street,
            city: customer.address.city,
            state: customer.address.state,
            zipCode: customer.address.zip,
        };

            return {
                book: bookDoc._id,
                title: bookDoc.title,
                author: bookDoc.author,
                image: bookDoc.image,
                price: Number(i.price),
                quantity: Number(i.quantity),
            };

        // Base payload
        const baseOrderData = {
            orderId,
            user: req.user._id,
            shippingAddress,
            books: orderItems,
            shippingCharge,
            totalAmount,
            taxAmount,
            paymentMethod: normalizedPM,
            notes,
            deliveryDate,
        };
    
};


// Get all orders
export const getOrders = async (req, res, next) => {
    try {

        // 2) Text search
        if (search) {
            const regex = new RegExp(search, 'i');
            filter.$or = [
                { orderId: regex },
                { 'shippingAddress.fullName': regex },
                { 'shippingAddress.email': regex },
                { 'books.title': regex }
            ];
        }

        // Fetch matching orders, newest first
        const orders = await Order.find(filter)
            .sort({ placedAt: -1 })
            .lean();

        // Compute aggregate counts
        const counts = orders.reduce((acc, o) => {
            acc.totalOrders = (acc.totalOrders || 0) + 1;
            acc[o.orderStatus] = (acc[o.orderStatus] || 0) + 1;
            if (o.paymentStatus === 'Unpaid') {
                acc.pendingPayment = (acc.pendingPayment || 0) + 1;
            }
            return acc;
        }, { totalOrders: 0, pendingPayment: 0 });

        res.json({

            counts: {
                totalOrders: counts.totalOrders,
                pending: counts.Pending || 0,
                processing: counts.Processing || 0,
                shipped: counts.Shipped || 0,
                delivered: counts.Delivered || 0,
                cancelled: counts.Cancelled || 0,
                pendingPayment: counts.pendingPayment
            },
            orders
        });
 
};