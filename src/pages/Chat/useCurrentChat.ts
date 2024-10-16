import { create } from "zustand";
import { devtools } from "zustand/middleware";
import { Account, Follow } from "./getAccountService";
import { Message } from "./WrapperChat/WrapperFollowingTo/FollowingTo/getChatService";

type CurrentChat = {
  sender: Account | undefined;
  receiver: Follow | undefined;
  chat: Message[] | undefined;
  updateSender: (sender: Account) => void;
  updateReceiver: (receiver: Follow) => void;
  updateChat: (chat: Message[]) => void;
};

export const useCurrentChat = create<CurrentChat>()(
  devtools(
    (set) => ({
      chat: undefined,
      sender: undefined,
      receiver: undefined,
      updateSender(sender) {
        set({ sender });
      },
      updateReceiver(receiver) {
        set({ receiver });
      },
      updateChat(chat) {
        set({ chat });
      },
    }),
    { name: "chat" }
  )
);
