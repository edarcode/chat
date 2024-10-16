import { useQuery } from "@tanstack/react-query";
import { useAuth } from "../../../auth/useAuth";
import { getChatService } from "./getChatService";

export const useGetChat = () => {
  const token = useAuth((auth) => auth.token);

  const { data, isLoading, isError } = useQuery({
    queryKey: ["chat", token],
    queryFn: (tanStack) =>
      getChatService({
        signal: tanStack.signal,
        token,
      }),
    staleTime: 1000 * 60 * 60 * 24,
    enabled: !!token,
    retry: 1,
  });

  return { chat: data, isLoading, isError };
};
