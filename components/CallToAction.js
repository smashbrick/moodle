"use client";

import Link from "next/link";
import Button from "./Button";

import { useAuth } from "@/context/AuthContext";

function CallToAction() {
	const { currentUser } = useAuth();

	if (currentUser) {
		return (
			<div className="max-w-[600px] mx-auto w-full">
				<Link href={"/dashboard"}>
					<Button full dark text="Go to dashboard" />
				</Link>
			</div>
		);
	}

	return (
		<div className="grid grid-cols-2 gap-4 w-fit mx-auto">
			<Link href={"/dashboard"}>
				<Button text="Sign Up" />
			</Link>
			<Link href={"/dashboard"}>
				<Button text="Login" dark />
			</Link>
		</div>
	);
}

export default CallToAction;
