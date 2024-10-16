import { create } from "zustand";
import { devtools } from "zustand/middleware";
import { Message } from "./WrapperChat/getChatService";
import { Account } from "./getAccountService";

type Chat = {
  chat: Message[] | undefined;
  updateChat: (chat: Message[]) => void;
  account: Account | undefined;
  updateAccount: (account: Account) => void;
};

export const useGlobalChatState = create<Chat>()(
  devtools(
    (set) => ({
      chat: undefined,
      updateChat: (chat) => {
        set({ chat });
      },
      account: undefined,
      updateAccount(account) {
        set({ account });
      },
    }),
    { name: "chat" }
  )
);
