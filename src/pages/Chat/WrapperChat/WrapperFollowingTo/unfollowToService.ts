import { CHAT_API_URL } from "../../../../consts/urls";
import { EdarErr } from "../../../../errors/EdarErr";
import { Fetch } from "../../../../hooks/useFetch";

export const unfollowToService: Fetch<
  UnfollowToPayload,
  UnfollowToRes
> = async (params) => {
  const { signal, payload } = params;

  if (!payload || !payload.token || !payload.id) return;

  const res = await fetch(CHAT_API_URL.unfollowTo + `/${payload.id}`, {
    signal,
    method: "DELETE",
    headers: {
      "Content-Type": "application/json",
      Authorization: payload.token,
    },
  });

  if (!res.ok) {
    throw new EdarErr({
      status: res.status,
      msg: "Err dejando de seguir",
    });
  }

  return await res.json();
};

export type UnfollowToPayload = {
  token?: string | null;
  id?: string | null;
};

export type UnfollowToRes = {
  msg: string;
};
