// assets/js/about-me.js
document.addEventListener("DOMContentLoaded", function () {
  new TypeIt("#type-text", {
    speed: 30,       // 打字速度
    startDelay: 700, // 页面加载后的延迟
    lifeLike: true,  // 模拟真人节奏
    cursor: true,    // 显示光标
    html: true,       // 开启 HTML 解析模式（关键
  })
  .type('Hi, I\'m Yuke Ma. I\'m a PhD student in the <a href="https://www.mpi-inf.mpg.de/departments/network-and-cloud-systems" target="_blank" rel="noopener">Network and Cloud Systems group</a> at the <a href="https://www.mpi-inf.mpg.de/" target="_blank" rel="noopener">Max Planck Institute for Informatics</a>, advised by Prof. <a href="https://sites.google.com/view/yitingxia/home" target="_blank" rel="noopener">Yiting Xia</a>. ')
  .pause(500) // 思考停顿
  .type('Previously, I earned my M.S. from <a href="https://www.fudan.edu.cn/en/" target="_blank" rel="noopener">Fudan University</a> (2025)—advised by Prof. <a href="https://chenyang03.wordpress.com/" target="_blank" rel="noopener">Yang Chen</a>—and my Dual B.S. from <a href="https://www.dlut.edu.cn/" target="_blank" rel="noopener">Dalian University of Technology</a> (2020). ') 
  .pause(300)
  .type('Between my degrees, I spent two years as an Embedded Software Engineer at <a href="https://www.tp-link.com/" target="_blank" rel="noopener">TP-LINK Technologies</a> (2020–2022), where I developed software for NVR systems and robot operating systems.')
  .go();
});
