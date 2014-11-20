var https = require('https')

var jsonObject = JSON.stringify({
'InvoiceNo':'1',
'RefNo':'1',
'Memo':'POS and Version go here',
'Purchase':'1.00',
'Frequency':'OneTime',
'RecordNo':'RecordNumberRequested',
'EncryptedFormat':'MagneSafe',
'AccountSource':'Swiped',
'EncryptedBlock':'2F8248964608156B2B1745287B44CA90A349905F905514ABE3979D7957F13804705684B1C9D5641C',
'EncryptedKey':'9500030000040C200026',
'OperatorID':'operatorid'
});

 
// prepare the header
var postheaders = {
    'Content-Type' : 'application/json',
    'Content-Length' : Buffer.byteLength(jsonObject, 'utf8'),
    'Authorization':'Basic MDE5NTg4NDY2MzEzOTIyOnh5eg=='
};
 
// the post options
var optionspost = {
    host : 'w1.mercurycert.net',
    port : 443,
    path : '/PaymentsAPI/Credit/Sale',
    method : 'POST',
    headers : postheaders
};
 
// do the POST call
var reqPost = https.request(optionspost, function(res) {
    res.on('data', function(d) {
        console.info('POST result:\n');
        process.stdout.write(d);
        console.info('\n\nPOST completed');
    });
});
 
// write the json data
reqPost.write(jsonObject);
reqPost.end();
reqPost.on('error', function(e) {
    console.error(e);
});

