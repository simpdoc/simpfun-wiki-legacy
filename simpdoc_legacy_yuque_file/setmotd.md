:::info
ℹ **提示**

你可以更改服务器的motd设置和图标，从而使服务器在服务器列表里更好看一些。

![](https://cdn.nlark.com/yuque/0/2024/png/32774263/1718025652652-ce493b0b-48d2-45d0-a293-ca063853db84.png)

:::

## <font style="color:rgb(28, 30, 33);">服务器描述</font>
### <font style="color:rgb(28, 30, 33);">更改服务器描述（motd）</font>
<font style="color:rgb(28, 30, 33);">也可见于</font>[server.properties文档](https://www.yuque.com/simpfox/simpdoc/serverproperties#Lbg4S)；

<font style="color:rgb(28, 30, 33);">在</font>`<font style="color:rgb(28, 30, 33);">server.properties</font>`<font style="color:rgb(28, 30, 33);">文件中，有值</font>`<font style="color:rgb(28, 30, 33);">motd</font>`<font style="color:rgb(28, 30, 33);">，SFE4中默认为SFE4 SERVER。如下：</font>

```properties
motd=SFE4 SERVER
```

<font style="color:rgb(28, 30, 33);">将motd=后的内容改为自己想要的描述即可。</font>

<font style="color:rgb(28, 30, 33);">如果只是单纯更改文字，则描述会显示为灰色。</font>

<font style="color:rgb(28, 30, 33);">1.19.4及以下的版本需要将非英文字符(例如中文)转码为Unicode编码（</font>[在线工具地址](https://www.metools.info/code/c39.html)/[离线工具下载](https://wwd.lanzouo.com/iE2Jh26kpvxi)<font style="color:rgb(28, 30, 33);">）。</font>

<font style="color:rgb(28, 30, 33);">1.20及以上版本的server.properties已经默认使用UTF-8编码读取/写入，因此无需再进行转码</font>_<font style="color:rgb(28, 30, 33);"></font>_<font style="color:rgb(28, 30, 33);">。</font>

### <font style="color:rgb(28, 30, 33);">使用插件来丰富描述</font>
<font style="color:rgb(28, 30, 33);">原版的motd设置中只有灰色，那hypixel和上图里那些</font>**<font style="color:rgb(28, 30, 33);">花里胡哨的字体</font>**<font style="color:rgb(28, 30, 33);">都是怎么来的？</font>

<font style="color:rgb(28, 30, 33);">实际上，有针对motd的插件/mod可以帮助您丰富motd设置。</font>

#### <font style="color:rgb(28, 30, 33);">MiniMOTD</font>
<font style="color:rgb(28, 30, 33);">MiniMOTD 是一个基本的 MOTD 插件，兼容 Minecraft 1.8 以上的版本（还支持 BungeeCord、Sponge、Velocity、Fabric、Forge、NeoForge 等）。</font>

<font style="color:rgb(28, 30, 33);">插件可以增加RGB颜色、添加渐变色等。</font>

使用教程可以参照[MC百科上的这篇帖子](https://www.mcmod.cn/post/3950.html)。

:::info
ℹ **下载地址**

所有插件端/代理端：[MiniMOTD - Minecraft Plugin](https://modrinth.com/plugin/minimotd/versions?l=sponge&l=velocity&l=folia&l=paper&l=waterfall)

Fabric(1.16+)/NeoForge(1.21.1+)：[MiniMOTD - Minecraft Plugin](https://modrinth.com/plugin/minimotd/versions?l=neoforge&l=fabric)

Forge(1.12.2~1.20.1)/NeoForge(1.20.6~1.21.5)：[MOD下载 - MiniMOTD Reforged - MC百科](https://www.mcmod.cn/download/7670.html)

:::

#### <font style="color:rgb(28, 30, 33);">ColorMOTD</font>
<font style="color:rgb(28, 30, 33);">与此相似的插件还有ColorMOTD。教程参见</font>[这篇专栏](https://www.bilibili.com/read/cv9428815/)<font style="color:rgb(28, 30, 33);">。</font>

## <font style="color:rgb(28, 30, 33);">服务器图标</font>
### <font style="color:rgb(28, 30, 33);">为服务器添加好看的图标</font>
<font style="color:rgb(28, 30, 33);">很明显，让服务器更好看不仅仅只有抛弃白字，还有自定义图标对吧？</font>

<font style="color:rgb(28, 30, 33);">你需要准备一个</font>`<font style="color:rgb(28, 30, 33);">.png</font>`<font style="color:rgb(28, 30, 33);">后缀的图片文件，分辨率为16x16、32x32或64x64。</font>

<font style="color:rgb(28, 30, 33);">将图片命名为</font>`<font style="color:rgb(28, 30, 33);">server-icon.png</font>`<font style="color:rgb(28, 30, 33);">然后上传到服务器根目录，重启即可应用图标！</font>

