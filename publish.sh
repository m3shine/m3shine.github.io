echo "gitbook init"
gitbook init
echo "gitbook build"
gitbook build --output=./docs
echo "git add ."
git add .
echo "git commit"
git commit -m "publish"
echo "git push"
git push origin master
echo "Done!"
