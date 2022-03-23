import "./index.css"

const Profiles =(props)=> {
    const {details} = props
    const {name,mail,role,mobileNumber} = details

    return (
        <li className="each-profile-container">
            <img src="https://res.cloudinary.com/ddzm2v7i3/image/upload/v1648015392/apatagram%20assigment/Ellipse_29profile_cn3zqg.png" className="crad-profile" alt={name} />
            <h1 className="profile-name">{name}</h1>
            <p className="profile">{mail}</p>
            <p className="profile">{role}</p>
            <p className="profile">{mobileNumber}</p>
            <button type="button" className="view-button">View</button>
        </li>
    )
}


export default Profiles