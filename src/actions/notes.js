import {db} from '../firebase/firebase-config';

// get state params is to get actual state!
export const startNewNote = () => {
    return async (dispatch, getState) => {
        const {uid} = getState().auth;

        const newNote = {
            title: '',
            body: '',
            date: new Date().getTime()
        }

        const doc = await db.collection(`${uid}/journal/notes`).add(newNote)
        console.log(doc);
    }
}