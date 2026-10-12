SFTP（SSH文件传输协议）是一种基于SSH加密通道的安全文件传输协议，常用于远程服务器文件的上传与下载。

当你需要在简幻欢中上传/下载**文件夹**、**大于1GB的单个文件**、**大批量文件**时，使用SFTP无疑是最好的选择。

## <font style="color:rgb(28, 30, 33);">使用软件连接前的准备</font>
<font style="color:rgb(28, 30, 33);">进入实例，点击管理，在"SFTP文件管理服务器"处找到当前实例的连接信息。</font>

:::info
显示为 **** 的信息可以点击👁图标来查看具体内容！

点击对应行的内容即可直接复制。

:::

:::warning
下文所有“服务器IP/地址”均指**SFTP服务器IP**，**端口同理**（除非特别标注）。

:::

![](https://cdn.nlark.com/yuque/0/2026/png/44789475/1782270017052-f5107ea3-aae4-4c59-9764-b6f38c6080aa.png)

### 快速连接
部分软件支持一键快速连接。您只需点击“SFTP文件管理服务器”旁的问号图标，再单击“一键启动SFTP工具”按钮，即可自动唤起客户端。

请注意：唤起后，仍需手动输入用户名和密码完成登录。

![](https://cdn.nlark.com/yuque/0/2026/png/44789475/1782270385169-b7860a1e-5467-4e3b-9e25-7ab8616988bf.png)

## Windows
可在下方自由选择一个软件使用。

### FileZilla（推荐）
1. 下载 FileZilla Client 并安装。

:::info
官网(下载免费版就够用了，没有广告)：[⬇Download FileZilla Client](https://filezilla-project.org/download.php?type=client)

蓝奏云(官网下载速度过慢可使用这个)：[https://wwbgc.lanzouv.com/ipzr23ss7k4b](https://wwbgc.lanzouv.com/ipzr23ss7k4b)

![](https://cdn.nlark.com/yuque/0/2026/png/44789475/1782268116865-0c51bad7-0bfb-4a1a-8cab-1406191bfbfe.png)

:::

2. 打开FileZilla，上方快速连接栏处填写**服务器地址**、**用户名**、**密码**、**端口**，然后点击**快速连接**

![](https://cdn.nlark.com/yuque/0/2026/png/44789475/1782268433605-c1b4b9c2-6040-4257-9ad7-933297fa6e4f.png) 

:::warning
⚠ **提示：**

主机处填写服务器地址前需加上`sftp://`前缀，**否则软件将默认使用ftp协议进行连接导致连接失败**！

如果你不知道怎么填写就像这样填写：`sftp://sfe4-connect.simpfun.cn` 

:::

3. 首次连接会弹出类似下面的提示框，勾选下方的"总是信任该主机"后点击确定继续发起连接

![](https://cdn.nlark.com/yuque/0/2026/png/44789475/1782268669659-716ecfce-f38e-4f63-84a8-7f0bb87f4cc7.png)

4. 连接成功后你就可以在本地与远程服务器间互传文件了！
5. 点击快速连接右侧的三角形即可快速选择之前连接过的服务器进行连接！

![](https://cdn.nlark.com/yuque/0/2026/png/44789475/1782269049787-9763c4f8-39c1-433d-b0c8-f2a6827421f4.png)

### WinSCP
:::info
ℹ **提示：**

本软件支持快速连接功能。

:::

1. <font style="color:rgb(28, 30, 33);">从官网下载 WinSCP：</font>[WinSCP :: Official Site :: Download](https://winscp.net/eng/download.php)
2. <font style="color:rgb(28, 30, 33);">安装后打开 WinSCP</font>

![](https://cdn.nlark.com/yuque/0/2024/png/32774263/1717989630297-2325f2ad-a8a3-4432-84f9-a0abcf218188.png)

3. <font style="color:rgb(28, 30, 33);">将服务器IP填入主机名，服务器端口填入端口，用户名填入用户名，密码填入密码。</font>

![](https://cdn.nlark.com/yuque/0/2024/png/32774263/1717989628155-d3305f8a-b4d8-49ba-9921-42af4981af4c.png)

4. **<font style="color:rgb(28, 30, 33);">点击登录即可。</font>**

### <font style="color:rgb(28, 30, 33);">FTP Rush</font>
1. 从官网下载 FTP Rush 并安装：[FTP Rush 客户端下载](https://www.wftpserver.com/zh/download.htm#ftprush)
2. 打开 FTP Rush，上方快速连接栏的协议选择SFTP，主机填写**服务器IP**，端口改为分配到的**端口**，填写**用户名**和**密码**，点击最右侧图标进行连接。

![](https://cdn.nlark.com/yuque/0/2026/png/44789475/1782270623333-dd9526cc-589c-4faf-aa65-73bb7a3f3d09.png)

3. 连接成功后你就可以在本地与远程服务器间互传文件了！
4. 点击连接图标旁边的三角形即可快速选择之前连接过的服务器进行连接！

![](https://cdn.nlark.com/yuque/0/2026/png/44789475/1782270939627-2caf0380-bf65-4af0-8fc6-1fc44f845ae7.png)

## Android
### FTP Rush
1. 从官网下载 FTP Rush 安装包并安装：[FTP Rush 客户端下载](https://www.wftpserver.com/zh/download.htm#ftprush)

![](https://cdn.nlark.com/yuque/0/2026/png/44789475/1782361672252-80dee0bd-1492-4512-97fa-a21ebefc093b.png)

2. 打开 FTP Rush，点击右上角的加号添加服务器

![](https://cdn.nlark.com/yuque/0/2026/jpeg/44789475/1782361767452-97ef0c12-bfe5-4997-a255-4a99d3bab3c9.jpeg)

3. 名称随便填，协议选择SFTP，主机填写**服务器IP**，端口改为分配到的**端口**，填写**用户名**和**密码**（如下图所示），然后点击**确定**保存连接信息。

![](https://cdn.nlark.com/yuque/0/2026/jpeg/44789475/1782362090136-611842d1-9a01-41d6-87ff-254a5970b9d4.jpeg)

4. 点击你刚才添加的SFTP服务器发起连接。

![](https://cdn.nlark.com/yuque/0/2026/jpeg/44789475/1782362243132-7442a3a7-6e53-4cac-861f-6ed5848716ea.jpeg)

5. 连接成功后你就可以在本地与远程服务器间互传文件了。

### AndFTP
:::info
ℹ **提示：**

本软件支持快速连接功能。

:::

1. 从官网下载 AndFTP 并安装：[FTP, FTPS, SCP and SFTP Android client - AndFTP](https://www.lysesoft.com/products/andftp/#download)

![](https://cdn.nlark.com/yuque/0/2026/png/44789475/1782276042523-355bed87-8c2e-471e-b148-a483892d3159.png)

2. 打开 AndFTP，点击最上方的加号添加服务器

![](https://cdn.nlark.com/yuque/0/2026/png/44789475/1782276254201-2bcbc252-3d9f-41ef-b828-c1fde9e509de.png)

3. 在域名处填写服务器IP，类型选择`SFTP`，并填写端口、用户名和密码，然后勾选"启用续传支持"(断点续传)

![](https://cdn.nlark.com/yuque/0/2026/jpeg/44789475/1782276410321-5615f100-d6a0-4f13-8a1c-4370f7cc951b.jpeg)

4. 点击上方的"高级"，把"编码"从`Default`更改为`UTF-8`，然后点击保存

![](https://cdn.nlark.com/yuque/0/2026/jpeg/44789475/1782276708641-e85e1a87-e73d-4308-9cde-89fc3f52beb4.jpeg)

5. 回到主页后点击中间的图标连接SFTP服务器

![](https://cdn.nlark.com/yuque/0/2026/jpeg/44789475/1782288483580-8c6190e8-33ee-4036-8b7e-f41bdbd56e0c.jpeg)

### ES文件浏览器
提示：**<font style="color:rgb(28, 30, 33);">对广告过敏可以使用其它SFTP软件。</font>**

1. <font style="color:rgb(28, 30, 33);">打开</font>[ES文件浏览器](https://m.app.mi.com/details?id=com.estrongs.android.pop)<font style="color:rgb(28, 30, 33);">，点击左上角三个横线进入到侧栏之中。</font>

![](https://cdn.nlark.com/yuque/0/2024/png/32774263/1717989630520-98b1aff7-65ed-4544-a6c1-0a772f8f2ac1.png)

2. <font style="color:rgb(28, 30, 33);">在侧栏的网络下选择FTP进入到FTP管理界面。</font>

![](https://cdn.nlark.com/yuque/0/2024/png/32774263/1717989631639-14e4d275-6518-4836-855c-6e6ad06a4f6e.png)

3. <font style="color:rgb(28, 30, 33);">点击右边的新建按钮，建立一个FTP服务器。</font>

![](https://cdn.nlark.com/yuque/0/2024/png/32774263/1717989631948-3ad746cf-34fb-45e4-a501-76ddce447850.png)

4. <font style="color:rgb(28, 30, 33);">点击SFTP。</font>
5. <font style="color:rgb(28, 30, 33);">将服务器IP填入服务器，服务器端口填入端口，用户名填入用户名，密码填入密码。</font>

![](https://cdn.nlark.com/yuque/0/2024/png/32774263/1717989631936-46d0c215-147a-44c2-9afd-cffa3367ab65.png)

6. <font style="color:rgb(28, 30, 33);">点击确定后连接服务器，就可以对各种文件编辑管理了。</font>

**<font style="color:rgb(28, 30, 33);"></font>**

