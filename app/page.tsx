"use client";
import { useRouter } from "next/navigation";
import { useUser } from "@auth0/nextjs-auth0/client";
import { Spinner } from "../components/ui/spinner";
import { PAGE_ROUTE } from "./config";
import { useEffect } from "react";

export default function Home() {
  const router = useRouter();
  const { user, isLoading } = useUser();

  useEffect(() => {
    if (!isLoading) router.push(user ? PAGE_ROUTE.Dashboard : PAGE_ROUTE.Login);
  }, [isLoading]);

  return (
    <div className="flex justify-center items-center h-full">
      <Spinner className="size-8" />
    </div>
  );
}
