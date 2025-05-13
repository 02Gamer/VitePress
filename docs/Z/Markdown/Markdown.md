# Markdown

## 容器
::: info
这是一条info，自定义格式：info+空格+自定义文字
:::

::: tip 提示
这是一个提示，自定义格式：tip+空格+自定义文字
:::

::: warning 警告
这是一条警告，自定义格式：warning+空格+自定义文字
:::

::: danger 危险
这是一个危险警告，自定义格式：danger+空格+自定义文字
:::

::: details 点我查看
这是一条详情，自定义格式：details+空格+自定义文字
:::

- Title <Badge type="info" text="default" />
- Title <Badge type="tip" text="^1.9.0" />
- Title <Badge type="warning" text="beta" />
- Title <Badge type="danger" text="caution" />

## 表格

<table>
  <tbody>
    <tr>
      <th rowspan="2">跨行标题1</th>
      <th colspan="3">跨列标题2</th>
    </tr>
    <tr>
      <td>A</td>
      <td>B</td>
      <td>C</td>
    </tr>
    <tr>
      <td>内容1</td>
      <td>内容2</td>
      <td>内容3</td>
      <td>内容4</td>
    </tr>
  </tbody>
</table>

<!-- 完整表格结构 -->
<table>
  <!-- 表头区域 -->
  <thead>
    <!-- 第一行：图片展示（跨6列） -->
    <tr>
      <th colspan="7">
        <!-- 插入图片 -->
        <img 
          src="/images/Pokemon/Poke/SV/朱logo.png" 
          alt="厄诡椪" 
          style="width: 200px; height: auto; display: block; margin: 0 auto;"
        >
      </th>
    </tr>
    <tr>
      <th colspan="3">宝可梦</th>
      <th colspan="7" style="font-size: 1.2em;">厄诡椪/碧草面具</th>
    </tr>
    <tr>
      <th colspan="2">属性</th>
      <th colspan="7">草</th>
    </tr>
    <tr>
      <th colspan="2">特性</th>
      <th colspan="7">不服输</th>
    </tr>
    <tr>
      <th colspan="2">道具</th>
      <th colspan="7">无道具/携带其他道具</th>
    </tr>
    <tr>
      <th>种族</th>
      <th>H P</th>
      <th>攻击</th>
      <th>物防</th>
      <th>特攻</th>
      <th>特防</th>
      <th>速度</th>
    </tr>
  </thead>

  <!-- 表格内容 -->
  <tbody>
    <tr>
      <td>1</td>
      <td>2</td>
      <td>3</td>
      <td>4</td>
      <td>5</td>
      <td>6</td>
      <th>7</th>
    </tr>
  </tbody>
</table>

## 其他

<p style="color:red">这段文字是红色的。</p>

> :warning: **警告：** 不要按下大红色按钮！

> :bulb: **提示：** 记得珍惜生活中的小事。

*斜体字*

**粗体字**

~~删除线~~

`高亮`

<u>下划线</u>

<span style="border-bottom:2px dashed red;">加下划线用的是html代码</span>

| 功能 | 描述         |
|------|--------------|
| SEO  | 优化搜索引擎排名 |

| 列1 | 列2 |
|:---:|:---:|
| 纯文本 | ![图片描述](https://vitepress.yiov.top/logo.png){style="display: block; margin: 0 auto; width: 120px"} |
| 纯文本 | ![图片描述](https://vitepress.yiov.top/logo.png){class="image-s"} |
| 纯文本 | ![图片描述](https://vitepress.yiov.top/logo.png){class="image-m"} |
| 纯文本 | ![图片描述](https://vitepress.yiov.top/logo.png){class="image-l"} |

---

<!-- - 比如：
<Linkcard url="https://vitepress.yiov.top/" title="Vitepress中文搭建教程" description="https://vitepress.yiov.top/" logo="https://vitepress.yiov.top/logo.png"/>

## 镶嵌视频

<iframe 
style="width:100%; aspect-ratio:16/9; margin-top: 2em;" 
src="https://www.youtube.com/embed/bzyMLoSwYvk" 
frameborder="0" 
allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
allowfullscreen>
</iframe>


<iframe 
style="width:100%; aspect-ratio:16/9; margin-top: 2em;" 
src="//player.bilibili.com/player.html?bvid=BV1YptMeMEcV" 
frameborder="0" 
allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
allowfullscreen>
</iframe> -->