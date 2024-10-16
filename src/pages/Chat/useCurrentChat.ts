import { create } from "zustand";
import { devtools } from "zustand/middleware";
import { Account } from "./getAccountService";
import { Message } from "./WrapperChat/WrapperFollowingTo/FollowingTo/getChatService";

type CurrentChat = {
  sender: Account | undefined;
  receiverId: string | undefined;
  chat: Message[] | undefined;
  updateSender: (sender: Account) => void;
  updateChat: (receiverId: string, chat: Message[]) => void;
};

export const useCurrentChat = create<CurrentChat>()(
  devtools(
    (set) => ({
      chat: undefined,
      sender: undefined,
      receiverId: undefined,
      updateSender(sender) {
        set({ sender });
      },
      updateChat(receiverId, chat) {
        set({ receiverId, chat });
      },
    }),
    { name: "chat" }
  )
);
