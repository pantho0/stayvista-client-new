import axiosSecure from ".";
// save user in db 
export const saveUser = async (user) => {
  const currentUser = {
    email: user?.email,
    role: "guest",
    status: "verified",
  };
  const {data} = await axiosSecure.put(`/users/${user?.email}`, currentUser)
  return data;
};

// get token from server
export const getToken = async email =>{
    const {data} = await axiosSecure.post('/jwt', email)
    console.log('token received from server----------->', data);
    return data;
}

// Clear token from browser
export const clearCookie = async email =>{
    const {data} = await axiosSecure.get('/logout')
    return data;
}

// get user role 
export const getRole = async(email) =>{
  const {data} = await axiosSecure(`/user/${email}`)
    return data.role;
}