var lineEndpoint = "https://api.line.me/v2/bot/message/reply";
function doPost(e) {
  var json = JSON.parse(e.postData.contents);
  var replyToken = json.events[0].replyToken;
  var userMessage = json.events[0].message.text;

  UrlFetchApp.fetch(lineEndpoint, {
    'headers': {
      'Content-Type': 'application/json; charset=UTF-8',
      'Authorization': 'Bearer ' + ACCESS_TOKEN,
    },
    'method': 'post',
    'payload': JSON.stringify({
      'replyToken': replyToken,
      'messages': [{
        'type': 'text',
        'text': 'samplebot ver1.00:'+userMessage,
      }],
    }),
  });
}
