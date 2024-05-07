Disk utilities

Tools like df, du, fdisk for disk management and monitoring.


Among the utilities used in Linux systems to manage filesystems, there's fdisk , lsblk , df , and du . Each of these utilities performs a specific function in disk management, and their proper use is essential to ensure the efficient functioning of the system.

1--> df (disk free): This command displays the amount of disk space available on the file system containing each specified file name argument. It also shows the total, used, and available disk space on the file system.

2--> du (disk usage): This command estimates file space usage, summarizing the sizes of each file or directory recursively.

3--> fdisk: This is a command-line utility that provides disk partitioning functions. It allows you to create, delete, resize, move, or copy partitions on a hard drive.

4--> gdisk (GPT fdisk): Similar to fdisk, gdisk is a disk partitioning tool, but it's specifically designed to work with GUID Partition Table (GPT) disks.

5--> parted: This is another partition manipulation program. It can be used to create, destroy, resize, move, and copy partitions.

6--> smartctl: This tool is used to control and monitor storage systems using the Self-Monitoring, Analysis and Reporting Technology (S.M.A.R.T.) system built into most modern ATA and SCSI hard disks. It provides information about disk health and can be used to predict impending drive failures.

7--> lsblk: This command lists information about block devices, including disks and their partitions. It provides a tree-like view of the disk devices and their relationships.

8-->blkid: This utility is used to locate or print block device attributes, such as UUIDs and file system types.

These tools provide a comprehensive set of functionalities for disk management, monitoring, and partitioning on Unix-like systems.
