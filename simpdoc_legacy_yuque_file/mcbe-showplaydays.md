游玩天数显示是在BE1.21新加入的功能，那么如何在服务器中启用呢？

## 方法A：使用命令
![](https://cdn.nlark.com/yuque/0/2024/png/32774263/1718119869447-b1910ccc-f881-4203-8418-6ce27f7db973.png?x-oss-process=image%2Fformat%2Cwebp%2Fresize%2Cw_1097%2Climit_0)

在终端控制台输入以下命令（控制台内输入需要去掉斜杠）：

```shell
/gamerule showdaysplayed true
```

**<font style="color:rgb(28, 30, 33);">注：需要</font>**[启用作弊](https://www.yuque.com/simpfox/simpdoc/bds-allow_cheat)

## 方法B：修改配置文件
:::info
ℹ **信息**

这段内容是隶属于[关于server.properties](https://www.yuque.com/simpfox/simpdoc/bds-server-properties)文档的。

看完这段内容后想了解更多信息，请阅读父文档。

:::

<font style="color:rgb(28, 30, 33);">在</font><font style="color:rgb(28, 30, 33);"> </font>**<font style="color:rgb(28, 30, 33);">server.properties</font>**<font style="color:rgb(28, 30, 33);"> </font><font style="color:rgb(28, 30, 33);">中添加以下配置并重新启动服务器。</font>

```properties
op-permission-level=4
```

<font style="color:rgb(28, 30, 33);">如图所示：</font>

![](https://cdn.nlark.com/yuque/0/2024/png/32774263/1718119868847-9aefd8b9-946a-4e7c-97dc-59d744aa66f5.png)

<font style="color:rgb(28, 30, 33);">然后在有OP权限的情况下游戏内的设置就可以更改了。</font>

