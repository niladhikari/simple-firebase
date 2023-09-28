
import { GithubAuthProvider, GoogleAuthProvider, getAuth, signInWithPopup, signOut } from "firebase/auth";
import app from "../../firebase/firebase.init";
import { useState } from "react";

const Login = () => {
 const [user,setUser] = useState(null)
    const auth = getAuth(app);
    // console.log(auth);
    const googleProvider = new GoogleAuthProvider();
    const githubProvider = new GithubAuthProvider();


     // google SignIn
    const handleGoogleSignIn = ()=>{
        signInWithPopup(auth,googleProvider)
        .then(result =>{
            const loginUser = result.user;
            console.log(loginUser);
            setUser(loginUser);
        })
        .catch(error=> {
            console.log('error',error.message);
        })
    }

    // github SignIn

    const handleGithubSignIn = ()=>{
        signInWithPopup(auth,githubProvider)
        .then(result =>{
            const loginUser = result.user;
            console.log(loginUser);
            setUser(loginUser);
        })
        .catch(error=> {
            console.log('error',error.message);
        })
    }

    const handleSignOut = ()=>{
        signOut(auth)
        .then(result =>{
            console.log(result);
            setUser(null)
        })
        .catch(error=> {
            console.log('error',error.message);
        })
    }
   

    return (
        <div className="">
          {user ? <button onClick={handleSignOut}
            >Sign Out</button> : 
            <div>
                <button onClick={handleGoogleSignIn}
            >Google Login</button>
            <button onClick={handleGithubSignIn}
            >GitHub Login</button>
            </div>
          }
            {user && <div>
               <h2>User : {user.displayName}</h2>
               <h2>User : {user.email}</h2>
               <img src={user.photoURL} alt="" />

            </div>
            }
        </div>
    );
};

export default Login;