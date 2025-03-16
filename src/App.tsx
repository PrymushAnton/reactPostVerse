import { LikedPostsContextProvider } from "./context/likedPostsContext";
import { UserContextProvider } from "./context/userContext";

import { AppRoutes } from "./Routes/Routes";

export function App() {
	return (
		<UserContextProvider>
			<LikedPostsContextProvider>
				<AppRoutes/>
			</LikedPostsContextProvider>
		</UserContextProvider>
	);
}
