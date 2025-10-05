import React from 'react'
type userdata={
     users: {
    id: number;
    name: string;
    email: string;
    age: number;
}[]
}

const Userdemo = ({users}:userdata) => {
    console.log(users)
  return (
    <div>
      {
        users.map((user)=>{
            const {id,name,age,email}=user
            return(
                <div key={id}>
                    <h1>{name}</h1>
                    <p>{email}</p>
                    <p>{age}</p>
                </div>
            )
        })
      }
    </div>
  )
}

export default Userdemo
