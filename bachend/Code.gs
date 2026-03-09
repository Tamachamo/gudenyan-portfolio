// Code.gs
function doPost(e) {
  const sheet = SpreadsheetApp.getActiveSpreadsheet().getActiveSheet();
  try {
    const data = JSON.parse(e.postData.contents);
    sheet.appendRow([new Date(), data.email, data.message, "未対応やに"]);
    
    // Gmailで自動返信
    const body = `「ぐでにゃん制作」への相談、おおきんな！\n今から自動化コード回して溶けるもんで、返事はちょっと待ってな。〇〇やに。`;
    GmailApp.sendEmail(data.email, "【ぐでにゃん制作】受け取ったに！", body);

    return ContentService.createTextOutput(JSON.stringify({"status": "success"}))
      .setMimeType(ContentService.MimeType.JSON);
  } catch (err) {
    return ContentService.createTextOutput(JSON.stringify({"status": "error"}))
      .setMimeType(ContentService.MimeType.JSON);
  }
}
