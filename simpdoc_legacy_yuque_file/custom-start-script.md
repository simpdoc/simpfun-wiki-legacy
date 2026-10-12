推荐：？

暂无，让第三方贡献者参与一下吧？~



# 切换为 container 用户
在使用 Java、Wine、SteamCMD、Python等环境时，您可能会遇到推荐使用非 root 用户去运行程序，而简幻欢提供了一个 container 用户以应对这种情况。

## 直接在 start.sh 切换并继续执行（单行）
使用这个命令来执行单行命令（适用于启动如 SteamCMD 这种交互式终端）

```bash
su container -c "命令"
```

例如

```bash
su container -c "steamcmd“
```

## 直接在 start.sh 切换并继续执行（多行）
![示例图](https://cdn.nlark.com/yuque/0/2025/png/27982757/1745043455114-fccac6a0-b7cb-415e-9901-cab5039c9ee5.png)

您需要在定义 所有变量后，使用这个命令切换为 container 以继续执行下面的命令（例如whoami和ls）

```bash
su container << 'EOF'
```

并且，您需要在行尾写入 `EOF` 以保证与上文 `su -l container << 'EOF'` 的连接。

![](https://cdn.nlark.com/yuque/0/2025/png/27982757/1745034400306-a32d0bc4-7d0e-4615-bc87-ee776977a7f9.png)

执行后如图所示：  
![](https://cdn.nlark.com/yuque/0/2025/png/27982757/1745034274363-658c6065-474b-4bce-a05e-fa8ba3fea9da.png)

## 以 container 的身份启动另一个脚本
![示例图](https://cdn.nlark.com/yuque/0/2025/png/27982757/1745043521029-df612946-0b53-48d1-a45c-97ba733d2aaa.png)

如果您不希望看到 EOF 出现在您的脚本，可以这样操作：

先写入一个

```bash
chmod +x "/home/container/run.sh"
```

给 `run.sh` 可执行权限后，再写入一行

```bash
su container -c '/bin/bash /home/container/run.sh'
```

它将以 `container` 用户的身份，执行 `/home/container` 目录下的 `run.sh`  
更清爽！

我们写入一个 `run.sh` 来测试：  
![](https://cdn.nlark.com/yuque/0/2025/png/27982757/1745034692031-3423c77e-2b09-4001-8e0d-3103fc95132b.png)

执行后如图所示：  
![](https://cdn.nlark.com/yuque/0/2025/png/27982757/1745035232259-50ea328a-9de6-4397-851c-9071f5a12ef0.png)

