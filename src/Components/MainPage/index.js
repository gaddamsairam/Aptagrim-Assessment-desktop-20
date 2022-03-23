

import {Component} from "react"
import { MdOutlineDashboard,MdOutlinePersonOutline,MdKeyboardArrowDown,MdPeople,MdOutlineSettings,MdSearch } from "react-icons/md"
import {ImMenu} from "react-icons/im"
import  {BsDoorOpen,BsBuilding,BsPersonCheck} from "react-icons/bs"
import {RiFilePaperLine,RiLightbulbFlashLine} from "react-icons/ri"
import {VscFeedback} from "react-icons/vsc"
import "./index.css"
import Profiles from "../Profiles"

const candidatesList = [
    {
        id:1,
        name:"Applicant 2",
        mail:"Applicant1@gmail.com",
        role:"UX/UI Designer",
        mobileNumber:"9959149451",
    },
    {
        id:2,
        name:"Applicant 2",
        mail:"Applicant1@gmail.com",
        role:"UX/UI Designer",
        mobileNumber:"9959149451",
    },
    {
        id:3,
        name:"Applicant 2",
        mail:"Applicant1@gmail.com",
        role:"UX/UI Designer",
        mobileNumber:"9959149451",
    },
    {
        id:4,
        name:"Applicant 2",
        mail:"Applicant1@gmail.com",
        role:"UX/UI Designer",
        mobileNumber:"9959149451",
    },
    {
        id:5,
        name:"Applicant 2",
        mail:"Applicant1@gmail.com",
        role:"UX/UI Designer",
        mobileNumber:"9959149451",
    },
    {
        id:6,
        name:"Applicant 2",
        mail:"Applicant1@gmail.com",
        role:"UX/UI Designer",
        mobileNumber:"9959149451",
    },
    {
        id:7,
        name:"Applicant 2",
        mail:"Applicant1@gmail.com",
        role:"UX/UI Designer",
        mobileNumber:"9959149451",
    },
    {
        id:8,
        name:"Applicant 2",
        mail:"Applicant1@gmail.com",
        role:"UX/UI Designer",
        mobileNumber:"9959149451",
    },
    {
        id:9,
        name:"Applicant 2",
        mail:"Applicant1@gmail.com",
        role:"UX/UI Designer",
        mobileNumber:"9959149451",
    },
    {
        id:10,
        name:"Applicant 2",
        mail:"Applicant1@gmail.com",
        role:"UX/UI Designer",
        mobileNumber:"9959149451",
    },
    {
        id:11,
        name:"Applicant 2",
        mail:"Applicant1@gmail.com",
        role:"UX/UI Designer",
        mobileNumber:"9959149451",
    },
    {
        id:12,
        name:"Applicant 2",
        mail:"Applicant1@gmail.com",
        role:"UX/UI Designer",
        mobileNumber:"9959149451",
    },
    {
        id:13,
        name:"Applicant 2",
        mail:"Applicant1@gmail.com",
        role:"UX/UI Designer",
        mobileNumber:"9959149451",
    },
    {
        id:14,
        name:"Applicant 2",
        mail:"Applicant1@gmail.com",
        role:"UX/UI Designer",
        mobileNumber:"9959149451",
    },
    {
        id:15,
        name:"Applicant 2",
        mail:"Applicant1@gmail.com",
        role:"UX/UI Designer",
        mobileNumber:"9959149451",
    },
    {
        id:16,
        name:"Applicant 2",
        mail:"Applicant1@gmail.com",
        role:"UX/UI Designer",
        mobileNumber:"9959149451",
    },
    {
        id:17,
        name:"Applicant 2",
        mail:"Applicant1@gmail.com",
        role:"UX/UI Designer",
        mobileNumber:"9959149451",
    },
    {
        id:18,
        name:"Applicant 2",
        mail:"Applicant1@gmail.com",
        role:"UX/UI Designer",
        mobileNumber:"9959149451",
    },
    {
        id:19,
        name:"Applicant 2",
        mail:"Applicant1@gmail.com",
        role:"UX/UI Designer",
        mobileNumber:"9959149451",
    },
    {
        id:20,
        name:"Applicant 2",
        mail:"Applicant1@gmail.com",
        role:"UX/UI Designer",
        mobileNumber:"9959149451",
    },
    {
        id:21,
        name:"Applicant 2",
        mail:"Applicant1@gmail.com",
        role:"UX/UI Designer",
        mobileNumber:"9959149451",
    },
    {
        id:22,
        name:"Applicant 2",
        mail:"Applicant1@gmail.com",
        role:"UX/UI Designer",
        mobileNumber:"9959149451",
    },
    {
        id:23,
        name:"Applicant 2",
        mail:"Applicant1@gmail.com",
        role:"UX/UI Designer",
        mobileNumber:"9959149451",
    },
    {
        id:24,
        name:"Applicant 2",
        mail:"Applicant1@gmail.com",
        role:"UX/UI Designer",
        mobileNumber:"9959149451",
    },
    {
        id:25,
        name:"Applicant 2",
        mail:"Applicant1@gmail.com",
        role:"UX/UI Designer",
        mobileNumber:"9959149451",
    }
]


class MainPage extends Component {
    render(){
        return(
            <div className="main-container">
            <div className="left-conatiner">
                <h1 className="page-heading">EOA</h1>
                <div className="dashboard-container">
                    <MdOutlineDashboard className="icon"/>
                    <p className="tag-names">Dashboard</p>
                </div>
                <div className="employ-container">
                    <MdOutlinePersonOutline className="icon"/>
                    <p className="employ-tag-names">Employees</p>
                </div>
                <div className="stage-full-container">
                <div className="dashboard-container">
                    <ImMenu className="icon"/>
                    <p className="tag-names">Stages</p>
                </div>
                <MdKeyboardArrowDown className="icon-down" />
                </div>
                <ul className="ul-list-1">
                    <li className="list">
                        <BsDoorOpen className="icons" />
                        <p className="list-text" >Welcome Stages</p>
                    </li>
                    <li className="list">
                        <RiFilePaperLine className="icons" />
                        <p className="list-text" >Offer Letter</p>
                    </li>
                    <li className="list">
                        <RiLightbulbFlashLine className="icons" />
                        <p className="list-text" >Skill Matrix</p>
                    </li>
                    <li className="list">
                        <BsBuilding className="icons" />
                        <p className="list-text" >Know Your Company</p>
                    </li>
                    <li className="list">
                        <MdPeople className="icons" />
                        <p className="list-text" >Joining Day Information</p>
                    </li>
                    <li className="list">
                        <VscFeedback className="icons" />
                        <p className="list-text" >Feedback</p>
                    </li>
                    <li className="list">
                        <BsPersonCheck className="icons" />
                        <p className="list-text" >Background Check</p>
                    </li>
                </ul>
                <div className="dashboard-container">
                    <MdOutlineSettings className="icon"/>
                    <p className="tag-names">Settings</p>
                </div>
            </div>
            <div className="right-container">
                <div className="employess-main-container">
                    <h1 className="container-name">Employees</h1>
                    <div className="employes-right-container">
                        <div className="search-container">
                            <input type="search" className="search-bar" placeholder="Search" />
                            <MdSearch className="search-icon"/>
                        </div>
                        <img src="https://res.cloudinary.com/ddzm2v7i3/image/upload/v1648013720/apatagram%20assigment/Group_3620bell-icon_ejnsue.png" className="emp-container-icons" alt="Notification" />
                        <img src="https://res.cloudinary.com/ddzm2v7i3/image/upload/v1648013722/apatagram%20assigment/Group_414message-icon_gqfldx.png" className="emp-container-icons" alt="Message" />
                        <img src="https://res.cloudinary.com/ddzm2v7i3/image/upload/v1648013725/apatagram%20assigment/Group_407profile-icon_l5eyhw.png" className="emp-container-icons" alt="Profile" />
                    </div>
                </div>
                <ul className="process-container">
                    <li className="process-name-selected">New Hire</li>
                    <li className="process-name">Onboarding In-Progress</li>
                    <li className="process-name">Onboarding Completed</li>
                    <li className="process-name">Background Check</li>
                </ul>
                <div className="count-and-filter-container">
                    <h1 className="count-of-candidates">No of Candidates:<span className="count">25</span></h1>
                    <div className="filter-container">
                        <img src="https://res.cloudinary.com/ddzm2v7i3/image/upload/v1648017651/apatagram%20assigment/Group_1912filter-icon_cyhjfu.png" className="filter-icon" alt="filter"/>
                        <hr className="line"/>
                        <img src="https://res.cloudinary.com/ddzm2v7i3/image/upload/v1648017789/apatagram%20assigment/calendar_1_1calander_xcr59d.png" className="filter-icon" alt="calander"/>
                    </div>
                </div>
                <ul className="profile-container">
                {candidatesList.map(eachProfile=>(
                    <Profiles key={eachProfile.id} details={eachProfile} />
                ))}
            </ul>
            </div>
            
            </div>
        )
    }
}

export default MainPage