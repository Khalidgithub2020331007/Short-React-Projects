type userporps={
    name:string,
    age:number,
    register:boolean
}
const User = ({name,age,register}:userporps) => {
  return (
    <div>
      <h2>{name}</h2>
      <h1> Age: {age}</h1>
      {register?<p>You are regestered</p>:<p>Not registered</p>}
    </div>
  )
}

export default User
