"use client";

import Link from "next/link";
import Button from "./Button";
import { usePathname } from "next/navigation";
import { useAuth } from "@/context/AuthContext";

function Logout() {
	const { logout, currentUser } = useAuth();
	const pathname = usePathname();
	console.log(pathname);

	if (!currentUser) {
		return null;
	}

	if (pathname === "/") {
		return (
			<Link href={"/dashboard"}>
				<Button text="Go to dashboard" />
			</Link>
		);
	}
	return <Button text="Log out" clickHandler={logout} />;
}

export default Logout;
