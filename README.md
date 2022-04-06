# appNodeKubernetes

### Comandos
- npm update
- docker build -t mauroslucios/nodekubernetes:v1 .
- docker run --name nodekubernetes -p 3003:3003 mauroslucios/nodekubernetes:v1
- k3d cluster create mycluster
- k3d cluster create mycluster --no-lb
- k3d cluster list
- k3d cluster delete
- k3d clutser create mycluster --servers 3 --agents 3 servers control-plane agents nodes
- kubectl get nodes
- docker container ls
- kubectl api-resources | grep pod
- kubectl create -f pod.yaml
- watch 'kubectl get pods'
- kubectl describe pod/mypod
- kubectl port-forward pod/mypod
- kubectl delete pod mypod
- kubectl api-resources | grep ReplicaSet
- kubectl apply -f replicaste.yaml
- kubectl get replicaset
- kubectl scale replicaset myreplicaset --replicas 10
- kubectl apply -f deployment.yaml
- kubectl get pods
- kubectl set image deployment mydeployment web=newimage
- kubectl rollout history deployment mydeployment
- kubectl rollout undo deployment mydeployment

### Pods da aplicação
```
apiVersion: v1
kind: Pod
metadata:
  name: meupod
spec:
  containers:
    - name: web
      image: mauroslucios/nodekubernetes:v1
      ports:
        - containerPort: 3003
```

### Replicaset da aplicação
```
apiVersion: apps/v1
kind: ReplicaSet
metadata:
  name: meureplicaset
spec:
  selector:
    matchLabels:
      app: web
  template:
    metadata:
      labels: 
        app: web
    spec:
      containers:
        - name: web
          image: mauroslucios/nodekubernetes:v1
          ports:
            - containerPort: 3003
``` 

### Deployment da aplicação
```
apiVersion: apps/v1
kind: Deployment
metadata:
  name: web
spec:
  replicas: 4
  selector:
    matchLabels:
      app: web
  template:
    metadata:
      labels:
        app: web
    spec:
      containers:
      - name: web
        image: mauroslucios/nodekubernetes:v1
        resources:
          limits:
            memory: "128Mi"
            cpu: "500m"
        ports:
        - containerPort: 3003
```