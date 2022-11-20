# Performance Observability

## Tools Preview

![linux_observability_tools](./index.assets/linux_observability_tools.png)

## Here is tools list

### CPUs

1. specialized
	1. turbostat
	2. showboost
	3. rdmsr

2. relative to **Scheduler**
    1. execsnoop
    2. mpstat
    3. profile
    4. runqlen
    5. offcputime
    6. softirqs

3. relative to **Virtual Memory**
    1. top
    2. atop
    3. ps
    4. pidstat

4. relative to **DRAM**
    1. tiptop
    2. perf

### DRAM

1. specialized
    1. numastat
2. relative to **CPUs**
    1. toptop
    2. perf

### System Libraries

1. specialized
    1. ltrace
    2. gethostlatency

### System Call Interface

1. specialized
    1. strace
2. neighbor below this layer
    1. opensnoop

### Scheduler

1. relative to **CPUs**
    1. execsnoop
    2. mpstat
    3. profile
    4. runqlen
    5. offcputime
    6. softirqs

### Virtual Memory

1. specilized
    1. vmstat
    2. slabtop
    3. free

### Sockets

1. specialized
    1. ss

### TCP/UDP

1. specialized
    1. tcplife
    2. tcpretrans
    3. udpconnect

2. relative to **IP**
    1. nstat

### IP

1. relative to **TCP/UDP**
    1. nstat

### Net Device

1. specialized
    1. tcpdump

### VFS

1. specialized
    1. lsof
    2. fatrace
    3. filelife
    4. pcstat

### File Systems

1. specialized
    1. ext4dist
    2. ext4slower

### Volume Manager

1. specialized
    1. mdflush

### Block Device

1. relative to **Disk**
    1. opstat
    2. biosnoop
    3. biolatency
    4. biotop
    5. blktrace

### Device Drivers

1. neighbor above this layer
    1. hardirqs
    2. criticalstat

### I/O Bridge

1. neighbor above this layer
    1. perf
    2. mdflush
    3. toptop

### Disk

1. specialized
    1. SCSI log
    2. swapon

2. relative to **Block Device**
    1. iostat
    2. biosnoop
    3. biolatency
    4. biotop
    5. blktrace

### Network Controller

1. relative to **Port**
    1. nicstat
    2. netstat
    3. ip

### Port

1. specialzed
    1. ethtool
    2. snmpget
    3. lldptool

2. relative to **Network Controller**
    1. nicstat
    2. netstat
    3. ip