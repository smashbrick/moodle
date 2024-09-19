import Dashboard from "@/components/Dashboard";
import Loading from "@/components/Loading";
import Login from "@/components/Login";
import Main from "@/components/Main";

export const metadata = {
	title: "Moodle ⋅ Dashboard",
};

function DashboardPages() {
	return (
		<Main>
			<Dashboard />
		</Main>
	);
}

export default DashboardPages;
