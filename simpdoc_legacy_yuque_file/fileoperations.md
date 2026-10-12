:::danger
🔥危险！

请勿删除文件中的start.sh（无论何种方式），否则导致无法正常启动！

如误删，请在根目录重新创建start.sh文件并使用工具箱中的功能修复，并查阅 [启动参数](https://www.yuque.com/simpfun/sfe/startup) 或 [【额外内容】默认的启动脚本](https://www.yuque.com/simpfox/simpdoc/default_start)

:::

## 1.文件上传
:::info
文件上传可在图中找到三处上传方式，可根据不同客户端进行更便捷的操作。

:::

![](https://cdn.nlark.com/yuque/0/2025/png/32774263/1745327330347-8c61f7b7-7358-487e-b9a8-b1ad8420e41c.png)

+ <font style="color:rgb(28, 30, 33);">点击方框，选择你要上传的文件</font>

![](https://cdn.nlark.com/yuque/0/2024/png/32774263/1717989379136-e58d7865-7270-4307-9b4f-1c391ae79376.png)

+ <font style="color:rgb(28, 30, 33);">点击确定即可</font>

![](https://cdn.nlark.com/yuque/0/2024/png/32774263/1717989379136-5bc3ccc8-a60a-4bc8-9b5c-b58b897bbbfc.png)

---

## 2.压缩/解压缩
:::danger
有的时候可能由于压缩格式，压缩算法，压缩包损坏等问题无法解压缩文件，您只能通过[如何使用 SFTP 管理文件](#mbio3)教程以使用SFTP传输文件夹。

:::

### <font style="color:rgb(28, 30, 33);">压缩</font>
1. <font style="color:rgb(28, 30, 33);">进入实例，点击</font><font style="color:rgb(28, 30, 33);">文件</font>
2. <font style="color:rgb(28, 30, 33);">勾选需要压缩的文件/文件夹，支持多选</font>
3. <font style="color:rgb(28, 30, 33);">PC端可右键后点击压缩，手机端可通过右下角悬浮按钮点击后，选择压缩。</font>

![](https://cdn.nlark.com/yuque/0/2025/png/32774263/1745327479120-a4dbe474-0ce5-4898-a46e-d579d1da337e.png)

<font style="color:rgb(28, 30, 33);">等待任务执行完成后，回到</font><font style="color:rgb(28, 30, 33);">文件</font><font style="color:rgb(28, 30, 33);">页面，在服务器根目录下找到类似</font><font style="color:rgb(28, 30, 33);">compressed20240426165745.zip</font><font style="color:rgb(28, 30, 33);">的压缩文件，如下图所示：</font>

![](https://cdn.nlark.com/yuque/0/2024/png/32774263/1717989452283-419d1261-97fe-4f02-b3aa-6db40f7e2105.png)

<font style="color:rgb(28, 30, 33);">compressed后的数字即代表文件完成压缩时的时间(精确到秒)。</font>

### <font style="color:rgb(28, 30, 33);">解压缩</font>
1. 进入实例，点击`文件`
2. 勾选需要解压的压缩包
3. <font style="color:rgb(28, 30, 33);">PC端可右键后点击解压缩，手机端可通过右下角悬浮按钮点击后，选择解压缩。</font>

![](https://cdn.nlark.com/yuque/0/2025/png/32774263/1745329831973-c1890e35-a0fd-4b94-8599-3aedd01cf763.png)

### <font style="color:rgb(28, 30, 33);">进阶操作：使用面板命令行进行压缩/解压缩 </font>
[请移步这篇文档查看](https://www.yuque.com/simpfox/simpdoc/advanced-zip)

## 3.<font style="color:rgb(28, 30, 33);">使用 SFTP 管理文件</font>
:::warning
使用SFTP上传文件后，你需要在控制台->实例->文件->工具箱执行 解决权限和文件名乱码问题，否则会因权限不足导致服务器运行异常！

当然，您也可以使用一些支持修改权限的SFTP软件进行更进一步的权限修改！

:::

### <font style="color:rgb(28, 30, 33);">在以下情况中，我们需要使用 SFTP ：</font>
+ <font style="color:rgb(28, 30, 33);">删除乱码文件</font>
+ <font style="color:rgb(28, 30, 33);">上传文件夹</font>
+ <font style="color:rgb(28, 30, 33);">……</font>

### <font style="color:rgb(28, 30, 33);">快速使用流程（Windows，Android）</font>
:::color4
建议使用Edge/Chrome浏览器使用该功能，部分浏览器可能会无法使用快速启动，如无法使用请查阅下方完整使用流程！

:::

#### 下载并安装SFTP软件（Windows推荐WinSCP，安卓推荐AndFTP）
#### <font style="color:rgb(28, 30, 33);">进入实例，点击管理，按照下图示操作即可使用SFTP！</font>
![](https://cdn.nlark.com/yuque/0/2024/png/32774263/1719754266754-02055b34-98cf-430c-84f8-2c7dc749a2ee.png)

### 完整使用指南
[SFTP连接指南](https://www.yuque.com/simpfox/simpdoc/sftp)

## 4.文件下载
:::warning
⚠注意！

不支持文件夹下载，也不支持超大文件下载。如需直接下载文件夹，可使用SFTP管理文件。（推荐关闭服务器后，将所有需要下载的文件压缩后再下载，以提高下载速度！)

:::

+ <font style="color:rgb(28, 30, 33);">进入实例，点击文件</font>
+ <font style="color:rgb(28, 30, 33);">点击需要下载的文件</font>
1. <font style="color:rgb(28, 30, 33);">PC端可右键后点击下载文件，手机端可通过右下角悬浮按钮点击后，选择下载文件。</font>

![](https://cdn.nlark.com/yuque/0/2025/png/32774263/1745329897442-17d8722d-b7e3-4c55-bd6d-9b27a5899280.png)

:::warning
⚠ **提示**

如果浏览器无法创建下载任务或下载失败，请尝试更换浏览器！

推荐的浏览器：

PC端：[Chrome](https://www.google.cn/chrome/)，[Edge](https://www.microsoft.com/zh-cn/edge/download)，[Supermium](https://win32subsystem.live/supermium/)，[FireFox](https://www.firefox.com.cn/)

安卓端(前往手机应用商店即可下载)：[Edge](https://learn.microsoft.com/zh-cn/deployedge/microsoft-edge-install-mobile-china)，[Chrome](https://www.techspot.com/downloads/5818-google-chrome-for-android.html)

:::

## 5.<font style="color:rgb(0, 0, 0);">权限和文件名乱码修复工具</font>
### 在服务器运维时，文件权限及文件乱码一直是一个老生常谈的话题。在简幻欢中，提供了这样的工具。
#### 您只需：
+ 点击网页右下角的 `...`
+ 点击 `工具箱`
+ 点击 `<font style="color:rgb(0, 0, 0);">解决权限和文件名乱码问题</font>`
+ <font style="color:rgb(0, 0, 0);">点击 </font>`<font style="color:rgb(0, 0, 0);">执行</font>`
+ <font style="color:rgb(0, 0, 0);">等待执行成功！</font>

