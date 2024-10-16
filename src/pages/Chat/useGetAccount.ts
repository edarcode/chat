import { useQuery } from "@tanstack/react-query";
import { getAccountService } from "./getAccountService";
import { useAuth } from "../../auth/useAuth";

export const useGetAccount = () => {
  const token = useAuth((auth) => auth.token);

  const { data, isLoading, isError } = useQuery({
    queryKey: ["accounts", token],
    queryFn: (tanStack) =>
      getAccountService({
        signal: tanStack.signal,
        token,
      }),
    staleTime: 1000 * 60 * 60 * 24,
    enabled: !!token,
    retry: 1,
  });

  return { account: data, isLoading, isError };
};
