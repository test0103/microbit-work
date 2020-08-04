startbit.startbit_Init()
startbit.setServo(startbit.startbit_servorange.range2, 1, 135, 300)
basic.pause(300)
basic.forever(function () {
    if (startbit.startbit_ultrasonic(startbit.startbit_ultrasonicPort.port2) < 20 && startbit.startbit_ultrasonic(startbit.startbit_ultrasonicPort.port2) < 20) {
        startbit.setServo(startbit.startbit_servorange.range2, 1, 45, 300)
        basic.showLeds(`
            . . # . .
            . # . . .
            # # # # #
            . # . . .
            . . # . .
            `)
    } else {
        basic.pause(1000)
        startbit.setServo(startbit.startbit_servorange.range2, 1, 135, 300)
        basic.showLeds(`
            . . # . .
            . . # . .
            . . # . .
            . . # . .
            . . # . .
            `)
        basic.pause(300)
    }
})
