import './css/Order.css';

function getSales(orders) {
    let revenue = 0;
    let totalServiceTax = 0;
    let totalSBC = 0;
    let totalKKC = 0;

    orders.forEach(order => {
        revenue += order.subTotal;
        totalServiceTax += order.serviceTax;
        totalSBC += order.SBC;
        totalKKC += order.KKC; 
    });

    return {
        revenue,
        serviceTax: totalServiceTax,
        SBC: totalSBC,
        KKC: totalKKC
    }
}

function Order({orders}) {
    if (!orders.length) {
        return (
            <h3>No orders found</h3>
        )
    }
    const totalSales = getSales(orders);
    
    return (
        <>
            <h3>Orders</h3>
            <table>
                <tr>
                    <th>Id</th>
                    <th>Show Id</th>
                    <th>SubTotal</th>
                    <th>Service Tax</th>
                    <th>SBC</th>
                    <th>KKC</th>
                    <th>Total</th>
                </tr>
                {orders.map((order) => 
                    <tr key={order.id}> 
                        <td>{order.id}</td>
                        <th>{order.showId}</th>
                        <td>{order.subTotal}</td>
                        <td>{order.serviceTax.toFixed(2)}</td>
                        <td>{order.SBC.toFixed(2)}</td>
                        <td>{order.KKC.toFixed(2)}</td>
                        <td>{order.total}</td>
                    </tr>
                )}
            </table>
            <hr />
            <div>
                <h3>Total Sales</h3>
                <div>Revenue: Rs. {totalSales.revenue}</div>
                <div>Service Tax: Rs. {totalSales.serviceTax.toFixed(2)}</div>
                <div>Swachh Bharat Cess: Rs. {totalSales.SBC.toFixed(2)}</div>
                <div>Krishi Kalyan Cess: Rs. {totalSales.KKC.toFixed(2)}</div>
            </div>
        </>
    );
}

export default Order;
