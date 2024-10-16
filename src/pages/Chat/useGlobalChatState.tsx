import { create } from "zustand";
import { devtools } from "zustand/middleware";
import { Message } from "./WrapperChat/getChatService";

type Chat = {
  chat: Message[] | null;
  updateChat: (chat: Message[]) => void;
};

export const useGlobalChatState = create<Chat>()(
  devtools(
    (set) => ({
      chat: null,
      updateChat: (chat) => {
        set({ chat });
      },
    }),
    { name: "chat" }
  )
);
