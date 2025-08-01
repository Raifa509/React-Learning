import myStyles from "./style.module.css";

function Employee({ parentData, isEmp }) { //destructure is used here,key in curly braces

    // js code

    const getName = (event) => {
        console.log(event.target.value);

    }


    return (
        <>
            <h2 style={{ margin: 25 }} className="m-5">Employee</h2>
            {/* conditional rendering */}
            {isEmp && <h5 className="m-5">Data from App Component : <span className="text-danger">{parentData}</span> </h5>}
            <div className="m-5 border">
                <input onChange={(e) => getName(e)} type="text" className="form-control" placeholder="Input Username" />
            </div>
            <p className={myStyles.paraStyle}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Esse repudiandae neque mollitia itaque accusamus sint similique eius assumenda, iure obcaecati enim error incidunt harum ab beatae saepe modi pariatur nam.
                Quam, accusamus quae mollitia maxime placeat, eius dolore facere illo provident quo quisquam quidem beatae, ducimus tenetur consequatur pariatur porro! Aliquid quis rem dolorem veritatis non expedita id autem sapiente!
                Reprehenderit iure maxime magnam blanditiis aliquid consequuntur quia accusamus. Quibusdam laudantium molestias nihil illum culpa, maiores, corrupti reprehenderit vitae voluptatibus inventore eum deserunt quisquam quasi. Sapiente repellendus dolores corporis sequi!</p>

        </>

    )
}
export default Employee