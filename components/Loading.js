function Loading() {
	return (
		<div className="flex flex-col flex-1 justify-center items-center">
			{/* Got the icon from font-awesome icons, best part is that tailwind allows
			you to use animate-spin */}
			<i className="fa-solid fa-spinner text-slate-800 animate-spin text-4xl sm:text-5xl"></i>
		</div>
	);
}

export default Loading;
