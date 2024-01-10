def on_button_pressed_a():
    sprite.move(1)
    basic.pause(200)
input.on_button_pressed(Button.A, on_button_pressed_a)

def on_button_pressed_ab():
    pass
input.on_button_pressed(Button.AB, on_button_pressed_ab)

def on_button_pressed_b():
    sprite.turn(Direction.LEFT, 90)
input.on_button_pressed(Button.B, on_button_pressed_b)

sprite: game.LedSprite = None
game.set_score(0)
sprite = game.create_sprite(4, 2)
apple = game.create_sprite(0, -4)

def on_forever():
    sprite.if_on_edge_bounce()
basic.forever(on_forever)

def on_forever2():
    pass
basic.forever(on_forever2)

def on_forever3():
    global apple
    if sprite.is_touching(apple):
        if True:
            game.add_score(1)
            apple.delete()
            basic.pause(100)
            apple = game.create_sprite(randint(-4, 4), randint(-4, 4))
        else:
            basic.pause(100)
            game.game_over()
basic.forever(on_forever3)
