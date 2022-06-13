import React from 'react';
import moment from 'moment'

export default function OrderListItem({ headers, orders }) {
  const calculateColWidth = `${100/headers.length}%`
  function orderStatus(time) {
    if (!time) return <div style={{color: 'red'}}>Cancelled</div>
    if (new Date(time) > new Date()) return <div style={{color: 'green'}}>Confirmed</div>
    if (new Date(time) < new Date()) return <div style={{color: 'yellow'}}>Delivered</div>
  }
  const styles = {
    width: calculateColWidth, 
    background: '#FFFFFF', 
    padding: '20px 10px', 
    marginBottom: '2px' 
  }
  return (
    <div style={{ padding: '50px 200px'}}>
      <div style={{ display: 'flex', background: '#FFFFFF', padding: '10px', marginBottom: '2px' }}>
        {headers.map(head => (
          <div style={{width: calculateColWidth, fontWeight: 600}}>{head}</div>
        ))}
      </div>
      <div>
        {orders.map(order => (
          <div style={{display: 'flex'}}>
            <div style={styles}>{orderStatus(order.arrives_at_utc)}</div>
            <div style={styles}>{`${moment(order.arrives_at_utc).format('dddd')}, ${moment(order.arrives_at_utc).format("DD-MM-YYYY")}`}</div>
            <div style={styles}>{moment(order.arrives_at_utc).format('LT')}</div>
            <div style={styles}>{`#${order.order_id}`}</div>
            <div style={styles}>{` RM ${order.total_paid}`}</div>
          </div>
        ))}
      </div>
    </div>
  )
}