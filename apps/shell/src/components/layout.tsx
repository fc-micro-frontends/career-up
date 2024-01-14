import React from "react";
import { Link, NavLink, Outlet } from "react-router-dom";
import {
  appEduBasename,
  appJobBasename,
  appNetworkBasename,
  appPostingBasename,
} from "../constants/prefix";
import { Button, Icon } from "@career-up/ui-kit";
import { useAuth0 } from "@auth0/auth0-react";
import { useShellNavigateListener } from "@career-up/shell-router";

const Layout = () => {
  useShellNavigateListener();

  const { loginWithRedirect, logout, isAuthenticated } = useAuth0();

  const handleLogin = async () => {
    await loginWithRedirect({
      appState: {
        returnTo: "/",
      },
    });
  };

  const handleLogout = async () => {
    await logout({
      logoutParams: {
        returnTo: window.location.origin,
      },
    });
  };

  return (
    <div>
      <header className="global-nav">
        <div className="global-nav-content">
          <Link className="global-nav-logo" to="/">
            <svg
              data-v-62b4fdfc=""
              width="30"
              height="30"
              viewBox="0 0 76 76"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <g data-v-62b4fdfc="" clipPath="url(#clip0_2879_347)">
                <path
                  data-v-62b4fdfc=""
                  d="M75.461 37.722a.219.219 0 00.327-.19C75.575 16.805 58.702.069 37.928.069a37.617 37.617 0 00-18.58 4.88.22.22 0 000 .38L75.46 37.722zM5.328 19.347a.22.22 0 00-.38 0 37.617 37.617 0 00-4.88 18.58c0 20.775 16.737 37.64 37.458 37.86a.219.219 0 00.19-.326L5.327 19.347zM12.326 12.47l35.666 61.776a.22.22 0 00.25.099c12.616-3.568 22.543-13.495 26.11-26.11a.22.22 0 00-.098-.25L12.47 12.324c-.09-.052-.197.054-.144.145z"
                  fill="#FC1C49"
                ></path>
              </g>
              <defs data-v-62b4fdfc="">
                <clipPath data-v-62b4fdfc="" id="clip0_2879_347">
                  <path
                    data-v-62b4fdfc=""
                    fill="#fff"
                    d="M0 0h500v75.901H0z"
                  ></path>
                </clipPath>
              </defs>
            </svg>
            <span>Career Up</span>
          </Link>
          {!isAuthenticated && (
            <div style={{ marginLeft: 20 }}>
              <Button onClick={handleLogin}>Login</Button>
            </div>
          )}
          {isAuthenticated && (
            <div style={{ marginLeft: 20 }}>
              <Button onClick={handleLogout}>Logout</Button>
            </div>
          )}
          <nav className="global-nav-nav">
            <ul className="global-nav-items">
              <li className="global-nav-item">
                <NavLink
                  className="global-nav-link"
                  to={`${appPostingBasename}`}
                >
                  <Icon.Home />
                  <span className="global-nav-link-text">홈</span>
                </NavLink>
              </li>
              <li className="global-nav-item">
                <NavLink
                  className="global-nav-link"
                  to={`${appNetworkBasename}`}
                >
                  <Icon.UserFriends />
                  <span className="global-nav-link-text">인맥</span>
                </NavLink>
              </li>
              <li className="global-nav-item">
                <NavLink className="global-nav-link" to={`${appEduBasename}`}>
                  <Icon.LaptopCode />
                  <span className="global-nav-link-text">교육</span>
                </NavLink>
              </li>
              <li className="global-nav-item">
                <NavLink className="global-nav-link" to={`${appJobBasename}`}>
                  <Icon.Briefcase />
                  <span className="global-nav-link-text">채용공고</span>
                </NavLink>
              </li>
            </ul>
          </nav>
        </div>
      </header>
      <div className="global-container">{isAuthenticated && <Outlet />}</div>
    </div>
  );
};

export default Layout;
