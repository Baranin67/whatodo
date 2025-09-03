"use client";

import { createContext, useContext, useEffect, useState } from "react";
import Cookies from "js-cookie";
import { usePathname, useRouter } from "next/navigation";

import { RouteGuardStateContextValues, RouteGuardProviderProps } from "./types";

import routes from "@/cfg/routes.json";
import { getKeyByValue } from "@/utils/message";
import { useUserState } from "@/context/user";

const RouteGuardStateContext =
  createContext<RouteGuardStateContextValues | null>(null);

export const RouteGuardProvider = ({ children }: RouteGuardProviderProps) => {
  const router = useRouter();
  const pathname = usePathname();
  const { user, fetchUser } = useUserState();
  const [isGuardBusy, setGuardBusy] = useState(true);

  const redirect = async (url: string) => {
    setGuardBusy(true);
    router.push(url);
  };

  const isRouteGuarded = (guardedRoutes: string[]): boolean =>
    guardedRoutes.includes(getKeyByValue(routes.pages, pathname) || "");

  async function runGuard() {
    // Jeżeli dane użytkownika są dostępne
    if (user === null) {
      if (isRouteGuarded(routes.onlyLogout))
        //@ts-ignore
        router.replace(routes.pages[routes.onlyLogoutFallback]);
      setGuardBusy(false);
    } else {
      const userId: string | null = localStorage.getItem("user_id");
      const userToken: string | null = Cookies.get("token") || null;

      if (userId && userToken) {
        fetchUser(userId, userToken);
        if (isRouteGuarded(routes.onlyLogout))
          //@ts-ignore
          router.replace(routes.pages[routes.onlyLogoutFallback]);
        setGuardBusy(false);
      } else {
        if (isRouteGuarded(routes.onlyLogin))
          //@ts-ignore
          router.replace(routes.pages[routes.unauthorizedFallback]);
        setGuardBusy(false);
      }
    }
  }

  useEffect(() => {
    runGuard();
  }, [user, pathname]);

  const state: RouteGuardStateContextValues = { redirect };

  return (
    <RouteGuardStateContext.Provider value={state}>
      {!isGuardBusy && children}
    </RouteGuardStateContext.Provider>
  );
};

export function useRouteGuardState(): RouteGuardStateContextValues {
  const state = useContext(RouteGuardStateContext);

  if (state === null)
    throw new Error("useRouteGuardState must be used within a Provider");

  return state;
}
