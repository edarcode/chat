import { create } from "zustand";
import { devtools } from "zustand/middleware";
import { Account } from "./getAccountService";
import { Message } from "./WrapperChat/WrapperFollowingTo/FollowingTo/getChatService";

type CurrentChat = {
  sender: Account | undefined;
  receiverId: string | undefined;
  chat: Message[] | undefined;
  refetchChat: (() => void) | undefined;

  updateSender: (sender: Account) => void;
  updateChat: (receiverId: string, chat: Message[], fn: () => void) => void;
};

export const useCurrentChat = create<CurrentChat>()(
  devtools(
    (set) => ({
      chat: undefined,
      sender: undefined,
      receiverId: undefined,
      refetchChat: undefined,
      updateSender(sender) {
        set({ sender });
      },
      updateChat(receiverId, chat, refetchChat) {
        set({ receiverId, chat, refetchChat });
      },
    }),
    { name: "chat" }
  )
);
