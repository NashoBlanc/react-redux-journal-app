import { types } from "../types/types"
import { firebase, googleAuthProvider } from "../firebase/firebase-config";
export const startLoginEmailPasssword = (email, password) => {
    return (dispatch) => {
        setTimeout(() => {
            dispatch(login(123, 'Pedro'))
        },3500);
    }
}

export const startRegisterWithEmailPasswordName = (email, password, name) => {
    return (dispatch) => {

        firebase.auth().createUserWithEmailAndPassword(email, password)
        .then( async ({user}) => {
            await user.updateProfile({displayName: name});
            dispatch(login(user.uid, user.displayName))
        })
        .catch(e => {
            console.log(e);
        })

    }
}

export const startGoogleLogin = (email, password) => {
    return (dispatch) => {

        firebase.auth().signInWithPopup(googleAuthProvider)
        .then(({user}) => {
            dispatch(login(user.uid, user.displayName))
        });

    }
}

export const login = (uid, displayName) => {
    return {
        type: types.login,
        payload:{
            uid,
            displayName
        }
    }
}