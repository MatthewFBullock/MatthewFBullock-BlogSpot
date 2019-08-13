docker build -t matt-blog-api ./api/
docker build -t matt-blog-client ./client/

docker run --rm -d -p 9000:9000 --name matt-blog-api matt-blog-api
docker run --rm -d -p 80:3000 --name matt-blog-client matt-blog-client

echo -e "React server is running on port 80. API running on port 9000. \n\nPress Enter to quit"
read quit

echo "shutting down..."

docker stop matt-blog-api matt-blog-client