import React, { useCallback } from "react";
import { useRecoilState } from "recoil";
import { myNetworkAtom } from "../atoms";
import MyNetwork from "../components/my-network";
import useAuth0Client from "../hooks/use-auth0-client";
import { getMyNetwork } from "../apis";

const MyNetworkContainer: React.FC = () => {
  const auth0Client = useAuth0Client();
  const [myNetwork, setMyNetwork] = useRecoilState(myNetworkAtom);

  const fetchMyNetwork = useCallback(async () => {
    try {
      const token = await auth0Client.getTokenSilently();
      const myNetwork = await getMyNetwork(token);
      setMyNetwork(myNetwork);
    } catch (error) {
      alert(error);
    }
  }, [auth0Client, setMyNetwork]);

  return <MyNetwork myNetwork={myNetwork} fetchMyNetwork={fetchMyNetwork} />;
};

export default MyNetworkContainer;
