import myStyle from "./style.module.css";

function User({userData}){

    console.log({userData});
    
    // js code
    const showUser=(name)=>{
        alert(`User is ${name}`)
    }
    return(
        <>
        <h2 className={myStyle.headerStyle}>User Component</h2>
        <h5 className="m-5">User Name from App component : <span className="text-info">{userData}</span></h5>
        <div className="text-center">
            <button onClick={()=>showUser("Raifa NP")} className="btn btn-primary px-3 py-2">Show Username</button></div>
        </>
    )
}

export default User;