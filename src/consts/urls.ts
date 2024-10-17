class ChatApiUrl {
  base = "https://chat-api-nksk.onrender.com";
  // base = "http://localhost:3000";
  register = `${this.base}/auth/register`;
  login = `${this.base}/auth/login`;
  refreshToken = `${this.base}/auth/refresh-token`;
  getAccount = `${this.base}/account/get-account`;
  getChatWith = `${this.base}/messages/get-chat`; // + /id
  searchAccount = `${this.base}/account/search-account`; // + /email
  unfollowTo = `${this.base}/follows/unfollow-to`; // + /id
  followTo = `${this.base}/follows/follow-to`; // + /id
}

export const CHAT_API_URL = new ChatApiUrl();
