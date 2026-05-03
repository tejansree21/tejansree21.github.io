---
title: "Semantic Research Assistant"
description: "An AI-powered RAG application that lets users upload documents, ask questions in plain English, and get accurate answers with source citations — built with Cohere's Embed and Command models."
tags: ["Cohere API", "RAG", "Embeddings", "ChromaDB", "Python", "NLP", "Vector", "Search", "LLM"]
featured: false
date: 2026-05-03
github: "https://github.com/tejansree21/semantic-research-assistant"
live: "https://semantic-research-assistant.vercel.app/"
---

Finding specific information buried across multiple documents is a time-consuming process that often means reading through entire files just to locate one answer. The Semantic Research Assistant solves this by allowing users to upload any collection of documents and ask questions in natural language. The app uses Cohere's Embed model to convert document chunks into vector embeddings, stores them in ChromaDB for fast similarity search, and retrieves the most relevant passages to answer the user's query — all with source citations so you know exactly where the information came from.

Under the hood, the application implements a full Retrieval Augmented Generation (RAG) pipeline. Documents are chunked into manageable passages, embedded using Cohere's embedding model, and stored in a local vector database. When a user asks a question, the query is embedded and matched against stored chunks using semantic similarity. The top matching passages are then passed as context to Cohere's Command model, which generates a clear, grounded answer. This project was built to demonstrate practical understanding of modern LLM orchestration, vector search, and retrieval-based AI systems.