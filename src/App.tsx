import { LikedPostsContextProvider } from "./context/likedPostsContext";
import { AppRoutes } from "./Routes/Routes";

export function App() {
	return (
		<LikedPostsContextProvider>
			<AppRoutes/>
		</LikedPostsContextProvider>
	);
}
