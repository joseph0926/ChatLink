import { createBrowserRouter, RouterProvider } from "react-router-dom";
import {
  AllUserPage,
  AuthPage,
  CreatePostPage,
  EditPostPage,
  ExplorePage,
  HomePage,
  PostDetailsPage,
  ProfilePage,
  RootPage,
  SavedPage,
  SignInPage,
  SignUpPage,
  UpdateProfilePage,
} from "@/pages";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

const queryClient = new QueryClient();

const App = () => {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <RootPage />,
      children: [
        { index: true, element: <HomePage /> },
        { path: "explore", element: <ExplorePage /> },
        { path: "saved", element: <SavedPage /> },
        { path: "all-user", element: <AllUserPage /> },
        { path: "create-post", element: <CreatePostPage /> },
        { path: "update-post/:id", element: <EditPostPage /> },
        { path: "profile/:id/*", element: <ProfilePage /> },
        { path: "posts/:id", element: <PostDetailsPage /> },
        { path: "update-profile/:id", element: <UpdateProfilePage /> },
      ],
    },
    {
      path: "/auth",
      element: <AuthPage />,
      children: [
        { path: "sign-in", element: <SignInPage /> },
        { path: "sign-up", element: <SignUpPage /> },
      ],
    },
  ]);

  return (
    <QueryClientProvider client={queryClient}>
      <RouterProvider router={router} />
    </QueryClientProvider>
  );
};

export default App;
