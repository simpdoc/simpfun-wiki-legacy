:::info
您是否遇到以下问题：

+ 上传文件还要在本地下载再上传，太麻烦了！
+ 在外只能使用流量，下载文件再上传文件太浪费流量了！

:::

**本文档将教你如何直接从终端下载文件！**

:::danger
下载文件的链接必须是直链，即访问链接直接下载的文件，不支持百度网盘等需要额外操作的链接！

:::

### 修改启动参数
将 `start.sh` 的主启动参数改为`bash` ，或者在第一行添加 `bash`，如图示：



![](https://cdn.nlark.com/yuque/0/2024/png/32774263/1718187359536-e0dab9e3-13e9-4851-aaf4-dea33458e1ae.png)



### 启动终端，使用curl命令下载
#### 基础命令：
```shell
curl -o 文件路径/文件名 下载地址
```

:::warning
⚠注意！指定的文件路径必须是存在的，如不存在，可能导致错误！若不存在路径，可使用 `mkdir` 命令，或使用简幻欢中 `文件` 的新建功能！

:::

> 💡举个例子：
>
> 当我想把 `https://cdn.modrinth.com/data/S8ZzzoX1/versions/WPqMmFiH/modularwarfare-shining-2023.2.4.4f-fix2.jar` 下载到 `./mods` 文件夹中，我可以执行命令 `curl -o ./mods/modularwarfare-shining-2023.2.4.4f-fix2.jar https://cdn.modrinth.com/data/S8ZzzoX1/versions/WPqMmFiH/modularwarfare-shining-2023.2.4.4f-fix2.jar`，即可成功将文件下载到 `./mods` 文件夹！
>
> ![](https://cdn.nlark.com/yuque/0/2024/png/32774263/1721702297638-15a055f2-444f-4560-b816-0c82f35f242d.png)
>



#### 进阶命令：批量下载文件
+ 创建一个名为 `url.txt` 的文件，在其中填写文件下载链接，一行一个（该txt文件名可随意起，只要记住文件名即可）：

![](https://cdn.nlark.com/yuque/0/2024/png/32774263/1721702839073-863e4a1d-a633-4b39-b2a8-4c16cb10f804.png)

+ 执行下方命令：

```shell
cd 文件需要下载到的路径
xargs -n 1 curl -O < url.txt的路径
```

:::warning
<font style="color:rgb(33, 37, 41);">⚠</font><font style="color:rgb(33, 37, 41);">注意! 此命令使用 </font>`<font style="color:rgb(232, 62, 140);">-O</font>`<font style="color:rgb(33, 37, 41);">（远程文件）输出命令，该命令使用大写字母“O”,而不是小写的“o”！</font>

:::

> 💡举个例子：
>
> 当我想要从下图文件批量下载到 `./mods` 文件夹中，可先在根目录创建 `download.txt` 文件并填写需要下载的文件链接：
>



![](https://cdn.nlark.com/yuque/0/2024/png/32774263/1721702864551-ed7bd99c-9e17-405b-8daf-56a65bcf7cfd.png)

![](https://cdn.nlark.com/yuque/0/2024/png/32774263/1721702839073-863e4a1d-a633-4b39-b2a8-4c16cb10f804.png)

> 此时使用 `cd ./mods`命令 到 `./mods` 文件夹；由于我的 `download.txt` 文件夹在根目录中，则在此时，这个文件的路径为 `../download.txt`。此时再执行命令 `xargs -n 1 curl -O < ../download.txt`，此时成功将多个文件下载到 `./mods` 文件夹：
>
> ![](https://cdn.nlark.com/yuque/0/2024/png/32774263/1721703423764-36bb54bd-3f78-45cc-b394-a81706152605.png)
>



:::info
如需了解更多 `curl` 命令相关，可前往搜索引擎查阅更多教程！

:::

