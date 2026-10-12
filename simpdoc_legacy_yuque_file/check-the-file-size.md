:::info
您是否遇到以下问题：

+ 简幻欢磁盘占用更新不及时，无法确定占用？
+ 因占用过大无法开服，但排查不出？

:::



**本文档将教你如何排查！**

****

### **修改启动参数**
**在启动脚本**`**start.sh**`**内添加一个**`<font style="color:rgb(199, 37, 78);background-color:rgb(249, 242, 244);">export PATH="$PATH:你需要的程序目录"</font>`

:::warning
⚠注意！

这个脚本必须置于主启动命令前（一般为最后一行命令），否则主启动命令使用环境变量时将可能出现问题。

:::

![](https://cdn.nlark.com/yuque/0/2024/png/33777840/1722911616106-0021dba4-de7e-4c8a-adc7-52edf0484720.png)

### **启动服务器，使用命令排查**


#### 检查总占用：
```bash
du -sh /home/container/.
```

![](https://cdn.nlark.com/yuque/0/2026/png/32774263/1779850033335-201a9b1a-4e6c-42b1-9803-8d60c5d929a9.png)



#### 检查当前目录（默认为/home/container)下每个文件夹/文件占用：
```bash
du -sh */
```

![](https://cdn.nlark.com/yuque/0/2026/png/32774263/1779849328836-7956e0b8-518a-45f0-ae3f-b316903fcbc0.png)



#### 检查其它目录下每个文件夹/文件占用：
```bash
du -sh ./路径/*
```

![以./logs路径为例](https://cdn.nlark.com/yuque/0/2026/png/32774263/1779849448429-92089ccc-4c1b-472e-ab4a-823536a4d9d6.png)



#### 文件夹/文件由大到小，排序展示：
```bash
du -sh ./路径/* | sort -rh
```

![以默认路径为例](https://cdn.nlark.com/yuque/0/2026/png/32774263/1779849592806-b251ba78-d760-4e89-a5d7-462bbc7fcc6e.png)



#### 有时文件夹下内容过多，简幻欢不会显示，可做额外限制，只展示其中几个：
```bash
du -sh * | sort -rh | head -展示数量
```

![以mods路径为例，只展示占用大小前五的文件/文件夹](https://cdn.nlark.com/yuque/0/2026/png/32774263/1779849704604-686ab36c-75df-49c5-a95a-5c858fae3067.png)



### 检查完毕后，将第一步中的修改内容删除或注释！


:::info
如需了解更多相关命令，可前往搜索引擎查阅更多教程！

:::

