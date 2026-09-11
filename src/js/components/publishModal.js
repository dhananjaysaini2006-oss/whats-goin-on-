import { cacheService } from '../services/cacheService.js';
import { CATEGORIES } from '../config/sources.js';
import { firebaseService } from '../services/firebaseService.js';

/**
 * Fast client-side image compression & Data URL generator.
 * Guarantees photos can always be saved into articles immediately,
 * even if Firebase Cloud Storage is unprovisioned, timing out, or offline.
 */
function optimizeImageToDataUrl(file, maxWidth = 1280, quality = 0.85) {
  return new Promise((resolve) => {
    const reader = new FileReader();
    reader.onload = (e) => {
      const img = new Image();
      img.onload = () => {
        let width = img.width;
        let height = img.height;
        if (width > maxWidth) {
          height = Math.round((height * maxWidth) / width);
          width = maxWidth;
        }
        const canvas = document.createElement('canvas');
        canvas.width = width;
        canvas.height = height;
        const ctx = canvas.getContext('2d');
        ctx.drawImage(img, 0, 0, width, height);
        const dataUrl = canvas.toDataURL(file.type === 'image/png' ? 'image/png' : 'image/jpeg', quality);
        resolve(dataUrl);
      };
      img.onerror = () => resolve(e.target.result);
      img.src = e.target.result;
    };
    reader.onerror = () => resolve(null);
    reader.readAsDataURL(file);
  });
}

export class PublishModalComponent {
  constructor(onArticlePublishedCallback) {
    this.onArticlePublishedCallback = onArticlePublishedCallback;
    this.modalEl = null;
    this.isOpen = false;
    this.editingArticleId = null;

    this.presetImages = [
      {
        label: '🏛️ Parliament & Central Vista',
        url: 'https://images.unsplash.com/photo-1587474260584-136574528ed5?w=1200&auto=format&fit=crop&q=80'
      },
      {
        label: '⚖️ Supreme Court & Justice',
        url: 'https://images.unsplash.com/photo-1589829545856-d10d557cf95f?w=1200&auto=format&fit=crop&q=80'
      },
      {
        label: '🪙 Indian Rupee & RBI',
        url: 'https://images.unsplash.com/photo-1607604276583-eef5d076aa5f?w=1200&auto=format&fit=crop&q=80'
      },
      {
        label: '🚀 ISRO Space Rocket',
        url: 'https://images.unsplash.com/photo-1517976487508-59a5a0da23b2?w=1200&auto=format&fit=crop&q=80'
      },
      {
        label: '🤖 Semiconductors & AI',
        url: 'https://images.unsplash.com/photo-1518770660439-4636190af475?w=1200&auto=format&fit=crop&q=80'
      },
      {
        label: '🌍 Global Summit & Diplomacy',
        url: 'https://images.unsplash.com/photo-1511578314322-379afb476865?w=1200&auto=format&fit=crop&q=80'
      }
    ];

    this.selectedImageUrl = this.presetImages[0].url;
    this.isUploadingImage = false;
    this.lastSelectedFile = null;
    this.currentPreviewBlobUrl = null;
    this.dragCounter = 0;
  }

  init() {
    this.injectModalHtml();
    this.attachEventListeners();
  }

  injectModalHtml() {
    const existing = document.getElementById('publish-studio-modal');
    if (existing) existing.remove();

    const modal = document.createElement('div');
    modal.id = 'publish-studio-modal';
    modal.className = 'publish-modal-overlay';
    modal.setAttribute('role', 'dialog');
    modal.setAttribute('aria-modal', 'true');
    modal.setAttribute('aria-hidden', 'true');

    modal.innerHTML = `
      <div class="publish-modal-container">
        <!-- Header -->
        <div class="publish-modal-header">
          <div style="display: flex; align-items: center; gap: 10px;">
            <span class="badge badge-live" style="background: var(--hindu-navy); color: #fff;">EDITORIAL CMS</span>
            <h2 style="font-family: var(--font-serif); font-size: 1.55rem; color: var(--text-primary); margin: 0;">
              Publish News Story or Editorial
            </h2>
          </div>
          <button id="btn-close-publish-modal" class="btn-close-modal" title="Close Editorial Studio">
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
              <line x1="18" y1="6" x2="6" y2="18"></line><line x1="6" y1="6" x2="18" y2="18"></line>
            </svg>
          </button>
        </div>

        <!-- Form Body -->
        <form id="publish-studio-form" class="publish-modal-body">
          <!-- Headline -->
          <div class="publish-form-group">
            <label class="publish-label">Headline / Title *</label>
            <input type="text" id="pub-headline" class="publish-input" placeholder="e.g., Union Cabinet Approves Landmark Statutory Reforms for Infrastructure & Clean Energy" required />
          </div>

          <!-- Byline & Dateline Grid -->
          <div class="publish-form-grid-2">
            <div class="publish-form-group">
              <label class="publish-label">Author / Byline</label>
              <input type="text" id="pub-byline" class="publish-input" placeholder="e.g., What's Going On Bureau / Special Correspondent" value="What's Going On Editorial Desk" />
            </div>

            <div class="publish-form-group">
              <label class="publish-label">Dateline Prefix</label>
              <select id="pub-dateline" class="publish-select">
                <option value="NEW DELHI —">NEW DELHI —</option>
                <option value="MUMBAI —">MUMBAI —</option>
                <option value="BENGALURU —">BENGALURU —</option>
                <option value="CHENNAI —">CHENNAI —</option>
                <option value="KOLKATA —">KOLKATA —</option>
                <option value="WASHINGTON —">WASHINGTON —</option>
                <option value="LONDON —">LONDON —</option>
                <option value="GLOBAL WIRE —">GLOBAL WIRE —</option>
              </select>
            </div>
          </div>

          <!-- Category & Read Time -->
          <div class="publish-form-grid-2">
            <div class="publish-form-group">
              <label class="publish-label">Beat / Category *</label>
              <select id="pub-category" class="publish-select">
                <option value="${CATEGORIES.INDIA_POLITICS}">🏛️ Indian Politics & Governance</option>
                <option value="${CATEGORIES.INDIA}">🇮🇳 India National News</option>
                <option value="${CATEGORIES.WORLD}">🌍 World & Global Affairs</option>
                <option value="${CATEGORIES.BUSINESS}">📈 Business, Economy & Markets</option>
                <option value="${CATEGORIES.TECH}">🤖 Technology & AI</option>
                <option value="${CATEGORIES.SCIENCE}">🚀 Science & Space</option>
                <option value="opinion">✒️ Editorial & Opinion</option>
              </select>
            </div>

            <div class="publish-form-group">
              <label class="publish-label">Estimated Read Time</label>
              <input type="text" id="pub-readtime" class="publish-input" placeholder="e.g. 3 min read" value="3 min read" />
            </div>
          </div>

          <!-- Featured Image Section -->
          <div class="publish-form-group">
            <div style="display: flex; justify-content: space-between; align-items: baseline; flex-wrap: wrap; gap: 4px;">
              <label class="publish-label">Featured Photojournalist Image *</label>
              <span style="font-size: 0.72rem; color: var(--text-muted);">Upload photo, pick preset, or paste URL</span>
            </div>

            <!-- Preset Photo Selector -->
            <div class="preset-photo-pills" id="pub-photo-presets">
              ${this.presetImages.map((p, idx) => `
                <button type="button" class="preset-photo-btn ${idx === 0 ? 'active' : ''}" data-url="${p.url}">
                  ${p.label}
                </button>
              `).join('')}
            </div>

            <!-- Drag & Drop Dropzone Component -->
            <div class="publish-dropzone" id="pub-dropzone" tabindex="0" role="button" aria-label="Drop photojournalist image here or browse">
              <input type="file" id="pub-file-input" accept=".jpg,.jpeg,.png,.webp,image/jpeg,image/png,image/webp" style="display: none;" />

              <!-- Default Dropzone Prompt -->
              <div class="publish-dropzone-content" id="pub-dropzone-content">
                <svg class="publish-dropzone-icon" width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                  <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"></path>
                  <polyline points="17 8 12 3 7 8"></polyline>
                  <line x1="12" y1="3" x2="12" y2="15"></line>
                </svg>
                <div class="publish-dropzone-title">
                  <span id="pub-dropzone-prompt">Drag &amp; drop photojournalist image here, or </span>
                  <span class="publish-dropzone-browse">browse files</span>
                </div>
                <div class="publish-dropzone-sub">
                  Supports JPG, JPEG, PNG, WEBP &bull; Max 5MB &bull; Cloud &amp; Local Auto-Sync
                </div>
              </div>

              <!-- Uploading / Progress View -->
              <div id="pub-dropzone-uploading" class="publish-dropzone-status" style="display: none;">
                <div class="publish-dropzone-status-text">
                  <div class="publish-dropzone-spinner"></div>
                  <span id="pub-upload-progress-text">Processing photo...</span>
                </div>
                <div class="publish-dropzone-progress-bar">
                  <div id="pub-upload-progress-fill" class="publish-dropzone-progress-fill" style="width: 25%;"></div>
                </div>
                <span id="pub-upload-filename" style="font-size: 0.72rem; color: var(--text-muted);"></span>
              </div>

              <!-- Success State -->
              <div id="pub-dropzone-success" class="publish-dropzone-status" style="display: none;">
                <div class="publish-dropzone-success-badge">
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5">
                    <polyline points="20 6 9 17 4 12"></polyline>
                  </svg>
                  <span id="pub-success-filename">Photo Ready to Publish</span>
                </div>
                <div class="publish-dropzone-replace-hint">Click or drag a new photo to replace</div>
              </div>
            </div>

            <!-- Inline Error Box with Retry Action -->
            <div id="pub-upload-error" class="publish-dropzone-error" style="display: none;">
              <div style="display: flex; align-items: center; gap: 8px;">
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" style="flex-shrink: 0;">
                  <circle cx="12" cy="12" r="10"></circle>
                  <line x1="12" y1="8" x2="12" y2="12"></line>
                  <line x1="12" y1="16" x2="12.01" y2="16"></line>
                </svg>
                <span id="pub-upload-error-text"></span>
              </div>
              <button type="button" id="pub-upload-retry-btn" class="publish-dropzone-btn-retry" style="display: none;">
                Retry
              </button>
            </div>

            <!-- Inline Informative Notice Box -->
            <div id="pub-upload-notice" class="publish-dropzone-notice" style="display: none;">
              <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" style="flex-shrink: 0; color: var(--hindu-navy);">
                <circle cx="12" cy="12" r="10"></circle>
                <line x1="12" y1="16" x2="12" y2="12"></line>
                <line x1="12" y1="8" x2="12.01" y2="8"></line>
              </svg>
              <span id="pub-upload-notice-text"></span>
            </div>

            <!-- Manual URL Fallback Field -->
            <div class="publish-url-fallback-row">
              <span class="publish-url-fallback-label">Or direct URL:</span>
              <input type="url" id="pub-custom-image-url" class="publish-input" placeholder="Or paste custom image URL (https://...)" value="${this.presetImages[0].url}" />
            </div>

            <!-- Live Image Preview Thumbnail -->
            <div class="publish-image-preview-wrap">
              <img id="pub-image-preview" src="${this.presetImages[0].url}" alt="Preview" class="publish-image-preview" />
              <div class="publish-preview-overlay">
                <span id="pub-preview-tag" class="publish-preview-tag">Preset Photo</span>
              </div>
            </div>
          </div>

          <!-- Lead Excerpt -->
          <div class="publish-form-group">
            <label class="publish-label">Executive Lead Summary (1-2 sentences) *</label>
            <textarea id="pub-excerpt" class="publish-textarea" rows="2" placeholder="Brief summary displayed on front-page card..." required></textarea>
          </div>

          <!-- Full Article Content -->
          <div class="publish-form-group">
            <label class="publish-label">Full Article Story Narrative *</label>
            <textarea id="pub-content" class="publish-textarea" rows="7" placeholder="Write full news article or analysis story (paragraphs separated by blank lines)..." required></textarea>
          </div>

          <!-- Key Takeaways -->
          <div class="publish-form-group">
            <label class="publish-label">Core Takeaways (One per line)</label>
            <textarea id="pub-keypoints" class="publish-textarea" rows="3" placeholder="Key Point 1&#10;Key Point 2&#10;Key Point 3"></textarea>
          </div>

          <!-- Footer Actions -->
          <div class="publish-modal-footer">
            <button type="button" id="btn-cancel-publish" class="btn-cancel-modal">
              Cancel
            </button>
            <button type="submit" id="btn-submit-publish" class="btn-publish-submit">
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                <polyline points="20 6 9 17 4 12"></polyline>
              </svg>
              <span>Publish to What's Going On</span>
            </button>
          </div>
        </form>
      </div>
    `;

    document.body.appendChild(modal);
    this.modalEl = modal;
  }

  attachEventListeners() {
    if (!this.modalEl) return;

    // Close buttons
    const btnClose = this.modalEl.querySelector('#btn-close-publish-modal');
    const btnCancel = this.modalEl.querySelector('#btn-cancel-publish');
    if (btnClose) btnClose.addEventListener('click', () => this.close());
    if (btnCancel) btnCancel.addEventListener('click', () => this.close());

    // Backdrop click
    this.modalEl.addEventListener('click', (e) => {
      if (e.target === this.modalEl) this.close();
    });

    // Escape key
    window.addEventListener('keydown', (e) => {
      if (e.key === 'Escape' && this.isOpen) this.close();
    });

    // Preset Photo Selector
    const presetBtns = this.modalEl.querySelectorAll('.preset-photo-btn');
    const customUrlInput = this.modalEl.querySelector('#pub-custom-image-url');
    const previewImg = this.modalEl.querySelector('#pub-image-preview');
    const previewTag = this.modalEl.querySelector('#pub-preview-tag');

    presetBtns.forEach(btn => {
      btn.addEventListener('click', () => {
        presetBtns.forEach(b => b.classList.remove('active'));
        btn.classList.add('active');
        const url = btn.getAttribute('data-url');
        this.selectedImageUrl = url;
        if (customUrlInput) customUrlInput.value = url;
        if (previewImg) previewImg.src = url;
        if (previewTag) previewTag.textContent = 'Preset Photo';

        // Override uploaded photo and reset dropzone
        this.lastSelectedFile = null;
        if (this.currentPreviewBlobUrl) {
          URL.revokeObjectURL(this.currentPreviewBlobUrl);
          this.currentPreviewBlobUrl = null;
        }
        this.resetDropzoneDefault();
        this.clearDropzoneError();
      });
    });

    // Manual Custom URL input
    if (customUrlInput) {
      customUrlInput.addEventListener('input', () => {
        presetBtns.forEach(b => b.classList.remove('active'));
        this.selectedImageUrl = customUrlInput.value.trim();
        if (previewImg) previewImg.src = this.selectedImageUrl;
        if (previewTag) previewTag.textContent = 'Custom URL';

        this.lastSelectedFile = null;
        if (this.currentPreviewBlobUrl) {
          URL.revokeObjectURL(this.currentPreviewBlobUrl);
          this.currentPreviewBlobUrl = null;
        }
        this.resetDropzoneDefault();
        this.clearDropzoneError();
      });
    }

    // Initialize Dropzone Listeners
    this.setupDropzone();

    // Form submit
    const form = this.modalEl.querySelector('#publish-studio-form');
    if (form) {
      form.addEventListener('submit', (e) => {
        e.preventDefault();
        this.handleSubmit();
      });
    }
  }

  setupDropzone() {
    const dropzone = this.modalEl.querySelector('#pub-dropzone');
    const fileInput = this.modalEl.querySelector('#pub-file-input');
    const retryBtn = this.modalEl.querySelector('#pub-upload-retry-btn');
    if (!dropzone || !fileInput) return;

    // Click to browse
    dropzone.addEventListener('click', (e) => {
      if (this.isUploadingImage) return;
      if (e.target.closest('#pub-upload-retry-btn')) return;
      fileInput.click();
    });

    // Keyboard accessibility (Enter / Space)
    dropzone.addEventListener('keydown', (e) => {
      if ((e.key === 'Enter' || e.key === ' ') && !this.isUploadingImage) {
        e.preventDefault();
        fileInput.click();
      }
    });

    // File input change
    fileInput.addEventListener('change', () => {
      if (fileInput.files && fileInput.files.length > 0) {
        this.handleFileSelected(fileInput.files[0]);
      }
    });

    // Drag & Drop event handling with enter counter to prevent child flicker
    this.dragCounter = 0;

    dropzone.addEventListener('dragenter', (e) => {
      e.preventDefault();
      e.stopPropagation();
      this.dragCounter++;
      if (!this.isUploadingImage) {
        dropzone.classList.add('is-dragover');
        const prompt = this.modalEl.querySelector('#pub-dropzone-prompt');
        if (prompt) prompt.textContent = 'Drop image here to upload, or ';
      }
    });

    dropzone.addEventListener('dragover', (e) => {
      e.preventDefault();
      e.stopPropagation();
      if (!this.isUploadingImage) {
        dropzone.classList.add('is-dragover');
      }
    });

    dropzone.addEventListener('dragleave', (e) => {
      e.preventDefault();
      e.stopPropagation();
      this.dragCounter--;
      if (this.dragCounter <= 0) {
        this.dragCounter = 0;
        dropzone.classList.remove('is-dragover');
        const prompt = this.modalEl.querySelector('#pub-dropzone-prompt');
        if (prompt) prompt.textContent = 'Drag & drop photojournalist image here, or ';
      }
    });

    dropzone.addEventListener('drop', (e) => {
      e.preventDefault();
      e.stopPropagation();
      this.dragCounter = 0;
      dropzone.classList.remove('is-dragover');
      const prompt = this.modalEl.querySelector('#pub-dropzone-prompt');
      if (prompt) prompt.textContent = 'Drag & drop photojournalist image here, or ';

      if (this.isUploadingImage) return;

      const dt = e.dataTransfer;
      if (dt && dt.files && dt.files.length > 0) {
        this.handleFileSelected(dt.files[0]);
      }
    });

    // Retry upload button
    if (retryBtn) {
      retryBtn.addEventListener('click', (e) => {
        e.stopPropagation();
        if (this.lastSelectedFile) {
          this.uploadFileToFirebase(this.lastSelectedFile);
        }
      });
    }
  }

  handleFileSelected(file) {
    if (!file) return;

    // Clear any previous error
    this.clearDropzoneError();

    // 1. Validate file extension & MIME type (.jpg, .jpeg, .png, .webp)
    const allowedExtensions = ['.jpg', '.jpeg', '.png', '.webp'];
    const allowedMimeTypes = ['image/jpeg', 'image/png', 'image/webp'];
    const ext = '.' + (file.name.split('.').pop() || '').toLowerCase();
    const mime = (file.type || '').toLowerCase();

    const isValidType = allowedMimeTypes.includes(mime) || allowedExtensions.includes(ext);
    if (!isValidType) {
      this.showDropzoneError(
        `Invalid file type "${ext || file.type}". Only .jpg, .jpeg, .png, and .webp images are allowed.`,
        false
      );
      return;
    }

    // 2. Validate file size (Max 5MB)
    const MAX_SIZE = 5 * 1024 * 1024;
    if (file.size > MAX_SIZE) {
      const sizeMB = (file.size / (1024 * 1024)).toFixed(2);
      this.showDropzoneError(
        `File size exceeds 5MB limit (${sizeMB} MB). Please choose a smaller image.`,
        false
      );
      return;
    }

    // 3. Cache file for retry if needed
    this.lastSelectedFile = file;

    // 4. Clear active state from preset buttons (upload overrides preset)
    const presetBtns = this.modalEl.querySelectorAll('.preset-photo-btn');
    presetBtns.forEach(btn => btn.classList.remove('active'));

    // 5. Show live preview thumbnail of selected/dropped image BEFORE upload completes
    if (this.currentPreviewBlobUrl) {
      URL.revokeObjectURL(this.currentPreviewBlobUrl);
    }
    this.currentPreviewBlobUrl = URL.createObjectURL(file);

    const previewImg = this.modalEl.querySelector('#pub-image-preview');
    if (previewImg) previewImg.src = this.currentPreviewBlobUrl;

    const previewTag = this.modalEl.querySelector('#pub-preview-tag');
    if (previewTag) previewTag.textContent = 'Local Preview (Uploading...)';

    // 6. Begin upload to Firebase Storage
    this.uploadFileToFirebase(file);
  }

  async uploadFileToFirebase(file) {
    this.isUploadingImage = true;
    this.clearDropzoneError();
    this.clearDropzoneNotice();
    this.setDropzoneUploadingState(file, 20);

    const submitBtn = this.modalEl.querySelector('#btn-submit-publish');
    const originalSubmitHtml = submitBtn ? submitBtn.innerHTML : '';
    if (submitBtn) {
      submitBtn.disabled = true;
      submitBtn.style.opacity = '0.6';
      submitBtn.style.cursor = 'not-allowed';
      submitBtn.innerHTML = `
        <div class="publish-dropzone-spinner" style="border-top-color:#fff; border-color:rgba(255,255,255,0.3);"></div>
        <span>Syncing Photo...</span>
      `;
    }

    try {
      // 1. Attempt uploading to Firebase Storage with progress updates
      const downloadUrl = await firebaseService.uploadArticleImage(file, (progress) => {
        this.setDropzoneUploadingState(file, Math.max(progress, 25));
      });

      // Upload to Firebase Cloud Succeeded!
      this.isUploadingImage = false;
      this.selectedImageUrl = downloadUrl;

      const customUrlInput = this.modalEl.querySelector('#pub-custom-image-url');
      if (customUrlInput) customUrlInput.value = downloadUrl;

      const previewImg = this.modalEl.querySelector('#pub-image-preview');
      if (previewImg) previewImg.src = downloadUrl;

      const previewTag = this.modalEl.querySelector('#pub-preview-tag');
      if (previewTag) previewTag.textContent = 'Firebase Cloud Storage';

      this.setDropzoneSuccessState(file, 'cloud');

    } catch (err) {
      console.warn('[PublishModal] Cloud upload unavailable, engaging instant local fallback:', err);

      // 2. Automatic Local Fallback: Convert to high-resolution optimized Data URL
      // This guarantees the user is NEVER blocked from publishing, even if Firebase Storage bucket
      // has not been created yet in the Firebase Console!
      try {
        const localDataUrl = await optimizeImageToDataUrl(file);
        if (localDataUrl) {
          this.isUploadingImage = false;
          this.selectedImageUrl = localDataUrl;

          const customUrlInput = this.modalEl.querySelector('#pub-custom-image-url');
          if (customUrlInput) customUrlInput.value = localDataUrl.slice(0, 80) + '... [Embedded Image Data]';

          const previewImg = this.modalEl.querySelector('#pub-image-preview');
          if (previewImg) previewImg.src = localDataUrl;

          const previewTag = this.modalEl.querySelector('#pub-preview-tag');
          if (previewTag) previewTag.textContent = 'Local High-Res (Ready to Publish)';

          this.setDropzoneSuccessState(file, 'local');

          let reason = 'Firebase Storage bucket not yet activated in Firebase Console';
          if (err.code === 'storage/unauthorized') {
            reason = 'Storage rules not published in Firebase Console';
          } else if (err.message?.includes('timed out')) {
            reason = 'Cloud storage connection timed out';
          }
          this.showDropzoneNotice(
            `Photo saved locally and ready to publish! (${reason} — your story will publish immediately with this photo).`
          );
          return;
        }
      } catch (fallbackErr) {
        console.error('[PublishModal] Local fallback also failed:', fallbackErr);
      }

      this.isUploadingImage = false;
      this.resetDropzoneDefault();

      let errorMsg = 'Upload failed. You can paste an image URL directly or retry.';
      if (err.code === 'storage/unauthorized') {
        errorMsg = 'Upload rejected by Firebase Storage rules. Ensure write access is granted for article-images/.';
      } else if (err.code === 'storage/quota-exceeded') {
        errorMsg = 'Firebase Storage quota exceeded.';
      } else if (err.message) {
        errorMsg = `Upload failed: ${err.message}`;
      }

      this.showDropzoneError(errorMsg, true);

      const previewTag = this.modalEl.querySelector('#pub-preview-tag');
      if (previewTag) previewTag.textContent = 'Local Preview (Upload Failed)';

    } finally {
      if (submitBtn) {
        submitBtn.disabled = false;
        submitBtn.style.opacity = '';
        submitBtn.style.cursor = '';
        submitBtn.innerHTML = originalSubmitHtml;
      }
    }
  }

  setDropzoneUploadingState(file, progress) {
    const defaultView = this.modalEl.querySelector('#pub-dropzone-content');
    const uploadingView = this.modalEl.querySelector('#pub-dropzone-uploading');
    const successView = this.modalEl.querySelector('#pub-dropzone-success');
    const progressFill = this.modalEl.querySelector('#pub-upload-progress-fill');
    const progressText = this.modalEl.querySelector('#pub-upload-progress-text');
    const filenameLabel = this.modalEl.querySelector('#pub-upload-filename');

    if (defaultView) defaultView.style.display = 'none';
    if (successView) successView.style.display = 'none';
    if (uploadingView) uploadingView.style.display = 'flex';

    if (progressFill) progressFill.style.width = `${progress}%`;
    if (progressText) progressText.textContent = `Processing image... ${progress}%`;
    if (filenameLabel) {
      const sizeMB = (file.size / (1024 * 1024)).toFixed(2);
      filenameLabel.textContent = `${file.name} (${sizeMB} MB)`;
    }
  }

  setDropzoneSuccessState(file, mode = 'cloud') {
    const defaultView = this.modalEl.querySelector('#pub-dropzone-content');
    const uploadingView = this.modalEl.querySelector('#pub-dropzone-uploading');
    const successView = this.modalEl.querySelector('#pub-dropzone-success');
    const successFilename = this.modalEl.querySelector('#pub-success-filename');

    if (defaultView) defaultView.style.display = 'none';
    if (uploadingView) uploadingView.style.display = 'none';
    if (successView) successView.style.display = 'flex';

    if (successFilename) {
      const sizeMB = (file.size / (1024 * 1024)).toFixed(2);
      if (mode === 'cloud') {
        successFilename.textContent = `✓ Uploaded to Cloud: ${file.name} (${sizeMB} MB)`;
      } else {
        successFilename.textContent = `✓ Photo Ready to Publish: ${file.name} (${sizeMB} MB)`;
      }
    }
  }

  resetDropzoneDefault() {
    const defaultView = this.modalEl.querySelector('#pub-dropzone-content');
    const uploadingView = this.modalEl.querySelector('#pub-dropzone-uploading');
    const successView = this.modalEl.querySelector('#pub-dropzone-success');
    const fileInput = this.modalEl.querySelector('#pub-file-input');
    const dropzone = this.modalEl.querySelector('#pub-dropzone');

    if (defaultView) defaultView.style.display = 'flex';
    if (uploadingView) uploadingView.style.display = 'none';
    if (successView) successView.style.display = 'none';
    if (fileInput) fileInput.value = '';
    if (dropzone) dropzone.classList.remove('is-dragover');
    this.dragCounter = 0;
    this.clearDropzoneNotice();
  }

  showDropzoneNotice(message) {
    const noticeBox = this.modalEl.querySelector('#pub-upload-notice');
    const noticeText = this.modalEl.querySelector('#pub-upload-notice-text');
    if (noticeText) noticeText.textContent = message;
    if (noticeBox) noticeBox.style.display = 'flex';
  }

  clearDropzoneNotice() {
    const noticeBox = this.modalEl.querySelector('#pub-upload-notice');
    if (noticeBox) noticeBox.style.display = 'none';
  }

  showDropzoneError(message, canRetry = false) {
    const errorBox = this.modalEl.querySelector('#pub-upload-error');
    const errorText = this.modalEl.querySelector('#pub-upload-error-text');
    const retryBtn = this.modalEl.querySelector('#pub-upload-retry-btn');

    if (errorText) errorText.textContent = message;
    if (retryBtn) retryBtn.style.display = canRetry ? 'inline-block' : 'none';
    if (errorBox) errorBox.style.display = 'flex';
  }

  clearDropzoneError() {
    const errorBox = this.modalEl.querySelector('#pub-upload-error');
    const retryBtn = this.modalEl.querySelector('#pub-upload-retry-btn');
    if (errorBox) errorBox.style.display = 'none';
    if (retryBtn) retryBtn.style.display = 'none';
  }

  open(existingArticle = null) {
    if (!firebaseService.isAdmin()) {
      alert('Access Restricted: Only the administrator can write and publish articles. Please sign in with admin credentials.');
      return;
    }

    if (!this.modalEl) this.injectModalHtml();

    const currentUser = firebaseService.getCurrentUser();
    const bylineInput = this.modalEl.querySelector('#pub-byline');
    if (bylineInput && !existingArticle) {
      if (currentUser) {
        bylineInput.value = currentUser.displayName || currentUser.email.split('@')[0];
      } else {
        bylineInput.value = "What's Going On Editorial Desk";
      }
    }

    this.isOpen = true;
    this.modalEl.classList.add('active');
    this.modalEl.setAttribute('aria-hidden', 'false');
    document.body.style.overflow = 'hidden';

    // Reset dropzone to default state
    this.resetDropzoneDefault();
    this.clearDropzoneError();
    this.lastSelectedFile = null;

    // Populate form if editing
    if (existingArticle) {
      this.editingArticleId = existingArticle.id;
      this.modalEl.querySelector('#pub-headline').value = existingArticle.title || '';
      this.modalEl.querySelector('#pub-byline').value = existingArticle.source || '';
      this.modalEl.querySelector('#pub-category').value = existingArticle.category || CATEGORIES.INDIA_POLITICS;
      this.modalEl.querySelector('#pub-excerpt').value = existingArticle.snippet || '';
      this.modalEl.querySelector('#pub-content').value = existingArticle.content || '';
      this.modalEl.querySelector('#pub-custom-image-url').value = existingArticle.image || '';
      this.modalEl.querySelector('#pub-image-preview').src = existingArticle.image || '';
      this.selectedImageUrl = existingArticle.image || this.presetImages[0].url;

      const previewTag = this.modalEl.querySelector('#pub-preview-tag');
      if (previewTag) previewTag.textContent = 'Existing Article Photo';

      if (existingArticle.keyPoints) {
        this.modalEl.querySelector('#pub-keypoints').value = existingArticle.keyPoints.join('\n');
      }
    } else {
      this.editingArticleId = null;
      this.selectedImageUrl = this.presetImages[0].url;
      const customUrlInput = this.modalEl.querySelector('#pub-custom-image-url');
      if (customUrlInput) customUrlInput.value = this.presetImages[0].url;
      const previewImg = this.modalEl.querySelector('#pub-image-preview');
      if (previewImg) previewImg.src = this.presetImages[0].url;
      const previewTag = this.modalEl.querySelector('#pub-preview-tag');
      if (previewTag) previewTag.textContent = 'Preset Photo';

      const presetBtns = this.modalEl.querySelectorAll('.preset-photo-btn');
      presetBtns.forEach((b, idx) => b.classList.toggle('active', idx === 0));
    }
  }

  close() {
    if (!this.modalEl) return;
    this.isOpen = false;
    this.modalEl.classList.remove('active');
    this.modalEl.setAttribute('aria-hidden', 'true');
    document.body.style.overflow = '';

    if (this.currentPreviewBlobUrl) {
      URL.revokeObjectURL(this.currentPreviewBlobUrl);
      this.currentPreviewBlobUrl = null;
    }
    this.resetDropzoneDefault();
    this.clearDropzoneError();
  }

  handleSubmit() {
    if (!firebaseService.isAdmin()) {
      alert('Access Restricted: Only the administrator can write and publish articles.');
      return;
    }

    if (this.isUploadingImage) {
      alert('Please wait for the photojournalist image upload to finish before publishing.');
      return;
    }

    const headline = this.modalEl.querySelector('#pub-headline').value.trim();
    const byline = this.modalEl.querySelector('#pub-byline').value.trim() || "What's Going On Editorial";
    const dateline = this.modalEl.querySelector('#pub-dateline').value;
    const category = this.modalEl.querySelector('#pub-category').value;
    const readTime = this.modalEl.querySelector('#pub-readtime').value.trim() || '3 min read';
    const imageUrl = this.selectedImageUrl || this.presetImages[0].url;
    const excerpt = this.modalEl.querySelector('#pub-excerpt').value.trim();
    const content = this.modalEl.querySelector('#pub-content').value.trim();
    const keyPointsRaw = this.modalEl.querySelector('#pub-keypoints').value.trim();

    const keyPoints = keyPointsRaw ? keyPointsRaw.split('\n').map(p => p.trim()).filter(Boolean) : [
      'Comprehensive on-the-ground intelligence and editorial assessment.',
      'Analysis corroborated by verified primary sources and statutory records.',
      'Implications reviewed by What\'s Going On editorial desk.'
    ];

    const articleObj = {
      id: this.editingArticleId || ('user-art-' + Date.now()),
      title: headline,
      source: byline,
      sourceId: 'user-published',
      category: category,
      region: category === CATEGORIES.WORLD ? 'global' : 'india',
      isPolitics: category === CATEGORIES.INDIA_POLITICS || category === CATEGORIES.INDIA,
      isUserPublished: true,
      link: '#user-story-' + Date.now(),
      image: imageUrl,
      pubDate: new Date().toISOString(),
      snippet: `${dateline} ${excerpt}`,
      content: content,
      keyPoints: keyPoints,
      readTime: readTime
    };

    cacheService.saveCustomArticle(articleObj);

    if (this.currentPreviewBlobUrl) {
      URL.revokeObjectURL(this.currentPreviewBlobUrl);
      this.currentPreviewBlobUrl = null;
    }

    this.close();

    // Reset form
    this.modalEl.querySelector('#publish-studio-form').reset();

    // Trigger callback to re-render front page
    if (this.onArticlePublishedCallback) {
      this.onArticlePublishedCallback(articleObj);
    }
  }
}
