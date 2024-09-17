"use client";

import React, { useState } from "react";

import { baseRating, gradients } from "@/utils";

const months = {
	January: "Jan",
	February: "Feb",
	March: "Mar",
	April: "Apr",
	May: "May",
	June: "Jun",
	July: "Jul",
	August: "Aug",
	September: "Sept",
	October: "Oct",
	November: "Nov",
	December: "Dec",
};
const monthsArr = Object.keys(months);

const now = new Date();

const dayList = [
	"Sunday",
	"Monday",
	"Tuesday",
	"Wednesday",
	"Thursday",
	"Friday",
	"Saturday",
];

function Calender(props) {
	const now = new Date();
	const currMonth = now.getMonth();
	const [selectedMonth, setSelectedMonth] = useState(
		Object.keys(months)[currMonth]
	);
	const [selectedYear, setSelectedYear] = useState(now.getFullYear());

	function handleIncrementMonth(val) {
		// value +1 -1
		// if we hit the bounds of the months, then we can just adjust the year that is displayed instead
	}

	const { demo, data, handleSetMood } = props;

	// const year = 2024;

	// const month = "July";

	const monthNow = new Date(
		selectedYear,
		Object.keys(months).indexOf(selectedMonth),
		1
	);

	const firstDayOfMonth = monthNow.getDay();

	const daysInMonth = new Date(
		selectedYear,
		Object.keys(selectedMonth).indexOf(selectedMonth) + 1,
		0
	).getDate();

	const daysToDisplay = firstDayOfMonth + daysInMonth;

	const numRows = Math.floor(daysToDisplay / 7) + (daysToDisplay % 7 ? 1 : 0);

	return (
		<div className="flex flex-col overflow-hidden gap-1 py-4 sm:py-6 md:py-10">
			{[...Array(numRows).keys()].map((row, rowIndex) => {
				return (
					<div key={rowIndex} className="grid grid-cols-7 gap-1">
						{dayList.map((dayOfWeek, dayOfWeekIndex) => {
							let dayIndex =
								rowIndex * 7 + dayOfWeekIndex - (firstDayOfMonth - 1);
							let dayDisplay =
								dayIndex > daysInMonth
									? false
									: row === 0 && dayOfWeekIndex < firstDayOfMonth
									? false
									: true;

							let isToday = dayIndex === now.getDate();

							if (!dayDisplay) {
								// Self closing Div
								return <div className="bg-white" key={dayOfWeekIndex} />;
							}
							let color = demo
								? gradients.indigo[baseRating[dayIndex]]
								: dayIndex in data
								? gradients.indigo[data[dayIndex]]
								: "white";
							return (
								<div
									// Dynamic style because its calculated inside javascript
									style={{ background: color }}
									key={dayOfWeekIndex}
									className={
										"text-xs sm:text-sm border border-solid p-2 flex items-center gap-2 justify-between rounded-lg " +
										(isToday ? "border-indigo-400 " : "border-indigo-100 ") +
										(color == "white" ? "text-indigo-400 " : "text-white ")
									}
								>
									<p>{dayIndex}</p>
								</div>
							);
						})}
					</div>
				);
			})}
		</div>
	);
}

export default Calender;
