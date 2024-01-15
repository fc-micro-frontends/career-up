import React, { useEffect, useRef } from "react";
import { useLocation } from "react-router-dom";
import { appJobBasename } from "../constants/prefix";
import { type InjectFuncType, useShellEvent } from "@career-up/shell-router";
import { importRemote } from "@module-federation/utilities";

export default function AppJob() {
  const wrapperRef = useRef<HTMLDivElement>(null);
  const location = useLocation();

  useShellEvent("app-job", appJobBasename);

  const isFirstRunRef = useRef(true);
  const unmountRef = useRef(() => {});

  useEffect(() => {
    if (!isFirstRunRef.current) {
      return;
    }
    isFirstRunRef.current = false;
    importRemote<{ default: InjectFuncType }>({
      url: "http://localhost:3004",
      scope: "job",
      module: "injector",
      remoteEntryFileName: `remoteEntry.js`,
    })
      .then(({ default: inject }) => {
        unmountRef.current = inject({
          routerType: "memory",
          rootElement: wrapperRef.current!,
          basePath: location.pathname.replace(appJobBasename, ""),
        });
      })
      .catch((error) => {
        console.log(error);
      });
  }, [location]);

  useEffect(() => unmountRef.current, []);

  return <div ref={wrapperRef} id="app-job" />;
}
