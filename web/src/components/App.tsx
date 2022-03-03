import React, { useState } from "react";
import { debugData } from "../utils/debugData";
import { library } from "@fortawesome/fontawesome-svg-core";
import { fas } from "@fortawesome/free-solid-svg-icons";

import Notification from "./Notification";
import DrawText from "./DrawText";

library.add(fas);

const App: React.FC = () => {
	return (
		<div>
			<Notification />
			<DrawText />
		</div>
	);
};

export default App;
