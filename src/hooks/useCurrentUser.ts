import { useQuery } from "@tanstack/react-query";
import { api } from "../lib/api";

export function useCurrentUser() {
  return useQuery({
    queryKey: ["current user"],
    queryFn: () => api.get("/auth/me"),
  });
}
