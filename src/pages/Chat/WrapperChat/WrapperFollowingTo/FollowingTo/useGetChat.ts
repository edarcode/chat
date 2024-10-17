import { useQuery, useQueryClient } from "@tanstack/react-query";
import { useAuth } from "../../../../../auth/useAuth";
import { getChatService } from "./getChatService";
import { useEffect, useState } from "react";
import { useCurrentChat } from "../../../useCurrentChat";

export const useGetChat = () => {
  const token = useAuth((auth) => auth.token);
  const [id, setId] = useState("");
  const updateChat = useCurrentChat((state) => state.updateChat);
  const queryClient = useQueryClient();

  const { data, isLoading, isError, refetch } = useQuery({
    queryKey: ["chat", { token, id }],
    queryFn: (tanStack) =>
      getChatService({
        signal: tanStack.signal,
        token,
        id,
      }),
    staleTime: 1000 * 60 * 60 * 24,
    enabled: !!token && !!id,
    retry: 1,
  });

  useEffect(() => {
    if (!data) return;
    const refetchChat = () => {
      queryClient.invalidateQueries({ queryKey: ["chat"] });
      refetch();
    };
    updateChat(id, data, refetchChat);
  }, [data, updateChat, id, queryClient, refetch]);

  const startChat = (id: string) => setId(id);

  return { startChat, isError, isLoading };
};
