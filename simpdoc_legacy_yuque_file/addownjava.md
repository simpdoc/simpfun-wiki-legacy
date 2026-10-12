:::info
ℹ ****众所周知，简幻欢提供了一些常用的java供用户使用，但总有人**有一些特殊需求**。那么，本文将教你如何在简幻欢使用自定义的java。

:::

## <font style="color:rgb(28, 30, 33);">上传，解压java</font>
+ 从[zulu](https://www.azul.com/downloads/)或[华为镜像源](https://repo.huaweicloud.com/java/jdk/)等Java下载地址下载需要使用的java **压缩包**

:::warning
⚠ **提示**

+ 务必选择正确的java，不要选择arm和32位的java，请选择amd64或x86_64。
+ 简幻欢中的docker镜像均为Linux系统，请使用适用于Linux系统的Java，而不是Windows！

:::

![](https://cdn.nlark.com/yuque/0/2025/png/44789475/1764752071680-000f22fe-840d-4529-ab26-271415454ad4.png)

+ [上传](https://simpdoc.top/docs/upload)并解压下载好的java ![](https://cdn.nlark.com/yuque/0/2024/png/32774263/1718026814470-9b69d906-c711-4d92-ab92-81b12c4a9b10.png)![](https://cdn.nlark.com/yuque/0/2024/png/32774263/1718026814515-1e254c0c-c550-4516-8d07-ee4c52d4a9b5.png)

:::info
ℹ **提示**

如果你获取到的压缩包为`.tar.gz`格式的，可参考这篇文档：[无需排队就能进行的解压/压缩操作](https://www.yuque.com/simpfox/simpdoc/advanced-zip) 来进行解压。

:::

## <font style="color:rgb(28, 30, 33);">获取解压后的java路径，编辑启动参数</font>
+ 根据图示，寻找到解压后的java文件。如图中当前java文件在 `/zulu21.30.15ca-jre21.0.1-linux_x64/bin` 中，则你的java路径为 `/zulu21.30.15ca-jre21.0.1-linux_x64/bin/java`。 ![](https://cdn.nlark.com/yuque/0/2024/png/32774263/1718026814652-9db31687-f6cd-44f5-927c-07fed9f50f48.png) 编辑你的 start.sh ，修改启动参数，如图示： ![](https://cdn.nlark.com/yuque/0/2024/png/32774263/1718026814526-6d656299-5eb8-4381-8f3f-f66bf2f0ede0.png)

**<font style="color:rgb(28, 30, 33);">一切准备妥当后，启动服务器即完成操作！</font>**<font style="color:rgb(28, 30, 33);"> </font>![](https://cdn.nlark.com/yuque/0/2024/png/32774263/1718026814710-0acb9d6b-4c96-4165-a183-9421f322d95a.png)

