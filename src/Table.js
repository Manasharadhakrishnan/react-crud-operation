import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

function Table() {
  const [posts, setPosts] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    
      fetch(`https://63cfb75b8a780ae6e67b1f01.mockapi.io/user/`)
        .then((res) => res.json())
        .then((data) => {
          console.log(data);
          setPosts(data);
        })
      },[])

        function editFunc(id) {
          navigate(`/form/${id} `)
  
      }

  function removeData(id) {
    if (window.confirm('Are you sure?')) {
      fetch(`https://63cfb75b8a780ae6e67b1f01.mockapi.io/user/${id}`, {
        method: 'DELETE',
        headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json'
        }
      })
        .then(() => {
          console.log('Deleted');
          const updatedPosts = posts.filter((post) => post.id !== id);
          setPosts(updatedPosts);
        })
        .catch((err) => console.log(err));
    }
  }

  return (
    <>
      <div className='container table-responsive py-5 my-3'>
        <table className='table table-dark table-bordered table-hover'>
          <thead className='thead-dark'>
            <tr>
              <th scope='col sm'>Name</th>
              <th scope='col sm'>Email</th>
              <th scope='col sm'>PhoneNumber</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {posts.map((post) => (
              <tr key={post.id}>
                <td>{post.username}</td>
                <td>{post.email}</td>
                <td>{post.number}</td>
                <td>
                  <button
                    className='border-0 bg-primary ms-4 rounded'
                    type='button'
                    onClick={() => editFunc(post.id)}
                  >
                    Edit
                  </button>
                  <button
                    className='border-0 bg-danger ms-4 rounded'
                    type='button'
                    onClick={() => removeData(post.id)}
                  >
                    Delete
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </>
  )
};

export default Table;

// import { useState, useEffect } from 'react';
// import { useNavigate, useParams } from 'react-router-dom';

// function Table() {
//   const { id } = useParams(); // Retrieve id parameter from URL
//   const [selectedPost, setSelectedPost] = useState({});
//   const navigate = useNavigate();

//   // Fetch selected post from API
//   useEffect(() => {
//     if (id) {
//       fetch(`https://63cfb75b8a780ae6e67b1f01.mockapi.io/user/${id}`)
//         .then((res) => res.json())
//         .then((data) => {
//           console.log(data);
//           setSelectedPost(data);
//         })
//         .catch((err) => console.log(err));
//     }
//   }, [id]);
  
//   const editFunc = (post) => {
//     setSelectedPost(post);
//     navigate('/form', { state: { post } });
//   };

//   const removeData = (id) => {
//     if (window.confirm('Are you sure?')) {
//       fetch(`https://63cfb75b8a780ae6e67b1f01.mockapi.io/user/${id}`, {
//         method: 'DELETE',
//         headers: {
//           'Accept': 'application/json',
//           'Content-Type': 'application/json'
//         }
//       })
//         .then((res) => {
//           if (res.ok) {
//             console.log('Deleted');
//             setSelectedPost({});
//           } else {
//             throw new Error(`Failed to delete post with id ${id}`);
//           }
//         })
//         .catch((err) => console.log(err));
//     }
//   }
//   return (
//     <>
//       <div className="container mt-5">
//         <div className="row">
//           <div className="col-md-12">
//             <table className="table table-hover  table-dark table-striped">
//               <thead className="table-dark">
//                 <tr>
//                   <th>Username</th>
//                   <th>Email</th>
//                   <th>PhoneNumber</th>
//                   <th>Action</th>
                
//                 </tr>
//               </thead>
//               <tbody>
//                 <tr key={selectedPost.id}>
//                   <td>{selectedPost.username}</td>
//                   <td>{selectedPost.email}</td>
//                   <td>{selectedPost.number}</td>
//                   <td>
//                     <button
//                       className="btn btn-primary me-4"
//                       onClick={() => editFunc(selectedPost)}
//                     >
//                       Edit
//                     </button>
//                     <button
//                       className="btn btn-danger"
//                       onClick={() => removeData(selectedPost.id)}
//                     >
//                       Delete
//                     </button>
//                   </td>
//                 </tr>
//               </tbody>
//             </table>
//           </div>
//         </div>
//       </div>
//     </>
//   );
// }

// export default Table;
