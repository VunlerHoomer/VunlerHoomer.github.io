# 施承轩的个人学术网站

基于 al-folio v1，保留原有论文、项目、博客和 CV 能力。英文为主，显示中文姓名。

## 网站资料

- 姓名：Chengxuan Shi / 施承轩
- 学校：Xi’an Jiaotong-Liverpool University / 西交利物浦大学
- GitHub 用户名：VunlerHoomer（显示名为 Stellar）
- 目标网址：https://vunlerhoomer.github.io
- 研究方向、邮箱、学位、时间、论文和项目尚未提供；没有编造这些信息。

## 日常更新

| 内容                 | 文件                              |
| -------------------- | --------------------------------- |
| 简介与中文姓名       | `_pages/about.md`                 |
| 姓名、网址、全站设置 | `_config.yml`                     |
| 论文                 | `_bibliography/papers.bib`        |
| 项目                 | `_projects/` 下新增 Markdown 文件 |
| 简历                 | `_data/cv.yml`                    |
| GitHub、邮箱等链接   | `_data/socials.yml`               |
| 博客文章             | `_posts/YYYY-MM-DD-title.md`      |
| 色彩、间距、字体     | `assets/css/main.scss`            |

博客入口已显示。进入 `/blog/`，点击 **Write a post**：

1. 填写标题、日期、标签，用 Markdown 写正文；右侧实时预览。
2. 草稿仅保存在当前浏览器，不会自动同步到其他设备。可点击 **Download Markdown** 备份。
3. 点击 **Continue to GitHub**，登录 VunlerHoomer 账户，检查预填的文件并点击 **Commit changes**。提交后自动部署。
4. 长文章自动下载 Markdown，再点击 **Upload Markdown on GitHub** 上传到 `_posts` 并提交。
5. 完成发布后返回编辑页，点击 **New draft**，在页面内确认后开始下一篇。

浏览器预览会清除脚本与危险链接；导出保留原始 Markdown。数学公式和 Liquid 等 Jekyll 特性以最终构建结果为准。日期限制为今天及以前，避免文章因未来日期而暂不显示。
论文和项目为空时显示简洁的空状态；填写真实内容后会自动展示。
研究方向暂未添加。首页照片位于 `assets/img/chengxuan-shi.jpg`，按原图比例显示；替换该文件即可更新照片。

## 本地预览

使用 Ruby 3.3 和 Bundler，在项目目录执行：

```sh
bundle install
bundle exec jekyll serve --host 127.0.0.1 --port 4000
```

访问 http://127.0.0.1:4000 。本个人网站的 `baseurl` 为空，不能沿用上游演示站的 `/al-folio` 子路径。

## 发布

GitHub 仓库应为 `VunlerHoomer/VunlerHoomer.github.io`。本项目通过 `Deploy site` workflow 直接部署：提交 `main` 后构建、检查必须的页面和资源，再由 GitHub 官方 Pages Actions 上传和发布。并发控制确保新的发布取代旧的排队任务。

仓库 Settings → Pages → Build and deployment → Source 设置为 **GitHub Actions**。发布任务通过 `pages: write` 和 `id-token: write` 授权；不再通过 `gh-pages` 分支触发第二次构建。

## 维护与升级

主题通过 Gemfile 和 Gemfile.lock 固定版本。主题文件覆盖包括 `assets/css/main.scss`、`_includes/header.liquid`、`_includes/footer.liquid`，用于白色与克莱因蓝风格、统一导航和简洁页脚；`.al-folio-overrides.yml` 记录了上游基线。

升级主题后运行：

```sh
bundle exec al-folio upgrade overrides audit
bundle exec al-folio upgrade audit
bundle exec jekyll build
```

不要盲目覆盖个人内容或套用上游示例资料。安装依赖后可用 `npm run lint:prettier` 检查格式。
需要在文章中嵌入 Jupyter 笔记本时，再安装 nbconvert；当前页面不依赖它。

al-folio 使用 MIT 许可证，原始 LICENSE 已保留。

## 设计与前端资源

已安装并使用 Anthropic 官方 frontend-design skill：
https://github.com/anthropics/skills/tree/main/skills/frontend-design

配色为纯白 `#FFFFFF` 和克莱因蓝 `#002FA7`。Manrope 字体随站点托管，许可证在 `assets/fonts/OFL.txt`。
编辑器使用固定版本的 marked 和 DOMPurify，分发文件及许可证位于 `assets/vendor/`，依赖版本记录在 package.json 与 package-lock.json。
