# appNodeKubernetes

###Comandos
- k3d cluster create mycluster
- k3d cluster create mycluster --no-lb
- k3d cluster list
- k3d cluster delete
- k3d



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