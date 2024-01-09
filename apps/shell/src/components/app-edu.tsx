import React, { useEffect, useRef } from "react";
import inject from "edu/injector";
import { useLocation } from "react-router-dom";
import { appEduBasename } from "../constants/prefix";
import { useShellEvent } from "@career-up/shell-router";

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
    unmountRef.current = inject({
      routerType: "memory",
      rootElement: wrapperRef.current!,
      basePath: location.pathname.replace(appEduBasename, ""),
    });
    isFirstRunRef.current = false;
  }, [location]);

  useEffect(() => unmountRef.current, []);

  return <div ref={wrapperRef} id="app-edu" />;
}
