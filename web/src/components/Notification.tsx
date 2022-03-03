import React from "react";
import toast, { Toaster } from "react-hot-toast";
import { useNuiEvent } from "../hooks/useNuiEvent";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { debugData } from "../utils/debugData";

debugData([
	{
		action: "notify",
		data: {
			type: "primary", // Options: primary, success, error, warning, default,
			style: "colored", // Options: default, dark, colored,
			msg: "This is an example",
			icon: "fa-solid fa-vial", // Font-awesome 6.0.0,
			position: "top-right", // Options: top-left, top-center, top-right, bottom-left, bottom-center,	bottom-right
			duration: 10000,
		},
	},
]);

const Notification: React.FC = () => {
	let colorClass = "";

	const handleBackgroundClasses = (data: any) => {
		if (!data.type) data.type = "success";

		let oldClass =
			"inline-flex flex-shrink-0 justify-center items-center w-8 h-8 rounded-lg ";

		if (data.style && data.style !== "colored") {
			switch (data.type) {
				case "success":
					oldClass +=
						"text-green-500 bg-green-200 dark:bg-green-800 dark:text-green-200";
					break;
				case "error":
					oldClass +=
						"text-red-600 bg-red-200 dark:bg-red-800 dark:text-red-200";
					break;
				case "primary":
					oldClass +=
						"text-blue-600 bg-blue-200 dark:bg-blue-800 dark:text-blue-200";
					break;
				case "warning":
					oldClass +=
						"text-yellow-600 bg-yellow-200 dark:bg-yellow-600 dark:text-yellow-200";
					break;
				case "default":
					oldClass +=
						"text-slate-600 bg-slate-200 dark:text-slate-200 dark:bg-slate-700";
					break;
			}
		} else if (data.style === "colored") {
			if (data.type === "default") {
				oldClass += " text-slate-900";
			} else oldClass += " text-white";
		}
		return oldClass;
	};

	const handleWrapperClasses = (data: any) => {
		let className =
			"flex items-center p-3 mb-0.5 w-full max-w-xs shadow rounded-lg ";

		if (!data.style) data.style = "default";

		switch (data.style) {
			case "default":
				className += "text-slay-800 bg-slate-100";
				break;
			case "dark":
				className += "dark:text-gray-400 dark:bg-gray-800";
				break;
		}

		if (data.style === "colored") {
			switch (data.type) {
				case "success":
					className += "bg-green-500";
					break;
				case "error":
					className += "bg-red-500";

					break;
				case "primary":
					className += "bg-blue-500";
					break;
				case "warning":
					className += "bg-yellow-500";
					break;
				case "default":
					className += "bg-slate-100";
					break;
			}

			if (data.type === "default") {
				className += " text-slate-800";
			} else className += " text-white";
		}

		return className;
	};

	const handleColorClass = (data: any) => {
		if (data.style && data.style === "dark") return (colorClass = " dark");

		return "";
	};

	const handleNotification = (data: any) => {
		const bgClass = handleBackgroundClasses(data);
		const wrapperClass = handleWrapperClasses(data);
		const colorClass = handleColorClass(data);

		toast.custom(
			<div className={colorClass}>
				<div className={wrapperClass}>
					<div className={bgClass}>
						<FontAwesomeIcon icon={data.icon} />
					</div>
					<div className="ml-3 text-sm font-normal">{data.msg}</div>
				</div>
			</div>,
			{
				position: data.position,
				duration: data.duration,
			}
		);
	};

	useNuiEvent<any>("notify", data => {
		handleNotification(data);
	});
	return (
		<div>
			<Toaster />
		</div>
	);
};

export default Notification;
