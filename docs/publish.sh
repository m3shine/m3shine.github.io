echo "gitbook init"
gitbook init
echo "gitbook build"
rm -rf docs
gitbook build ./ ./docs
echo "git add ."
git add .
echo "git commit"
git commit -m "publish"
echo "git push"
git push origin master
echo "Done!"
