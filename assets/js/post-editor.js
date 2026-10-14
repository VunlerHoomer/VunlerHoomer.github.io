import { marked } from "../vendor/marked.esm.js";

const form = document.querySelector("#post-editor");
const title = document.querySelector("#post-title");
const date = document.querySelector("#post-date");
const tags = document.querySelector("#post-tags");
const body = document.querySelector("#post-body");
const preview = document.querySelector("#post-preview");
const status = document.querySelector("#draft-status");
const feedback = document.querySelector("#editor-feedback");
const storageKey = "chengxuan-academic-draft-v1";
const repository = "VunlerHoomer/VunlerHoomer.github.io";
const today = new Intl.DateTimeFormat("en-CA", { timeZone: "Asia/Shanghai", year: "numeric", month: "2-digit", day: "2-digit" }).format(new Date());
let draftId = Date.now().toString(36);

date.value = today;
date.max = today;
try {
  const draft = JSON.parse(localStorage.getItem(storageKey) || "null");
  if (draft && typeof draft === "object") {
    title.value = typeof draft.title === "string" ? draft.title : "";
    date.value = /^\d{4}-\d{2}-\d{2}$/.test(draft.date) ? draft.date : today;
    tags.value = typeof draft.tags === "string" ? draft.tags : "";
    body.value = typeof draft.body === "string" ? draft.body : "";
    draftId = typeof draft.id === "string" && /^[a-z0-9]+$/.test(draft.id) ? draft.id : draftId;
    status.textContent = "Your saved draft has been restored.";
  }
} catch {
  status.textContent = "Browser storage is unavailable. Download your draft to keep a copy.";
}

function renderPreview() {
  if (!body.value.trim()) {
    preview.innerHTML = "<p>Your preview will appear here.</p>";
    return;
  }
  if (!window.DOMPurify) {
    preview.textContent = body.value;
    feedback.textContent = "Formatted preview could not load. Your draft is still available as text.";
    return;
  }
  preview.innerHTML = window.DOMPurify.sanitize(marked.parse(body.value, { gfm: true }), {
    FORBID_TAGS: ["style", "iframe", "form", "input", "button"],
    FORBID_ATTR: ["style"],
  });
  preview.querySelectorAll("a").forEach((link) => {
    link.target = "_blank";
    link.rel = "noopener noreferrer";
  });
}

function saveDraft() {
  try {
    localStorage.setItem(storageKey, JSON.stringify({ id: draftId, title: title.value, date: date.value, tags: tags.value, body: body.value }));
    status.textContent = "Draft saved in this browser.";
  } catch {
    status.textContent = "This draft could not be saved locally. Download a copy before leaving.";
  }
}

function filename() {
  const slug =
    title.value
      .normalize("NFKC")
      .toLowerCase()
      .replace(/[^\p{L}\p{N}]+/gu, "-")
      .replace(/^-|-$/g, "")
      .slice(0, 70) || "note";
  return `${date.value}-${slug}-${draftId.slice(-5)}.md`;
}

function markdownFile() {
  const tagList = tags.value
    .split(",")
    .map((tag) => tag.trim())
    .filter(Boolean);
  return [
    "---",
    "layout: post",
    `title: ${JSON.stringify(title.value.trim())}`,
    `date: ${date.value} 00:00:00 +0800`,
    `tags: ${JSON.stringify(tagList)}`,
    "related_posts: false",
    "---",
    "",
    body.value,
    "",
  ].join("\n");
}

function validate() {
  if (!title.value.trim() || !body.value.trim()) {
    feedback.textContent = "Add a title and some text before exporting or publishing.";
    (!title.value.trim() ? title : body).focus();
    return false;
  }
  if (!form.reportValidity()) return false;
  return true;
}

function download() {
  const url = URL.createObjectURL(new Blob([markdownFile()], { type: "text/markdown;charset=utf-8" }));
  const link = document.createElement("a");
  link.href = url;
  link.download = filename();
  document.body.appendChild(link);
  link.click();
  link.remove();
  setTimeout(() => URL.revokeObjectURL(url), 1000);
}

form.addEventListener("input", () => {
  feedback.textContent = "";
  saveDraft();
  renderPreview();
});

document.querySelector("#download-post").addEventListener("click", () => {
  if (!validate()) return;
  download();
  feedback.textContent = "Markdown downloaded. Your browser draft is still saved.";
});

form.addEventListener("submit", (event) => {
  event.preventDefault();
  if (!validate()) return;
  saveDraft();
  const destination = new URL(`https://github.com/${repository}/new/main`);
  destination.searchParams.set("filename", `_posts/${filename()}`);
  destination.searchParams.set("value", markdownFile());
  destination.searchParams.set("message", `Add post: ${title.value.trim()}`);
  if (destination.href.length > 7000) {
    download();
    document.querySelector("#upload-post").hidden = false;
    feedback.textContent =
      "Your post is too long for the editor link, so it was downloaded. Choose Upload Markdown on GitHub, select the downloaded file, and commit it.";
    return;
  }
  window.location.assign(destination.href);
  feedback.textContent =
    "Review the article on GitHub and choose Commit changes. It is not published until you commit. Your draft remains saved here.";
});

const resetConfirm = document.querySelector("#reset-confirm");
function resetDraft() {
  title.value = "";
  body.value = "";
  tags.value = "";
  date.value = today;
  draftId = Date.now().toString(36);
  feedback.textContent = "";
  resetConfirm.hidden = true;
  document.querySelector("#upload-post").hidden = true;
  saveDraft();
  renderPreview();
  title.focus();
}
document.querySelector("#new-draft").addEventListener("click", () => {
  if (title.value || body.value) {
    resetConfirm.hidden = false;
    document.querySelector("#cancel-reset").focus();
  } else resetDraft();
});
document.querySelector("#confirm-reset").addEventListener("click", resetDraft);
document.querySelector("#cancel-reset").addEventListener("click", () => {
  resetConfirm.hidden = true;
  body.focus();
});
renderPreview();
