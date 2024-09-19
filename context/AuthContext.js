"use client";

import { auth, db } from "@/firebase";

import {
	createUserWithEmailAndPassword,
	onAuthStateChanged,
	signInWithEmailAndPassword,
	signOut,
} from "firebase/auth";
import { doc, getDoc } from "firebase/firestore";
import React, { useContext, useState, useEffect } from "react";

const AuthConext = React.createContext();

export function useAuth() {
	return useContext(AuthConext);
}

export function AuthProvider({ children }) {
	const [currentUser, setCurrentUser] = useState(null);
	const [userDataObj, setUserDataObj] = useState(null);
	const [loading, setLoading] = useState(true);

	// Auth handlers
	function signup(email, password) {
		return createUserWithEmailAndPassword(auth, email, password);
	}

	function login(email, password) {
		return signInWithEmailAndPassword(auth, email, password);
	}

	function logout() {
		setUserDataObj(null);
		setCurrentUser(null);
		return signOut(auth);
	}

	useEffect(() => {
		const unsubsripe = onAuthStateChanged(auth, async (user) => {
			try {
				//Set the user to our local context state
				console.log("Fetching user data");
				setLoading(true);
				setCurrentUser(user);
				if (!user) {
					console.log("No user found");
					return;
				}
				// if user exists, fetch data from firestore database
				const docRef = doc(db, "users", user.uid);
				const docSnap = await getDoc(docRef);
				let firebaseData = {};
				if (docSnap.exists()) {
					console.log("Found user data");
					firebaseData = docSnap.data();
				}
				setUserDataObj(firebaseData);
			} catch (err) {
				console.log(err.message);
			} finally {
				setLoading(false);
			}
		});
	}, []);

	const value = {
		currentUser,
		userDataObj,
		setUserDataObj,
		signup,
		logout,
		login,
		loading,
	};

	return <AuthConext.Provider value={value}>{children}</AuthConext.Provider>;
}
