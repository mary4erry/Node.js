const EventEmitter = require('events').EventEmitter

// class Kettle extends EventEmitter {
//     constructor() {
//         super()
//         // setTimeout( () => {
//         //     this.emit('created')
//         // }, 0)

//         // setImmediate( () => {
//         //     this.emit('created')
//         // }, 0)

//         process.nextTick( () => {
//             this.emit('created')
//         }, 0) 
//     }
//     start() {
//         setTimeout( () => {
//             this.emit('ready')
//         }, 3000)
//     }
// }
// const k = new Kettle()
// k.start()
// k.on( 'ready', () => {
//     console.log('чайник закипел');
// })
// k.on( 'created', () => {
//     console.log('Чайник создан');
// })

setTimeout( () => {
    console.log('setTimeout');
}, 0)

setImmediate( () => {
    console.log('setImmediate');
}, 0)

process.nextTick( () => {
    console.log('nextTick');
}, 0) 