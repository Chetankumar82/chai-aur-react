import React, { useContext } from 'react'

function Profile() {
    const{user} = useContext
    if (!user) return <div>please login</div> 
    
    return <div>Welcome {user.username}</div>

}

export default Profile