import random
import math

# pygame
import pygame
from pygame import mixer

# Initialize
pygame.init()

# creating screen (width, height)
width = 800
height = 600
screen = pygame.display.set_mode((width, height))

# creating background
background = pygame.image.load('background.png')
mixer.music.load('background.wav')
mixer.music.play(-1)

# title of game
pygame.display.set_caption("Space Invaders Pro")
icon = pygame.image.load("ufo .png")
pygame.display.set_icon(icon)

# Creating Player
playerImage = pygame.image.load('hero.png')
player_X = 370
player_Y = 480
player_X_change = 0


def player(x, y):
    screen.blit(playerImage, (x, y))


# Creating Enemy
enemyImage = []
enemy_X = []
enemy_Y = []
enemy_X_change = []
enemy_Y_change = []
num_of_enemies = 5

for i in range(num_of_enemies):
    enemyImage.append(pygame.image.load('enemy.png'))
    enemy_X.append(random.randint(10, 735))
    enemy_Y.append(random.randint(50, 150))
    enemy_X_change.append(4)
    enemy_Y_change.append(30)


def enemy(x, y, j):
    screen.blit(enemyImage[j], (x, y))


# Creating Bullet
bulletImage = pygame.image.load('bullet.png')
bullet_X = 0
bullet_Y = player_Y
bullet_X_change = 0
bullet_Y_change = 10
# "ready" -> not visible in the screen
# "fire" -> visible in the screen
bullet_state = "ready"


def fire_bullet(x, y):
    global bullet_state
    bullet_state = "fire"
    screen.blit(bulletImage, (x + 16, y + 10))


def is_collision(enemy_x, enemy_y, bullet_x, bullet_y):
    distance = math.sqrt(math.pow((enemy_x - bullet_x), 2) + math.pow((enemy_y - bullet_y), 2))
    if distance < 25:
        return True
    else:
        return False


# Score
score = 0
font = pygame.font.Font('freesansbold.ttf', 32)
score_text_X = 10
score_text_Y = 10

# Lives
lives = 5
lives_text_X = 665
lives_text_Y = 10

# Game Over
game_over_font = pygame.font.Font('freesansbold.ttf', 64)


def game_over():
    over_text = game_over_font.render("Game Over", True, (255, 255, 255))
    screen.blit(over_text, (225, 250))


def show_score(x, y):
    value = font.render("Score: " + str(score), True, (255, 255, 255))
    screen.blit(value, (x, y))


def show_lives(x, y):
    life_value = font.render("Lives: " + str(lives), True, (255, 255, 255))
    screen.blit(life_value, (x, y))


# game loop
running = True
while running:
    # background color (R, G, B)
    screen.fill((0, 120, 45))

    # background image
    screen.blit(background, (0, 0))

    for event in pygame.event.get():
        if event.type == pygame.QUIT:
            running = False

        # Check whether a keystroke is pressed & if it is LEFT or RIGHT
        if event.type == pygame.KEYDOWN:
            if event.key == pygame.K_LEFT:
                player_X_change = -5

            if event.key == pygame.K_RIGHT:
                player_X_change = 5

            if event.key == pygame.K_SPACE:
                if bullet_state == "ready":
                    # play shooting sound
                    bullet_sound = mixer.Sound('laser.wav')
                    bullet_sound.play()

                    # get the current X coordinate of player
                    bullet_X = player_X
                    fire_bullet(bullet_X, bullet_Y)

        # Check when the keystroke is released
        if event.type == pygame.KEYUP:
            if event.key == pygame.K_LEFT or event.key == pygame.K_RIGHT:
                player_X_change = 0

    # add boundaries to the movement
    # player
    player_X += player_X_change
    if player_X <= 0:
        player_X = 0
    # width of the image is 64
    elif player_X >= width - 64:
        player_X = width - 64

    # enemy
    for i in range(num_of_enemies):
        # Game Over
        if enemy_Y[i] > 150:
            if lives < 1:
                for index in range(num_of_enemies):
                    enemy_Y[index] = 2000
                game_over()
                break

        enemy_X[i] += enemy_X_change[i]
        if enemy_X[i] <= 0:
            enemy_X_change[i] = 4
            enemy_Y[i] += enemy_Y_change[i]
        # width of the image is 64
        elif enemy_X[i] >= width - 64:
            enemy_X_change[i] = -4
            enemy_Y[i] += enemy_Y_change[i]

        # Check for Collision
        collided = is_collision(enemy_X[i], enemy_Y[i], bullet_X, bullet_Y)
        if collided:
            # play collision sound
            collision_sound = mixer.Sound('explosion.wav')
            collision_sound.play()

            bullet_Y = player_Y
            bullet_state = "ready"
            score += 1
            enemy_X[i] = random.randint(10, 735)
            enemy_Y[i] = random.randint(50, 150)

        enemy(enemy_X[i], enemy_Y[i], i)

    # bullet
    if bullet_Y <= 0:
        bullet_Y = player_Y
        bullet_state = "ready"

    if bullet_state == "fire":
        fire_bullet(bullet_X, bullet_Y)
        bullet_Y -= bullet_Y_change

    # Update Screens
    player(player_X, player_Y)
    show_score(score_text_X, score_text_Y)
    show_lives(lives_text_X, lives_text_Y)
    pygame.display.update()
