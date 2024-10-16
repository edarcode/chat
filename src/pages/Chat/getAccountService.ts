import { CHAT_API_URL } from "../../consts/urls";
import { EdarErr } from "../../errors/EdarErr";

export const getAccountService = async (
  params: Params
): Promise<Account | undefined> => {
  const { signal, token } = params;

  if (!token) return;

  const res = await fetch(CHAT_API_URL.getAccount, {
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
      msg: "Err obteniendo cuenta de usuario",
    });
  }

  return await res.json();
};

type Params = {
  signal: AbortSignal;
  token?: string | null;
};

export type Account = {
  id: string;
  role: "ADMIN" | "CLIENT"; // Ajusta según los roles posibles
  email: string;
  password: string;
  name: string | null;
  img: string | null;
  createdAt: string; // Puedes cambiar a Date si prefieres trabajar con fechas como objetos
  updateAt: string;
  followingTo: Follow[];
  followedBy: Follow[];
};

export type Follow = {
  id: string;
  name: string | null;
  img: string | null;
  email: string;
};
