<template>
  <div class="about-container">
    <a-row class="about-me-container">
      <a-col :xs="0" :md="3"></a-col>
      <a-col :xs="24" :md="18">
        <a-row>
          <a-col span="16">
            <h2>关于我</h2>
            <p>昵称“呼呼小笼包”，90后，2014年大学毕业，现在居住在大连，从事软件开发相关工作，主要使用 ASP.NET 等相关技术。</p>
            <p>高中因为好玩，开始学习网站开发，当时购买过一个域名 huhu-box.com 做了一个软件下载站“呼呼小盒子”，从此接触了 HTML、JavaScript、ASP、PHP、MySQL 等技术，不过后来由于自己玩心太重，一年左右就关闭了网站。同期还购买了 nzc.me 域名，用 WordPress 搭建了个人博客，不过也不怎么更新，2018年底一狠心关掉了主机，现在还没想好用这个域名做什么…开始工作后在“博客园”也有注册博客，仍苦于自己不务正业，一共也没发表过几篇文章 - -||</p>
            <p>喜欢动漫和摄影，希望未来自己能坚持写博客，博客内容也会涉及开发之外的内容哦。</p>
            <p>也欢迎大家扫描右侧微信公众号二维码关注~</p>

            <h2>关于博客</h2>
            <p>今年（2019年）Google 推出了 .dev 域名，又燃起了我写博客的欲望，虽然几年前我就想自己开发个博客后端，但是没坚持下来，这次拖拉了许久，终于还是做了出来。</p>
            <p>现在市面上那么多博客平台/软件，为什么要自己开发？自己开发能将最新的技术应用起来，接触工作中没有接触过的内容，个人觉得是有好处的。而且嘛，自己开发的博客，自己大概不会好几个月一篇都不写吧。（我也不知道，逃）</p>

            <h3>技术栈</h3>
            <ul>
              <li>
                <a href="https://github.com/huhubun/BunBlog.UI" target="_blank">
                  <a-icon type="github" />BunBlog.UI
                </a> 采用 Vue.js 开发，由于需要 SEO，还使用了 Nuxt.js 以便进行服务器端渲染
              </li>
              <li>
                <a href="https://github.com/huhubun/BunBlog.API" target="_blank">
                  <a-icon type="github" />BunBlog.API
                </a> 采用 ASP.NET Core 开发，和服务器、数据库交互的逻辑都在 API 中
              </li>
              <li>数据库使用的 PostgreSQL</li>
              <li>一共使用了两台 Vultr 的虚拟机，均位于日本：一台 512M 内存部署了 UI 和 API；另一台 1G 内存，部署了 PostgreSQL</li>
            </ul>
            <p>UI 以及 API 在 Github 上开源，但目前都是适用于我自己的定制内容，样式功能上也没有特别完善（目前也就勉强能用的样子），欢迎大家一起学习。</p>
          </a-col>
          <a-col span="8" class="about-me-image-container">
            <div>
              <img src="https://img.bun.dev/about_me.jpg" alt="about me" />
            </div>

            <div class="bun-margin-top">
              <img src="https://img.bun.dev/wechat_qr.png" alt="微信公众号二维码" />
              <br />

              <span>
                <a-icon type="wechat" />
                <code>bundev</code>
              </span>
            </div>
          </a-col>
        </a-row>

        <eof />
      </a-col>
    </a-row>
  </div>
</template>

<script>
import eof from '~/components/layout/EOF.vue'

export default {
  head() {
    return {
      title: '关于',
      meta: [
        {
          hid: 'description',
          name: 'description',
          content: '呼呼小笼包博客及作者简介'
        },
        {
          hid: 'keywords',
          name: 'keywords',
          content:
            '呼呼小笼包,huhubun,bun.dev,关于,about,介绍,简介,技术,软件,开发,个人博客,博客,文章,精品软件,推荐'
        }
      ]
    }
  },
  components: {
    eof
  }
}
</script>

<style lang="stylus" scoped>
.about-container
  padding: 16px 0 0 0

  a
    color: rgba(0, 0, 0, 0.65)
    text-decoration: underline

    .anticon
      margin-right: 0.25em

.about-me-image-container
  text-align: center
</style>