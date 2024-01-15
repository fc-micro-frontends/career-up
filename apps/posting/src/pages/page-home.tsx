import "./page-home.scss";

import React, { Suspense, useEffect, useState } from "react";
import Profile from "../components/profile";
import { PostType } from "../types";
import { createPost, getPosts, removePost } from "../apis";
import Post from "../components/post";
import WritePost from "../components/write-post";
import { useAuth0Client } from "@career-up/shell-router";
import { ErrorBoundary } from "react-error-boundary";
import { importRemote } from "@module-federation/utilities";

const PageHome: React.FC = () => {
  const auth0Client = useAuth0Client();
  const [posts, setPosts] = useState<PostType[]>([]);

  const RecommendConnectionsContainer = React.lazy(() =>
    importRemote({
      url: "http://localhost:5001",
      scope: "fragment_recommend_connections",
      module: "container",
      remoteEntryFileName: `remoteEntry.js?v=${Date.now()}`,
    })
  );

  const RecommendJobsContainer = React.lazy(() =>
    importRemote({
      url: "http://localhost:3004",
      scope: "job",
      module: "fragment-recommend-jobs",
      remoteEntryFileName: `remoteEntry.js?v=${Date.now()}`,
    })
  );

  useEffect(() => {
    (async () => {
      try {
        const token = await auth0Client.getTokenSilently();
        const posts = await getPosts(token);
        setPosts(posts);
      } catch (error) {
        alert(error);
      }
    })();
  }, [auth0Client]);

  const deletePostById = async (id: number) => {
    try {
      const token = await auth0Client.getTokenSilently();

      await removePost(token, id);

      const posts = await getPosts(token);
      setPosts(posts);
    } catch (error) {
      alert(error);
    }
  };

  const writePost = async (message: string) => {
    try {
      const token = await auth0Client.getTokenSilently();

      await createPost(token, { message });

      const posts = await getPosts(token);
      setPosts(posts);
    } catch (error) {
      alert(error);
    }
  };

  return (
    <div className="posting--page-home">
      <div className="posting--page-home-left">
        <Profile />
      </div>
      <div className="posting--page-home-center">
        <WritePost writePost={writePost} />
        {posts.map((post) => (
          <Post key={post.id} {...post} deletePostById={deletePostById} />
        ))}
      </div>
      <div className="posting--page-home-right">
        <ErrorBoundary fallback={<div>Error</div>}>
          <Suspense fallback={<div>Loading...</div>}>
            <RecommendConnectionsContainer />
          </Suspense>
        </ErrorBoundary>
        <ErrorBoundary fallback={<div>Error</div>}>
          <Suspense fallback={<div>Loading...</div>}>
            <RecommendJobsContainer />
          </Suspense>
        </ErrorBoundary>
      </div>
    </div>
  );
};

export default PageHome;
