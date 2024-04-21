import os
import subprocess
import zipfile
import shutil
from datetime import datetime

def log(message):
    """记录日志信息"""
    timestamp = datetime.now().strftime("%Y-%m-%d %H:%M:%S")
    print(f"[{timestamp}] {message}")

def execute_command(command):
    """执行命令并记录日志"""
    process = subprocess.Popen(command, stdout=subprocess.PIPE, stderr=subprocess.PIPE, universal_newlines=True)
    stdout, stderr = process.communicate()
    if process.returncode == 0:
        log(f"Command '{' '.join(command)}' executed successfully.")
    else:
        log(f"Command '{' '.join(command)}' failed with return code {process.returncode}.")
        log(f"Command output:\n{stdout}\nError output:\n{stderr}")
    return stdout, stderr, process.returncode

def format_tsx():
    command = ['prettier', '--write', 'src/**/*.tsx', '--config', '.prettierrc']
    execute_command(command)

def main():
    format_tsx()
    return

    # 修改权限
    log("Changing permissions of aliyun.pem")
    os.system("chmod 600 aliyun.pem")

    # 删除 dist 目录
    dist_dir = "dist"
    if os.path.exists(dist_dir):
        log("Removing existing 'dist' directory")
        shutil.rmtree(dist_dir)

    # 构建前端项目
    log("Building frontend project with Vite")
    build_stdout, build_stderr, build_returncode = execute_command(["vite", "build"])

    if build_returncode != 0:
        log("Frontend project build failed. Deployment aborted.")
        return

    # 创建目录 artifacts/releases，确保存在
    release_dir = "artifacts/releases"
    if not os.path.exists(release_dir):
        log("Creating 'artifacts/releases' directory")
        os.makedirs(release_dir)

    # 获取 Git 版本
    log("Getting Git version")
    git_version = subprocess.check_output(["git", "rev-parse", "HEAD"]).decode().strip()
    with open("dist/git.txt", "w") as git_file:
        git_file.write(git_version)

    # 创建压缩文件
    log("Creating ZIP archive")
    current_time = datetime.now().strftime("%Y-%m-%d_%H-%M-%S")
    zip_filename = f"blog_{current_time}.zip"
    zip_path = os.path.join("artifacts", "releases", zip_filename)
    with zipfile.ZipFile(zip_path, "w") as zipf:
        dist_path = "dist"
        for root, _, files in os.walk(dist_path):
            for file in files:
                file_path = os.path.join(root, file)
                arcname = os.path.relpath(file_path, dist_path)
                zipf.write(file_path, arcname=arcname)

    # 删除远程 kblog 目录
    log("Removing remote 'kblog' directory")
    execute_command(["ssh", "-i", "aliyun.pem", "-p 36422", "root@47.102.43.229", "cd /var/www/html/hainei && rm -fr kblog"])

    # 传输压缩文件到远程服务器
    log("Transferring ZIP archive to remote server")
    execute_command(["scp", "-i", "aliyun.pem", "-P 36422", "-r", zip_path, "root@47.102.43.229:/var/www/html/hainei"])

    # 解压远程文件
    log("Extracting files on remote server")
    execute_command(["ssh", "-i", "aliyun.pem", "-p 36422", "root@47.102.43.229", f"cd /var/www/html/hainei && unzip -o {zip_filename} -d kblog"])

if __name__ == "__main__":
    log("Starting deployment process")
    main()
    log("Deployment process completed")
