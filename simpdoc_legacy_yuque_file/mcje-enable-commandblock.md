## 1.21.9(快照25w34b)前
:::warning
⚠ **提示**

`server.properties`不支持热重载，请在关闭服务器的情况下对其进行修改。

:::

<font style="color:rgb(28, 30, 33);">在服务器文件管理根目录找到server.properties文件并打开，在其中找到这一行:</font>

```properties
enable-command-block=false
```

<font style="color:rgb(28, 30, 33);">将其中的</font>`<font style="color:rgb(28, 30, 33);">false</font>`<font style="color:rgb(28, 30, 33);">改为</font>`<font style="color:rgb(28, 30, 33);">true</font>`<font style="color:rgb(28, 30, 33);">后保存并重启服务器，这样就启用命令方块了。</font>

## <font style="color:rgb(28, 30, 33);">1.21.9(快照25w35a)后</font>
![](https://cdn.nlark.com/yuque/0/2024/png/32774263/1718170311535-ab2898ff-d548-450a-8caa-899c9db11391.png?x-oss-process=image%2Fformat%2Cwebp)

在控制台或游戏内(需要有管理员权限)输入以下命令即可启用：

### 25w35a至25w43a
1.21.9、1.21.10这两个正式版及1.21.11的部分快照版(25w43a)使用下面的命令：

```plain
/gamerule enableCommandBlocks true
```

### 25w44a后
1.21.11(25w44a)和之后的版本使用下面的命令：

```plain
/gamerule command_blocks_work true
```

