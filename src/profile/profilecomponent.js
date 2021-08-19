import React from "react"
import propTypes from "prop-types"

const ProfileComp = props => {
    const imgobject={ width:"400px",height:"400px"}
    const titre={ color :"red"}
    const btn={ color :"blue"}
    return(

        <div className="propcomp" style={{width:"70%",backgroundColor:"#F4F1F2",margin:"auto"}}>
            <div>
            <div>
                <h2 style={titre}>{props.title}</h2>
                <img style={imgobject} src={props.picture}/>
            </div>
            <div>
                <p><h2 style={titre}>FullName :</h2>{props.fullname} </p>
                <p><h2 style={titre}>Bio :</h2>{props.bio}</p>
                <p><h2 style={titre}>Profession :</h2>{props.profession}</p>
            </div>
            </div>
            <br/><br/><br/><br/>
            <button style={btn} onClick={() => props.alertMyInput(`My name is :`+props.fullname)}>
                HelloButton 
            </button>
        <br/><br/>
        
        </div>
    )
}
ProfileComp.propTypes={
    FullName : propTypes.string,
    Bio :propTypes.string,
    Profession :propTypes.string,
}

export default ProfileComp;