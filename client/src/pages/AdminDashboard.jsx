import { useLoaderData } from "react-router-dom"


const AdminDashboard = () => {
    const data = useLoaderData();
   
    const {customer1} = data;
    const {customer2} = data;


  return (
    <div className="overflow-x-auto">
    <table className="table">
      {/* head */}
      <thead>
        <tr>
          <th></th>
          <th>Item/Customer</th>
          <th>Customer1</th>
          <th>Customer2</th>
          <th>Total</th>
        </tr>
      </thead>
      <tbody>
        {/* row 1 */}
        <tr>
          <th>1</th>
          <td>Quantity</td>
          <td>{customer1.totalQuantity}</td>
          <td>{customer2.totalQuantity}</td>
          <td>{customer2.totalQuantity + customer1.totalQuantity }</td>
        </tr>
        {/* row 2 */}
        <tr>
          <th>2</th>
          <td>Weight</td>
          <td>{customer1.totalWeight}</td>
          <td>{customer2.totalWeight}</td>
          <td>{customer2.totalWeight + customer1.totalWeight}</td>
        </tr>
        {/* row 3 */}
        <tr>
          <th>3</th>
          <td>Box Count</td>
          <td>{customer1.totalBoxCount}</td>
          <td>{customer2.totalBoxCount}</td>
          <td>{customer2.totalBoxCount + customer1.totalBoxCount}</td>
        </tr>
      </tbody>
    </table>
  </div>
  )
}

export default AdminDashboard