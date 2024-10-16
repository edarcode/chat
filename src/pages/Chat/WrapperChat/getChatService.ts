import { CHAT_API_URL } from "../../../consts/urls";
import { EdarErr } from "../../../errors/EdarErr";

export const getChatService = async (
  params: Params
): Promise<Message[] | undefined> => {
  const { signal, token } = params;

  if (!token) return;

  const res = await fetch(CHAT_API_URL.getChat, {
    signal,
    method: "GET",
    headers: {
      "Content-Type": "application/json",
      Authorization: token,
    },
  });

  if (!res.ok) {
    throw new EdarErr({
      status: res.status,
      msg: "Err obteniendo chat.",
    });
  }

  return await res.json();
};

type Params = {
  signal: AbortSignal;
  token?: string | null;
};

export type Message = {
  id: string;
  createdAt: string;
  updateAt: string;
  text: string;
  senderId: string;
  receiverId: string;
};
