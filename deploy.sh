PROJECT_NAME="sem3ca2"
DROPLET_URL="167.172.102.79"

echo "Building front end"
npm run build

echo "Deploying front end..."
scp -r ./build/* root@$DROPLET_URL:/var/www/$PROJECT_NAME