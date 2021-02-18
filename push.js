var push = require('web-push');

// let vapidKeys = push.generateVAPIDKeys();
// console.log(vapidKeys);

let vapidKeys = {
    publicKeys = 'BBzrw3bTa0peqp0AGTODqFZbvTzAVjcx31ltQxvs1kwzsU2fHICR-NgyG-7uHTlbrSZgAEiPPeCeDlSp8AhjgkE',
    privateKeys = 'ag_iDVmHilX6vY_ziSWOFUcY2Ov28B73lY44DDPAl00'
}
push.setVapidDetails('mailto:onisu@example.com', vapidKeys.publicKeys, vapidKeys.privateKeys)

let sub = {}

push.sendNotification(sup,'test message');