var push = require('web-push');

// let vapidKeys = push.generateVAPIDKeys();
// console.log(vapidKeys);

let vapidKeys = {
    publicKeys = 'BMrjpQT4KyLTl6uUBDa7_Q6V8Ra0MMj2ksZSQ5Oh2gIiQGr7N-OuGlA1-E_GsnWWECqykpeUFrGJ5TowKmkLOAY',
    privateKeys = 'Efya0A3cYl4LDw7auzkf2Xr8SITh4s1wyVC_lgGT1tY'
}
push.setVapidDetails('mailto:onisuka.blend@gmail.com', vapidKeys.publicKeys, vapidKeys.privateKeys)

let sub = {}

push.sendNotification(sup,'test message');