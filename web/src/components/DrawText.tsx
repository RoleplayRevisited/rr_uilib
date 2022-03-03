import React, { useState } from "react";
import { useNuiEvent } from "../hooks/useNuiEvent";

const DrawText: React.FC = () => {
	const [data, setData] = useState<any>();
	const [classes, setClasses] = useState<string>("invisible");
	const [styleClasses, setStyleClasses] = useState<string>("");

	const handlePosition = (data: any) => {
		let classes = "h-screen p-7 flex ";

		if (data.options.style == "dark") {
			classes += "dark ";
		}

		let pos = data.options.position;
		if (!pos) pos = "top-middle";

		if (pos.includes("bottom")) {
			classes += "items-end";
		}

		if (pos.includes("center")) {
			classes += "items-center";
		}

		if (pos.includes("left")) classes += " justify-start";
		if (pos.includes("middle")) classes += " justify-center";
		if (pos.includes("right")) classes += " justify-end";

		setClasses(classes);
	};

	const handleStyle = (data: any) => {
		let options = data.options;
		let classes = "p-3 rounded-lg ";

		if (options.style === "white") {
			classes += "bg-white text-slage-600";
		} else if (options.style === "dark") {
			classes += "bg-slate-700 text-white";
		} else {
			// Transparent
			classes += "bg-black/40 text-white";
		}

		setStyleClasses(classes);
	};

	const handleAll = (data: any) => {
		setData(data);
		handleStyle(data);
		handlePosition(data);
	};

	useNuiEvent<any>("drawText", data => {
		if (data.draw) {
			handleAll(data);
		} else {
			setClasses("invisible");
		}
	});

	return (
		<div className={classes}>
			<div className={styleClasses}>
				<p>{data ? data.msg : ""}</p>
			</div>
		</div>
	);
};

export default DrawText;
