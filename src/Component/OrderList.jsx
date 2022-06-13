import React from 'react';
import useFetch from '../Hooks/useFetch';
import OrderListItem from './OrderListItem';

export default function OrderList() {
  const { data, loading, error } = useFetch('http://staging-api.dahmakan.com/test/orders/')
  
  return (
    <>
      {loading && <p>loading...</p>}
      {!data && error && <p>{error}</p>}
      {data && console.log(data)}
      {data && <OrderListItem headers={['Status', 'Date', 'Time', 'Order Number', 'Total']} orders={data.orders} />}
    </>
  )
}