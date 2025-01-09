enum RadioMessage {
    message1 = 49434
}
namespace SpriteKind {
    export const wall = SpriteKind.create()
    export const attack0 = SpriteKind.create()
    export const attack1 = SpriteKind.create()
    export const attack2 = SpriteKind.create()
    export const enemysprite = SpriteKind.create()
    export const attack3 = SpriteKind.create()
    export const attack4 = SpriteKind.create()
    export const warning = SpriteKind.create()
    export const attack5 = SpriteKind.create()
    export const attack6 = SpriteKind.create()
    export const attack7 = SpriteKind.create()
    export const endgame = SpriteKind.create()
    export const attack8 = SpriteKind.create()
    export const start = SpriteKind.create()
    export const easy = SpriteKind.create()
    export const hard = SpriteKind.create()
    export const normal = SpriteKind.create()
}
sprites.onOverlap(SpriteKind.Player, SpriteKind.attack6, function (sprite, otherSprite) {
    statusbar.value += -2
    pause(158)
})
controller.B.onEvent(ControllerButtonEvent.Pressed, function () {
	
})
sprites.onOverlap(SpriteKind.Player, SpriteKind.attack5, function (sprite, otherSprite) {
    statusbar.value += -8
    pause(67)
})
sprites.onOverlap(SpriteKind.Player, SpriteKind.attack1, function (sprite, otherSprite) {
    statusbar.value += -6
    pause(59)
})
sprites.onOverlap(SpriteKind.Player, SpriteKind.attack4, function (sprite, otherSprite) {
    statusbar.value += -9
    pause(100)
})
sprites.onOverlap(SpriteKind.Player, SpriteKind.attack7, function (sprite, otherSprite) {
    statusbar.value += -3
    pause(100)
})
sprites.onOverlap(SpriteKind.Player, SpriteKind.normal, function (sprite, otherSprite) {
    if (controller.A.isPressed()) {
        difficulty = 2
        tiles.setCurrentTilemap(tilemap`startmap`)
    }
})
scene.onOverlapTile(SpriteKind.Player, assets.tile`begin game`, function (sprite, location) {
    sprites.destroy(mySprite2, effects.disintegrate, 100)
    pause(100)
    sprites.destroy(mySprite4, effects.disintegrate, 100)
    pause(100)
    sprites.destroy(mySprite3, effects.disintegrate, 100)
    sprites.destroyAllSpritesOfKind(SpriteKind.Text)
    mySprite.setImage(assets.image`sprite`)
    tiles.setCurrentTilemap(tilemap`level2`)
    tiles.placeOnTile(mySprite, tiles.getTileLocation(5, 5))
    pause(1000)
    mySprite2 = sprites.create(assets.image`ball1`, SpriteKind.attack0)
    mySprite3 = sprites.create(assets.image`ball0`, SpriteKind.attack0)
    tiles.placeOnTile(mySprite2, tiles.getTileLocation(1, 2))
    tiles.placeOnTile(mySprite3, tiles.getTileLocation(7, 2))
    mySprite2.setVelocity(126, 126)
    mySprite3.setVelocity(124, 124)
    mySprite2.setBounceOnWall(true)
    mySprite3.setBounceOnWall(true)
    statusbar = statusbars.create(40, 4, StatusBarKind.Health)
    tiles.placeOnTile(statusbar, tiles.getTileLocation(1, 0))
    pause(392)
    sprites.destroy(mySprite3)
    pause(9876)
    sprites.destroy(mySprite2)
    pause(5432)
    statusbar.value += 2
    mySprite4 = sprites.create(assets.image`kelpsmall`, SpriteKind.attack1)
    tiles.placeOnTile(mySprite4, tiles.getTileLocation(5, 5))
    pause(1000)
    mySprite4.setImage(assets.image`kelpmedium`)
    pause(678)
    mySprite4.setImage(assets.image`big kelp`)
    pause(500)
    for (let index = 0; index < 3; index++) {
        pause(1000)
        mySprite4.changeScale(0.1, ScaleAnchor.Bottom)
    }
    pause(100)
    sprites.destroy(mySprite4, effects.bubbles, 67)
    pause(579)
    statusbar.value += 9
    statusbar.setLabel("HP")
    pause(350)
    mySprite2 = sprites.create(assets.image`stoneattack`, SpriteKind.attack2)
    mySprite3 = sprites.create(assets.image`stoneattack`, SpriteKind.attack2)
    mySprite4 = sprites.create(assets.image`stoneattack`, SpriteKind.attack2)
    mySprite5 = sprites.create(assets.image`stoneattack`, SpriteKind.attack2)
    mySprite6 = sprites.create(assets.image`stoneattack`, SpriteKind.attack2)
    tiles.placeOnTile(mySprite2, tiles.getTileLocation(1, 2))
    tiles.placeOnTile(mySprite3, tiles.getTileLocation(2, 2))
    tiles.placeOnTile(mySprite4, tiles.getTileLocation(3, 2))
    tiles.placeOnTile(mySprite5, tiles.getTileLocation(6, 2))
    tiles.placeOnTile(mySprite6, tiles.getTileLocation(7, 2))
    pause(297)
    mySprite2.setVelocity(2, 122)
    mySprite2.setBounceOnWall(true)
    pause(25)
    mySprite3.setVelocity(1, 90)
    pause(24)
    mySprite4.setVelocity(1, 89)
    pause(23)
    mySprite5.setVelocity(1, 88)
    pause(22)
    mySprite6.setVelocity(2, 122)
    mySprite6.setBounceOnWall(true)
    pause(1567)
    sprites.destroy(mySprite5)
    sprites.destroy(mySprite3)
    sprites.destroy(mySprite4)
    pause(997)
    sprites.destroy(mySprite2, effects.rings, 500)
    sprites.destroy(mySprite6, effects.rings, 500)
    pause(100)
    statusbar.value += 2
    mySprite2 = sprites.create(img`
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . c c c c . . 
        . c c c c c . c c c c c f c c . 
        c c b c c c c c 2 2 f c f f c c 
        c b f b b c c b f 2 c b b f f c 
        c b 2 2 b b c b c c c b b b b c 
        c d 2 f b b b b b c c c c c c c 
        c d d b b c f e b c c c c c c c 
        . c d d b d c f b b b e e c c . 
        . . . . b b d d d b b e b c . . 
        . . . . c d c b b c c d . . . . 
        . . . . d d c c b d d b . . . . 
        . . . . d d b d b 1 b . . . . . 
        . . . . c d d d 1 1 c . . . . . 
        . . . . . c b 1 1 d c . . . . . 
        . . . . . . . c c c . . . . . . 
        `, SpriteKind.enemysprite)
    tiles.placeOnTile(mySprite2, tiles.getTileLocation(4, 0))
    pause(759)
    mySprite3 = sprites.create(assets.image`rock`, SpriteKind.attack3)
    tiles.placeOnTile(mySprite3, tiles.getTileLocation(randint(2, 6), 2))
    pause(78)
    mySprite3.setVelocity(0, 123)
    pause(49)
    mySprite4 = sprites.create(assets.image`rock`, SpriteKind.attack3)
    tiles.placeOnTile(mySprite4, tiles.getTileLocation(randint(1, 7), 2))
    mySprite4.setVelocity(0, 543)
    mySprite4.setBounceOnWall(true)
    pause(200)
    tiles.placeOnTile(mySprite3, tiles.getTileLocation(randint(1, 7), 2))
    pause(100)
    mySprite5 = sprites.create(assets.image`rock`, SpriteKind.attack3)
    tiles.placeOnTile(mySprite5, tiles.getTileLocation(randint(4, 5), 2))
    pause(54)
    mySprite5.setVelocity(0, 234)
    for (let index = 0; index < 29; index++) {
        pause(500)
        tiles.placeOnTile(mySprite3, tiles.getTileLocation(randint(2, 7), 2))
        mySprite3.setVelocity(0, 127)
        tiles.placeOnTile(mySprite5, tiles.getTileLocation(randint(randint(1, 3), randint(6, 7)), 2))
        mySprite5.setVelocity(0, 235)
    }
    pause(1579)
    sprites.destroyAllSpritesOfKind(SpriteKind.attack3)
    pause(500)
    statusbar.value += 5
    pause(200)
    statusbar.value += 5
    mySprite3 = sprites.create(img`
        .............................................................................................................................
        .............................................................................................................................
        ...2......................2...........................2...........................2...........................2..........2...
        ..222....................222.........................222.........................222.........................222........222..
        ..222....................222.........................222.........................222.........................222........222..
        .22222..................22222.......................22222.......................22222.......................22222......22222.
        22222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222
        ddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd
        11111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111
        ddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd
        .22222222222.....................................22222222222......................................................22222222222
        ..222222222.......................................222222222........................................................222222222.
        ...2222222.........................................2222222..........................................................2222222..
        ....22222...........................................22222............................................................22222...
        .....222.............................................222..............................................................222....
        ......2...............................................2................................................................2.....
        `, SpriteKind.warning)
    tiles.placeOnTile(mySprite3, tiles.getTileLocation(4, 6))
    pause(750)
    mySprite3.setKind(SpriteKind.attack4)
    pause(479)
    mySprite4 = sprites.create(img`
        ........................
        ........................
        .......ff...............
        .....ff22ff.............
        ...fff2222fff...........
        ..fff222222fff..........
        ..fff222222fff..........
        ..feeeeeeeeeeff.........
        .ffe22222222eff.........
        .fffffeeeefffff.........
        fdfefbf44fbfeff.........
        fbfe41fddf14ef..........
        fbffe4dddd4efe..........
        fcfef22222f4e...........
        .ff4f44554f4e...........
        ....ffffffdde...........
        .....ffffedde...........
        ..........ee............
        .........ccc............
        ........cc1cc...........
        .........c1c............
        .........c1c............
        .........c1c............
        .........c1c............
        `, SpriteKind.attack4)
    tiles.placeOnTile(mySprite4, tiles.getTileLocation(randint(1, 7), 2))
    mySprite4.setVelocity(20, 189)
    mySprite4.setBounceOnWall(true)
    pause(6543)
    sprites.destroyAllSpritesOfKind(SpriteKind.attack4, effects.ashes, 100)
    sprites.destroy(mySprite2, effects.fire, 500)
    pause(1000)
    statusbar.value += 33
    pause(200)
    mySprite2 = sprites.create(assets.image`log`, SpriteKind.attack5)
    mySprite2.setVelocity(0, 75)
    pause(1000)
    sprites.destroy(mySprite2)
    mySprite2 = sprites.create(img`
        ...........fffffff...ccfff..........
        ..........fbbbbbbbffcbbbbf..........
        ..........fbb111bbbbbffbf...........
        ..........fb11111ffbbbbff...........
        ..........f1cccc1ffbbbbbcff.........
        ..........ffc1c1c1bbcbcbcccf........
        ...........fcc3331bbbcbcbcccf..ccccc
        ............c333c1bbbcbcbccccfcddbbc
        ............c333c1bbbbbbbcccccddbcc.
        ............c333c11bbbbbccccccbbcc..
        ...........cc331c11bbbbccccccfbccf..
        ...........cc13c11cbbbcccccbbcfccf..
        ...........c111111cbbbfdddddc.fbbcf.
        ............cc1111fbdbbfdddc...fbbf.
        ..............cccfffbdbbfcc.....fbbf
        ....................fffff........fff
        `, SpriteKind.attack5)
    mySprite2.follow(mySprite, randint(23, 54))
    mySprite2.changeScale(-0.2, ScaleAnchor.Middle)
    pause(1000)
    mySprite3 = sprites.create(assets.image`seaweeds5`, SpriteKind.attack5)
    tiles.placeOnTile(mySprite3, tiles.getTileLocation(4, 5))
    pause(1000)
    mySprite3.setImage(assets.image`seaweedm5`)
    pause(1000)
    mySprite3.setImage(assets.image`seaweedb5`)
    pause(4567)
    sprites.destroyAllSpritesOfKind(SpriteKind.attack5)
    pause(200)
    statusbar.value += 11
    pause(100)
    mySprite2 = sprites.create(assets.image`skelly`, SpriteKind.attack6)
    mySprite2.follow(mySprite, randint(48, 78))
    pause(11235)
    sprites.destroyAllSpritesOfKind(SpriteKind.attack6, effects.rings, 100)
    pause(1000)
    for (let index = 0; index < 11; index++) {
        statusbar.value += 1
        pause(100)
    }
    pause(755)
    mySprite2 = sprites.create(assets.image`rock`, SpriteKind.attack7)
    mySprite3 = sprites.create(assets.image`rock`, SpriteKind.attack7)
    mySprite4 = sprites.create(assets.image`rock`, SpriteKind.attack7)
    mySprite5 = sprites.create(assets.image`ball1`, SpriteKind.attack7)
    mySprite6 = sprites.create(assets.image`ball1`, SpriteKind.attack7)
    mySprite7 = sprites.create(assets.image`ball1`, SpriteKind.attack7)
    mySprite8 = sprites.create(assets.image`ball0`, SpriteKind.attack7)
    tiles.placeOnTile(mySprite2, tiles.getTileLocation(1, 3))
    tiles.placeOnTile(mySprite3, tiles.getTileLocation(1, 3))
    tiles.placeOnTile(mySprite4, tiles.getTileLocation(1, 3))
    tiles.placeOnTile(mySprite5, tiles.getTileLocation(1, 3))
    tiles.placeOnTile(mySprite6, tiles.getTileLocation(1, 3))
    tiles.placeOnTile(mySprite7, tiles.getTileLocation(1, 3))
    tiles.placeOnTile(mySprite8, tiles.getTileLocation(1, 3))
    pause(500)
    mySprite2.setVelocity(100, 100)
    mySprite2.setBounceOnWall(true)
    pause(500)
    mySprite3.setVelocity(100, 100)
    mySprite3.setBounceOnWall(true)
    pause(500)
    mySprite4.setVelocity(100, 100)
    mySprite4.setBounceOnWall(true)
    pause(500)
    mySprite5.setVelocity(100, 100)
    mySprite5.setBounceOnWall(true)
    pause(500)
    mySprite6.setVelocity(100, 100)
    mySprite6.setBounceOnWall(true)
    pause(500)
    mySprite7.setVelocity(100, 100)
    mySprite7.setBounceOnWall(true)
    pause(500)
    mySprite8.setVelocity(100, 100)
    mySprite8.setBounceOnWall(true)
    pause(9543)
    sprites.destroyAllSpritesOfKind(SpriteKind.attack7)
    pause(100)
    statusbar.value += 45
    pause(200)
    statusbar.max = 175
    statusbar.value = 175
    pause(100)
    game.splash("final fight!!!!", "get ready!!!!")
    mySprite.changeScale(-0.113, ScaleAnchor.Middle)
    pause(1000)
    mySprite2 = sprites.create(img`
        ........................bbbbbbbbbbbbbbbbbbb..................................
        ......................bbb5555555555555555bbbbb...............................
        .....................bb5555555555555555555555bbb......bbc....................
        ....................bb5555555555555555555555555bbb..cbbcc....................
        ...................bb5555555555555555555555555555bccbbccc....................
        ...................b5555555555555555555555555555555ccccc.....................
        ..................bb555b555555555bd55555555555555555cccc.....................
        ..................b5555b555555555bb555555555555555555ccc.....................
        ..................c555555555555555555555555bccc5555555cc.....ccc.............
        ..................c55555bccccc5555555555555ccc1c5555555ccccccbbc.............
        ..................c5555bccccccccb5555555555dcbbc55555555cccbbbcc.............
        ..................c555bddcccccccccb1555555555555555555555ccbccc..............
        ..................c555bcdcccccccccc11b55555555555555555555ccccc..............
        ...................c55ccbcccccccccc11cc5555555555555555555dcccc..............
        ...................c55ccccccccccccc1bccb1555555bb5555555555dcc...............
        ....................c5cccccccccccccccccb1155555b55555555555dcc...............
        ....................c55ccccccccccccccccc1bccccb555555555555ddc...............
        .....................c55cccccccccccccccccccccc555555555555dddccccbbc.........
        ......................c55ccccccb333cc333bcccc555555555555555ddccbbcc.........
        ......................cc55dccc3333bc333333ccb555555555555555ddcccccc.........
        .......................cc555c33333b3333333cc555555555555555dddccccc..........
        ........................ccb533333b33333333c5555555555555555d55dcccc..........
        .........................cb533333b3333333b55d55555555555555555dcccc..........
        .........................cd533333b33b133b55dd5555555555555555dddccc..........
        .................cccc....c5513333333b11355dd55555555555555ddddddcc...........
        ................c55bcc...c5513333333b1155dd5555555555555555dddddcc...........
        ................c55bbc...c5533333333b555dd55555555555555555ddddddccc.........
        ..............ccc55bddc..cb553133133555dd555555555cccc5555dddddddcccccc......
        .............c55bb5bdddc..c55513313555dd5555555555c55ccccddddddddcccccc......
        .............c55dbbbdddcc..cd5555555dbdd5555555555cb5555ccccdddddccccc.......
        .............c555bddbbb5c..cbbbbbbbbbddd5555555ccccbb55bb5dbcddddbccc........
        ..............bbbbddb555ccccddbbbbbddddd5555555c55ccbbbb5555bcddddcc.........
        .............cdd555b555bdbb5dddddddddddd5555555bb5555db5555555cdddc..........
        ...........ccbbb555bbbb5dbb5ddddddddddd555555555bb55ddbccbb555ccddcc.........
        ...........c555bb5555555bb555dddddddddd5555555555bc5ddddddbb555cdddcc........
        ...........c5555b5555555b5555ddddddddd555555555555c55dddbbbb555cbdddc........
        ............cbbb555555dbb555555dddddd5555555555555cc5ddbb5555555bbbddc.......
        .............cbb55555ddb555555555555555555555555555c55db55555555dbbbdcc......
        ..............cccddddddb555555555555555555555555555cc555bbb555555dddddc......
        ................ccddddb55555555555555555555555555555c55555dd555555ddddc......
        .................cddddb5555555555555555555555555555dcc5555dd5555555dddc......
        ..cc.............ccddbd555555555555555555555555555d5dc555dd55555555dddc......
        ..c5bb............ccdbd5555555555555555555555555555ddcc555555555555dddc......
        ..c55b.............ccbd555555555555555555555555555ddddc555555555555ddcc......
        ..cb5bb.............cbdd5555555555555555555555555d5dddcc5555555555dddcc......
        ..cb55b..............cdd555555555555555555555555d55ddddccc5555555dddcc.......
        ..cb55b..............cddd555555555555555555d555d55dddddddccc555ddddcc........
        ..c555b..............cdd55555dd555555555555555dddddddddddddcccccccccc........
        .cb555bb.............cbdd5555dd5555555555555dddddddddddddddddddddddccc.......
        .cb555bb............ccbddd5d55555555dd55555555dddddddddddddddddddddcccc......
        .c55555b...........cccbbddddddd555555555ddd55dddddddddddddddddddddbccc.......
        cb55555b..........cccbbbbdddd55ddd5555ddddddddddddddddddddddddddddbcc........
        cb55555b........bccbbbd5555dd555dd5555d55ddddddddddddddddd55ddddbbbc.........
        c5555555bb....bbbddbb5555555ddddddddddd55dddddddddddddddd55ddddddbbc.........
        c55555555bbbbbbddddc555555555dddddddddddddddddddddddddddd5dd5555ddbc.........
        cd5555555555ddddddc5555555555ddddddddddddddddddddddddddddd55555555dc.........
        cd5555555555dddddcc5555555555dddddddddddddddddddddddddd55d555555555cc........
        cdd55555555ddddddc55555555555dddddddddddddddddddddddddd5555555555555c........
        cddd555555ddddddcc5555555555ddddddddddddddddddddddddddddd55555555555cc.......
        ccddddddddddddddc55555555555ddddddddddddddddddddddddddddd555555555555c.......
        .cddddddddddddddc555555555555dddddddddddddddddddddddddddd555555555555c.......
        .ccddddddddddddcc555555555555ddddddddddddddddddbddddddddd555555555555cc......
        ..ccdddddddddddcc5555555dd55dddddddddddddddddddbdddddddd5d555555555555c......
        ...ccddddddddddccd5555dddddddddddddbbddddddddddbddddddddd5555555555555c......
        ....cccddddddddcddddddddddddddddddbbddddddddddbbbdddddddddd55555555555c......
        ......cccdddddccdddddddddddddddddccccccccccccbbbbddddddddddd555555555dc......
        ........cccccccdddddddddddddddddccc........ccccbbbdddddddddddd5555555dcc.....
        ............ccc555555dddddddddccc.............cccbddddddddddddd55555ddccc....
        .............c55555555ddddddccc..................ccdddddddddddddddddddccc....
        ...........ccdddccd555dddccccc....................ccdddddddddddd5555555dc....
        ..........ccdddccdddddcddcc........................cccddddddddd55555555dcc...
        ..........ccdddcdddccccddc...........................ccccccdddd555ddddccddcc.
        ..........ccccccddcccccdcc...............................ccddddddccddddccddcc
        ...............cdc.....ccc................................cccccdddccddddcddcc
        ...............cc...........................................ccccdddccccdccccc
        ...............................................................ccccc..ccc....
        `, SpriteKind.enemysprite)
    tiles.placeOnTile(mySprite2, tiles.getTileLocation(5, 0))
    mySprite2.setScale(0.25, ScaleAnchor.Middle)
    pause(200)
    mySprite3 = sprites.create(assets.image`seaweeds5`, SpriteKind.attack8)
    tiles.placeOnTile(mySprite3, tiles.getTileLocation(1, 5))
    pause(758)
    mySprite3.setImage(assets.image`seaweedm5`)
    mySprite4 = sprites.create(assets.image`shark1`, SpriteKind.attack8)
    mySprite4.setScale(0.5, ScaleAnchor.Middle)
    mySprite4.follow(mySprite, 31)
    pause(500)
    mySprite5 = sprites.create(assets.image`ball1`, SpriteKind.attack8)
    tiles.placeOnTile(mySprite5, tiles.getTileLocation(1, 2))
    mySprite5.setBounceOnWall(true)
    pause(100)
    mySprite6 = sprites.create(assets.image`ball1`, SpriteKind.attack8)
    tiles.placeOnTile(mySprite6, tiles.getTileLocation(7, 2))
    mySprite6.setBounceOnWall(true)
    pause(150)
    mySprite3.setImage(assets.image`seaweedb5`)
    pause(95)
    mySprite5.setVelocity(100, 100)
    pause(51)
    mySprite6.setVelocity(100, 100)
    pause(957)
    mySprite7 = sprites.create(assets.image`rock`, SpriteKind.attack8)
    tiles.placeOnTile(mySprite7, tiles.getTileLocation(1, 5))
    mySprite7.setBounceOnWall(true)
    pause(100)
    mySprite7.setVelocity(75, 75)
    pause(500)
    mySprite8 = sprites.create(assets.image`rock`, SpriteKind.attack8)
    mySprite8.changeScale(0.1, ScaleAnchor.Middle)
    tiles.placeOnTile(mySprite8, tiles.getTileLocation(1, 5))
    mySprite9 = sprites.create(assets.image`rock`, SpriteKind.attack8)
    mySprite9.changeScale(0.1, ScaleAnchor.Middle)
    tiles.placeOnTile(mySprite9, tiles.getTileLocation(1, 5))
    mySprite10 = sprites.create(assets.image`rock`, SpriteKind.attack8)
    mySprite10.changeScale(0.1, ScaleAnchor.Middle)
    tiles.placeOnTile(mySprite10, tiles.getTileLocation(1, 5))
    mySprite11 = sprites.create(assets.image`rock`, SpriteKind.attack8)
    mySprite11.changeScale(0.1, ScaleAnchor.Middle)
    tiles.placeOnTile(mySprite11, tiles.getTileLocation(1, 5))
    mySprite12 = sprites.create(assets.image`rock`, SpriteKind.attack8)
    mySprite12.changeScale(0.1, ScaleAnchor.Middle)
    tiles.placeOnTile(mySprite12, tiles.getTileLocation(1, 5))
    mySprite8.setVelocity(50, 50)
    mySprite8.setBounceOnWall(true)
    mySprite9.setBounceOnWall(true)
    pause(789)
    mySprite9.setVelocity(50, 50)
    pause(789)
    mySprite10.setBounceOnWall(true)
    mySprite10.setVelocity(50, 50)
    mySprite11.setBounceOnWall(true)
    mySprite12.setBounceOnWall(true)
    pause(789)
    mySprite11.setVelocity(50, 50)
    pause(789)
    mySprite12.setVelocity(50, 50)
    pause(10000)
    mySprite13 = sprites.create(img`
        .............................................................................................................................
        .............................................................................................................................
        ...2......................2...........................2...........................2...........................2..........2...
        ..222....................222.........................222.........................222.........................222........222..
        ..222....................222.........................222.........................222.........................222........222..
        .22222..................22222.......................22222.......................22222.......................22222......22222.
        22222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222
        ddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd
        11111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111
        ddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd
        .22222222222.....................................22222222222......................................................22222222222
        ..222222222.......................................222222222........................................................222222222.
        ...2222222.........................................2222222..........................................................2222222..
        ....22222...........................................22222............................................................22222...
        .....222.............................................222..............................................................222....
        ......2...............................................2................................................................2.....
        `, SpriteKind.warning)
    tiles.placeOnTile(mySprite13, tiles.getTileLocation(4, 6))
    pause(1000)
    mySprite13.setKind(SpriteKind.attack8)
    pause(1000)
    mySprite.setImage(assets.image`final form-heart`)
    mySprite.setScale(1, ScaleAnchor.Middle)
    pause(5555)
    mySprite14 = sprites.create(assets.image`strike-warning`, SpriteKind.warning)
    pause(1000)
    scene.cameraShake(8, 1000)
    mySprite14.setImage(assets.image`strike-hit`)
    mySprite14.setKind(SpriteKind.attack8)
    mySprite15 = sprites.create(assets.image`spear`, SpriteKind.attack8)
    tiles.placeOnTile(mySprite15, tiles.getTileLocation(randint(2, 7), 0))
    mySprite15.setVelocity(0, 100)
    pause(5000)
    game.showLongText("just die already!", DialogLayout.Bottom)
    sprites.destroyAllSpritesOfKind(SpriteKind.attack8)
    pause(500)
    for (let index = 0; index < 123; index++) {
        pause(100)
        mySprite2.changeScale(0.1, ScaleAnchor.Middle)
    }
    game.showLongText("aaaaaaaarrrrrrrrrrgggggggghhhhhhhh!!!!!!!", DialogLayout.Bottom)
    sprites.destroy(mySprite2)
    game.setGameOverMessage(true, "game beaten!!")
})
statusbars.onZero(StatusBarKind.Health, function (status) {
    game.gameOver(false)
})
sprites.onOverlap(SpriteKind.Player, SpriteKind.hard, function (sprite, otherSprite) {
    if (controller.A.isPressed()) {
        difficulty = 3
        tiles.setCurrentTilemap(tilemap`startmap`)
    }
})
sprites.onOverlap(SpriteKind.attack4, SpriteKind.attack4, function (sprite, otherSprite) {
    tiles.placeOnTile(mySprite4, tiles.getTileLocation(randint(1, 7), 2))
})
sprites.onOverlap(SpriteKind.Player, SpriteKind.easy, function (sprite, otherSprite) {
    if (controller.A.isPressed()) {
        difficulty = 1
        tiles.setCurrentTilemap(tilemap`startmap`)
    }
})
sprites.onOverlap(SpriteKind.Player, SpriteKind.attack2, function (sprite, otherSprite) {
    statusbar.value += -7
    pause(64)
})
sprites.onOverlap(SpriteKind.Player, SpriteKind.start, function (sprite, otherSprite) {
    if (controller.A.isPressed()) {
        sprites.destroy(mySprite2)
        mySprite2 = sprites.create(assets.image`difficulty-easy`, SpriteKind.easy)
        mySprite2.setScale(0.5, ScaleAnchor.Middle)
        mySprite2.setPosition(23, 84)
        pause(500)
        mySprite4 = sprites.create(assets.image`difficulty-normal`, SpriteKind.normal)
        mySprite4.setScale(0.5, ScaleAnchor.Middle)
        mySprite4.setPosition(75, 84)
        pause(500)
        mySprite3 = sprites.create(assets.image`difficulty-hard`, SpriteKind.hard)
        mySprite3.setPosition(131, 84)
        mySprite3.setScale(0.5, ScaleAnchor.Middle)
        sprites.destroy(mySprite)
        mySprite = sprites.create(assets.image`courser`, SpriteKind.Player)
        controller.moveSprite(mySprite, 122, 122)
        pause(251)
        textSprite = textsprite.create("easy")
        textSprite.setPosition(23, 99)
        pause(100)
        textSprite2 = textsprite.create("normal")
        textSprite2.setPosition(75, 99)
        pause(100)
        textSprite3 = textsprite.create("hard")
        textSprite3.setPosition(131, 99)
        pause(500)
        textSprite4 = textsprite.create("welcome to the danger times simulator.")
        textSprite4.setScale(0.65357575, ScaleAnchor.Middle)
        textSprite4.setPosition(81, 9)
    }
})
sprites.onOverlap(SpriteKind.Player, SpriteKind.attack0, function (sprite, otherSprite) {
    statusbar.value += -5
    pause(53)
})
sprites.onOverlap(SpriteKind.Player, SpriteKind.attack3, function (sprite, otherSprite) {
    statusbar.value += -6
    pause(56)
})
let textSprite4: TextSprite = null
let textSprite3: TextSprite = null
let textSprite2: TextSprite = null
let textSprite: TextSprite = null
let mySprite15: Sprite = null
let mySprite14: Sprite = null
let mySprite13: Sprite = null
let mySprite12: Sprite = null
let mySprite11: Sprite = null
let mySprite10: Sprite = null
let mySprite9: Sprite = null
let mySprite8: Sprite = null
let mySprite7: Sprite = null
let mySprite6: Sprite = null
let mySprite5: Sprite = null
let mySprite3: Sprite = null
let mySprite4: Sprite = null
let statusbar: StatusBarSprite = null
let mySprite: Sprite = null
let difficulty = 0
let mySprite2: Sprite = null
let _0 = 0
scene.setBackgroundImage(assets.image`background`)
mySprite2 = sprites.create(assets.image`start`, SpriteKind.start)
difficulty = 0
mySprite = sprites.create(assets.image`courser`, SpriteKind.Player)
controller.moveSprite(mySprite, 122, 122)
mySprite.setStayInScreen(true)
mySprite2.setPosition(81, 82)
