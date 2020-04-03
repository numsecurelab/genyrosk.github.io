import math
import time

import matplotlib.animation as animation
import matplotlib.pyplot as plt
import numpy as np
from matplotlib import style


def is_prime(num):
    for i in range(2, int(num**0.5) + 1):
        if num % i == 0:
            return False
    return True

def generate_primes(max_num):
    for num in range(2, max_num):
        if is_prime(num):
            yield num

def caartesian_to_polar(x, y):
    r = (x**2 + y**2)**0.5
    theta = math.atan(y/x)
    return r, theta

def polar_to_cartesian(r, theta):
    x = r * math.cos(theta)
    y = r * math.sin(theta)
    return x, y

style.use('fivethirtyeight')
fig = plt.figure()
ax1 = fig.add_subplot(1,1,1)

N_MAX = 2500
g = generate_primes(N_MAX)
xs = []
ys = []

def animate(i):
    try:
        value = next(g)
    except StopIteration:
        return
    x, y = polar_to_cartesian(value, value)
    xs.append(x)
    ys.append(y)
    ax1.clear()
    ax1.scatter(xs, ys, s=5)
    ax1.set_xlim([-N_MAX, N_MAX])
    ax1.set_ylim([-N_MAX, N_MAX])
    
    # ax1.set_title('Prime numbers in polar coordinates (<value>, <value> rad)')
    fig.suptitle('Prime numbers in polar coordinates (<value>, <value> rad)', fontsize=12)
    plt.xticks(fontsize=12)
    plt.yticks(fontsize=12)

anim = animation.FuncAnimation(fig, animate, interval=5, frames=30*13)
anim.save('prime_numbers_spiral_2.gif', writer='imagemagick', fps=30)
# plt.show()
