:::info
您是否遇到以下问题：

+ 垃圾程序插件必须使用环境变量java
+ 想要偷懒直接使用一个命令

:::

**本文档将教你如何在Linux使用环境变量！**

:::danger
必须是非root才能运行的程序，且不可直接指向程序名，例如`<font style="color:rgb(199, 37, 78);background-color:rgb(249, 242, 244);">export PATH="$PATH:/usr/bin/jdk/jdk-17.0.6/bin/java"</font>`

:::

### 修改启动参数
在启动脚本`start.sh`内添加一个`<font style="color:rgb(199, 37, 78);background-color:rgb(249, 242, 244);">export PATH="$PATH:你需要的程序目录"</font>`

:::warning
⚠注意！

这个脚本必须置于主启动命令前（一般为最后一行命令），否则主启动命令使用环境变量时将可能出现问题。

:::

![](https://cdn.nlark.com/yuque/0/2024/png/33777840/1722911616106-0021dba4-de7e-4c8a-adc7-52edf0484720.png)

### 使用bash实验可用性(可选)
在`<font style="color:rgb(199, 37, 78);background-color:rgb(249, 242, 244);">export</font>`<font style="color:#000000;background-color:rgb(249, 242, 244);">的下面添加一个bash，并保存与启动服务器</font>

<font style="color:#000000;background-color:rgb(249, 242, 244);">您可以输入</font>`<font style="color:#000000;background-color:rgb(249, 242, 244);">java -version</font>`<font style="color:#000000;background-color:rgb(249, 242, 244);">来测试</font><font style="color:#000000;">引用的java程序</font>

<font style="color:#000000;">测试完后将</font>`<font style="color:#000000;">bash</font>`<font style="color:#000000;">删除或在bash前面添加#，以便后续使用</font>

:::info
如需了解更多 `<font style="color:rgb(199, 37, 78);background-color:rgb(249, 242, 244);">export</font>` 命令相关，可前往搜索引擎查阅更多教程！

:::

