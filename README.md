# 🚀 DevOps Node.js App on Kubernetes

A simple Node.js HTTP application containerized with Docker and deployed on a Kubernetes cluster using Deployment and NodePort Service.

---

## 🧰 Tech Stack

- Node.js
- Docker
- Kubernetes (kubectl)
- Docker Desktop Kubernetes / Minikube / Kind

---

## 📁 Project Structure
app.js
package.json
package-lock.json
Dockerfile
deployment.yaml
service.yaml

---

## ⚙️ Application Overview

The application is a simple Node.js HTTP server:

- Runs on port `3000`
- Has a `/hello` endpoint
- Returns a basic response message

---
Access Application
http://localhost:30007/hello

Debugging Commands

kubectl get pods
kubectl get svc
kubectl describe pod <pod-name>
kubectl logs <pod-name>
kubectl delete deployment devops-app
