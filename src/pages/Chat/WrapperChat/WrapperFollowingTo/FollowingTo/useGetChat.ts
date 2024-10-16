import { useQuery } from "@tanstack/react-query";
import { useAuth } from "../../../../../auth/useAuth";
import { getChatService } from "./getChatService";
import { useEffect, useState } from "react";
import { useGlobalChatState } from "../../../useGlobalChatState";

export const useGetChat = () => {
  const token = useAuth((auth) => auth.token);
  const [id, setId] = useState("");
  const updateChat = useGlobalChatState((state) => state.updateChat);

  const { data, isLoading, isError } = useQuery({
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
    updateChat(data);
  }, [data, updateChat]);

  const startChat = (id: string) => setId(id);

  return { startChat, isError, isLoading };
};
