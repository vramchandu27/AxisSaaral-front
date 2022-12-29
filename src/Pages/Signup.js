import React, { useState, useRef } from "react";
import sign from "../CSS/Signup.css";
import img2 from "../Images/Image2.jpg";
import { useDispatch, useSelector } from "react-redux";
import { registerUser } from "../Redux/Registerslice";


const isEmpty = value => value.trim() === '';
const istencharacters = value => value.trim().length === 10;

function Signup() {

    const [fullname, setFullname] = useState("");
    const [dateofbirth, setDateofbirth] = useState("");
    const [mobileno, setMobileno] = useState("");
    const [address, setAddress] = useState("");
    const [emailid, setEmailid] = useState("");
    const [password, setPassword] = useState("");
    const [role, setRole] = useState("")



    const dispatch = useDispatch();
    const user = useSelector((state) => state.register.user);

    const [formInputsValidity, setformInputsValidity] = useState({
        Fullname: true,
        Dateofbirth: true,
        Mobileno: true,
        Address: true,
        Emailid: true,
        Password: true,
        Role: true,

    })

    const fullnameRef = useRef();
    const dateofbirthRef = useRef();
    const mobilenoRef = useRef();
    const addressRef = useRef();
    const emailidRef = useRef();
    const passwordRef = useRef();
    const roleRef = useRef();

    const confirmHandler = (event) => {
        event.preventDefault();

        const enteredfullname = fullnameRef.current.value;
        const entereddateofbirth = dateofbirthRef.current.value;
        const enteredmobileno = mobilenoRef.current.value;
        const enteredaddress = addressRef.current.value;
        const enteredemailid = emailidRef.current.value;
        const enteredpassword = passwordRef.current.value;
        const enteredrole = roleRef.current.value;


        const enteredfullnameIsValid = !isEmpty(enteredfullname);
        const entereddateofbirthIsValid = !isEmpty(entereddateofbirth);
        const enteredmobilenoIsValid = !isEmpty(enteredmobileno);
        const enteredaddressIsValid = !isEmpty(enteredaddress);
        const enteredemaildIsValid = !isEmpty(enteredemailid);
        const enteredpasswordIsValid = !isEmpty(enteredpassword);
        const enteredroleIsValid = !isEmpty(enteredrole);

        setformInputsValidity({

            fullname: enteredfullnameIsValid,
            dateofbirth: entereddateofbirthIsValid,
            mobileno: enteredmobilenoIsValid,
            address: enteredaddressIsValid,
            emailid: enteredemaildIsValid,
            password: enteredpasswordIsValid,
            role: enteredroleIsValid

        })

        const formIsValid = enteredfullnameIsValid && entereddateofbirthIsValid && enteredmobilenoIsValid && enteredaddressIsValid &&
            enteredemaildIsValid && enteredpasswordIsValid && enteredroleIsValid;

        if (formIsValid) {
            dispatch(registerUser({
                fullname: fullname,
                dateofbirth: dateofbirth,
                mobileno: mobileno,
                address: address,
                emailid: emailid,
                password: password,
                role: role
            })
            )
        }

    }


    return (
        <div>
            <div className="Signup">
                <div className="Signup-outer">
                    <div className="Signup-Inner1">
                        <h2>Please follow the Instructions</h2>
                        <h3> ! Fullname should be given as per the aadhar card.
                            <br />
                            ! Email-Id should be by the given conditions.
                            <br />
                            (#Email addresses must be start with a letter symbol.
                            <br /> And any number of letters or digits or underscore (_)
                            <br /> can be appended, and only a single dot (.)
                            <br />is allowed but other symbols and white spaces are not allowed.
                            <br />The name field of the address must end with either
                            <br /> a letter or digit.
                            If underscore or dote is used then before it,
                            <br /> letters or digits must be used for a valid name.
                            <br />
                            Dot can be used only once but underscore can be used multiple times.)
                            <br />
                            ! Mobile-no is required to send the messages in personal.
                            <br />
                            ! Address should be  permanent,our bank official will visit.
                            <br />
                            ! Password should be strong and should be given as per the instuructions.
                            <br />
                        </h3>
                    </div>
                    <div className="Signup-inner2">
                        <form id="form" action="#" method="POST" onSubmit={confirmHandler}>
                            <label className="Signup-label1">Full-Name</label>
                            <br />
                            <input type="text" className="Signup-fullname" ref={fullnameRef} onChange={(e) => setFullname(e.target.value)}></input>
                            {!formInputsValidity.Fullname && <p className="para_fn">Enter a valid Fullname</p>}
                            <br />
                            <br />
                            <label className="Signup-label1">Date-of-Birth</label>
                            <br />
                            <input type="text" className="Signup-dob" ref={dateofbirthRef} onChange={(e) => setDateofbirth(e.target.value)}></input>
                            {!formInputsValidity.Dateofbirth && <p className="para_fn">Enter a valid dateofbirth</p>}
                            <br />
                            <br />
                            <label className="Signup-label1">Mobile-No</label>
                            <br />
                            <input type="text" className="Signup-mobile" ref={mobilenoRef} onChange={(e) => setMobileno(e.target.value)}></input>
                            {!formInputsValidity.Mobileno && <p className="para_fn">Enter a valid mobile</p>}
                            <br />
                            <br />
                            <label className="Signup-label1">Address</label>
                            <br />
                            <input type="text" className="Signup-address" ref={addressRef} onChange={(e) => setAddress(e.target.value)}></input>
                            {!formInputsValidity.Address && <p className="para_fn">Enter a valid address</p>}
                            <br />
                            <br />
                            <label className="Signup-label1">Email-ID</label>
                            <br />
                            <input type="text" className="Signup-email" ref={emailidRef} onChange={(e) => setEmailid(e.target.value)}></input>
                            {!formInputsValidity.Emailid && <p className="para_fn">Enter a valid email</p>}
                            <br />
                            <br />
                            <label className="Signup-label1">Password</label>
                            <br />
                            <input type="password" className="Signup-password" ref={passwordRef} onChange={(e) => setPassword(e.target.value)}></input>
                            {!formInputsValidity.Password && <p className="para_fn">Enter a valid password</p>}
                            <br />
                            <br />
                            <select ref={roleRef} onChange={(e) => setRole(e.target.value)}>
                                <option>Role</option>
                                <option>Employee</option>
                                <option>Manager</option>
                                <option>Customer</option>
                            </select>
                            <button className="Signup-btn" >SIGN UP</button>
                        </form>
                    </div>


                </div>
            </div>
        </div>
    )
}

export default Signup;