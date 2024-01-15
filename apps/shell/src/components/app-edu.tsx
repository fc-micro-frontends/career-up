import React, { useEffect, useRef } from "react";
import { useLocation } from "react-router-dom";
import { appEduBasename } from "../constants/prefix";
import { type InjectFuncType, useShellEvent } from "@career-up/shell-router";
import { importRemote } from "@module-federation/utilities";

export default function AppEdu() {
  const wrapperRef = useRef<HTMLDivElement>(null);
  const location = useLocation();

  useShellEvent("app-edu", appEduBasename);

  const isFirstRunRef = useRef(true);
  const unmountRef = useRef(() => {});

  useEffect(() => {
    if (!isFirstRunRef.current) {
      return;
    }
    isFirstRunRef.current = false;
    importRemote<{ default: InjectFuncType }>({
      url: "http://localhost:3002",
      scope: "edu",
      module: "injector",
      remoteEntryFileName: `remoteEntry.js`,
    })
      .then(({ default: inject }) => {
        unmountRef.current = inject({
          routerType: "memory",
          rootElement: wrapperRef.current!,
          basePath: location.pathname.replace(appEduBasename, ""),
        });
      })
      .catch((error) => {
        console.log(error);
      });
  }, [location]);

  useEffect(() => unmountRef.current, []);

  return <div ref={wrapperRef} id="app-edu" />;
}
