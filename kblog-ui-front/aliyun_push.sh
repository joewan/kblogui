#!/bin/bash

# if [ $# -lt 1 ]; then                             
# 	echo "请输入远程推送的文件! "
#     exit 1;
# fi

# file=$1

chmod 600 aliyun.pem

## linux 1 mac 2
bash make.sh 1

## git reversion
git rev-parse HEAD > bin/git.txt

## 版本信息

ssh -i KeyPair-cbd7.pem root@159.138.145.130 "cd /root/workspace/bidsrv/ && bash stop.sh"
scp -i KeyPair-cbd7.pem -r bin/config_*.yaml root@159.138.145.130:/root/workspace/bidsrv/bin/
scp -i KeyPair-cbd7.pem -r bin/git.txt root@159.138.145.130:/root/workspace/bidsrv/bin/
scp -i KeyPair-cbd7.pem -r bin/bid_server root@159.138.145.130:/root/workspace/bidsrv/bin/
scp -i KeyPair-cbd7.pem -r bin/public root@159.138.145.130:/root/workspace/bidsrv/bin/
scp -i KeyPair-cbd7.pem -r run.sh root@159.138.145.130:/root/workspace/bidsrv/
scp -i KeyPair-cbd7.pem -r stop.sh root@159.138.145.130:/root/workspace/bidsrv/
ssh -i KeyPair-cbd7.pem root@159.138.145.130 "cd /root/workspace/bidsrv/ && bash run.sh"
