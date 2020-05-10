

// const socket = io('https://le-18262636.bitzonte.com', {
//     path: '/sotocks'
// });


socket.on('UPDATE', (data) => {
    console.log("Update:\t", data);
})

