import React, { useState } from "react";

export default function Form(props){

    const [member, setMember] = useState({
        name:"",
        email:"",
        role:""
    });

    function handleUpdate(event){
        const updatedMember = {
            ...member, [event.target.name]: event.target.value
        };

        setMember(updatedMember);
    }

    function handleSubmit(event){
        event.preventDefault();
        props.setMemberList(memberList => [...memberList, member])
    }

    return(
        <form onSubmit={handleSubmit}>
            <fieldset>
                <label>Member Sign-up</label>
                <div className="inputField">
                <label for="name">
                    Name
                <div>
                    <input type="text" name ="name" placeholder="Name" value={member.name} onChange={handleUpdate}/>
                </div>
                </label>
                </div>

                <div className="inputField">
                    <label for="email">
                    E-mail
                    <div>
                    <input type="text" name="email" placeholder="Email" value={member.email} onChange={handleUpdate}/>
                    </div>
                    </label>
                    </div>

                    <div className="inputField">
                    <label for="role">
                    Role
                    <div>
                    <input type="text" name="role" placeholder="Role" value={member.role} onChange={handleUpdate}/>
                    </div>
                    </label>
                    </div>
                    <button type="submit">Submit</button>
            </fieldset>
            </form>
    );
}
