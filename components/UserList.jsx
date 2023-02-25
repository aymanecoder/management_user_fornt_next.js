import { useEffect, useState } from 'react';
import User from './User'

const UserList = ({ user }) => {
    const USER_API_BASE_URL = "http://localhost:8082/api/v1/users";
    const [users,setUsers]=useState(null);
    const [loading,setLoading] = useState(true);
    const [userId, setUserId] = useState(null)
    useEffect(()=>{
        const fetchData = async()=>{
            setLoading(true);
            try {
                const response = await fetch(USER_API_BASE_URL,{
                    method: 'GET',
                    headers: {
                        "content-type": "application/json",
                    },
                });
                
                const users =await response.json();
                console.log(users);
                setUsers(users);
            }catch(e){
                console.log(e);


            }
            setLoading(false);
        };
        fetchData();
    },[user]);

    const deleteUser =(e,id)=>{
        e.preventDefault();
        fetch(USER_API_BASE_URL + '/' + id,{
            method: 'DELETE',

        }).then((res)=>{
            if(users){
                setUsers((prevElement)=>{
                    return prevElement.filter((user)=>user.id !== id);

                });

            }
        });
        const updateUser =(e,id)=>{
            e.preventDefault();
            setUserId(id);
            
        }

    }
    return ( 
    <div className="container mx-auto my-8">
        <div className="flex shadow border-b">
            <table className="min-w-full">
                <thead className="bg-gray-50">
                    <tr>
                        <th className="text-left font-medium text-gray-500 upprcase tracking-wide py-3 px-6">First Name</th>
                        <th className="text-left font-medium text-gray-500 upprcase tracking-wide py-3 px-6">Last Name</th>
                        <th className="text-left font-medium text-gray-500 upprcase tracking-wide py-3 px-6">EmailId</th>
                        <th className="text-left font-medium text-gray-500 upprcase tracking-wide py-3 px-6">Action</th>
                    </tr>
                </thead>
               {!loading ?( <tbody className="bg-white">
                   { users.map((user)=>(
                        <User user={user} key={user.id}  deleteUser={deleteUser} updateUser={updateUser}/>
                    )
                    )}
                 </tbody>) : null }
               
                       
            </table>


        </div>


    </div> );
}
 
export default UserList;