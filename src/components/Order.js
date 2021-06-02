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
            <table id="order-table">
                <tr>
                    <th>Id</th>
                    <th>Show</th>
                    <th>SubTotal</th>
                    <th>Service Tax</th>
                    <th>SBC</th>
                    <th>KKC</th>
                    <th>Total</th>
                </tr>
                {orders.map((order) => 
                    <tr key={order.id}> 
                        <td>{order.id}</td>
                        <th>{order.showName}</th>
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
                <table id="sales-table">
                    <tr>
                        <td>Revenue: </td>
                        <td>{`Rs. ${totalSales.revenue}`}</td>
                    </tr>
                    <tr>
                        <td>Service Tax:</td>
                        <td>{`Rs. ${totalSales.serviceTax.toFixed(2)}`}</td>
                    </tr>
                    <tr>
                        <td>Swachh Bharat Cess:</td>
                        <td>{`Rs. ${totalSales.SBC.toFixed(2)}`}</td>
                    </tr>
                    <tr>
                        <td>Krishi Kalyan Cess:</td>
                        <td>{`Rs. ${totalSales.KKC.toFixed(2)}`}</td>
                    </tr>
                </table>
            </div>
        </>
    );
}

export default Order;
