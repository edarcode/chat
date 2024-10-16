import { CHAT_API_URL } from "../../../../../consts/urls";
import { EdarErr } from "../../../../../errors/EdarErr";

export const getChatService = async (
  params: Params
): Promise<Message[] | undefined> => {
  const { signal, token, id } = params;

  if (!token || !token) return;

  const res = await fetch(CHAT_API_URL.getChatWith + `/${id}`, {
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
  id: string;
};

export type Message = {
  id: string;
  createdAt: string;
  updateAt: string;
  text: string;
  senderId: string;
  receiverId: string;
};
