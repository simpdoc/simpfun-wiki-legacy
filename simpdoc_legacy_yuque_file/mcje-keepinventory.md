<font style="color:rgb(28, 30, 33);">想在服务器中开启死亡不掉落（保留物品栏）？</font>

## <font style="color:rgb(28, 30, 33);">使用命令</font>
<font style="color:rgb(28, 30, 33);">打开服务器控制台>终端</font>

![](https://cdn.nlark.com/yuque/0/2024/png/32774263/1718170575926-f6989290-79c2-432e-9c0a-817c64e921d6.png)

<font style="color:rgb(28, 30, 33);">输入以下命令(可直接复制，游戏内使用</font><font style="color:rgb(28, 30, 33);">ctrl+v</font><font style="color:rgb(28, 30, 33);">粘贴，控制台输入请去掉斜杠)：</font>

```plain
/gamerule keepInventory true
```

```plain
/gamerule keep_inventory true
```

:::warning
⚠ **警告**

在Java版的部分服务端中(**绝大部分的Bukkit系服务端，包括但不限于Spigot、Paper及其分支等**)，维度是分文件夹存储的，因此你需要在每一个维度都输入一次这个命令来在所有的维度都开启死亡不掉落！

:::

