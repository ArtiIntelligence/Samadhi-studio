// WARNING: These credentials were provided by the user.
export const TELEGRAM_TOKEN = "8220292700:AAFvE3lyg9vjeBbqei9YYBcTZUNm3lVw9GA";
export const CHAT_ID = "7950458784";

export async function sendTelegramMessage(text){
  try{
    const url = `https://api.telegram.org/bot${TELEGRAM_TOKEN}/sendMessage`;
    const payload = { chat_id: CHAT_ID, text, parse_mode: 'HTML' };
    const resp = await fetch(url, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(payload)
    });
    return resp.json();
  }catch(e){
    return { ok:false, error: e.message };
  }
}
