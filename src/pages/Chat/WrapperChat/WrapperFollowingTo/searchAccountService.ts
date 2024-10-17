import { CHAT_API_URL } from "../../../../consts/urls";
import { EdarErr } from "../../../../errors/EdarErr";

export const searchAccountService = async (
  params: Params
): Promise<AccountFound | undefined> => {
  const { signal, token, email } = params;

  if (!token || !email) return;

  const res = await fetch(CHAT_API_URL.searchAccount + `/${email}@gmail.com`, {
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
      msg: "Err buscando cuenta",
    });
  }

  return await res.json();
};

type Params = {
  signal: AbortSignal;
  token?: string | null;
  email?: string | null;
};

type AccountFound = {
  isReadyFolloweb: boolean;
  id: string;
  email: string;
  img: string | null;
};
