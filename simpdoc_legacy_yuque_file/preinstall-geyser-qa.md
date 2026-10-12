互通服务器一些常见的问题汇总。

## 过旧的Geyser代理(Geyser版本过低)
![](https://cdn.nlark.com/yuque/0/2024/webp/44789475/1724838962692-e97c3da1-d9a6-4408-bdff-baf0a8dc489b.webp)

如图，你需要前往[Geyser - Minecraft Plugin](https://modrinth.com/plugin/geyser/versions)下载新版本的Geyser，并将下载到的文件其放入`plugins`文件夹内。**务必确保你下载的是下图中红框内的版本（Spigot/Paper）**！

![](https://cdn.nlark.com/yuque/0/2025/png/44789475/1755581265811-c1923425-56fc-4d17-a361-ca5642d104dd.png)

![](https://cdn.nlark.com/yuque/0/2024/png/44789475/1724840097386-5dffe4f5-9916-492a-9507-6c2a2d0b5b87.png)

**在大多数情况下，你还需要一并更新ViaVersion与ViaBackwards这两个插件。**

前往[ViaVersion - Minecraft Plugin](https://modrinth.com/plugin/viaversion/versions?c=release)与[ViaBackwards - Minecraft Plugin](https://modrinth.com/plugin/viabackwards/versions?c=release)下载最新版的这两个插件，并放入`plugins`文件夹内，**不要忘记删除旧版的插件**！

## 你的版本不受支持 无法连接至世界
![](https://cdn.nlark.com/yuque/0/2025/jpeg/44789475/1754808324541-47997106-ec9b-4383-a98a-553fbfc1da51.jpeg)

如图所示，出现此问题的原因与Geyser无关，而是Geyser所用的UDP端口被其他连接占用。

出现此问题请检查其他使用UDP协议连接的功能是否使用了你服务器的主端口，例如简单语音插件（[Simple Voice Chat](https://modrinth.com/plugin/simple-voice-chat)）。

## 多人游戏连接失败
![](https://cdn.nlark.com/yuque/0/2025/png/44789475/1764083012363-8ad908ac-ab6e-466f-a278-8297ec2bace4.png)

出现此问题请检查日志是否出现类似下图的报错：

若出现请检查`/plugins/Geyser-Spigot/config.yml`的**配置项是否写对了**（如果配置项写错了也会报这个错误）！或者直接删除此文件让Geyser重新生成一次。

![](https://cdn.nlark.com/yuque/0/2025/png/44789475/1764083175936-c3c2277a-7305-443e-bd8b-8915138e78c5.png)

## 无法使用Java版的生电特性
简幻欢预设的互通使用的是Paper核心，此核心修复了大量的原版刷物品的机制及其他与生电有关的机制。

如果你需要生电玩法，那么推荐将服务器核心由Paper更换为Leaves。

前往 [https://leavesmc.org/downloads/leaves](https://leavesmc.org/downloads/leaves) 下载Leaves核心。

:::warning
⚠ **提示**

大部分情况下你可能需要**7个木棍**来下载此服务端。

:::

![](https://cdn.nlark.com/yuque/0/2025/png/44789475/1755876698179-872fe8fa-6a8e-4874-a4cc-e42320a764a6.png)

将下载到的jar文件上传到实例根目录，打开`start.sh`，将启动命令内的`server-release.jar`替换为你下载到的jar文件名，如下所示：

:::info
修改前：

![](https://cdn.nlark.com/yuque/0/2024/png/44789475/1724840009597-cae1a2f4-bb7d-43ca-8d89-b258c9d9313e.png)

:::

:::info
修改后：

![](https://cdn.nlark.com/yuque/0/2024/png/44789475/1724839953738-d775c753-31ba-4529-a119-ecce60cad197.png)

:::

保存后启动服务器即可。

### 什么，你说还是用不了？
参考 [配置 | LeavesMC 文档](https://docs.leavesmc.org/zh_Hans/leaves/reference/configuration) 修改你的`leaves.yml`配置文件。

尤其是检查`mc-technical-survival-mode`是否为`true`。

## 服务端发送了破损的数据包
可能的原因较多，其中一种原因可能是Geyser版本过低，参照上方教程升级你的Geyser插件。

