import React from "react";
import useManage from "../../../hook/useManage";

const ManageUser = () => {
  const [cart, refetch] = useManage();
  const addInst = (id) =>{
    fetch(`http://localhost:5000/users/update/${id}`, {
        method: 'PATCH',
        headers: {
          'Content-Type': 'application/json'
        },
       
      })
        .then(res => {
            refetch()
          return res.json();
        })
        .then(data => {
          console.log(data);
        })
        .catch(err => {
          console.log(err);
        });
  }
  return (
    <div className="overflow-x-auto">
      <table className="table">
        {/* head */}
        <thead>
          <tr>
            <th>Sl</th>
            <th>Email</th>
            <th>Role</th>
            <th>Promote</th>
          </tr>
        </thead>
        <tbody>
          {/* row 1 */}
          {cart?.map((cd, i) => (
            <tr key={cd._id}>
              <th>{i + 1}</th>
              <td>{cd.email}</td>
              <td>{cd.role || "student"}</td>
              <td>
                {cd?.role ? (
                  cd.role
                ) : (
                  <button onClick={()=>addInst(cd?._id)} className="btn btn-outline btn-primary">
                    Add instructor
                  </button>
                )}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default ManageUser;
