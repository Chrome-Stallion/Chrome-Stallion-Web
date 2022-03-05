import React from 'react';
import { Link } from 'react-router-dom';
import data from './data';

function Orders () {
    return (
        <div className= "content-margined">
                <div className="order-header">
                        <h3>Orders</h3>
                </div>
                <div className="order-list">
                        <table className="table">
                                <thread>
                                    <tr>
                                        <th>ID</th>
                                        <th>DATE</th>
                                        <th>TOTAL</th>
                                        <th>USER</th>
                                        <th>PAID</th>
                                        <th>PAID AT</th>
                                        <th>DELIVERED</th>
                                        <th>DELIVERED AT</th>
                                        <th>ACTIONS</th>
                                    </tr>
                                </thread>
                                // missing an arrow below => I didnt know how to add the arrow
                                <tbody>
                                        {data.orders.map(order  (<tr key={Orders.id}>
                                                <td>{order._id}</td>
                                                <td>{order.createdAT}</td>
                                                <td>{order.totalPrice}</td>
                                                <td>{order.user.name}</td>
                                                <td>{order.isPaid.toString()}</td>
                                                <td>{order.paidAt}</td>
                                                <td>{order.isDelivered.toString()}</td>
                                                <td>{order.deliveredDate}</td>
                                                <td>
                                                        <Link to={"/order/" + order_id} className="button secondary" >Details</Link>
                                                </td>
                                            </tr>))}
                                </tbody>
                        </table>
                </div>
            </div>);
};
export default Orders;
