input.onButtonPressed(Button.A, function on_button_pressed_a() {
    sprite.move(1)
    basic.pause(200)
})
input.onButtonPressed(Button.AB, function on_button_pressed_ab() {
    
})
input.onButtonPressed(Button.B, function on_button_pressed_b() {
    sprite.turn(Direction.Left, 90)
})
let sprite : game.LedSprite = null
game.setScore(0)
sprite = game.createSprite(4, 2)
let apple = game.createSprite(0, -4)
basic.forever(function on_forever() {
    sprite.ifOnEdgeBounce()
})
basic.forever(function on_forever2() {
    
})
let lastCollisionTime = 0
basic.forever(function on_forever3() {
    if (sprite.isTouching(apple)) {
        // Check if 10 seconds have passed since the last collision
        let currentTime = input.runningTime()
        if (currentTime - lastCollisionTime >= 10000) {
            game.addScore(1)
            apple.delete()
            basic.pause(100)
            apple = game.createSprite(randint(-4, 4), randint(-4, 4))
            lastCollisionTime = currentTime
        } else {
            basic.pause(100)
            game.gameOver()
        }
    } else {
        basic.pause(100)
    }
})
