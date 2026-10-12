:::info
你是否遇到以下问题？

+ 压缩解压卡任务要等半天？
+ 操作经常任务出错？

:::

:::danger
⚠ 警告！数据无价，如您对自己的操作没有自信，建议阅读下方教程操作文件！

[使用sftp管理文件](https://www.yuque.com/simpfox/simpdoc/fileoperations#mbio3)

:::

**本文档将教你如何不用排队就可以解压和压缩文件！**

## 1.修改启动参数
将 `start.sh` 的主启动参数改为`bash` ，或者在第一行添加 `bash`，如图示：



![](https://cdn.nlark.com/yuque/0/2024/png/32774263/1718187359536-e0dab9e3-13e9-4851-aaf4-dea33458e1ae.png)



## 2.使用tar命令操作
启动服务器，输入tar相关命令即可

:::danger
该命令仅支持tar、tar.gz格式的压缩包解压/压缩，如使用其它格式的压缩包可在本地使用软件转换后上传。

:::

### 压缩/解压 .tar 文件
1.压缩（归档）

:::warning
`.tar`格式本身不包括压缩操作，如需对归档文件压缩请配合使用参数-z来生成`.tar.gz`格式的压缩包。

:::

```bash
tar -cvf 创建的压缩包名 要压缩的文件1 要压缩的文件2 ...
```

> 💡举个例子：
>
> 如图，当前我需要将`mods`和`start.sh`压缩到一个名为myarchive.tar的压缩包，则可以使用命令 `tar -cvf myarchive.tar mods start.sh`，当回车后出现类似下图的内容，证明压缩成功！
>
> ![](https://cdn.nlark.com/yuque/0/2024/png/32774263/1718188156874-fe36eaca-b282-4e59-99b8-f303c2950e51.png)
>

2.解压

```bash
tar -xvf 要解压的压缩包名 -C 要解压到的路径
# 如不填其中的 -C 要解压到的路径 ，则默认解压到与压缩包同目录。
```

> 💡举个例子
>
> 如图，我想将`myarchive.tar`解压到`mydoc`文件夹内，则可以使用命令 `tar -xvf myarchive.tar -C ./mydoc`，当回车后出现类似下图字样时，证明解压成功！
>
> ![](https://cdn.nlark.com/yuque/0/2024/png/32774263/1718188537127-3ee084f9-6f7b-4377-9e1d-fa7ef9a06508.png)
>

### 压缩/解压 .tar.gz 文件
:::color2
与上方创建/解压tar归档文件操作类似，不同的是添加了一个`-z`参数来对文件进行压缩。

:::

1.压缩（gzip）

```plain
tar -zcvf 创建的压缩包名 要压缩的文件1 要压缩的文件2 ...
```

> 示例：
>
> 将文件管理根目录下的`mods`文件夹进行压缩：
>
> `tar -zcvf 123.tar.gz mods`
>
> 压缩完成生成的文件如下图所示：
>
> ![](https://cdn.nlark.com/yuque/0/2026/png/44789475/1770799982342-e8aad504-1d85-4132-bf25-e87ee8434060.png)
>

2.解压缩

```bash
tar -zxvf 要解压的压缩包名 -C 要解压到的路径
# 如不填其中的 -C 要解压到的路径 ，则默认解压到与压缩包同目录。
```

若出现如下提示请先使用`chmod 777 ./*`命令进行权限更改：

```verilog
tar: z：无法 open: 没有那个文件或目录
```

:::info
如想了解更多tar命令及其相关，可前往[菜鸟教程](https://www.runoob.com/linux/linux-comm-tar.html) 查阅！

:::

## 3.准备就绪，开服！
强制关闭服务器，将 `start.sh` 中之前提到的 `bash` 删除或注释，如图：

![](https://cdn.nlark.com/yuque/0/2024/png/32774263/1718188679159-50d9ddf2-5f42-4743-a14d-d2e15f918030.png)

### 此时，便完成了解压/压缩操作！
