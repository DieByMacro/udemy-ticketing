# Account
{
	"email": "user1@test.com",
	"password": "admin"
}

# Check secrets
k get secrets

# Check namespace
k get service

# Reinstall ingress-ingx
# https://kubernetes.github.io/ingress-nginx/deploy/#docker-for-mac
`kubectl apply -f https://raw.githubusercontent.com/kubernetes/ingress-nginx/master/deploy/static/provider/cloud/deploy.yaml`

# Create secret JWT_KEY with value `asdf`
k create secret generic jwt-secret --from-literal=JWT_KEY=asdf

/** USE THIS TO RE-CREATE SECRET AFTER STOPPING SKAFFOLD **/


# Publish npm to @duc.q repo
npm publish --access public

# How to port forward to POD

1. Get name of NATS deployment
`k get pods`

2. run `k port-forward [NATS NAME] [APP-PORT]:[POD-PORT]
e.g k port-forward nats-depl-6b76f845b6-g8j4s 4222:4222