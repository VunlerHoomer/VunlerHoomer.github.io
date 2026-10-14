---
layout: page
permalink: /write/
title: Write a post
description: A quiet space for your notes.
nav: false
sitemap: false
---

<form id="post-editor" class="post-editor">
  <div class="editor-meta">
    <label for="post-title">Title<input id="post-title" name="title" required maxlength="180" placeholder="Enter a title…" autocomplete="off"></label>
    <label for="post-date">Date<input id="post-date" name="date" type="date" required></label>
    <label for="post-tags">Tags<input id="post-tags" name="tags" maxlength="240" placeholder="e.g. research, notes" autocomplete="off"></label>
  </div>
  <div class="editor-panels">
    <div><label for="post-body">Markdown</label><textarea id="post-body" name="body" required spellcheck="true" placeholder="Start writing…"></textarea></div>
    <div><h2 id="preview-label">Preview</h2><article id="post-preview" class="markdown-preview" aria-labelledby="preview-label"><p>Your preview will appear here.</p></article></div>
  </div>
  <div class="editor-actions">
    <div><p id="draft-status" role="status">Drafts are saved in this browser.</p><button id="new-draft" type="button" class="text-button">New draft</button></div>
    <div class="editor-publish"><div class="editor-buttons"><button id="download-post" type="button" class="outline-button">Download Markdown</button><button type="submit" class="blue-button">Continue to GitHub</button></div><p>Review and commit your post on GitHub to publish it.</p></div>
  </div>
  <div id="reset-confirm" class="reset-confirm" hidden>
    <p>Discard the current draft? Download a copy first if you want to keep it.</p>
    <button id="confirm-reset" type="button" class="outline-button">Discard and start new</button>
    <button id="cancel-reset" type="button" class="text-button">Keep writing</button>
  </div>
  <a id="upload-post" class="outline-button" href="https://github.com/VunlerHoomer/VunlerHoomer.github.io/upload/main/_posts" hidden>Upload Markdown on GitHub</a>
  <p id="editor-feedback" class="editor-feedback" role="status"></p>
  <p class="editor-help">Drafts stay on this device. Download a copy to keep a backup. Only the repository owner can publish to this website.</p>
</form>
<script src="{{ '/assets/vendor/purify.min.js' | relative_url }}" defer></script>
<script type="module" src="{{ '/assets/js/post-editor.js' | relative_url }}"></script>
