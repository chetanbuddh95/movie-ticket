function Order({orders}) {
    return (
        <>
            <h1>Orders</h1>
            <table>
                <tr>
                    <th>Order Id</th>
                    <th>Sub Total</th>
                    <th>Service Tax</th>
                    <th>SBC</th>
                    <th>KKC</th>
                    <th>Total</th>
                </tr>
                {orders.map((order) => 
                    <tr>
                        <td>{order.id}</td>
                        <td>{order.subTotal}</td>
                        <td>{order.serviceTax}</td>
                        <td>{order.SBC}</td>
                        <td>{order.KKC}</td>
                        <td>{order.total}</td>
                    </tr>
                )}
            </table>
        </>
    );
}

export default Order;
