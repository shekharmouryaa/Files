
const baseUrl = "https://mern-admin-backend-jxw3.onrender.com"

const getAllUsers = () =>{
    fetch(`${baseUrl}/general/employees`,{
        method :"GET"
    })
    .then(res => res.json())
    .then(data => setUsers(data.employees))
    .catch(err =>{
        toast.error("Something Went Wrong")
    })
}

const deleteUser = (userid) => {
    fetch(`${baseUrl}/general/employee/delete/${userid}`, {
        method :'DELETE'
    })
    .then(res => res.json())
    .then(data =>{
        toast.success(data.message)
        let updatedUsers = users.filter(item => item._id !== userid)
        setUsers(updatedUsers)
        // getAllUsers()
        } )
   };

   const addNewUser =(e) =>{
    e.preventDefault()
    fetch( `${baseUrl}/general/employee/add`, {
        method :'POST',
        body: JSON.stringify(form),
        headers:{
            'content-type': 'application/json'
        },
    }).then(res => res.json()).then(data =>{
            let updatedUsers = users.concat({...data,...form})
            setUsers(updatedUsers)
            toast.success("User Added Successfully")
            setForm(userForm)
        } ).catch(err => toast.error("Something went wrong"))
   };

   const updateUser = (e) =>{
    e.preventDefault()
    fetch(`${baseUrl}/general/employee/update/${selectedUserId}`, {
        method :'PUT',
        body: JSON.stringify(form),
        headers:{'content-type': 'application/json'},
    }).then(res => res.json()).then(data =>{
        toast.success("User Updated Successfully")
        setForm(userForm)
        setIsEdit(false)
        let updatedUsers = users.map(val =>{
            if(val._id === selectedUserId){
                return form 
            }else{
                return val
            }
        })
        setUsers(updatedUsers)
        } )
   };


//    Axios Example
const [data, setData] = useState([]);

const getUsersData = async () =>{
   const users = await axios.get("https://jsonplaceholder.typicode.com/users")
    .then((response)=> {
        setData(response.data)
        return response.data
    })
    .catch((error) => console.error(error))
    console.log(users)
}
