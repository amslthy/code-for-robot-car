//% color="#f39c12" weight=100 icon="\uf1b9" block="Robot"
namespace customRobot {

    /**
     * อ่านค่าระยะทางจากเซนเซอร์ Ultrasonic (cm)
     */
    //% block="ultrasonic distance (cm)"
    export function ultrasonicDistance(): number {
        // ใส่โค้ดคำนวณระยะทาง Ultrasonic ที่นี่
        return 0;
    }

    /**
     * ตั้งค่าไฟหน้า On / Off
     */
    //% block="set %light headlight to %state"
    export function setHeadlight(light: LightSide, state: ToggleState): void {
        // ใส่โค้ดเปิด/ปิดพิน LED ที่นี่
    }

    /**
     * ควบคุมทิศทางและความเร็วรถ
     */
    //% block="move %dir at speed %speed"
    //% speed.min=0 speed.max=255 speed.defl=128
    export function move(dir: MoveDirection, speed: number): void {
        // ใส่โค้ดควบคุมมอเตอร์ที่นี่
    }

    /**
     * หยุดมอเตอร์ (Brake)
     */
    //% block="brake"
    export function brake(): void {
        // ใส่โค้ดหยุดมอเตอร์ที่นี่
    }
}

enum LightSide {
    //% block="left"
    Left,
    //% block="right"
    Right
}

enum ToggleState {
    //% block="on"
    On,
    //% block="off"
    Off
}

enum MoveDirection {
    //% block="forward"
    Forward,
    //% block="backward"
    Backward
}