class ChatApiUrl {
  base = "http://localhost:3000";
  register = `${this.base}/auth/register`;
  login = `${this.base}/auth/login`;
  refreshToken = `${this.base}/auth/refresh-token`;
  getAccount = `${this.base}/account/get-account`;
  getChat = `${this.base}/messages/get-chat`; // +id
}

export const CHAT_API_URL = new ChatApiUrl();
