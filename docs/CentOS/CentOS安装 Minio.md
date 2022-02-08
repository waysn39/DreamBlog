---
# date是手动设置此篇文章编写的时间
date: "2022/01/16 01:00"

# 手动设置此篇文章封面
# coverUrl: "https://h2.ioliu.cn/bing/BrassBandTrumpet_ZH-CN8703910231_640x480.jpg?imageslim"

# 是否置顶
sticky: false

# 设置keyword 多个以,分开
keyword: CentOS,Minio,springBoot

# 设置description
description: Minio安装、使用

# 手动设置标题，否则使用h1标签作为标题
title:  Centos 安装 Minio

# 这是设置标签，数组形式
tag: [Minio,Centos,springBoot]

# 这里设置类别，数组形式
categories: [CentOS相关项目安装教程]

---

# Centos 安装 Minio

1. 创建安装目录并进入目录

   ```bash
   mkdir /usr/local/minio
   mkdir /usr/local/minio/data
   cd /usr/local/minio
   ```

2. 下载minio

   ```bash
   wget https://dl.min.io/server/minio/release/linux-amd64/minio
   ```

   附上架构频台

   | Architecture                | URL                                                        |
   | --------------------------- | ---------------------------------------------------------- |
   | 64-bit Intel/AMD            | https://dl.min.io/server/minio/release/linux-amd64/minio   |
   | 64-bit ARM                  | https://dl.min.io/server/minio/release/linux-arm64/minio   |
   | 64-bit PowerPC LE (ppc64le) | https://dl.min.io/server/minio/release/linux-ppc64le/minio |
   | IBM Z-Series (S390X)        | https://dl.min.io/server/minio/release/linux-s390x/minio   |

3.  赋权

   ```bash
   chmod +x minio
   ```

4. 启动服务

   1. 直接启动

      ```bash
      /usr/local/minio/minio server /usr/local/minio/data
      ```

   2. 后台启动

      

      ```bash
      nohup /usr/local/minio/minio server /usr/local/minio/data &
      ```

      

   3. 指定端口启动

      ```bash
      nohup /usr/local/minio/minio server 节点IP:端口 /usr/local/minio/data &
      ```

      建议先直接启动，控制台输出账户和密码

      ![image-20220111222506330](C:\Users\waysn\AppData\Roaming\Typora\typora-user-images\image-20220111222506330.png)

5. 浏览器访问并登录

   ![image-20220111222619194](C:\Users\waysn\AppData\Roaming\Typora\typora-user-images\image-20220111222619194.png)

6. 左侧菜单设置Buckets

   ![image-20220111222914067](C:\Users\waysn\AppData\Roaming\Typora\typora-user-images\image-20220111222914067.png)

7. 设置ServiceAccounts

   ![image-20220111222800456](C:\Users\waysn\AppData\Roaming\Typora\typora-user-images\image-20220111222800456.png)

   设置后续服务器使用的密钥，要大于8位

8. 配合SpringBoot使用

   1. 引入配置

      ```xml
      <dependency>
      	<groupId>io.minio</groupId>
      	<artifactId>minio</artifactId>
      	<version>${minio.version}</version>
      </dependency>
      ```

   2. 初始化，并设置密钥

      ```java
      minioClient = new MinioClient(config.getMinioEndPoint(), config.getMinioAccessKey(), config.getMinioSecretKey());
      ```

      

   3. 接口SDK详细见

      > https://docs.min.io/docs/java-client-api-reference.html