import React, { useEffect, useRef } from "react";
import inject from "posting/injector";
import { useLocation } from "react-router-dom";
import { appPostingBasename } from "../constants/prefix";
import { useShellEvent } from "@career-up/shell-router";

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
    unmountRef.current = inject({
      routerType: "memory",
      rootElement: wrapperRef.current!,
      basePath: location.pathname.replace(appPostingBasename, ""),
    });
    isFirstRunRef.current = false;
  }, [location]);

  useEffect(() => unmountRef.current, []);

  return <div ref={wrapperRef} id="app-posting" />;
}
