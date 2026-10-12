:::info
ℹ 提示

你还在因为离线模式下多人联机**无法使用皮肤**而苦恼吗？还在因为你认为原版内置皮肤丑得批爆而厌烦吗？加入光荣的**authlib第三方登录**吧！！

第三方登录允许你使用微软自己的正版验证服务器以外的验证服务器进行验证，**可以使用皮肤！！**而且**完美规避了****离线模式服务器账号数据不安全，谁来都能登都能玩****的问题**而不需要繁琐的注册插件！

[哇袄！](https://minecraft.net/zh-hans/)这么好的登录方式怎么配置？请看本文档！

注：本文档中有引用（链接）其它不同项目文档。

:::

:::info
ℹ 提示

本文档**默认有自定义开服的知识基础。**

:::

:::color2
💡 提示

**为了启用第三方登录验证，请在****server.properties****中将****online-mode****改为****true****。**

第三方验证的原理是修改验证服务器，所以你如果不让它验证了则毫无效果。

:::

---

[LittleSkin](https://littleskin.cn/)<font style="color:rgb(28, 30, 33);"> —— 国内首选，目前为国内第一大的第三方皮肤站(因为Skinme寄了)</font>

## <font style="color:rgb(28, 30, 33);">服务端操作</font>
<font style="color:rgb(28, 30, 33);">非 Leaves 服务端请按照以下方式操作。</font>

### <font style="color:rgb(28, 30, 33);">下载authlib-injector插件并上传到服务器</font>
<font style="color:rgb(28, 30, 33);">从</font>[authlib-injector的官网](https://authlib-injector.yushi.moe/)<font style="color:rgb(28, 30, 33);">下载，或者使用</font>[<font style="color:rgb(28, 30, 33);">BMCLAPI</font>](https://bmclapi2.bangbang93.com/mirrors/authlib-injector/artifact/53/authlib-injector-1.2.5.jar)<font style="color:rgb(28, 30, 33);">提供的链接下载。</font>

![](https://cdn.nlark.com/yuque/0/2024/png/32774263/1718026366026-750089f4-ce9a-4368-a90c-c27ab05f08c7.png)

<font style="color:rgb(28, 30, 33);">下载后扔到与</font>`<font style="color:rgb(28, 30, 33);">start.sh</font>`<font style="color:rgb(28, 30, 33);">同级的目录。</font>

<font style="color:rgb(28, 30, 33);">插件版本相较于截图时已更新数次，下方命令示例中的版本号相应做了更改。不过，仍可能有更改不及时的情况，因此，</font>**<font style="color:rgb(28, 30, 33);">请自行留意文件名是否对应你所下载的插件</font>**<font style="color:rgb(28, 30, 33);">。</font>

<font style="color:rgb(28, 30, 33);">截至2025年11月3日，最新插件版本号为1.2.6，文件名为</font>`<font style="color:rgb(28, 30, 33);">authlib-injector-1.2.6.jar</font>`

### <font style="color:rgb(28, 30, 33);">配置</font>`<font style="color:rgb(28, 30, 33);">start.sh</font>`<font style="color:rgb(28, 30, 33);">文件中的启动命令</font>
<font style="color:rgb(28, 30, 33);">为启用第三方登录，请在启动命令中添加参数使authlib-injector插件启动服务器核心。</font>

:::info
ℹ 提示

注：高版本forge服务器启动游戏是运行一个txt文件中的指令。请在start.sh中找到该文件并在txt内配置。

:::

如果你不想自己配置命令，可以使用这个[我的世界服务器启动命令生成器](https://www.wuye2004.top/mcje-start)

<font style="color:rgb(28, 30, 33);">下面是一个服务器启动命令示例</font>

```bash
${openjdk17} -Xms1024M -Xmx${maxmem}M -jar server-release.jar
```

<font style="color:rgb(28, 30, 33);">接下来请在启动命令中任意位置插入</font>`<font style="color:rgb(28, 30, 33);"> -javaagent</font>`<font style="color:rgb(28, 30, 33);">参数。</font>

<font style="color:rgb(28, 30, 33);">以下是一个</font><font style="color:rgb(28, 30, 33);">-javaagent</font><font style="color:rgb(28, 30, 33);">参数示例：</font>

```bash
-javaagent:authlib-injector-1.2.6.jar=https://littleskin.cn/api/yggdrasil
```

<font style="color:rgb(28, 30, 33);">它表示：</font>

<font style="color:rgb(28, 30, 33);">使用名为</font>`<font style="color:rgb(28, 30, 33);">authlib-injector-1.2.6.jar</font>`<font style="color:rgb(28, 30, 33);">的文件进行第三方登录；</font>

<font style="color:rgb(28, 30, 33);">第三方登录文件与服务器核心处在同一目录下；</font>

<font style="color:rgb(28, 30, 33);">第三方登录服务器验证地址为</font>`<font style="color:rgb(28, 30, 33);">https://littleskin.cn/api/yggdrasil</font>`<font style="color:rgb(28, 30, 33);">（此第三方登录服务器为</font>[LittleSkin](https://littleskin.cn/)<font style="color:rgb(28, 30, 33);">）</font>

:::color2
💡 提示

**注意：**`**start.sh**`**中各项启动参数之间有空格，同时必须有且只有一个空格。检查你的启动命令确认是否出错！**

:::

<font style="color:rgb(28, 30, 33);">将</font>`<font style="color:rgb(28, 30, 33);">-javaagent</font>`<font style="color:rgb(28, 30, 33);">参数正确插入后，该命令如下：</font>

```bash
${openjdk17} -Xms1024M -Xmx${maxmem}M -javaagent:authlib-injector-1.2.6.jar=https://littleskin.cn/api/yggdrasil -jar server-release.jar
```

<font style="color:rgb(28, 30, 33);">注：此项二级标题下的内容部分参考</font>[Blessing Skin 用户手册-为游戏服务端加载authlib-injector](https://blessing.netlify.app/yggdrasil-api/authlib-injector.html#%E4%B8%BA%E6%B8%B8%E6%88%8F%E6%9C%8D%E5%8A%A1%E7%AB%AF%E5%8A%A0%E8%BD%BD-authlib-injector)<font style="color:rgb(28, 30, 33);">，同时该文档同样介绍了如何为游戏服务端加载authlib-injector，如果理解此文档有障碍，不妨去该文档看看。</font>

<font style="color:rgb(28, 30, 33);">到此为止服务端的配置完成，下面介绍客户端配置。</font>

## <font style="color:rgb(28, 30, 33);">服务端操作(Leaves)</font>
<font style="color:rgb(28, 30, 33);">Leaves端原生支持使用第三方服务器进行登录认证，无须下载额外的认证器！</font>

### <font style="color:rgb(28, 30, 33);">操作方法</font>
<font style="color:rgb(28, 30, 33);">打开服务器根目录下的</font>`<font style="color:rgb(28, 30, 33);">leaves.yml</font>`<font style="color:rgb(28, 30, 33);">，找到如下内容并进行修改：</font>

```yaml
#注：在实际的yml文件中并不存在注释
extra-yggdrasil-service:
      #是否启用额外的yggdrasil认证器
      enable: false
      #是否开启登录保护，开启后将不允许用户名相同但 UUID 不同的玩家加入。
      login-protect: false
      #指定 Yggdrasil API 地址。
      urls:
      - https://url.with.authlib-injector-yggdrasil
```

<font style="color:rgb(28, 30, 33);">例如，如果你需要使用LittleSkin提供的Yggdrasil API地址，则应该改为下方的格式：</font>

```yaml
extra-yggdrasil-service:
    enable: true
    login-protect: true
    urls: 
    - https://littleskin.cn/api/yggdrasil
```

## <font style="color:rgb(28, 30, 33);">客户端操作</font>
<font style="color:rgb(28, 30, 33);">需要在启动器修改登录方式。</font>

:::color2
💡 **提示**

注：修改了登录方式到第三方的客户端无法用于验证正版，多人游戏下只能加入启用相同第三方验证服务器的服务器和离线服务器；单人游戏不受影响。

:::

:::color2
💡 **提示**

本部分教程均以[LittleSkin](https://littleskin.cn/)为例

:::

### <font style="color:rgb(28, 30, 33);">PCL 2</font>
<font style="color:rgb(28, 30, 33);">注册好</font>[LittleSkin](https://littleskin.cn/)<font style="color:rgb(28, 30, 33);">账号后进入如下页面</font>

![](https://cdn.nlark.com/yuque/0/2024/png/32774263/1718026365571-f5808bbe-449d-4a35-9c36-826ec2f02676.png)

<font style="color:rgb(28, 30, 33);">直接鼠标左键长按那个</font><font style="color:rgb(28, 30, 33);">将此按钮拖动至启动器</font><font style="color:rgb(28, 30, 33);">的按钮 然后把它拖到PCL2上并松开左键 PCL2会自动为你开启当前版本的第三方登录验证</font>

<font style="color:rgb(28, 30, 33);">然后你需要在PCL2里输入自己的LittleSkin账密来获取角色，然后的然后就可以正常游玩了！</font>

### <font style="color:rgb(28, 30, 33);">HMCL</font><font style="color:rgb(28, 30, 33);"> 3.x</font>
HMCL3较新的版本已内置Littleskin登录。

1. <font style="color:rgb(28, 30, 33);">点击HMCL左侧的账户，在二级页面的左侧选择LittleSkin，输入你的用户名和密码进行登录 </font>
2. <font style="color:rgb(28, 30, 33);">登录完成后选择一个角色，然后你就可以开始游戏了</font>

![](https://cdn.nlark.com/yuque/0/2025/png/44789475/1762182182242-2490ba36-3bb2-4a99-9171-f0422d844239.png)

![](https://cdn.nlark.com/yuque/0/2025/png/44789475/1762182293347-a3d5b6be-cf50-469a-9b7a-578ca1ce49a1.png)

### <font style="color:rgb(28, 30, 33);">BakaXL 3.x</font>
<font style="color:rgb(28, 30, 33);">配置相较于以上两个启动器较为麻烦</font>

<font style="color:rgb(28, 30, 33);">1.在BakaXL的开始页面点击</font><font style="color:rgb(28, 30, 33);">本体设置</font>

![](https://cdn.nlark.com/yuque/0/2024/png/32774263/1718026366069-0c065e37-8038-4e4b-93ef-ebf8b433b7b2.png)

<font style="color:rgb(28, 30, 33);">2.在左栏选择</font><font style="color:rgb(28, 30, 33);">账户与档案</font><font style="color:rgb(28, 30, 33);">，下滑找到“Minecraft用户档案”，选择</font><font style="color:rgb(28, 30, 33);">新增一个档案</font>

![](https://cdn.nlark.com/yuque/0/2024/png/32774263/1718026367612-acf33fc5-0d2e-4056-9a05-255365b17b33.png)

<font style="color:rgb(28, 30, 33);">3.连续点击“游戏启动模式”三次，切换到外置登录，在验证服务器处输入</font><font style="color:rgb(28, 30, 33);">https://littleskin.cn/api/yggdrasil</font><font style="color:rgb(28, 30, 33);">，在下方输入你的邮箱和密码，点击</font><font style="color:rgb(28, 30, 33);">进行验证并返回</font>

![](https://cdn.nlark.com/yuque/0/2024/png/32774263/1718026367625-c86daa59-1c99-43be-86e7-8ecc50364f13.png)<font style="color:rgb(28, 30, 33);"> </font>![](https://cdn.nlark.com/yuque/0/2024/png/32774263/1718026367588-2b4d9324-a3b6-4db7-86e4-60b14bb6cf71.png)

<font style="color:rgb(28, 30, 33);">4.此时它会提示你选择一个角色，选择你需要登录的角色即可</font>

## <font style="color:rgb(28, 30, 33);">常见问题</font>
###### <font style="color:rgb(28, 30, 33);">  
</font><font style="color:rgb(28, 30, 33);">Q：我一个人用littleskin登录其他人在服务器里能看到我皮肤吗？</font>
A：不能。只更改客户端的登录方式时，服务器本身仍为离线登录。其他玩家需要使用CustomSkinLoader才能看到你的皮肤，此时你的Littleskin登录对服务器无效：如果你采用与Littleskin登录用户名相同的离线id进入服务器，与该登录也没有区别。

如果想要所有人都看到皮肤，需要为服务器启用littleskin登录。在此之后所有玩家都需要使用littleskin进入游戏，且uuid可能会变化导致数据丢失。

