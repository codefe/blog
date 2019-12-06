# 确保脚本抛出遇到的错误
set -e

# 生成静态文件 这个跟package.json一致；
npm run build

# 进入生成的文件夹
cd docs/.vuepress/dist


git init
git add -A
git commit -m 'deploy'

# git push -f git@github.com:newway7/blog.git master:gh-pages
# 如果发布到 https://<USERNAME>.github.io
git remote add origin https://github.com/newway7/test_1.git

# 拉取远程仓库的文件
 git pull --rebase origin master 
# 如果发布到 https://<USERNAME>.github.io/<REPO>
git push -u origin master

cd -
