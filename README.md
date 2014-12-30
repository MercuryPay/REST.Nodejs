#REST.Nodejs

## Prereqs

* Make sure node is installed
* Clone this repository (or download)
* From the commandline type:  node ./RESTNode.js

## Step 1: Create JSON object with name/value pairs

Also check code for headers and post options

```
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
```

## Step 2: Create request object

```
var reqPost = https.request(optionspost, function(res) {
    res.on('data', function(d) {
        console.info('POST result:\n');
        process.stdout.write(d);
        console.info('\n\nPOST completed');
    });
});
```

## Step 3: Write JSON object to request

```
reqPost.write(jsonObject);
reqPost.end();
```

####©2014 Mercury Payment Systems, LLC - all rights reserved.

Disclaimer: This software and all specifications and documentation contained herein or provided to you hereunder (the "Software") are provided free of charge strictly on an "AS IS" basis. No representations or warranties are expressed or implied, including, but not limited to, warranties of suitability, quality, merchantability, or fitness for a particular purpose (irrespective of any course of dealing, custom or usage of trade), and all such warranties are expressly and specifically disclaimed. Mercury Payment Systems shall have no liability or responsibility to you nor any other person or entity with respect to any liability, loss, or damage, including lost profits whether foreseeable or not, or other obligation for any cause whatsoever, caused or alleged to be caused directly or indirectly by the Software. Use of the Software signifies agreement with this disclaimer notice.

