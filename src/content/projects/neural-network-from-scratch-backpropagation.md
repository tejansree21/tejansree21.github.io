---
title: "Neural Network from Scratch: Backpropagation"
description: "A complete neural network built with only NumPy — forward pass, backpropagation, and gradient descent implemented from scratch with full math explanations. Trained on moons and spiral datasets."
tags: ["neural-network", "backpropagation", "deep-learning", "numpy", "machine-learning", "from-scratch", "gradient-descent", "python", "google-colab"]
featured: true
date: 2026-05-02
github: "https://github.com/tejansree21/Backpropagation-from-scratch"
---

Built a complete neural network from scratch using only NumPy to deeply understand how deep learning works under the hood. The project implements every core component manually — forward propagation, ReLU and sigmoid activations, binary and categorical cross-entropy loss functions, full backpropagation with chain rule derivations, and gradient descent weight updates. No PyTorch, no TensorFlow, no autograd — just pure math and matrix operations.


The notebook walks through two progressively harder classification problems: a binary moon dataset solved with a 2→16→1 sigmoid network achieving 95%+ accuracy, and a three-class spiral dataset solved by extending to softmax and categorical cross-entropy with a 2→64→3 architecture. Every concept is explained with LaTeX equations, visualized with matplotlib (decision boundaries, training curves, hidden neuron activation maps, hyperparameter comparisons), and implemented in clean, commented code. The project demonstrates not just the ability to use ML frameworks, but a fundamental understanding of what happens inside them.