import React from "react";
import useCart from "../../../hook/useCard";
import { FaTrashAlt } from "react-icons/fa";
import Swal from "sweetalert2";

const SelectedClass = () => {
  const [cart, refetch] = useCart();
  const handleDelete = (dt) => {
    Swal.fire({
        title: 'Are you sure?',
        text: "You won't be able to revert this!",
        icon: 'warning',
        showCancelButton: true,
        confirmButtonColor: '#3085d6',
        cancelButtonColor: '#d33',
        confirmButtonText: 'Yes, delete it!'
    }).then((result) => {
        if (result.isConfirmed) {
            fetch(`http://localhost:5000/student/${dt._id}`, {
                method: 'DELETE'
            })
                .then(res => res.json())
                .then(data => {
                    if (data.deletedCount > 0) {
                        refetch();
                        Swal.fire(
                            'Deleted!',
                            'Your file has been deleted.',
                            'success'
                        )
                    }
                })
        }
    })
  }
  return (
    <div>
      <div className="overflow-x-auto">
        <table className="table">
          {/* head */}
          <thead>
            <tr>
              <th>Sl</th>
              <th>Class Name</th>
              <th>Price</th>
              <th>Delete</th>
              <th>Pay</th>
            </tr>
          </thead>
          <tbody>
            {/* row 1 */}
            {cart?.map((dt,i) => 
              <tr key={dt._id}>
                <th>{i+1}</th>
                <td>{dt.name}</td>
                <td>{dt.price}</td>
                <td><button onClick={() => handleDelete(dt)} className="btn btn-ghost bg-red-600  text-white"><FaTrashAlt></FaTrashAlt></button></td>
                <td>
                    Pay
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default SelectedClass;
