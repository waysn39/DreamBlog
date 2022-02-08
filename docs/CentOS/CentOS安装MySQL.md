---
# date是手动设置此篇文章编写的时间
date: "2022/01/09 23:00"

# 手动设置此篇文章封面
# coverUrl: "https://h2.ioliu.cn/bing/BrassBandTrumpet_ZH-CN8703910231_640x480.jpg?imageslim"

# 是否置顶
sticky: false

# 设置keyword 多个以,分开
keyword: CentOS,MySQL

# 设置description
description: MySQL安装、配置

# 手动设置标题，否则使用h1标签作为标题
title:  Centos 安装 MySQL

# 这是设置标签，数组形式
tag: [MySQL,Centos]

# 这里设置类别，数组形式
categories: [CentOS相关项目安装教程]




---

# CentOS安装MySQL

## 下载MySQL包

> 打开 https://dev.mysql.com/downloads/repo/yum/ 找到自己版本的文件

```bash
wget https://dev.mysql.com/get/mysql80-community-release-el8-2.noarch.rpm
```

## 安装MySQL

```bash
yum install mysql-server
```

## 设置开启启动并现在启动

```bash
systemctl enable --now mysqld
```

## 安装密码策略

```bash
mysql_secure_installation
```

> 1.验证密码组件----输入y；进入配置
>
> 2.选择密码策略，根据需要选择---输入0；
>
> 3.输入密码
>
> 4.确认密码
>
> 5.确认是否使用新密码---输入y
>
> 6.禁止匿名用户---输入y
>
> 7.禁止root用户登录---输入n
>
> 8.移除测试库---输入y
>
> 9.重载权限---输入y

## 配置远程登录

```mysql
mysql -uroot -p<设置的密码>
use mysql;
update user set host='%' where user='root';
flush privileges;
```

