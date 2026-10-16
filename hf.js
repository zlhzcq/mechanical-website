(function() {
    const headerHTML = `
    <header id="hf-header">
        <div class="h-content">
            <h1 class="logo">xx机械设备有限公司</h1>
            <div class="menu-toggle" id="menuToggle">
                <span></span><span></span><span></span>
            </div>
            <ul class="nav" id="navMenu">
                <li><a href="index.html">首页</a></li>
                <li><a href="product.html">产品中心</a></li>
                <li><a href="news.html">新闻资讯</a></li>
                <li><a href="about.html">关于我们</a></li>
                <li><a href="contact.html">联系我们</a></li>
            </ul>
        </div>
    </header>`;
    const footerHTML = `
    <footer class="footer">
        <div class="footer-box">
            <div class="footer-top">
                <div class="footer-item">
                    <div class="footer-icon">
                        <svg viewBox="0 0 24 24"><path d="M6.62 10.79c1.44 2.83 3.76 5.14 6.59 6.59l2.2-2.2c.27-.27.67-.36 1.02-.24 1.12.37 2.33.57 3.57.57.55 0 1 .45 1 1V20c0 .55-.45 1-1 1-9.39 0-17-7.61-17-17 0-.55.45-1 1-1h3.5c.55 0 1 .45 1 1 0 1.25.2 2.45.57 3.57.11.35.03.74-.25 1.02l-2.2 2.2z"/></svg>
                    </div>
                    <div class="footer-text">
                        <h4>联系电话：</h4>
                        <p>0512-65800126</p>
                    </div>
                </div>
                <div class="footer-item">
                    <div class="footer-icon">
                        <svg viewBox="0 0 24 24"><path d="M20 4H4c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z"/></svg>
                    </div>
                    <div class="footer-text">
                        <h4>邮箱：</h4>
                        <p>wangchangjun@szchangcai.com</p>
                    </div>
                </div>
                <div class="footer-item">
                    <div class="footer-icon">
                        <svg viewBox="0 0 24 24"><path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z"/></svg>
                    </div>
                    <div class="footer-text">
                        <h4>公司地址：</h4>
                        <p>中国(江苏)自由贸易试验区苏州片区苏州工业园区九江路2号9幢2楼</p>
                    </div>
                </div>
            </div>
            <hr class="footer-line">
            <div class="footer-bottom">
                <p>© 2026 徐州xx机械设备有限公司 版权所有</p>
                <p>苏ICP备2026xxxxxx号-x</p>
            </div>
        </div>
    </footer>`;
    const backToTopHTML = `<button class="back-to-top">↑</button>`;

    const style = document.createElement('style');
    style.textContent = `
        header{width:100%;height:80px;position:fixed;top:0;left:0;z-index:999;color:#fff;transition:background-color .3s ease;background-color:rgba(0,0,0,.95)}
        header.active{background:rgba(0,0,0,.5)}
        header.transparent{background-color:rgba(0,0,0,.35)}
        .h-content{max-width:1300px;height:80px;margin:0 auto;display:flex;justify-content:space-between;align-items:center;padding:0 20px}
        .nav{display:flex;list-style:none;gap:20px}
        .nav li{font-size:16px;cursor:pointer}
        .nav a{text-decoration:none;color:#fff}
        .nav a:hover{color:#ff6900}
        .nav a.active{color:#ff6900;font-weight:bold}
        .logo{font-size:clamp(16px,2.5vw,30px);font-weight:bold}
        .menu-toggle{display:none;flex-direction:column;gap:5px;cursor:pointer}
        .menu-toggle span{display:block;width:25px;height:3px;background-color:#fff;transition:.3s}
        .footer{background-color:#333;color:#fff;padding:60px 20px 30px;position:relative;border-top:3px solid #d32f2f}
        .footer-box{max-width:1300px;margin:0 auto}
        .footer-top{display:grid;grid-template-columns:repeat(3,1fr);gap:40px;margin-bottom:40px}
        .footer-item{display:flex;align-items:flex-start;gap:15px}
        .footer-icon{width:48px;height:48px;border-radius:50%;border:1px solid #555;display:flex;justify-content:center;align-items:center;flex-shrink:0;color:#ccc}
        .footer-icon svg{width:24px;height:24px;fill:currentColor}
        .footer-text h4{font-size:14px;font-weight:normal;color:#999;margin-bottom:5px}
        .footer-text p{font-size:15px;color:#ddd;line-height:1.5}
        .footer-line{border:0;border-top:1px solid #333;margin-bottom:30px}
        .footer-bottom{text-align:center;font-size:14px;color:#777;line-height:1.8}
        .back-to-top{position:fixed;right:30px;bottom:30px;width:40px;height:40px;background-color:#d32f2f;color:#fff;border:none;cursor:pointer;font-size:20px;z-index:1000;transition:background .3s;display:none}
        .back-to-top:hover{background-color:#b71c1c}
        .back-to-top.active{display:flex;justify-content:center;align-items:center}
        @media(max-width:768px){
            .menu-toggle{display:flex}
            .nav{position:absolute;top:80px;left:0;width:100%;background-color:rgba(0,0,0,.95);flex-direction:column;gap:0;padding:0;max-height:0;overflow:hidden;transition:max-height .3s ease-out;z-index:998}
            .nav.active{max-height:400px;border-bottom:1px solid #444}
            .nav li{width:100%;text-align:center;border-top:1px solid #333}
            .nav a{display:block;padding:15px 0}
            .menu-toggle.active span:nth-child(1){transform:rotate(45deg) translate(5px,6px)}
            .menu-toggle.active span:nth-child(2){opacity:0}
            .menu-toggle.active span:nth-child(3){transform:rotate(-45deg) translate(5px,-6px)}
            .footer-top{grid-template-columns:1fr;gap:30px}
            .footer{padding:40px 20px 20px}
        }
    `;
    document.head.appendChild(style);

    document.body.insertAdjacentHTML('afterbegin', headerHTML);
    const currentPage = window.location.pathname.split('/').pop().toLowerCase() || 'index.html';
    const transparentPages = ['index.html','product.html','product-img1.html','product-img2.html','product-img3.html','product-img4.html','product-img5.html','product-img6.html'];
    if (transparentPages.includes(currentPage)) {
        document.getElementById('hf-header').classList.add('transparent');
    }

    document.body.insertAdjacentHTML('beforeend', footerHTML);
    document.body.insertAdjacentHTML('beforeend', backToTopHTML);

    window.addEventListener('scroll', () => {
        const header = document.getElementById('hf-header');
        if (header) header.classList.toggle('active', window.scrollY > 5);
    });

    const backToTop = document.querySelector('.back-to-top');
    if (backToTop) {
        backToTop.addEventListener('click', () => { document.documentElement.scrollTop = 0; });
        window.addEventListener('scroll', () => {
            if (document.documentElement.scrollTop > 30) backToTop.classList.add('active');
            else backToTop.classList.remove('active');
        });
    }

    const menuToggle = document.getElementById('menuToggle');
    const navMenu = document.getElementById('navMenu');
    if (menuToggle && navMenu) {
        menuToggle.addEventListener('click', () => {
            navMenu.classList.toggle('active');
            menuToggle.classList.toggle('active');
        });
        navMenu.querySelectorAll('a').forEach(link => {
            link.addEventListener('click', () => {
                navMenu.classList.remove('active');
                menuToggle.classList.remove('active');
            });
        });
        (function() {
            let page = window.location.pathname.split('/').pop().toLowerCase();
            if (page === '' || page === undefined) page = 'index.html';
            document.querySelectorAll('.nav a').forEach(link => {
                const href = link.getAttribute('href');
                const base = href.replace('.html', '');
                if (href === page) { link.classList.add('active'); return; }
                if ((page === 'index.html' || page === './') && href === 'index.html') { link.classList.add('active'); return; }
                if (base !== 'index' && base !== '' && page.includes(base)) link.classList.add('active');
            });
        })();
    }
})();
