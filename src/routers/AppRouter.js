import React, { useEffect, useState } from 'react';
import {
    BrowserRouter as Router,
    Switch,
    Redirect
  } from 'react-router-dom';

import { AuthRouter } from './AuthRouter';
import { JournalScreen } from '../components/journal/JournalScreen';
import { firebase } from '../firebase/firebase-config';
import { login } from '../actions/auth';
import { useDispatch } from 'react-redux';
import { PrivateRoute } from './PrivateRoute';
import { PublicRoute } from './PublicRoute';

export const AppRouter = () => {

    const dispatch = useDispatch();
    const [checking, setChecking] = useState(true);
    const [isLoggedIn, setIsLoggerdIn] = useState(false)

    useEffect(() => {
        firebase.auth().onAuthStateChanged((user) => {
            if(user?.uid) {
                dispatch(login(user.uid, user.displayName));
                setIsLoggerdIn(true);
            } else {
                setIsLoggerdIn(false);
            }

            setChecking(false);
        });
    }, [dispatch, setChecking]);

    if(checking) {
        return (<h1>Espere...</h1>)
    }


    return (
        <Router>
            <div>
                <Switch>
                    <PublicRoute 
                        path="/auth"
                        component={ AuthRouter }
                        isAuthenticated={isLoggedIn}
                    />

                    <PrivateRoute
                        exact
                        path="/"
                        isAuthenticated={isLoggedIn}
                        component={ JournalScreen }
                    />

                    <Redirect to="/auth/login" />


                </Switch>
            </div>
        </Router>
    )
}
