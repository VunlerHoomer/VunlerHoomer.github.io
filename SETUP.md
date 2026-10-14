# 施承轩的个人学术网站

基于 al-folio v1，保留原有论文、项目、博客和 CV 能力。英文为主，显示中文姓名。

## 网站资料

- 姓名：Chengxuan Shi / 施承轩
- 学校：Xi’an Jiaotong-Liverpool University / 西交利物浦大学
- GitHub 用户名：VunlerHoomer（显示名为 Stellar）
- 目标网址：https://vunlerhoomer.github.io
- 研究方向、邮箱、头像、学位、时间、论文和项目尚未提供；没有编造这些信息。

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

博客入口暂时隐藏；有文章后将 `_pages/blog.md` 中的 `nav` 改为 `true`。
论文和项目为空时显示简洁的空状态；填写真实内容后会自动展示。
研究方向暂未添加。获得真实头像后，可按 `docs/CUSTOMIZE.md` 添加 al-folio profile 配置，并移除首页姓名缩写块。

## 本地预览

使用 Ruby 3.3 和 Bundler，在项目目录执行：

```sh
bundle install
bundle exec jekyll serve --host 127.0.0.1 --port 4000
```

访问 http://127.0.0.1:4000 。本个人网站的 `baseurl` 为空，不能沿用上游演示站的 `/al-folio` 子路径。

## 发布

GitHub 仓库应为 `VunlerHoomer/VunlerHoomer.github.io`。本项目沿用 al-folio 的 `Deploy site` workflow：提交 `main` 后构建并把静态网站写入 `gh-pages` 分支。

仓库 Settings → Actions → General 中允许工作流读写仓库；Settings → Pages 中选择 Deploy from a branch、`gh-pages`、`/(root)`。

## 维护与升级

主题通过 Gemfile 和 Gemfile.lock 固定版本。唯一的主题文件覆盖是 `assets/css/main.scss`，保留原来的导入，再追加本站样式；`.al-folio-overrides.yml` 记录了上游基线。

升级主题后运行：

```sh
bundle exec al-folio upgrade overrides audit
bundle exec al-folio upgrade audit
bundle exec jekyll build
```

不要盲目覆盖个人内容或套用上游示例资料。安装依赖后可用 `npm run lint:prettier` 检查格式。
需要在文章中嵌入 Jupyter 笔记本时，再安装 nbconvert；当前页面不依赖它。

al-folio 使用 MIT 许可证，原始 LICENSE 已保留。
