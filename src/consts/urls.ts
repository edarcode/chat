class ChatApiUrl {
  base = "https://chat-api-nksk.onrender.com";
  register = `${this.base}/auth/register`;
  login = `${this.base}/auth/login`;
  refreshToken = `${this.base}/auth/refresh-token`;
  getAccount = `${this.base}/account/get-account`;
  getChatWith = `${this.base}/messages/get-chat`; // +id
}

export const CHAT_API_URL = new ChatApiUrl();
