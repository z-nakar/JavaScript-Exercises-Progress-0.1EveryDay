import matplotlib.pyplot as plt
import numpy as np

# Define the vectors based on the given data
vectors = {
    "East (6N)": (6, 0),
    "40° North of East (7N)": (7 * np.cos(np.radians(40)), 7 * np.sin(np.radians(40))),
    "South (9N)": (0, -9),
    "30° North of West (4N)": (-4 * np.cos(np.radians(30)), 4 * np.sin(np.radians(30))),
    "70° South of West (8N)": (-8 * np.cos(np.radians(70)), -8 * np.sin(np.radians(70))),
}

# Initialize the plot
fig, ax = plt.subplots()
ax.set_aspect('equal')
ax.grid(True)

# Set limits for the graph
ax.set_xlim(-15, 15)
ax.set_ylim(-15, 15)

# Plot the vectors
origin = [0, 0]
for label, (x, y) in vectors.items():
    ax.quiver(*origin, x, y, angles='xy', scale_units='xy', scale=1, label=label)

# Adding labels and legend
ax.set_title("Vector Addition of Forces")
ax.set_xlabel("X-axis (N)")
ax.set_ylabel("Y-axis (N)")
ax.legend()

# Show the plot
plt.show()