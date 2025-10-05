type userdata={
   user: {
    name: string;
    age: number;
    register: boolean;
    lang: string[];
}
}
const User = ({user}:userdata) => {
  return (
    <div>
      <p>
        Speaks: {user.age},{user.name},{user.register}
        {user.lang.map((language,index)=>{
          return <span key={index}>{language}-{index}<br></br> </span>
        })}
      </p>
    </div>
  )
}

export default User
