# My Portfolio - Creative Developer

Một portfolio website hiện đại với thiết kế tông màu đen-tím và nhiều hiệu ứng animation linh hoạt.

## ✨ Tính năng chính

### 🎨 Thiết kế
- **Tông màu chủ đạo**: Đen (#0a0a0a, #1a1a1a) và Tím (#4b0082, #800080, #a100a1)
- **Giao diện hiện đại**: Thiết kế responsive cho mọi thiết bị
- **Typography**: Sử dụng font Inter cho giao diện chuyên nghiệp

### 🚀 Animation & Hiệu ứng
- **Loading Screen**: Màn hình loading với logo quay và hiệu ứng fade
- **Typing Effect**: Hiệu ứng gõ chữ ở Hero Section
- **Particle Effects**: Hiệu ứng hạt tím nhẹ nhàng trên nền
- **Scroll Animations**: Fade-in, slide-in với AOS và GSAP
- **Hover Effects**: Nút bấm, card dự án với hiệu ứng nâng và đổ bóng
- **Parallax**: Hiệu ứng nền di chuyển chậm khi cuộn
- **Ripple Effect**: Hiệu ứng gợn sóng khi click nút

### 📱 Responsive Design
- **Mobile First**: Tối ưu cho điện thoại di động
- **Tablet & Desktop**: Giao diện thích ứng cho mọi kích thước màn hình
- **Navigation**: Menu hamburger cho mobile với animation mượt mà

## 🛠️ Công nghệ sử dụng

- **HTML5**: Cấu trúc semantic và accessible
- **CSS3**: CSS Variables, Grid, Flexbox, Animations
- **JavaScript ES6+**: Vanilla JS với modern syntax
- **GSAP**: Animation library cho hiệu ứng mượt mà
- **AOS**: Animate On Scroll library
- **Font Awesome**: Icons đẹp và đa dạng

## 📁 Cấu trúc dự án

```
My_Portfolio/
├── index.html          # Trang chính
├── styles.css          # Stylesheet với tất cả CSS
├── script.js           # JavaScript với animations và tương tác
└── README.md           # Hướng dẫn này
```

## 🚀 Cách sử dụng

### 1. Mở trực tiếp
- Mở file `index.html` trong trình duyệt web
- Tất cả CDN links sẽ tự động load

### 2. Local Server (Khuyến nghị)
```bash
# Sử dụng Python
python -m http.server 8000

# Sử dụng Node.js
npx serve .

# Sử dụng Live Server (VS Code extension)
# Click chuột phải vào index.html -> "Open with Live Server"
```

### 3. Tùy chỉnh nội dung
- **Thông tin cá nhân**: Chỉnh sửa trong `index.html`
- **Màu sắc**: Thay đổi CSS variables trong `:root`
- **Animation**: Điều chỉnh timing và effects trong `script.js`

## 🎯 Các Section chính

### 1. **Hero Section**
- Tên và nghề nghiệp với typing effect
- Mô tả ngắn gọn
- Nút CTA với hiệu ứng pulse
- Avatar với animation float
- Background với particles và gradient

### 2. **About Section**
- Giới thiệu bản thân
- Ảnh đại diện với hover effect
- Skills grid với icons và hover animations

### 3. **Projects Section**
- Grid các dự án
- Mỗi card có hover effect và overlay
- Links đến demo và source code
- Tech stack tags

### 4. **Contact Section**
- Form liên hệ với validation
- Thông tin liên hệ với icons
- Notification system cho form submission

### 5. **Footer**
- Thông tin tổng hợp
- Social media links với hover effects
- Gradient background

## 🎨 Tùy chỉnh màu sắc

Thay đổi CSS variables trong `styles.css`:

```css
:root {
    --primary-black: #0a0a0a;        /* Đen chính */
    --secondary-black: #1a1a1a;      /* Đen phụ */
    --accent-purple: #4b0082;        /* Tím đậm */
    --accent-purple-light: #800080;  /* Tím nhạt */
    --accent-purple-bright: #a100a1; /* Tím sáng */
    /* ... */
}
```

## 📱 Responsive Breakpoints

- **Mobile**: < 768px
- **Tablet**: 768px - 1024px  
- **Desktop**: > 1024px

## ⚡ Performance

- **Lazy Loading**: AOS chỉ animate khi elements vào viewport
- **Throttling**: Scroll events được tối ưu cho 60fps
- **CSS Animations**: Sử dụng transform và opacity cho hiệu suất tốt
- **Minimal Reflows**: Tránh layout thrashing

## 🔧 Tùy chỉnh nâng cao

### Thêm dự án mới
```html
<div class="project-card" data-aos="fade-up" data-aos-delay="400">
    <div class="project-image">
        <div class="image-placeholder">
            <i class="fas fa-rocket"></i>
        </div>
        <div class="project-overlay">
            <!-- Project links -->
        </div>
    </div>
    <div class="project-content">
        <h3>Tên dự án</h3>
        <p>Mô tả dự án</p>
        <div class="project-tech">
            <span class="tech-tag">React</span>
        </div>
    </div>
</div>
```

### Thêm skill mới
```html
<div class="skill-item" data-aos="zoom-in" data-aos-delay="500">
    <div class="skill-icon">
        <i class="fab fa-vuejs"></i>
    </div>
    <span>Vue.js</span>
</div>
```

## 🌟 Tính năng nâng cao

### Cursor Trail Effect
Bỏ comment dòng cuối trong `script.js`:
```javascript
initCursorTrail(); // Bỏ comment để bật hiệu ứng
```

### Custom Animations
Thêm GSAP animations mới trong `initScrollAnimations()`:
```javascript
gsap.from('.your-element', {
    y: 100,
    opacity: 0,
    duration: 1,
    scrollTrigger: {
        trigger: '.your-element',
        start: 'top 80%'
    }
});
```

## 📞 Hỗ trợ

Nếu bạn cần hỗ trợ hoặc có câu hỏi:
- Tạo issue trên repository
- Liên hệ qua email: your.email@example.com

## 📄 License

Dự án này được phát hành dưới MIT License. Bạn có thể tự do sử dụng, chỉnh sửa và phân phối.

---

**Lưu ý**: Đây là template portfolio, hãy thay thế nội dung mẫu bằng thông tin thực của bạn để tạo portfolio cá nhân hoàn chỉnh!