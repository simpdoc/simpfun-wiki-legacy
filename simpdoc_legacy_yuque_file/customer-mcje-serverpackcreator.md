## 什么是由SPC生成的整合包？
ServerPackCreator 是一款专为简化 Minecraft 服务器包（Modpack）创建流程而设计的自动化工具，由此工具打包出来的服务端整合包即为SPC生成的服务端。

### 快速判断整合包服务端是否由SPC生成
检查服务端压缩包内是否有下图红框圈出的文件（尤其是有无`<font style="color:rgb(0, 0, 0);">variables.txt</font>`），如果都有则为SPC打包的服务端。

或者查看压缩包附带的信息（如下图所示的右边明确写明了`Server pack made with SPC 7.2.4`）。

![](https://cdn.nlark.com/yuque/0/2025/png/44789475/1746281876390-c80bc873-4ad7-4981-9d1b-c9b9f65172fe.png)



标题旁的小三角符号可以展开对应的段落！

## 使用AIO镜像安装
1. 新建/重装实例为“自定义——AIO镜像”

![](https://cdn.nlark.com/yuque/0/2025/png/44789475/1746279537147-ef017256-bd7b-4bfc-9723-dc6e1f520bc2.png)

2. 上传服务端整合包到实例根目录，然后解压缩
3. 解压缩完成后打开`variables.txt`，找到`RECOMMENDED_JAVA_VERSION`这行，如下图中①处，记下等号后的数字
4. 然后将`JAVA`等号后的内容(如下图②处)修改为`${openjdk*}`，***为上方数字**

![](https://cdn.nlark.com/yuque/0/2025/png/44789475/1746284398301-5dfc6f87-fad7-45e9-a17e-5ebf55b915b3.png)

修改完成后应如下所示：

```bash
RECOMMENDED_JAVA_VERSION=17
JAVA_ARGS="-Xmx5G -Xms5G"
JAVA="${openjdk17}"
```

:::info
**ℹ**** 提示**

AIO镜像默认仅包含Java 8/11/16/17/19/21，如果整合包需要的Java版本不是这6个，请自行下载后[使用环境变量调用](https://www.yuque.com/simpfox/simpdoc/pvgmyx9umogkax75)！

:::

5. 回到终端，启动服务器，此时SPC启动脚本应开始下载服务端，需要你同意EULA，输入“I agree”后回车。

![](https://cdn.nlark.com/yuque/0/2025/png/44789475/1746281752544-4b01b283-3b0f-4f19-95ee-c4c640d9876f.png)

6. 等待服务端下载完成（此过程可能会非常长，请耐心等待）。
7. 安装完成后根据需要修改`server.properties`。

:::info
**ℹ**** 提示**

如果出现服务端下载失败的情况可以多重试几次，或者在本地下载完成后[上传至实例](https://www.yuque.com/simpfox/simpdoc/customer-mcje-serverpackinstall)！

:::

### 附加教程：更改jvm参数
打开`<font style="color:rgb(0, 0, 0);">variables.txt</font>`<font style="color:rgb(0, 0, 0);">，找到如下图所示的这一行来修改JVM参数。</font>

![](https://cdn.nlark.com/yuque/0/2025/png/44789475/1746282973486-9412ff69-0ea7-44e0-9016-b900bd6d5e33.png)

<font style="color:rgb(0, 0, 0);">例如，可以把Xmx参数改为</font>`<font style="color:rgb(0, 0, 0);">-Xmx11G</font>`<font style="color:rgb(0, 0, 0);">(建议更改JVM最大内存为"</font>`<font style="color:rgb(0, 0, 0);">实例内存-1G</font>`<font style="color:rgb(0, 0, 0);">"，如实例有12G内存，则Xmx设置为11G)，然后添加一个</font>`<font style="color:rgb(0, 0, 0);">-server</font>`<font style="color:rgb(0, 0, 0);">参数，如下所示：</font>

```bash
JAVA_ARGS="-server -Xmx11G -Xms5G"
```

## 使用第三方镜像安装
:::info
该第三方镜像由 jdnjk 提供

支持镜像发布者，注册时使用他的推荐码，同时你也会获得更多积分！推荐码`**<font style="color:rgb(156, 39, 176);">1332029</font>**`

:::

1. 新建/重装实例为“第三方镜像 ——MinecraftJE——AutoInstall“，版本选择最新版![](https://cdn.nlark.com/yuque/0/2025/png/33777840/1748859507965-e07c7f21-5cb7-427b-9683-09dec5d68326.png)
2. 上传服务器整合包到实例根目录
3. 回到终端，启动服务器，耐心等待服务器启动（若安装失败可重试，多次失败请反馈）
4. 安装完成后根据需要修改`server.properties`

## 视频教程
:::danger
**仅为其中一种整合包类型，若出现无法运行的情况请查看其他教程。**

:::

:::danger
本文档中视频已经过[moonmc66666](https://space.bilibili.com/329026053) 授权使用，不允许二次创作及售卖！

:::

:::info
支持创作者，注册时使用他的推荐码，同时你也会获得更多积分！推荐码：

**<font style="color:rgb(24, 25, 28);">1374890</font>**

:::

[bilibili](https://player.bilibili.com/player.html?bvid=BV1qXJgzxE6K&autoplay=0)



