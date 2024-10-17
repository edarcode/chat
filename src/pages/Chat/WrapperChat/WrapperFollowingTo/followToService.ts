import { CHAT_API_URL } from "../../../../consts/urls";
import { EdarErr } from "../../../../errors/EdarErr";
import { Fetch } from "../../../../hooks/useFetch";

export const followToService: Fetch<FollowToPayload, FollowToRes> = async (
  params
) => {
  const { signal, payload } = params;

  if (!payload || !payload.token || !payload.id) return;

  const res = await fetch(CHAT_API_URL.followTo + `/${payload.id}`, {
    signal,
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Authorization: payload.token,
    },
  });

  if (!res.ok) {
    throw new EdarErr({
      status: res.status,
      msg: "Err siguiendo.",
    });
  }

  return await res.json();
};

export type FollowToPayload = {
  token?: string | null;
  id?: string | null;
};

export type FollowToRes = {
  msg: string;
};
