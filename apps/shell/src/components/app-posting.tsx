import React, { useEffect, useRef } from "react";
import { useLocation } from "react-router-dom";
import { appPostingBasename } from "../constants/prefix";
import { type InjectFuncType, useShellEvent } from "@career-up/shell-router";
import { importRemote } from "@module-federation/utilities";

export default function AppPosting() {
  const wrapperRef = useRef<HTMLDivElement>(null);
  const location = useLocation();

  useShellEvent("app-posting", appPostingBasename);

  const isFirstRunRef = useRef(true);
  const unmountRef = useRef(() => {});

  useEffect(() => {
    if (!isFirstRunRef.current) {
      return;
    }
    isFirstRunRef.current = false;
    importRemote<{ default: InjectFuncType }>({
      url: process.env.REACT_APP_MICROAPP_POSTING!,
      scope: "posting",
      module: "injector",
      remoteEntryFileName: `remoteEntry.js`,
    })
      .then(({ default: inject }) => {
        unmountRef.current = inject({
          routerType: "memory",
          rootElement: wrapperRef.current!,
          basePath: location.pathname.replace(appPostingBasename, ""),
        });
      })
      .catch((error) => {
        console.log(error);
      });
  }, [location]);

  useEffect(() => unmountRef.current, []);

  return <div ref={wrapperRef} id="app-posting" />;
}
